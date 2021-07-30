/**
 * Set of images that reflect states
 */

class DCCState extends DCCBlock {
   constructor() {
      super();
      this._computeTrigger = this._computeTrigger.bind(this);
      this._stateDCCs = {};
      // this._previousPresentation = null;
      this._changed = false;
   }

   connectedCallback() {
      super.connectedCallback();

      // Fetch all the children that are not defined yet
      let undefinedChildren = this.querySelectorAll(":not(:defined)");

      let promises = [...undefinedChildren].map(element => {
         return customElements.whenDefined(element.localName);
      });

      // Wait for all the options be ready
      Promise.all(promises).then(() => {
         let children = this.querySelectorAll("*");
         for (let c of children)
            if (c.tagName && c.tagName.toLowerCase().startsWith("dcc-") &&
                c.role) {
               if (c.role != this.value)
                  c.hide();
               // else
                  // this._presentationHandler(c.currentPresentation());
               this._stateDCCs[c.role] = c;
               this._storePresentation(c.currentPresentation(), c.role);
            }
         this._presentationIsReady();
      });
   }

   static get observedAttributes() {
      return DCCBlock.observedAttributes.concat(
         ["statement", "variable", "value", "mandatory", "rotate",
          "action"]);
   }

   /*
    * HTML Element property handling
    */

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

   get value() {
      return this.getAttribute("value");
   }

   set value(newValue) {
      this.setAttribute("value", newValue);
   }

   get mandatory() {
      return this.hasAttribute("mandatory");
   }

   set mandatory(isMandatory) {
      if (isMandatory)
         this.setAttribute("mandatory", "");
      else
         this.removeAttribute("mandatory");
   }

   get rotate() {
      return this.hasAttribute("rotate");
   }

   set rotate(isRotate) {
      if (isRotate)
         this.setAttribute("rotate", "");
      else
         this.removeAttribute("rotate");
   }

   get action() {
      return this.getAttribute("action");
   }

   set action(newValue) {
      this.setAttribute("action", newValue);
   }

   async _renderInterface() {
   }

   /*
    * Class property handling
    */

   get changed() {
      return this._changed;
   }

   set changed(newValue) {
      this._changed = newValue;
   }

   /*
   _presentationHandler(presentation) {
      if (this._presentation != null) {
         this._presentation.style.cursor = "default";
         this._presentation.removeEventListener(
            "click", this._computeTrigger);
      }
      this._previousPresentation = presentation;
      if (this._presentation != null) {
         this._presentation.style.cursor = "pointer";
         this._presentation.addEventListener(
            "click", this._computeTrigger);
      }
   }
   */

   next() {
      this.shiftState(1);
   }

   previous() {
      this.shiftState(-1);
   }

   shiftState(shift) {
      const allStates = Object.keys(this._stateDCCs);
      let s = allStates.indexOf(this.value);
      if (s >= 0) {
         this.changed = true;
         let n = s + shift;
         n = (n < 0)
            ? ((this.rotate) ? allStates.length-1 : s)
            : ((n < allStates.length) ? n
               : ((this.rotate) ? 0 : s));
         this.changeState(allStates[n]);
         /*
         this._stateDCCs[this.value].hide();
         this.value = allStates[n];
         this._stateDCCs[this.value].show();
         if (this.hasAttribute("variable"))
            MessageBus.ext.publish("var/" + this.variable + "/changed",
                                   {sourceType: DCCState.elementTag,
                                    value: this.value});
         */
      }
   }

   changeState(newState) {
      if (this._stateDCCs[newState]) {
         this._stateDCCs[this.value].hide();
         this.value = newState;
         this._stateDCCs[this.value].show();
         if (this.hasAttribute("variable"))
            MessageBus.ext.publish("var/" + this.variable + "/changed",
                                   {sourceType: DCCState.elementTag,
                                    value: this.value});
      }
   }

   notify(topic, message) {
      if (message.role)
         if (message.body)
            this._computeAction(message.role.toLowerCase(), message.body);
         else
            this._computeAction(message.role.toLowerCase());
   }

   _computeTrigger() {
      if (this.hasAttribute("action"))
         this._computeAction(this.action);
   }

   _computeAction(action, parameter) {
      switch (action.toLowerCase()) {
         case "next": this.next(); break;
         case "previous": this.previous(); break;
         case "state": if (parameter)
                          this.changeState(parameter.value);
                       break;
      }
   }

   /* Rendering */
   
   elementTag() {
      return DCCTrigger.elementTag;
   }
}

(function() {
   DCCState.elementTag = "dcc-state";

   customElements.define(DCCState.elementTag, DCCState);
})();