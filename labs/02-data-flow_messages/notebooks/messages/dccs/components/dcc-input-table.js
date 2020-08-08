/**
 * Input Table DCC
 *****************/

class DCCInputTable extends DCCInput {
   constructor() {
      super();
      this.inputChanged = this.inputChanged.bind(this);
   }
   
   connectedCallback() {
      if (!this.hasAttribute("rows"))
         this.rows = 2;

      if (!this.hasAttribute("cols"))
         if (this.hasAttribute("schema"))
            this.cols = this.schema.split(",").length;
         else
            this.cols = 2;

      this._value = [];
      for (let r = 0; r < this.rows; r++)
         this._value.push(new Array(parseInt(this.cols)).fill(null));

      super.connectedCallback();
      this.innerHTML = "";

      MessageBus.int.publish("var/" + this.variable + "/input/ready",
                             DCCInputTable.elementTag);
   }

   disconnectedCallback() {
      if (this._inputSet != null)
         for (let i of this._inputSet)
            if (i != null)
               i.removeEventListener("change", this.inputChanged);
   }

   /*
    * Property handling
    */

   static get observedAttributes() {
      return DCCInput.observedAttributes.concat(
         ["rows", "cols", "schema", "player"]);
   }

   get rows() {
      return this.getAttribute("rows");
   }
   
   set rows(newValue) {
      this.setAttribute("rows", newValue);
   }

   get cols() {
      return this.getAttribute("cols");
   }
   
   set cols(newValue) {
      this.setAttribute("cols", newValue);
   }
   
   get schema() {
      return this.getAttribute("schema");
   }
   
   set schema(newValue) {
      this.setAttribute("schema", newValue);
   }
   
   get player() {
      return this.getAttribute("player");
    }

   set player(newValue) {
      this.setAttribute("player", newValue);
   }

   /* Event handling */
   
   inputChanged(event) {
      this.changed = true;

      let id = event.target.id;
      let p = id.lastIndexOf("_");
      const col = parseInt(id.substring(p + 1)) - 1;
      id = id.substring(0, p);
      p = id.lastIndexOf("_");
      const row = parseInt(id.substring(p + 1)) - 1;
      this._value[row][col] = event.target.value;

      MessageBus.ext.publish("var/" + this.variable + "/changed",
                             {sourceType: DCCInputTable.elementTag,
                              value: this._value});
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCInputTable.elementTag;
   }
   
   externalLocationType() {
      return "input";
   }

   // _injectDCC(presentation, render) {
   async _renderInterface() {
      let templateElements =
      "<style> @import '" +
         Basic.service.themeStyleResolver("dcc-input-table.css") +
      "' </style>" +
      "<div id='presentation-dcc'>" +
         "[statement]" +
         "<table id='[variable]' class='[render]'>[content]</table>" +
      "</span>";

      // === pre presentation setup
      const statement =
         (this.hasAttribute("xstyle") && this.xstyle.startsWith("out"))
         ? "" : this._statement;

      let content = "";
      if (this.hasAttribute("schema")) {
         content += "<tr>";
         let sch = this.schema.split(",");
         for (let s of sch)
            content += "<th>" + s.trim() + "</th>";
         content += "</tr>";
      }

      if (this.hasAttribute("player")) {
         let value = await MessageBus.ext.request(
               "var/" + this.player + "/get/sub", this.innerHTML);
         console.log("=== return value");
         console.log(value);
         const input = value.message;
         const nr = (input.length < value.length) ? input.length : value.length;
         const nc = (input[0].length < value[0].length) ? input[0].length : value[0].length;
         for (let r = 0; r < nr; r++)
            for (let c = 0; c < nc; c++)
               this._value[r][c] = input[r][c];
      }

      for (let r = 1; r <= this.rows; r++) {
         content += "<tr>";
         for (let c = 1; c <= this.cols; c++)
            content += "<td><input type='text' id='" +
                       this.variable + "_" + r + "_" + c + "'>" +
                       ((this._value[r-1][c-1] == null) ? "" : this._value[r-1][c-1]) +
                       "</input></td>";
         content += "</tr>";
      }

      let html = templateElements
            .replace("[statement]", statement)
            .replace("[variable]", this.variable)
            .replace("[render]", this._renderStyle())
            .replace("[content]", content);
     
      // === presentation setup (DCC Block)
      let presentation;
      if (this.hasAttribute("xstyle") && this.xstyle.startsWith("out")) {
         await this._applyRender(this._statement, "innerHTML", "text");
         presentation = await this._applyRender(html, "innerHTML", "input");
      } else
         presentation = await this._applyRender(html, "innerHTML", "input");

      // === post presentation setup
      if (presentation != null) {
         this._inputSet = [];
         for (let r = 1; r <= this.rows; r++) {
            for (let c = 1; c <= this.cols; c++) {
               let v = document.getElementById(this.variable + "_" + r + "_" + c);
               v.addEventListener("change", this.inputChanged);
               this._inputSet.push(v);
            }
         }
      }

      this._presentationIsReady();
   }
}

(function() {
   DCCInputTable.elementTag = "dcc-input-table";
   DCCInputTable.editableCode = false;
   customElements.define(DCCInputTable.elementTag, DCCInputTable);
})();
