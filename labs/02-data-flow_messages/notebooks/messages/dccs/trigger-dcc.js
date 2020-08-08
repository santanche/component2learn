/* DCC Trigger
  ************/

class TriggerDCC extends HTMLElement {
   connectedCallback() {
      console.log("=== trigger dcc");
      this.notifyTrigger = this.notifyTrigger.bind(this);
      if (this.hasAttribute("event")) {
         this._sourceObj = (this.hasAttribute("source"))
            ? document.querySelector("#" + this.source) : this.parentNode;
         if (this._sourceObj != null) {
            this._sourceObj.attachTrigger(this.event, this.notifyTrigger);
            if (this.hasAttribute("target"))
               this._targetObj = document.querySelector("#" + this.target);
            else
               this._targetObj = null;
         }
      }
   }

   notifyTrigger(event) {
      console.log("=== trigger notified");
      console.log(event);
      let message = (this.hasAttribute("role")) ? {role: this.role} : {};
      if (this.hasAttribute("property") || this.hasAttribute("value")) {
         message.body = {};
         if (this.hasAttribute("property"))
            message.body[this.property] = this._sourceObj[this.property];
         if (this.hasAttribute("value"))
            message.body.value = this.value;
      }
      if (this._targetObj != null)
         this._targetObj.notify(this.publish, message);
      if (this.hasAttribute("publish"))
         MessageBus.ext.publish(this.publish, message);
      else if (this._targetObj == null)
         this._sourceObj.notify(this.publish, message);
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return ["source", "event", "target", "role", "publish", "property", "value"];
   }

   get source() {
      return this.getAttribute("source");
   }
   
   set source(newValue) {
      this.setAttribute("source", newValue);
   }
   
   get event() {
      return this.getAttribute("event");
   }
   
   set event(newValue) {
      this.setAttribute("event", newValue);
   }

   get target() {
      return this.getAttribute("target");
   }
   
   set target(newValue) {
      this.setAttribute("target", newValue);
   }
   
   get role() {
      return this.getAttribute("role");
   }
   
   set role(newValue) {
      this.setAttribute("role", newValue);
   }

   get publish() {
      return this.getAttribute("publish");
   }
   
   set publish(newValue) {
      this.setAttribute("publish", newValue);
   }

   get property() {
      return this.getAttribute("property");
   }
   
   set property(newValue) {
      this.setAttribute("property", newValue);
   }

   get value() {
      return this.getAttribute("value");
   }
   
   set value(newValue) {
      this.setAttribute("value", newValue);
   }
}

(function() {
   customElements.define("trigger-dcc", TriggerDCC);
})();