/* RSS DCC
  ********/

class DCCRSS extends DCCBase {
   constructor() {
      super();
      // this.notify = this.notify.bind(this);
      this.next = this.next.bind(this);

      this._items = [];
      this._currentCycle = 0;
   }

   connectedCallback() {
      if (!this.hasAttribute("publish"))
         this.publish = "dcc/rss/post";
      if (!this.hasAttribute("interval"))
         this.interval = 1000;
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["source", "publish", "interval"]);
   }

   get source() {
      return this.getAttribute("source");
   }
   
   set source(newValue) {
      this.setAttribute("source", newValue);
   }

   get publish() {
      return this.getAttribute("publish");
   }
   
   set publish(newValue) {
      this.setAttribute("publish", newValue);
   }

   get interval() {
      return this.getAttribute("interval");
   }
   
   set interval(newValue) {
      this.setAttribute("interval", newValue);
   }

   notify(topic, message) {
      if (message.role) {
         switch (message.role.toLowerCase()) {
            case "start": this.start(); break;
            case "stop" : this.stop(); break;
            case "step" : this.step(); break;
         }
      }
   }

   async start() {
      await this._loadRSS();
      this._currentCycle = 0;
      this._timeout = setTimeout(this.next, this.interval);
   }

   async next() {
      await this.step();
      if (this._currentCycle < this._items.length - 1)
         this._timeout = setTimeout(this.next, this.interval);
   }

   async step() {
      if (this._items.length == 0)
         await this._loadRSS();
      console.log(this._items.length);
      if (this._currentCycle < this._items.length)
         MessageBus.ext.publish(this.publish, {value: this._items[this._currentCycle]});
      this._currentCycle++;
   }

   stop() {
      if (this._timeout)
         clearTimeout(this._timeout);
   }

   async _loadRSS() {
      if (this.hasAttribute("source")) {
         await fetch(this.source)
            .then(response => response.text())
            .then(rss => new window.DOMParser().parseFromString(rss, "text/xml"))
            .then(data => {
               const items = data.querySelectorAll("item");
               this._items = [];
               for (let it of items) {
                  let image = null;
                  let el = 0;
                  while (image == null && el < DCCRSS.imageEl.length) {
                     image = it.querySelector(DCCRSS.imageEl[el]);
                     el++;
                  }
                  const imageURL =
                     (image == null) ? null :
                     (image.getAttribute("url")) ? image.getAttribute("url") :
                     (image.getAttribute("href")) ? image.getAttribute("href") :
                     null;
                  this._items.push(
                     DCCRSS.template
                        .replace("{img}", (imageURL == null) ? "" :
                           DCCRSS.imageTemplate.replace("{image}", imageURL))
                        .replace("{link}", it.querySelector("link").innerHTML)
                        .replace("{title}", it.querySelector("title").innerHTML));
               }
            });
      }
   }
}

(function() {
customElements.define("dcc-rss", DCCRSS);

DCCRSS.imageEl = ["image", "thumbnail"];

DCCRSS.template =
`<article>{img}
   <h3>
      <a href="{link}" target="_blank" rel="noopener">{title}</a>
   </h3>
</article>`;

DCCRSS.imageTemplate =
`
   <img width="200px" height="auto" src="{image}" alt="">`;
})();