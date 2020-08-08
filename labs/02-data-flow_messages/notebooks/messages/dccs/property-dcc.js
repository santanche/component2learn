/* DCC Property
  *************/

class PropertyDCC extends HTMLElement {
   connectedCallback() {
      if (this.hasAttribute("name")) {
         this._targetObj = (this.hasAttribute("target"))
            ? document.querySelector("#" + this.target) : this.parentNode;
         this._targetObj.attachProperty(this.name,
            (this.hasAttribute("initial")) ? this.initial : null);
      }
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return ["name", "initial", "target"];
   }

   get name() {
      return this.getAttribute("name");
   }
   
   set name(newValue) {
      this.setAttribute("name", newValue);
   }
   
   get initial() {
      return this.getAttribute("initial");
   }
   
   set initial(newValue) {
      this.setAttribute("initial", newValue);
   }

   get target() {
      return this.getAttribute("target");
   }
   
   set target(newValue) {
      this.setAttribute("target", newValue);
   }
}

(function() {
   customElements.define("property-dcc", PropertyDCC);
})();