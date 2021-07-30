/* Markdown DCC
  *************/
class DCCMarkdown extends DCCVisual {
   connectedCallback() {
      this._content = this.innerHTML;
      this.innerHTML = "<div id='presentation-dcc'>" + this._content + "</div>";
      this._presentation = this.querySelector("#presentation-dcc");
      this._presentationIsReady();
      super.connectedCallback();
   }

   /* Properties
      **********/
   static get observedAttributes() {
      return DCCVisual.observedAttributes();
   }
}

(function() {
   customElements.define("dcc-markdown", DCCMarkdown);
})();