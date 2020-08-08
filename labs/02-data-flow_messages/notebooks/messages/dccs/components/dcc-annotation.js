/* Annotation DCC
  ***************/
class DCCAnnotation extends DCCVisual {
   connectedCallback() {
      let template = document.createElement("template");
      template.innerHTML =
         "<style> @import '" +
            Basic.service.themeStyleResolver("dcc-annotation.css") +
         "' </style>" +
         "<span id='presentation-dcc' class='dcc-text-annotation'>" +
         "<slot></slot></span>";
      // <FUTURE> Quill editor call connectCallback twice - this is a temporary fix
      if (!this.shadowRoot) {
         let shadow = this.attachShadow({mode: "open"});
         shadow.appendChild(template.content.cloneNode(true));
         this._presentation = shadow.querySelector("#presentation-dcc");
         this._presentationIsReady();
      }
      super.connectedCallback();
   }

   /* Attribute Handling */
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["annotation"]);
   }

   get annotation() {
      return this.getAttribute("annotation");
   }
   
   set label(newValue) {
      this.setAttribute("label", newValue);
   }
}

(function() {
   DCCAnnotation.elementTag = "dcc-annotation";

   customElements.define(DCCAnnotation.elementTag, DCCAnnotation);
})();