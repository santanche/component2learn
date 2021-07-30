/* Timer DCC
  **********/

class DCCTimer extends DCCBase {
   constructor() {
      super();
      // this.notify = this.notify.bind(this);
      this.next = this.next.bind(this);

      this.reset();
   }

   connectedCallback() {
      if (!this.hasAttribute("cycles"))
         this.cycles = 10;
      if (!this.hasAttribute("interval"))
         this.interval = 100;
      if (!this.hasAttribute("publish"))
         this.publish = "dcc/timer/cycle";
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["cycles", "interval", "publish"]);
   }

   get cycles() {
      return this.getAttribute("cycles");
   }
   
   set cycles(newValue) {
      this.setAttribute("cycles", newValue);
   }

   get currentCycle() {
      return this._currentCycle;
   }

   get interval() {
      return this.getAttribute("interval");
   }
   
   set interval(newValue) {
      this.setAttribute("interval", newValue);
   }

   get publish() {
      return this.getAttribute("publish");
   }
   
   set publish(newValue) {
      this.setAttribute("publish", newValue);
   }

   notify(topic, message) {
      if (message.role) {
         switch (message.role.toLowerCase()) {
            case "reset": this.reset(); break;
            case "start": this.start(); break;
            case "stop" : this.stop(); break;
            case "step" : this.step(); break;
            case "interval": this.interval = message.body.value; break;
         }
      }
   }

   reset() {
      this._currentCycle = 0;
   }

   start() {
      this._timeout = setTimeout(this.next, this.interval);
   }

   next() {
      this.step();
      if (this._currentCycle < this.cycles)
         this._timeout = setTimeout(this.next, this.interval);
   }

   step() {
      this._currentCycle++;
      if (this._currentCycle <= this.cycles)
         MessageBus.ext.publish(this.publish, this._currentCycle);
   }

   stop() {
      if (this._timeout)
         clearTimeout(this._timeout);
   }
}

(function() {
   customElements.define("dcc-timer", DCCTimer);
})();