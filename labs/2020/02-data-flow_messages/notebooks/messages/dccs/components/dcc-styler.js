/**
 * Styler DCC
 *
 * <TODO> There is no scope control and it is creating problems to other DCCs
 */
class DCCStyler extends DCCBase {
   constructor() {
      super();
      this._locationSet = {generic: 1};
      this.requestXstyle = this.requestXstyle.bind(this);
      this.requestLocation = this.requestLocation.bind(this);
   }

   connectedCallback() {
      if (this.hasAttribute("targeted")) {
         this._targeted = this.targeted.split(";");
         for (let t in this._targeted)
            this._targeted[t] = this._targeted[t].trim();
      }

      if (this.hasAttribute("xstyle"))
         MessageBus.page.subscribe("dcc/request/xstyle", this.requestXstyle);
      
      MessageBus.page.subscribe("dcc/request/location", this.requestLocation);

      /*
      if (this.hasAttribute("locations")) {
         this._locationSet = this.locations.split(";");
         MessageBus.page.subscribe("dcc/request/location", this.requestLocation);
      }
      */
   }

   disconnectedCallback() {
      MessageBus.page.unsubscribe("dcc/request/xstyle", this.requestXstyle);
      MessageBus.page.unsubscribe("dcc/request/location", this.requestLocation);
   }

   /*
    * Property handling
    */
   
   static get observedAttributes() {
      return DCCBase.observedAttributes.concat(
         ["xstyle", "distribution", "targeted"]);
   }

   get xstyle() {
      return this.getAttribute("xstyle");
   }
   
   set xstyle(newValue) {
      this.setAttribute("xstyle", newValue);
   }
   
   get distribution() {
      return this.getAttribute("distribution");
   }
   
   set distribution(newValue) {
      this.setAttribute("distribution", newValue);
   }

   get targeted() {
      return this.getAttribute("targeted");
   }
   
   set targeted(newValue) {
      this.setAttribute("targeted", newValue);
   }

   /*
   get locations() {
      return this.getAttribute("locations");
   }
   
   set locations(newValue) {
      this.setAttribute("locations", newValue);
   }
   */
   
   requestXstyle(topic, message) {
      // MessageBus.page.publish("dcc/xstyle/" + message, this.xstyle);
      MessageBus.page.publish(MessageBus.buildResponseTopic(topic, message),
                              this.xstyle);
   }
   
   /*
    * Manages counting of location by type: role, action etc.
    */
   requestLocation(topic, message) {
      let location;
      if (this._targeted && this._targeted.includes(message.body)) {
         let counter = 1;
         if (this._locationSet[message.body] === undefined)
            this._locationSet[message.body] = 1;
         else {
            this._locationSet[message.body]++;
            counter = this._locationSet[message.body];
         }
         location = message.body + "-" + counter;
      } else if (this.hasAttribute("distribution") && this.distribution == "generic") {
         location = DCCBlock.locationType + "-" + this._locationSet.generic;
         this._locationSet.generic++;
      } else
         location = "#in";
      MessageBus.page.publish(
         MessageBus.buildResponseTopic(topic, message), location);
   }
}
      
(function() {
   DCCStyler.editableCode = false;
   customElements.define("dcc-styler", DCCStyler);
})();