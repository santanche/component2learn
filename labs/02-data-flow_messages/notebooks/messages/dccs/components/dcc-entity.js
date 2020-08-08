/**
 * Entity DCC
 * 
 * xstyle = out -> in the outer space it first looks for the specific name and then for the generic "character" name
 */
class DCCEntity extends DCCBlock {
   constructor() {
      super();
      this._renderInterface = this._renderInterface.bind(this);
   }
   
   async connectedCallback() {
      this._text = (this.hasAttribute("text")) ? this.text : this.innerHTML;
      this.innerHTML = "";

      super.connectedCallback();
   }

   /*
   checkActivateAuthor() {
      if (this.author && this._presentationEntity) {
         for (let pr in this._presentationEntity) {
            this._presentationEntity[pr].style.cursor = "pointer";
            this._presentationEntity[pr].dccid = this.id;
            this._presentationEntity[pr].addEventListener("click",
               function(){
                  MessageBus.ext.publish("control/element/" + this.dccid + "/selected");
               }
            );
         }
      }
   }
   */

   /*
   get presentation() {
      return (this._presentationEntity) ? this._presentationEntity : null;
   }
   */
   
   /*
    * Property handling
    */
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["sequence", "entity", "text", "xstyle"]);
   }

   get sequence() {
      return this.getAttribute("sequence");
   }
   
   set sequence(newValue) {
      this.setAttribute("sequence", newValue);
   }
   
   get entity() {
      return this.getAttribute("entity");
   }
   
   set entity(newValue) {
      this.setAttribute("entity", newValue);
   }
   
   get text() {
      return this.getAttribute("text");
   }
   
   set text(newValue) {
      this.setAttribute("text", newValue);
   }
   
   get xstyle() {
      return this.getAttribute("xstyle");
   }
   
   set xstyle(newValue) {
      this.setAttribute("xstyle", newValue);
   }
  
   /* Rendering */
   
   async _renderInterface() {
      // this._presentationEntity = [];
      if (this.hasAttribute("xstyle") && this.xstyle.startsWith("out")) {
         await this._applyRender(this.entity,
                                 (this.xstyle == "out-image") ? "title" : "innerHTML",
                                 "entity");
            
         if (this.image)
            await this._applyRender(this.image, "image", "image");
         
         if (this._text)
            await this._applyRender(this._text,
                                    (this.xstyle == "out-image") ? "title" : "innerHTML",
                                    "text");
      } else {
         let html = (this.hasAttribute("image"))
            ? DCCEntity.templateElements.image.replace("[image]", this.image) : "";
         html = html.replace("[alternative]",
            (this.hasAttribute("title")) ? " alt='" + this.title + "'" : "");
         html += DCCEntity.templateElements.text
            .replace("[entity]", this.entity)
            .replace("[text]", ((this._text) ? this._text : ""));
         await this._applyRender(html, "innerHTML");
         // this._storePresentation(presentation);
         // if (this._presentation != null)
         //    this._presentationEntity.push(this._presentation);
      }

      this._presentationIsReady();
      this.checkActivateAuthor();
   }
   
   /* Rendering */

   elementTag() {
      return DCCEntity.elementTag;
   }

   externalLocationType() {
      return "entity";
   }
}

(function() {
   DCCEntity.templateStyle = 
      `<style>
           @media (orientation: landscape) {
             .dcc-entity-style {
               display: flex;
               flex-direction: row;
             }
           }
           
           @media (orientation: portrait) {
             .dcc-entity-style {
               display: flex;
               flex-direction: column;
             }
           }
          .dcc-text {
             flex-basis: 100%;
          }
      </style>
      <div id="presentation-dcc" class="dcc-entity-style"></div>
      </div>`;
         
   DCCEntity.templateElements = {
      image: "<div><img id='dcc-entity-image' src='[image]'[alternative] width='100px'></div>",
      text:  "<div><div id='dcc-entity-text' class='dcc-text'>[text]</div></div>"
   };
   
   DCCEntity.elementTag = "dcc-entity";
   customElements.define(DCCEntity.elementTag, DCCEntity);
})();