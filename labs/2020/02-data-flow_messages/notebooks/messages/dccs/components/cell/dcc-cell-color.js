/**
 * Static Cell Color
 */

class DCCCellColor extends DCCCell {
   static get observedAttributes() {
      return DCCBase.observedAttributes.concat(
         ["color", "opacity"]);
   }

   get color() {
      return this.getAttribute("color");
   }
   
   set color(newValue) {
      this.setAttribute("color", newValue);
   }

   get opacity() {
      return this.getAttribute("opacity");
   }
   
   set opacity(newValue) {
      this.setAttribute("opacity", newValue);
   }

   createIndividual(row, col) {
      let element = this.createSVGElement("rect", row, col);
      element.setAttribute("style", "fill:" + this.color);
      if (this.hasAttribute("opacity") && this._properties.value)
         element.setAttribute("fill-opacity",
            this._properties.value / this.opacity);
      return new DCCCellLight(this, element);
   }

   updateElementState(element, properties) {
      if (this.hasAttribute("opacity") && properties && properties.value)
         element.setAttribute("fill-opacity", properties.value / this.opacity);
   }
}

(function() {
   customElements.define("dcc-cell-color", DCCCellColor);
})();