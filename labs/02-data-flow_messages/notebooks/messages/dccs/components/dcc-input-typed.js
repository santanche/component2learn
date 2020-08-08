/**
 * Input Typed DCC
 *****************/

class DCCInputTyped extends DCCInput {
   constructor() {
      super();
      this.inputTyped = this.inputTyped.bind(this);
      this.inputChanged = this.inputChanged.bind(this);
   }
   
   connectedCallback() {
      super.connectedCallback();
      this.innerHTML = "";
      
      MessageBus.int.publish("var/" + this.variable + "/input/ready",
                             DCCInputTyped.elementTag);
   }

   /*
    * Property handling
    */

   static get observedAttributes() {
      return DCCInput.observedAttributes.concat(
         ["itype", "rows", "vocabularies"]);
   }

   get itype() {
      return this.getAttribute("itype");
   }
   
   set itype(newValue) {
      this.setAttribute("itype", newValue);
   }

   get rows() {
      return this.getAttribute("rows");
   }
   
   set rows(newValue) {
      this.setAttribute("rows", newValue);
   }
   
   get vocabularies() {
      return this.getAttribute("vocabularies");
   }
   
   set vocabularies(newValue) {
      this.setAttribute("vocabularies", newValue);
   }

   /* Event handling */
   
   inputTyped() {
      this.changed = true;
      this.value = this._inputVariable.value;
      MessageBus.ext.publish("var/" + this.variable + "/typed",
                                    {sourceType: DCCInputTyped.elementTag,
                                     value: this.value});
   }

   inputChanged() {
      this.changed = true;
      this.value = this._inputVariable.value;
      MessageBus.ext.publish("var/" + this.variable + "/changed",
                             {sourceType: DCCInputTyped.elementTag,
                              value: this.value});
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCInputTyped.elementTag;
   }
   
   externalLocationType() {
      return "input";
   }

   // _injectDCC(presentation, render) {
   async _renderInterface() {
      // === pre presentation setup
      const statement =
         (this.hasAttribute("xstyle") && this.xstyle.startsWith("out"))
         ? "" : this._statement;

      let html;
      if (this.hasAttribute("rows") && this.rows > 1)
         html = DCCInputTyped.templateElements.area
            .replace("[statement]", statement)
            .replace("[rows]", this.rows)
            .replace("[variable]", this.variable)
            .replace("[render]", this._renderStyle());
      else
         html = DCCInputTyped.templateElements.text
            .replace("[statement]", statement)
            .replace("[variable]", this.variable)
            .replace("[render]", this._renderStyle())
            .replace("[itype]", (this.hasAttribute("itype")) ?
                                   " type='" + this.itype + "'" : "");
     
      // === presentation setup (DCC Block)
      let presentation;
      if (this.hasAttribute("xstyle") && this.xstyle.startsWith("out")) {
         await this._applyRender(this._statement, "innerHTML", "text");
         presentation = await this._applyRender(html, "innerHTML", "input");
      } else
         presentation = await this._applyRender(html, "innerHTML", "input");

      // === post presentation setup
      const selector = "#" + this.variable.replace(/\./g, "\\.");
      this._inputVariable = presentation.querySelector(selector);
      this._inputVariable.addEventListener("input", this.inputTyped);
      this._inputVariable.addEventListener("change", this.inputChanged);

      this._presentationIsReady();
   }
}

(function() {
   // <TODO> temporary (size = 50)
   // <TODO> transfer the definition of font to CSS
   DCCInputTyped.templateElements = {
      text: "<div class='[render]'><label>[statement]</label><input type='text' id='[variable]' [itype]></input></div>",
      area: "<div class='[render]'><label>[statement]</label><textarea rows='[rows]' id='[variable]'></textarea></div>"
   };

   DCCInputTyped.elementTag = "dcc-input-typed";
   DCCInputTyped.editableCode = false;
   customElements.define(DCCInputTyped.elementTag, DCCInputTyped);
})();
