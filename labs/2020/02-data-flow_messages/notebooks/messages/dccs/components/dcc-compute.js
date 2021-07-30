/* Compute DCC
 *************/
class DCCCompute extends DCCBase {
   constructor() {
      super();
   }
   
   async connectedCallback() {
      if (this.hasAttribute("instruction")) {
         if (this.instruction == "case=0")
            MessageBus.ext.publish("case/completed", "");
         else {
            const trans = /(\w+)?[ \t]*([+\-*/=])[ \t]*(\d+(?:\.\d+)?)/im;
            const elements = trans.exec(this.instruction);

            let variable = elements[1];
            let operation = elements[2];
            let value = parseInt(elements[3]);

            let varValue = value;
            if (operation != "=") {
               let varM = await MessageBus.ext.request("var/" + variable + "/get");
               varValue = parseInt(varM.message);

               switch (operation) {
                  case "+": varValue += value; break;
                  case "-": varValue -= value; break;
                  case "*": varValue *= value; break;
                  case "/": varValue /= value; break;
               }
            }

            MessageBus.ext.publish("var/" + variable + "/set", varValue);
         }
      }
   }

   /*
    * Property handling
    */
   
   static get observedAttributes() {
      return DCCBase.observedAttributes.concat(["instruction"]);
   }

   get instruction() {
      return this.getAttribute("instruction");
   }
   
   set instruction(newValue) {
      this.setAttribute("instruction", newValue);
   }

   /*
    * Static Instruction Processing Methods
    */

   /*
    * Computes a instruction that comes as object
    *
    * {
    *   type: <type of the instruction>,
    *   <properties according to the type>
    * }
    */
   static computeInstructionObj(instruction) {
      console.log("=== instruction");
      console.log(instruction);
      switch (instruction.type) {
         case "divert-script":
            let message;
            if (instruction.target.startsWith("Case."))
               message = "case/" + instruction.target.substring(5) + "/navigate";
            else
               message = "knot/" + instruction.target + "/navigate";
            console.log("=== message");
            console.log(message);
            if (instruction.parameter)
               MessageBus.ext.publish(message, instruction.parameter);
            else
               MessageBus.ext.publish(message);
            break;
      }
   }
}

(function() {
   DCCCompute.elementTag = "dcc-compute";
   customElements.define(DCCCompute.elementTag, DCCCompute);
})();