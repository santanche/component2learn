/**
 * Slider DCC
 ***********/

class DCCSlider extends DCCInput {
   constructor() {
      super();
      this.inputChanged = this.inputChanged.bind(this);
   }
   
   connectedCallback() {
      if (!this.hasAttribute("min"))
         this.min = DCCSlider.defaultValueMin;
      if (!this.hasAttribute("max"))
         this.max = DCCSlider.defaultValueMax;
      if (!this.hasAttribute("value"))
         this.value = Math.round((parseInt("" + this.min) + parseInt("" + this.max)) / 2);

      super.connectedCallback();
      this.innerHTML = "";
      
      MessageBus.int.publish("var/" + this.variable + "/input/ready",
                             DCCSlider.elementTag);
   }
   
   /*
    * Property handling
    */
   
   static get observedAttributes() {
      return DCCInput.observedAttributes.concat(
         ["min", "max", "index"]);
   }

   get min() {
      return this.getAttribute("min");
   }

   set min(newValue) {
      this.setAttribute("min", newValue);
   }

   get max() {
      return this.getAttribute("max");
   }

   set max(newValue) {
      this.setAttribute("max", newValue);
   }

   get index() {
      return this.hasAttribute("index");
   }

   set index(hasIndex) {
      if (hasIndex)
         this.setAttribute("index", "");
      else
         this.removeAttribute("index");
   }

   /* Event handling */
   
   inputChanged() {
      this.changed = true;
      this.value = this._inputVariable.value;
      if (this._inputIndex)
         this._inputIndex.innerHTML = this.value;
      MessageBus.ext.publish("var/" + this.variable + "/changed",
                             {sourceType: DCCSlider.elementTag,
                              value: this.value});
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCSlider.elementTag;
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

      const index = (this.index)
         ? "<span id='" + this.variable + "-index'>" + 
              ((this.mandatory) ? "  " : this.value) +
           "</span>"
         : "";

      let html = DCCSlider.templateElement
            .replace("[statement]", statement)
            .replace("[variable]", this.variable)
            .replace("[value]", this.value)
            .replace("[min]", this.min)
            .replace("[max]", this.max)
            .replace("[render]", this._renderStyle())
            .replace("[index]", index);
     
      // === presentation setup (DCC Block)
      let presentation;
      if (this.hasAttribute("xstyle") && this.xstyle.startsWith("out")) {
         await this._applyRender(this._statement, "innerHTML", "text");
         presentation = await this._applyRender(html, "innerHTML", "slider");
      } else
         presentation = await this._applyRender(html, "innerHTML", "slider");

      // === post presentation setup
      const selector = "#" + this.variable.replace(/\./g, "\\.");
      this._inputVariable = presentation.querySelector(selector);
      this._inputVariable.oninput = this.inputChanged;
      if (this.hasAttribute("index"))
         this._inputIndex = presentation.querySelector(selector + "-index");

      this._presentationIsReady();
   }
}

(function() {
   DCCSlider.templateElement =
`[statement]&nbsp;
<div style="width:100%; display:flex; flex-direction:row">
   <span style="flex:initial">[index]&nbsp;</span>
   <input type="range" id="[variable]" min="[min]" max="[max]"
          value="[value]" class="[render]" style="flex:auto">
</div>`;

   DCCSlider.defaultValueMin = 0;
   DCCSlider.defaultValueMax = 100;

   DCCSlider.elementTag = "dcc-slider";
   customElements.define(DCCSlider.elementTag, DCCSlider);
})();
