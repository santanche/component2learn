/* Web DCC
  ********/

class DCCWeb extends DCCVisual {
   connectedCallback() {
      if (this.hasAttribute("location"))
         this._presentation = document.querySelector("#" + this.location);
      this._presentationIsReady();
      super.connectedCallback();
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["location"]);
   }

   get location() {
      return this.getAttribute("location");
   }
   
   set location(newValue) {
      this.setAttribute("location", newValue);
   }
}

(function() {
   customElements.define("dcc-web", DCCWeb);
})();