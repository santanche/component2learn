/* Image Marker DCC
 ******************/
class DCCImageMarker extends DCCVisual {
   constructor() {
      super();
      
      this._pendingRequests = 0;
      
      this._currentState = 0;
      this._stateVisible = false;
      
      this.markerSpot = this.markerSpot.bind(this);
    }
    
    async connectedCallback() {
       const coordsArr = this.coords.split(",");
       this._coords = {x: parseInt(coordsArr[0]),
                       y: parseInt(coordsArr[1]),
                       width: parseInt(coordsArr[2]),
                       height: parseInt(coordsArr[3])};

       this._renderInterface();
       super.connectedCallback();
    }
    
    /*
     * Property handling
     */
    
    static get observedAttributes() {
       return DCCVisual.observedAttributes.concat(
          ["label", "coords"]);
     }

    get label() {
       return this.getAttribute("label");
     }

    set label(newValue) {
       this.setAttribute("label", newValue);
    }

    get coords() {
       return this.getAttribute("coords");
     }

    set coords(newValue) {
       this.setAttribute("coords", newValue);
    }

    /* Rendering */

    async _renderInterface() {
       const r = await MessageBus.page.request("dcc/marker-spot/set",
             {label: this.label, 
              coords: this._coords,
              handler: this.markerSpot});
       this._rect = r.message;
       this._state = 0;
    }
    
   /* Event handling */
   markerSpot() {
      this._state = (this._state + 1) % 5;
      MessageBus.page.publish("dcc/marker-spot/selected",
            {label: this.label,
             coords: this._coords,
             rect: this._rect,
             state: this._state});
   }
}

/* Group Marker DCC
 ******************/
class DCCGroupMarker extends DCCBase {
   constructor() {
      super();
      this.requestContext = this.requestContext.bind(this); 
      this.requestStates = this.requestStates.bind(this);
      this.setMarkerSpot = this.setMarkerSpot.bind(this);
      this.spotSelected = this.spotSelected.bind(this);

      this.imageClicked = this.imageClicked.bind(this);
      this.mouseMoved = this.mouseMoved.bind(this);

      this._spots = [];

      this._selection = false;
   }
   
   connectedCallback() {
      const templateHTML = DCCGroupMarker.templateFull.replace(/\[image\]/igm, this.image);

      // building the template
      let template = document.createElement("template");
      template.innerHTML = templateHTML;
      this._svg = this.attachShadow({mode: "open"});
      this._svg.appendChild(template.content.cloneNode(true));
      
      this._clipC = this._svg.querySelector("#clip-spotC");
      this._clipS = this._svg.querySelector("#clip-spotS");
      this._imageG = this._svg.querySelector("#imageG");
      this._imageC = this._svg.querySelector("#imageC");
      this._imageS = this._svg.querySelector("#imageS");
      this._scale = this._svg.querySelector("#clip-scale");
      this._clabel = this._svg.querySelector("#clips-label");

      if (this.hasAttribute("label"))
         this._clabel.innerHTML = this.label;

      this._imageCoord = this._imageG.getBoundingClientRect();
      // console.log(this._imageCoord);
      
      MessageBus.page.subscribe("dcc/marker-context/request", this.requestContext);
      MessageBus.page.subscribe("dcc/marker-states/request", this.requestStates);
      MessageBus.page.subscribe("dcc/marker-spot/set", this.setMarkerSpot);
      MessageBus.page.subscribe("dcc/marker-spot/selected", this.spotSelected);
      
      MessageBus.int.publish("var/" + this.context + "/group_input/ready",
                             DCCGroupMarker.elementTag);

      if (this.hasAttribute("editor")) {
         this._editState = 0;
         this._imageG.addEventListener("click", this.imageClicked, false);
         this._imageG.addEventListener("mousemove", this.mouseMoved, false);
      }
   }

   disconnectedCallback() {
      MessageBus.page.unsubscribe("dcc/marker-context/request", this.requestContext);
      MessageBus.page.unsubscribe("dcc/marker-states/request", this.requestStates);
      MessageBus.page.unsubscribe("dcc/marker-spot/set", this.setMarkerSpot);
   }
   
   
   requestStates(topic, message) {
      MessageBus.page.publish("dcc/marker-states/" + message, this.states);
   }   
   
   requestContext(topic, message) {
      MessageBus.page.publish("dcc/marker-context/" + message, this.context);
   }
   
   /*
    * Property handling
    */

   static get observedAttributes() {
      return ["image", "context", "label", "states", "editor"];
   }

   get image() {
      return this.getAttribute("image");
    }

   set image(newValue) {
      this.setAttribute("image", newValue);
   }

   get context() {
      return this.getAttribute("context");
    }

   set context(newValue) {
      this.setAttribute("context", newValue);
   }

   get label() {
       return this.getAttribute("label");
   }

    set label(newValue) {
       this.setAttribute("label", newValue);
    }

   get states() {
      return this.getAttribute("states");
    }

   set states(newValue) {
      this.setAttribute("states", newValue);
   }

   get editor() {
      return this.hasAttribute("editor");
   }

   set editor(isEditor) {
      if (isEditor) {
         this.setAttribute("editor", "");
      } else {
         this.removeAttribute("editor");
      }
   }
   
   /* Event handling */
   setMarkerSpot(topic, message) {
      message.rect = this._makeSpot(message.coords);
      this._spots.push(message);
      message.rect.addEventListener("click", message.handler);
      MessageBus.page.publish(MessageBus.buildResponseTopic(topic, message),
                              message.rect);
   }

   _makeSpot(coords) {
      let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttributeNS(null, 'x', coords.x);
      rect.setAttributeNS(null, 'y', coords.y);
      rect.setAttributeNS(null, 'width', coords.width);
      rect.setAttributeNS(null, 'height', coords.height);
      rect.setAttributeNS(null, "style",
        (this.hasAttribute("states"))
           ? "opacity:0.4;fill:black;stroke-width:2"
           : "opacity:0.4;fill:#0000ff;stroke-width:2");
      this._imageG.appendChild(rect);
      return rect;
   }

   spotSelected(topic, message) {
      if (this.hasAttribute("states"))
         this._spotSelectedState(message);
      else
         this._spotSelectedHighlight(message);
   }

   _spotSelectedState(message) {
      const color = ["black", "green", "blue", "yellow", "red"];
      message.rect.setAttributeNS(null, "style", "opacity:0.4;fill:" + color[message.state] +
                                                 ";stroke-width:0.89027536");
   }

   _spotSelectedHighlight(message) {
      if (!this._selection) {
         for (let s in this._spots) {
            this._spots[s].rect.setAttributeNS(null, "style",
               "opacity:0;fill:#0000ff;stroke-width:0.89027536");
            if (this._spots[s].label == message.label)
               this._zoomSpot(this._spots[s].coords, this._imageC, this._clipC, "C", false);
         }
         this._zoomSpot(message.coords, this._imageS, this._clipS, "S", true);
         this._clabel.innerHTML = message.label;
      } else {
         for (let s in this._spots)
            this._spots[s].rect.setAttributeNS(null, "style",
               "opacity:0.4;fill:#0000ff;stroke-width:0.89027536");
         while (this._clipC.firstChild)
            this._clipC.removeChild(this._clipC.firstChild);
         this._clipS.removeChild(this._clipS.firstChild);
         this._clabel.innerHTML = "";
         this._imageC.removeAttributeNS(null, "clip-path");
         this._imageS.removeAttributeNS(null, "clip-path");
         this._scale.removeAttributeNS(null, "transform");
      }
      this._selection = !this._selection;
   }

   _zoomSpot(c, image, clip, clipL, zoom) {
      let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttributeNS(null, 'x', c.x);
      rect.setAttributeNS(null, 'y', c.y);
      rect.setAttributeNS(null, 'width', c.width);
      rect.setAttributeNS(null, 'height', c.height);
      clip.appendChild(rect);
      image.setAttributeNS(null, "clip-path", "url(#clip-spot" + clipL + ")");
      if (zoom)
         this._scale.setAttributeNS(null, "transform", "translate(" +
            ((-c.x-(c.width/2))*2) + " " + ((-c.y-(c.height/2))*2) + ") scale(3 3)");
   }

   imageClicked(event) {
      if (this._editState == 0) {
         this._editState = 1;
         this._newX = event.clientX - this._imageCoord.x;
         this._newY = event.clientY - this._imageCoord.y;
         this._newSpot = this._makeSpot({x: this._newX, y: this._newY, width: 1, height: 1});
      } else {
         this._editState = 0;
         const dcc = "<dcc-image-marker coords='" + this._newX + "," + this._newY + "," +
                     (event.clientX - this._imageCoord.x - this._newX)+ "," +
                     (event.clientY - this._imageCoord.y - this._newY) +
                     "'></dcc-image-marker>";
         console.log(dcc);
         alert(dcc);
      }
   }

   mouseMoved(event) {
      if (this._editState == 1) {
         this._newSpot.setAttributeNS(null, 'width', event.clientX - this._imageCoord.x - this._newX);
         this._newSpot.setAttributeNS(null, 'height', event.clientY - this._imageCoord.y - this._newY);
      }
   }
}

(function() {

DCCImageMarker.elementTag = "dcc-image-marker";
customElements.define(DCCImageMarker.elementTag, DCCImageMarker);

DCCGroupMarker.templateFull =
  `<svg width="100%" height="700">
   <defs>
      <clipPath id="clip-spotC">
      </clipPath>
      <clipPath id="clip-spotS">
      </clipPath>
   </defs>
   <style>
      rect { cursor: pointer; } /* specific elements */
   </style>
   <rect x="0" y="1000" width="1000" height="30"
         style="fill:#000000"/>
   <foreignObject
      x="0"
      y="0"
      width="1000"
      height="30">
      <div
        id="clips-label"
        style="font-size:24px;font-family:Tahoma, Geneva, sans-serif;color:#000000;text-align:center;width:100%">
      </div>
   </foreignObject>
   <g id="imageG" transform="translate(0 30)" preserveAspectRatio="xMidYMid">
      <image
         id="imageI"
         x="0"
         y="0"
         width="1000"
         height="1000"
         preserveAspectRatio="xMinYMin meet"
         xlink:href="[image]"/>
      <rect x="0" y="0" width="1000" height="1000"
            style="opacity:0.4;fill:#00ffff"/>
      <image
         id="imageC"
         x="0"
         y="0"
         width="1000"
         height="1000"
         preserveAspectRatio="xMinYMin meet"
         xlink:href="[image]"/>
      <g id="clip-scale">
         <image
            id="imageS"
            x="0"
            y="0"
            width="1000"
            height="1000"
            preserveAspectRatio="xMinYMin meet"
            xlink:href="[image]"/>      
      </g>
   </g>
  </svg>`;


DCCGroupMarker.elementTag = "dcc-group-marker";
customElements.define(DCCGroupMarker.elementTag, DCCGroupMarker);

// <canvas id="image-canvas" class="coveringCanvas"></canvas>

})();