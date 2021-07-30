/**
 * DCC Ruler Cell
 */

class DCCCellRuler extends DCCBase {
   constructor() {
      super();
      this.notify = this.notify.bind(this);
      this.cellClicked = this.cellClicked.bind(this);
      this.rulerMoved = this.rulerMoved.bind(this);
      this._state = 0;
      this._rulerSet = [];
      this._proportion = (this.hasAttribute("proportion")) ? parseInt(this.proportion) : 1;
      this._unit = (this.hasAttribute("unit")) ? this.unit : "";
   }

   connectedCallback() {
      MessageBus.page.publish("dcc/tool-cell/register", this);
   }

   static get observedAttributes() {
      return DCCBase.observedAttributes.concat(
         ["image", "proportion", "unit"]);
   }

   get image() {
      return this.getAttribute("image");
   }
   
   set image(newValue) {
      this.setAttribute("image", newValue);
   }

   get unit() {
      return this.getAttribute("unit");
   }
   
   set unit(newValue) {
      this.setAttribute("unit", newValue);
      this._unit = newValue;
   }

   get proportion() {
      return this.getAttribute("proportion");
   }
   
   set proportion(newValue) {
      this.setAttribute("proportion", newValue);
      this._proportion = parseInt(newValue);
   }

   get space() {
      return this._space;
   }

   set space(newValue) {
      this._space = newValue;
   }

   notify(topic, message) {
      if (message.role)
        switch (message.role.toLowerCase()) {
          case "activate": this.activateTool();
                           break;
          case "inactivate": this.inactivateTool();
                             break;
          case "reset": this.resetTool();
                        break;
      }
   }

   activateTool() {
      if (this._space != null) {
         this._space.toolActive();
         this._space.cellGrid.addEventListener("click", this.cellClicked, false);
      }
      this._state = 0;
   }

   inactivateTool() {
      if (this._space != null) {
         this._space.cellGrid.removeEventListener("click", this.cellClicked);
         this._space.toolInactive();
      }
   }

   resetTool() {
      this.inactivateTool();
      let cells = this._space.cells;
      for (let rs of this._rulerSet) {
         cells.removeChild(rs.origin);
         cells.removeChild(rs.target);
         cells.removeChild(rs.ruler);
      }
      this._rulerSet = [];
   }

   cellClicked(event) {
      const mapped = this._space.mapCoordinatesToSpace(event.clientX, event.clientY);
      const cell = this._space.computeCell(mapped.x, mapped.y);
      let element = DCCCell.createSVGElement("image", cell.row, cell.col, this._space);
      element.setAttribute("href", this.image);
      this._space.cells.appendChild(element);
      switch (this._state) {
         case 0: this._rulerOrigin = {
                    element: element,
                    x: mapped.x + (this._space.cellWidth / 2),
                    y: mapped.y + (this._space.cellHeight / 2),
                    row: cell.row,
                    col: cell.col};
                 this.createSVGRuler(this._rulerOrigin);
                 this._space.cellGrid.addEventListener("mousemove", this.rulerMoved, false);
                 this._state = 1;
                 break;
         case 1: this._space.cellGrid.removeEventListener("mousemove", this.rulerMoved);
                 this._rulerSet.push({origin : this._rulerOrigin.element,
                                      target: element,
                                      ruler: this._currentRuler.ruler});
                 this._state = 0;
                 break;
      }
   }

   createSVGRuler(origin) {
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g");

      let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", origin.x);
      line.setAttribute("y1", origin.y);
      line.setAttribute("x2", origin.x);
      line.setAttribute("y2", origin.y);
      line.setAttribute("style",
         "stroke:rgb(255,0,0);stroke-width:" + (2 / this._space.scale));

      g.appendChild(line);

      let gt = document.createElementNS("http://www.w3.org/2000/svg", "g");
      gt.setAttribute("transform", "translate(" + origin.x + " " + origin.y + ")");

      const scale = "scale(" + (1/this._space.scale) + " " + (1/this._space.scale) + ")";

      let textC = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textC.setAttribute("style", "stroke:white; stroke-width:0.6em");
      textC.setAttribute("transform", scale);
      let contentC = document.createTextNode("0" + this._unit);
      textC.appendChild(contentC);

      let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("fill", "red");
      text.setAttribute("transform", scale);
      let content = document.createTextNode("0" + this._unit);
      text.appendChild(content);

      gt.appendChild(textC);
      gt.appendChild(text);
      g.appendChild(gt);
      this._space.cells.appendChild(g);
      this._currentRuler = {ruler: g,
                            line: line,
                            textG: gt,
                            text: content,
                            textContour: contentC};
   }

   rulerMoved(event) {
      const mapped = this._space.mapCoordinatesToSpace(event.clientX, event.clientY);
      const cell = this._space.computeCell(mapped.x, mapped.y);

      let cr = this._currentRuler;
      cr.line.setAttribute("x2", mapped.x + (this._space.cellWidth / 2));
      cr.line.setAttribute("y2", mapped.y + (this._space.cellHeight / 2));

      cr.textG.setAttribute("transform", "translate(" + 
         ((mapped.x + this._rulerOrigin.x) / 2) + " " +
         ((mapped.y + this._rulerOrigin.y) / 2) + ")");

      cr.text.nodeValue = (Math.round(100 *
         Math.sqrt((Math.pow((cell.row - this._rulerOrigin.row), 2) +
                    Math.pow((cell.col - this._rulerOrigin.col), 2))) / this._proportion) / 100) +
         this._unit;
      cr.textContour.nodeValue = cr.text.nodeValue;
   }
}

(function() {
   customElements.define("dcc-cell-ruler", DCCCellRuler);
})();