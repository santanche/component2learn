/**
 * Static Cell Image
 */

class DCCCellImage extends DCCCell {
   static get observedAttributes() {
      return DCCBase.observedAttributes.concat(
         ["image"]);
   }

   get image() {
      return this.getAttribute("image");
   }
   
   set image(newValue) {
      this.setAttribute("image", newValue);
   }

   createIndividual(row, col) {
      let element = this.createSVGElement("image", row, col);
      element.setAttribute("href", this.image);
      /*
      if (this._properties.rotate) {
         const center = this.space.computeCellCenter(row, col);
         element.setAttribute("transform",
            "rotate(" + this._properties.rotate + "," + center.x + "," + center.y + ")");
      }
      */
      return new DCCCellLight(this, element);
   }

   createIndividualInitial(row, col, props) {
      let light = super.createIndividualInitial(row, col, props);
      /*
      console.log("=== properties");
      console.log(props);
      console.log(light.properties);
      */
      if (light.properties != null && light.properties.rotate != null) {
         const center = this.space.computeCellCenter(row, col);
         light.element.setAttribute("transform",
            "rotate(" + light.properties.rotate + "," + center.x + "," + center.y + ")");
      }
      return light;
   }

   updateElementState(element, properties, row, col) {
      const center = this.space.computeCellCenter(row, col);
      // console.log("=== center");
      // console.log(row + "," + col + "," + center.x + "," + center.y);
      if (properties && properties.rotate)
         element.setAttribute("transform",
            "rotate(" + properties.rotate + "," + center.x + "," + center.y + ")");
   }
}

(function() {
   customElements.define("dcc-cell-image", DCCCellImage);
})();