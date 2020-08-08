/* Trigger DCC
 * 
 * xstyle - controls the behavior of the style
 *   * "in" or not defined -> uses the internal trigger-button style
 *   * "none" ->  apply a minimal styling (just changes cursor to pointer)
 *   * "out"  -> apply an style externally defined with the name "trigger-button-template"
**************************************************************************/

class DCCTrigger extends DCCBlock {
   constructor() {
     super();
     this._computeTrigger = this._computeTrigger.bind(this);
     this._active = true;
   }
   
   connectedCallback() {
      if (this.type == "+" && !this.hasAttribute("location")) {
         this.location = "#in";
         this.xstyle = "theme";
      }

      super.connectedCallback();

      if (this.hasAttribute("action") && this.action.endsWith("/navigate")) {
         this.navigationBlocked = this.navigationBlocked.bind(this);
         MessageBus.ext.subscribe("+/+/navigate/blocked", this.navigationBlocked);
      }
   }
   
   /* Attribute Handling */

   static get observedAttributes() {
     return DCCBlock.observedAttributes.concat(
        ["type", "link", "action", "value"]);
   }

   get type() {
      return this.getAttribute("type");
   }
   
   set type(newValue) {
      this.setAttribute("type", newValue);
   }
   
   get link() {
      return this.getAttribute("link");
   }
   
   set link(newValue) {
      this.setAttribute("link", newValue);
   }
   
   get action() {
      return this.getAttribute("action");
   }
   
   set action(newValue) {
      this.setAttribute("action", newValue);
   }
  
   get value() {
      return this.getAttribute("value");
   }
   
   set value(newValue) {
      this.setAttribute("value", newValue);
   }
   
   /* Rendering */
   
   async _renderInterface() {
      // === pre presentation setup
      let html;
      if (this.xstyle.startsWith("out"))
         html = this.label;
      else {
         // html = DCCTrigger.templateStyle;
         if (this.hasAttribute("image"))
            html = DCCTrigger.templateElements.image
                          .replace("[render]", this._renderStyle())
                          .replace("[label]", this.label)
                          .replace("[image]", this.image);
         else
            html = DCCTrigger.templateElements.regular
                          .replace("[render]", this._renderStyle())
                          .replace("[label]", this.label);
      }

      // === presentation setup (DCC Block)
      await this._applyRender(html,
         (this.xstyle == "out-image") ? "title" : "innerHTML");

      // === post presentation setup
      // <TODO> provisory
      if (this.hasAttribute("image"))
         this._imageElement = this._presentation.querySelector("#pres-image-dcc");
      
      let wrapperListener = false;
      if (this.location && this.location[0] != "#") {
         let wrapper = document.querySelector("#" + this.location + "-wrapper");
         if (wrapper != null) {
            wrapper.style.cursor = "pointer";
            if (!this.author) {
               wrapper.addEventListener("click", this._computeTrigger);
               wrapperListener = true;
            }
         }
      }

      if (this._presentation != null && !wrapperListener) {
         this._presentation.style.cursor = "pointer";
         if (!this.author)
            this._presentation.addEventListener("click", this._computeTrigger);
      }

      this._presentationIsReady();
   }
   
   /* Rendering */
   
   elementTag() {
      return DCCTrigger.elementTag;
   }

   externalLocationType() {
      return "action";
   }

   _computeTrigger() {
      if (this._active &&
          (this.hasAttribute("label") || this.hasAttribute("action"))) {
         if (this.hasAttribute("action") && this.action.endsWith("/navigate"))
            this._active = false;
         const topic = (this.hasAttribute("action"))
            ? this.action : "trigger/" + this.label + "/clicked";
         let message = {};
         if (this.hasAttribute("value"))
            message.value = this.value;

         MessageBus.ext.publish(topic, message);
      }
   }

   navigationBlocked() {
      this._active = true;
   }
}

(function() {
   DCCTrigger.templateElements = {
   regular:
   `<span id='presentation-dcc' class='[render]'>[label]</span>`,
   image:
   `<span id='presentation-dcc' style='cursor:pointer'>
      <img id='pres-image-dcc' width='100%' height='100%' class='[render]' src='[image]' title='[label]'>
   </span>`
   };

   DCCTrigger.elementTag = "dcc-trigger";

   customElements.define(DCCTrigger.elementTag, DCCTrigger);

})();