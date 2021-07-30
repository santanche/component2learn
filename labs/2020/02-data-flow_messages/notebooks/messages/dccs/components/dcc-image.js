/* Image DCC
  **********/

class DCCImage extends DCCVisual {
   connectedCallback() {
      let html = "<img id='presentation-dcc' src='" +
                    Basic.service.imageResolver(this.image) + "'" +
                    ((this.hasAttribute("title"))
                    ? " alt='" + this.title : "");
      for (let ra of DCCImage.replicatedAttributes)
         if (this.hasAttribute(ra))
            html += " " + ra + "='" + this[ra] + "'";
      html += ">";

      // this._presentation = this.querySelector("#presentation-dcc");
      this._presentation = this._shadowHTML(html);
      this._presentationIsReady();
      super.connectedCallback();
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["image", "alternative", "title"]);
   }

   get image() {
      return this.getAttribute("image");
   }
   
   set image(newValue) {
      this.setAttribute("image", newValue);
   }
   
   get alternative() {
      return this.getAttribute("alternative");
   }
   
   set alternative(newValue) {
      this.setAttribute("alternative", newValue);
   }

   get title() {
      return this.getAttribute("title");
   }
   
   set title(newValue) {
      this.setAttribute("title", newValue);
   }
}

(function() {
   customElements.define("dcc-image", DCCImage);
})();