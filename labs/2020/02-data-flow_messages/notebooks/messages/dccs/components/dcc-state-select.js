/* State Select DCC
 ********************/
class DCCStateSelect extends DCCVisual {
   constructor() {
     super();
     
     this.selectionIndex = 0;
     this._stateVisible = false;
     
     this._showState = this._showState.bind(this);
     this._hideState = this._hideState.bind(this);
     this._changeState = this._changeState.bind(this);
   }
   
   createdCallback() {
      this._renderInterface();
   }

   attributeChangedCallback(name, oldValue, newValue) {
      this._renderInterface();
   }
   
   async connectedCallback() {
      DCCStateSelect.templateElements =
      "<style> @import '" +
         Basic.service.themeStyleResolver("dcc-state-select.css") +
      "' </style>" +
      "<span id='presentation-dcc'>" +
         "<span id='presentation-text'><slot></slot></span>" +
         "<span id='presentation-state'></span>" +
      "</span>";

      let template = document.createElement("template");
      template.innerHTML = DCCStateSelect.templateElements;

      this._shadow = this.attachShadow({mode: "open"});
      this._shadow.appendChild(template.content.cloneNode(true));
     
      this._presentation = this._shadow.querySelector("#presentation-dcc");
      this._presentationState = this._shadow.querySelector("#presentation-state");
     
      this.completeId = this.id; 

      // <TODO> limited: considers only one group per page
      if (this.hasAttribute("states"))
         this._statesArr = this.states.split(",");
      else if (MessageBus.page.hasSubscriber("dcc/request/select-parameters")) {
         let parametersM = await MessageBus.page.request(
            "dcc/request/select-parameters", this.id, "dcc/select-parameters/" + this.id);
         const parameters = parametersM.message;

         if (parameters.variable) {
            this.variable = parameters.variable;
            this.completeId = this.variable + "." + this.id;
         }
         if (parameters.states)
            this.states = parameters.states;
         if (parameters.styles)
            this.styles = parameters.styles;
      }

      this._render();

      MessageBus.int.publish("var/" + this.completeId + "/subinput/ready",
                             {sourceType: DCCStateSelect.elementTag,
                              content: this.innerHTML});
      super.connectedCallback();
   }
   
   disconnectedCallback() {
      this._presentation.removeEventListener("mouseover", this._showState);
      this._presentation.removeEventListener("mouseout", this._hideState);
      this._presentation.removeEventListener("click", this._changeState);
   }

   // deactivates the authoring mode
   checkActivateAuthor() {
      /* nothing */
   }

   /*
    * Property handling
    */
   
   // <TODO> remove "answer" and "player"?
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["variable", "states", "colors", "answer", "player", "selection"]);
   }

   get variable() {
     return this.getAttribute("variable");
   }

   set variable(newValue) {
     this.setAttribute("variable", newValue);
   }

   get states() {
     return this.getAttribute("states");
   }

   set states(newStates) {
      if (newStates == null)
         this._statesArr = null;
      else {
         this._statesArr = newStates.split(",");
         this.setAttribute("states", newStates);
      }
   }

   get colors() {
     return this.getAttribute("colors");
   }

   set colors(newColors) {
     this.setAttribute("colors", newColors);
   }
   
   get answer() {
      return this.getAttribute("answer");
    }

   set answer(newValue) {
      this.setAttribute("answer", newValue);
   }
   
   get player() {
      return this.getAttribute("player");
    }

   set player(newValue) {
      this.setAttribute("player", newValue);
   }

   get selection() {
      return this.getAttribute("selection");
    }

   set selection(newValue) {
      if (this._statesArr && this._statesArr.includes(newValue))
         this._selectionIndex = this._statesArr.indexOf(newValue);
      this.setAttribute("selection", newValue);
   }

   get selectionIndex() {
      return this._selectionIndex;
   }

   set selectionIndex(newValue) {
      if (this._statesArr && this._statesArr[newValue])
         this.selection = this._statesArr[newValue];
      else
         this._selectionIndex = newValue;
   }

   /* Rendering */

   async _render() {
      if (this.states != null) {
         if (this.hasAttribute("answer") || this.author)
            this.selection = this.answer;
         else if (this.hasAttribute("player")) {
            let value = await MessageBus.ext.request(
                  "var/" + this.player + "/get/sub", this.innerHTML);
            this.selection = value.message;
         } else {
            this._presentation.addEventListener("mouseover", this._showState);
            this._presentation.addEventListener("mouseout", this._hideState);
            this._presentation.addEventListener("click", this._changeState);
         }

         this._renderInterface();
      }
   }
   
   _renderInterface() {
      if (this._presentation != null) {
        if (this._presentationState != null) {
           if (this._stateVisible && this.states != null)
              this._presentationState.innerHTML =
                 "[" + ((this.selection == null) ? " " : this.selection) + "]";
           else
              this._presentationState.innerHTML = "";
        }
        if (this.styles && this.selectionIndex < this.styles.length)
           this._presentation.className = this.styles[this.selectionIndex];
        else
           this._presentation.className =
              DCCStateSelect.elementTag + "-theme " +
              DCCStateSelect.elementTag + "-" + this.selectionIndex + "-theme";
        this._presentationIsReady();
      }
   }
   
   /* Event handling */
   
   _showState() {
      this._stateVisible = true;
      this._renderInterface();
   }
   
   _hideState() {
      this._stateVisible = false;
      this._renderInterface();
   }
   
   _changeState() {
     if (this.states != null) {
       this.selectionIndex = (this.selectionIndex + 1) % this._statesArr.length;
       MessageBus.ext.publish("var/" + this.completeId + "/state_changed",
             {sourceType: DCCStateSelect.elementTag,
              state: this.selection,
              value: this.innerHTML});
     }
     this._renderInterface();
   }
   
}

/* Group Select DCC
 ********************/
class DCCGroupSelect extends DCCBlock {
   constructor() {
      super();
      this.requestParameters = this.requestParameters.bind(this);
      this._groupReady = false;
      this._pendingRequests = [];
      MessageBus.page.subscribe("dcc/request/select-parameters", this.requestParameters);
   }

   async connectedCallback() {
      if (this.vocabularies) {
         let voc = await Context.instance.loadResource(this.vocabularies);
         let states = [];
         let styles = [];
         for (let v in voc.states) {
            if (voc.states[v].symbol)
               states.push(voc.states[v].symbol);
            if (voc.states[v].style)
               styles.push(voc.states[v].style);
         }
         this.states = (states.length == 0) ? null : states.join(",");
         this.styles = (styles.length == 0) ? null : styles;
      }

      this._statement = (this.hasAttribute("statement"))
         ? this.statement : this.innerHTML;
      this.innerHTML = "";

      super.connectedCallback();

      this._groupReady = true;
      this._answerRequests();

      MessageBus.int.publish("var/" + this.variable + "/group_input/ready",
                             DCCGroupSelect.elementTag);
   }

   disconnectedCallback() {
      MessageBus.page.unsubscribe("dcc/request/select-parameters", this.requestParameters);
   }
   
   requestParameters(topic, message) {
      this._pendingRequests.push(message);
      if (this._groupReady)
         this._answerRequests();
   }

   _answerRequests() {
      for (let r of this._pendingRequests)
         MessageBus.page.publish("dcc/select-parameters/" + r, {
            variable: this.variable,
            states: this.states,
            styles: this.styles
         });
      this._pendingRequests = [];
   }

   /*
    * Property handling
    */

   static get observedAttributes() {
    return ["statement", "variable", "states", "labels", "colors", "vocabularies"];
   }

   get statement() {
      return this.getAttribute("statement");
   }
   
   set statement(newValue) {
      this.setAttribute("statement", newValue);
   }
   
   get variable() {
      return this.getAttribute("variable");
    }

   set variable(newValue) {
      this.setAttribute("variable", newValue);
   }

   get states() {
     return this.getAttribute("states");
   }

    set states(newStates) {
     this.setAttribute("states", newStates);
   }

   get labels() {
     return this.getAttribute("labels");
   }

    set labels(newStates) {
     this.setAttribute("labels", newStates);
   }

   get colors() {
     return this.getAttribute("colors");
   }

   set colors(newColors) {
     this.setAttribute("colors", newColors);
   }

   get vocabularies() {
      return this.getAttribute("vocabularies");
   }

   set vocabularies(newValue) {
      this.setAttribute("vocabularies", newValue);
   }

   get styles() {
      return this._styles;
   }

   set styles(newValue) {
      this._styles = newValue;
   }

   async _renderInterface() {
      // === presentation setup (DCC Block)
      this._applyRender(this._statement, "innerHTML");
      this._presentationIsReady();
  }

   externalLocationType() {
      return "input";
   }
}

(async function() {

DCCStateSelect.elementTag = "dcc-state-select";
customElements.define(DCCStateSelect.elementTag, DCCStateSelect);

DCCGroupSelect.elementTag = "dcc-group-select";
customElements.define(DCCGroupSelect.elementTag, DCCGroupSelect);

})();