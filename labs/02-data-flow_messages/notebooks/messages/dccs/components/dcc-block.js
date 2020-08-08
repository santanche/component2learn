/* Block DCC
 * 
 * xstyle - controls the behavior of the style
 *   * "in" or not defined -> uses the internal trigger-button style
 *   * "none" ->  apply a minimal styling (just changes cursor to pointer)
 *   * "out"  -> apply an style externally defined with the name "trigger-button-template"
**************************************************************************/

class DCCBlock extends DCCMultiVisual {
   constructor() {
     super();
     
     this._renderInterface = this._renderInterface.bind(this);
   }
   
   async connectedCallback() {
      if (!this.hasAttribute("xstyle")) {
         this.xstyle = "theme";
         if (MessageBus.page.hasSubscriber("dcc/request/xstyle")) {
            let stylem = await MessageBus.page.request("dcc/request/xstyle");
            this.xstyle = stylem.message;
         }
      }

      if (this.xstyle.startsWith("out") &&
          !this.hasAttribute("location") &&
          MessageBus.page.hasSubscriber("dcc/request/location")) {
         let locationM = await MessageBus.page.request("dcc/request/location",
                                                       this.externalLocationType());
         this.location = locationM.message;
      }

      if (document.readyState === "complete")
         this._renderInterface();
      else
         window.addEventListener("load", this._renderInterface);
   }

   /* Attribute Handling */

   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["label", "image", "location", "xstyle"]);
   }

   get label() {
      return this.getAttribute("label");
   }
   
   set label(newValue) {
      this.setAttribute("label", newValue);
   }
   
   get image() {
      return this.getAttribute("image");
   }
   
   set image(newValue) {
     if (this._imageElement)
        this._imageElement.src = newValue;
     this.setAttribute("image", newValue);
   }

   get location() {
      return this.getAttribute("location");
   }
    
   set location(newValue) {
     this.setAttribute("location", newValue);
   }
    
   get xstyle() {
      return this.getAttribute("xstyle");
   }
   
   set xstyle(newValue) {
      this.setAttribute("xstyle", newValue);
   }
  
   /* Rendering */
   
   elementTag() {
      return DCCBlock.elementTag;
   }
   
   externalLocationType() {
      return DCCBlock.locationType;
   }

   /*
    * Computes the render style according to the context
    *    none - no style will be applied
    *    in - gets an imported style defined by the DCC (system theme)
    *    theme - gets an imported style defined by the theme
    *    out... - gets an external style defined by the theme
    *    <style> - any other case is considered a style defined in xstyle
    */
   _renderStyle() {
      let render;
      switch (this.xstyle) {
         // no style
         case "none": render = "";
                      break;
         // styles imported by the DCC
         case "in"  : 
         case "theme": if (this.hasAttribute("image"))
                          render = this.elementTag() + "-image-theme";
                       else
                          render = this.elementTag() + "-theme";
                       break;
         // styles defined by the theme
         case "out-image":
         case "out":  render = this.elementTag() + "-theme";
                      break;
         // style defined directly in the attribute xstyle
         default:     render = this.xstyle;
      }

      return render;
   }

   /*
    * Finds the outer target interface or creates an internal interface
    */
   async _applyRender(html, outTarget, role, shadow) {
      const sufix = (role && role.length > 0)
         ? ((DCCBlock.defaultRoles.includes(role)) ? "" : "-" + role) : "";

      let presentation = null;
      // location #in to indicate the location attribute is not absent
      // but is not outside 
      if (this.xstyle.startsWith("out") &&
          this.hasAttribute("location") && this.location != "#in") {
         /*
          * outer target interface
          */
         presentation = document.querySelector("#" + this.location + sufix);
         if (presentation != null) {
            if (sufix == "-image" && this.hasAttribute("image")) {
               // <TODO> image works for SVG but not for HTML
               if (presentation.nodeName.toLowerCase() == "image")
                  presentation.setAttributeNS(
                     "http://www.w3.org/1999/xlink", "href", html);
               else
                  presentation.innerHTML = "<img src='" + html + "'>";
            } else
               presentation[outTarget] = html;
         }

         let wrapper = document.querySelector("#" + this.location + "-wrapper");
         if (wrapper != null) {
            if (wrapper.style.display)  // html
               wrapper.style.display = "flex";
            if (wrapper.getAttribute("visibility"))  // svg
               delete wrapper.removeAttribute("visibility");
         }
      } else {
         /*
          * complete internal interface
          */
         // check if there is a "presentation-dcc"
         const presentationDCC = /id=['"]presentation-dcc.*['"]/im;
         if (!presentationDCC.test(html))
            html = "<div id='presentation-dcc" + ((role) ? "-" + role : "") +
                   "'>" + html + "</div>"

         if (this.xstyle == "in")
            html = "<style>@import '" +
                      Basic.service.systemStyleResolver(this.elementTag() + ".css") +
                   "' </style>" + html;
         else if (this.xstyle == "theme")
            html = "<style>@import '" +
                      Basic.service.themeStyleResolver(this.elementTag() + ".css") +
                   "' </style>" + html;

         let template = document.createElement("template");
         template.innerHTML = html;
         
         let host = this;
         const allowShadow = (shadow == null) ? true : shadow;
         if (allowShadow && (this.xstyle == "in" ||
             this.xstyle == "theme" || this.xstyle == "none"))
            host = (this.shadowRoot)
               ? this.shadowRoot : this.attachShadow({mode: "open"});
         host.appendChild(template.content.cloneNode(true));
         presentation = host.querySelector("#presentation-dcc" +
                                           ((role) ? "-" + role : ""));
      }
      if (role)
         this._storePresentation(presentation, role);
      else
         this._storePresentation(presentation);
      this.checkActivateAuthor();
      return presentation;
   }
}

(function() {
   DCCBlock.elementTag = "dcc-block";
   DCCBlock.locationType = "role";

   // roles that does not require sufix
   DCCBlock.defaultRoles = ["entity", "input", "slider"];

   customElements.define(DCCBlock.elementTag, DCCBlock);
})();