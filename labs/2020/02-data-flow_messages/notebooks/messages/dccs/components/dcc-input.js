/**
 * Base for all input components
 */

class DCCInput extends DCCBlock {
   constructor() {
      super();
      this._changed = false;
   }

   connectedCallback() {
      this._statement = (this.hasAttribute("statement"))
         ? this.statement : this.innerHTML;
      // this.innerHTML = "";

      super.connectedCallback();

      if (this.mandatory) {
         const inputIndication = (this._statement != null)
            ? this._statement
            : this.variable.substring(this.variable.lastIndexOf(".") + 1);

         MessageBus.int.publish("var/" + this.variable + "/input/mandatory",
                                inputIndication);
      }
   }

   static get observedAttributes() {
      return DCCBlock.observedAttributes.concat(
         ["statement", "variable", "value", "mandatory"]);
   }

   /*
    * HTML Element property handling
    */

   get statement() {
      return this.getAttribute("statement");
   }
   
   set statement(newValue) {
      this.setAttribute("statement", newValue);
   }
   
   get variable() {
      return this.getAttribute("variable");
   }
   
   set variable(newValue) {
      this.setAttribute("variable", newValue);
   }

   get value() {
      return this.getAttribute("value");
   }

   set value(newValue) {
      this.setAttribute("value", newValue);
   }

   get mandatory() {
      return this.hasAttribute("mandatory");
   }

   set mandatory(isMandatory) {
      if (isMandatory)
         this.setAttribute("mandatory", "");
      else
         this.removeAttribute("mandatory");
   }

   /*
    * Class property handling
    */

   get changed() {
      return this._changed;
   }

   set changed(newValue) {
      this._changed = newValue;
   }
}