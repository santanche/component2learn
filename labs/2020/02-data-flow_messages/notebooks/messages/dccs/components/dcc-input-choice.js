/**
 * Input Choice and Option DCCs
 ******************************/

/**
 * Input Option DCC
 ******************/

class DCCInputOption extends DCCInput {
   constructor() {
      super();
      this.inputChanged = this.inputChanged.bind(this);
   }
   
   connectedCallback() {
      this._parent = (this.hasAttribute("parent"))
         ? document.querySelector("#" + this.parent)
         : (this.parentNode != null && this.parentNode.elementTag != null &&
            this.parentNode.elementTag() == DCCInputChoice.elementTag)
           ? this.parentNode : null;

      super.connectedCallback();
      this.innerHTML = "";

      if (!this.hasAttribute("value"))
         this.value = this._statement.trim();

      // <TODO> align with dcc-state-select
      if (this._parent == null && this.hasAttribute("variable"))
         MessageBus.int.publish("var/" + this.variable + "/input/ready",
                                {sourceType: DCCInputOption.elementTag,
                                 content: this.value});
   }

   disconnectedCallback() {
      if (parent == null)
         this._presentation.removeEventListener("change", this.inputChanged);
   }

   /*
    * Property handling
    */

   static get observedAttributes() {
      return DCCInput.observedAttributes.concat(
         ["parent", "exclusive", "checked", "target", "value"]);
   }

   get parent() {
      return this.getAttribute("parent");
   }
   
   set parent(newValue) {
      this.setAttribute("parent", newValue);
   }

   get exclusive() {
      return this.hasAttribute("exclusive");
   }

   set exclusive(isExclusive) {
      if (isExclusive)
         this.setAttribute("exclusive", "");
      else
         this.removeAttribute("exclusive");
   }

   get checked() {
      return this.hasAttribute("checked");
   }

   set checked(isExclusive) {
      if (isExclusive)
         this.setAttribute("checked", "");
      else
         this.removeAttribute("checked");
   }

   get target() {
      return this.getAttribute("target");
   }
   
   set target(newValue) {
      this.setAttribute("target", newValue);
   }

   get value() {
      return this.getAttribute("value");
   }
   
   set value(newValue) {
      this.setAttribute("value", newValue);
   }

   /* Event handling */
   
   inputChanged() {
      this.changed = true;
      MessageBus.ext.publish("var/" + this.variable + "/changed",
                             {sourceType: DCCInputOption.elementTag,
                              value: this.value});
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCInputOption.elementTag;
   }
   
   externalLocationType() {
      return "input";
   }

   // _injectDCC(presentation, render) {
   async _renderInterface() {
      if (this._parent == null) {
         // === pre presentation setup
         // <TODO> review this sentence (copied from dcc-input-typed but not analysed)
         const statement =
            (this.hasAttribute("xstyle") && this.xstyle.startsWith("out"))
            ? "" : this._statement;

         let html = (this.target)
            ? "<dcc-trigger id='[id]' xstyle='theme' action='[target]' label='[statement]' divert='round' value='[value]'></dcc-trigger>"
               .replace("[id]", varid + nop)
               .replace("[target]", this.target)
               .replace("[statement]", child._statement)
               .replace("[value]", child.value)
            : "<input id='presentation-dcc' type='[exclusive]' name='[variable]' value='[value]'[checked]>[statement]</input>"
               .replace("[exclusive]", (this.hasAttribute("exclusive") ? "radio" : "checkbox"))
               .replace("[variable]", this.variable)
               .replace("[value]", this.value)
               .replace("[statement]", statement)
               .replace("[checked]", this.hasAttribute("checked") ? " checked" : "");
        
         // === presentation setup (DCC Block)
         this._presentation = await this._applyRender(html, "innerHTML", "input");

         // === post presentation setup
         this._presentation.addEventListener("change", this.inputChanged);

         this._presentationIsReady();
      }
   }
}

/**
 * Input Choice DCC
 ******************/

class DCCInputChoice extends DCCInput {
   constructor() {
      super();
      this._options = [];
      this.inputChanged = this.inputChanged.bind(this);
   }
   
   async connectedCallback() {
      super.connectedCallback();

      // <TODO> To avoid recursivity -- improve
      if (!this.hasAttribute("statement"))
         this._statement = null;
   }

   disconnectedCallback() {
      if (this._options != null)
         for (let o of this._options)
            o.removeEventListener("change", this.inputChanged);
   }

   /*
    * Property handling
    */

   static get observedAttributes() {
      return DCCInput.observedAttributes.concat(
         ["exclusive", "target"]);
   }

   get exclusive() {
      return this.hasAttribute("exclusive");
   }

   set exclusive(isExclusive) {
      if (isExclusive)
         this.setAttribute("exclusive", "");
      else
         this.removeAttribute("exclusive");
   }

   get target() {
      return this.getAttribute("target");
   }
   
   set target(newValue) {
      this.setAttribute("target", newValue);
   }

   /* Event handling */
   
   inputChanged(event) {
      this.changed = true;
      MessageBus.ext.publish("var/" + this.variable + "/changed",
                             {sourceType: DCCInputChoice.elementTag,
                              value: event.target.value});
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCInputChoice.elementTag;
   }
   
   externalLocationType() {
      return "input";
   }

   // _injectDCC(presentation, render) {
   async _renderInterface() {
      // === pre presentation setup
      // Fetch all the children that are not defined yet
      let undefinedOptions = this.querySelectorAll(":not(:defined)");

      let promises = [...undefinedOptions].map(option => {
         return customElements.whenDefined(option.localName);
      });
      // Wait for all the options be ready
      await Promise.all(promises);

      /*
      let options = this.querySelectorAll(DCCInputOption.elementTag);
      for (let o of options)
         this._options.push({value: o.value, statement: o._statement});
      */

      // <TODO> review this sentence (copied from dcc-input-typed but not analysed)
      /*
      const statement =
         (this.hasAttribute("xstyle") && this.xstyle.startsWith("out"))
         ? "" : this._statement;
      */

      let child = this.firstChild;
      let html = [];
      let nop = 0;
      const varid = this.variable.replace(/\./g, "_");
      let inStatement = true;
      let statement = "";
      // for (let o of this._options) {
      while (child != null) {
         if (child.tagName &&
             child.tagName.toLowerCase() == DCCInputOption.elementTag) {
            console.log("=== child");
            console.log(child);
            nop++;
            let element = (this.target || child.target)
               ?
               "<dcc-trigger id='presentation-dcc-[id]' xstyle='theme' action='[target]' label='[statement]' divert='round' value='[value]'></dcc-trigger>"
                  .replace("[id]", varid + "_" + nop)
                  .replace("[target]", (child.target) ? child.target : this.target)
                  .replace("[statement]", child._statement)
                  .replace("[value]", child.value)
               :
               "<input id='presentation-dcc-[id]' type='[exclusive]' name='[variable]' value='[value]'[checked]>[statement]</input>"
                  .replace("[id]", varid + "_" + nop)
                  .replace("[exclusive]",
                     (this.hasAttribute("exclusive") ? "radio" : "checkbox"))
                  .replace("[variable]", this.variable)
                  .replace("[value]", child.value)
                  .replace("[statement]", child._statement)
                  .replace("[checked]", child.hasAttribute("checked") ? " checked" : "");
            html.push([1, element]);
            inStatement = false;
         } else {
            const element = (child.nodeType == 3) ? child.textContent : child.outerHTML;
            if (inStatement && this._statement == null)
               statement += element;
            else
               html.push([0, element]);
            /*
            if (child.nodeType == 3)
               html += child.textContent;
            else
               html += child.outerHTML;
            */
         }
         child = child.nextSibling;
         // v++;
      }
      if (statement.length > 0)
         this._statement = statement;
      this.innerHTML = "";

      // === presentation setup (DCC Block)
      /*
      if (this.hasAttribute("xstyle") && this.xstyle.startsWith("out") &&
          this._statement != null) {
      */
      if (this._statement != null)
         await this._applyRender(
            "<p>" + this._statement + "</p>", "innerHTML", "text");

      // presentation = await this._applyRender(html, "innerHTML", "input");
      let presentation;
      nop = 0;
      for (let h of html) {
         // <TODO> temporarily disabled
         /*
         if (h[0] == 0)
            await this._applyRender(h[1], "innerHTML", "input");
         else {
         */
         if (h[0] == 1) {
            nop++;
            presentation =
               await this._applyRender(h[1], "innerHTML", "item_" + nop, false);
            presentation.addEventListener("change", this.inputChanged);
            this._options.push(presentation);
         }
      }

      // === post presentation setup
      /*
      if (presentation != null) {
         // v = 1;
         // for (let o of this._options) {
         for (let v = 1; v <= nop; v++) {
            let op = presentation.querySelector("#" + varid + v);
            if (op != null) {
               op.addEventListener("change", this.inputChanged);
               this._options.push(op);
            }
         }
      }
      */

      this._presentationIsReady();

      // <TODO> align with dcc-state-select
      MessageBus.int.publish("var/" + this.variable + "/group_input/ready",
                             DCCInputChoice.elementTag);
   }
}

(function() {
   DCCInputOption.elementTag = "dcc-input-option";
   DCCInputOption.editableCode = false;
   customElements.define(DCCInputOption.elementTag, DCCInputOption);
   DCCInputChoice.elementTag = "dcc-input-choice";
   DCCInputChoice.editableCode = false;
   customElements.define(DCCInputChoice.elementTag, DCCInputChoice);
})();
