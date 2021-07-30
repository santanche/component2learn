/* DCC Rule Cell
  **************/

class RuleDCCCell extends HTMLElement {
   /* Properties
      **********/
   
   static get observedAttributes() {
      return ["label"];
   }

   get label() {
      return this.getAttribute("label");
   }
   
   set label(newValue) {
      this.setAttribute("label", newValue);
   }
}