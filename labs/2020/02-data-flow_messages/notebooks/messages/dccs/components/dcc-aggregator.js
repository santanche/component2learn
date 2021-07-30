/* Agggregator DCC
  ****************/

class DCCAggregator extends DCCBase {
   constructor() {
      super();

      this._aggregated = [];
      this.notify = this.notify.bind(this);
   }

   connectedCallback() {
      if (!this.hasAttribute("publish"))
         this.publish = "dcc/aggregate/post";
      if (this.hasAttribute("quantity")) {
         if (typeof this.quantity === "number")
            this._quantity = this.quantity;
         else
            this._quantity = parseInt(this.quantity);
      } else
         this._quantity = 5;
   }

   /* Properties
      **********/
   
   static get observedAttributes() {
      return DCCVisual.observedAttributes.concat(
         ["publish", "quantity"]);
   }

   get publish() {
      return this.getAttribute("publish");
   }
   
   set publish(newValue) {
      this.setAttribute("publish", newValue);
   }

   get quantity() {
      return this.getAttribute("quantity");
   }
   
   set quantity(newValue) {
      this.setAttribute("quantity", newValue);
   }

   notify(topic, message) {
      this.addItem(message);
   }

   addItem(content) {
      this._aggregated.push(content);
      if (this._aggregated.length >= this._quantity)
         this.publishAggregate();
   }

   publishAggregate() {
      let html = "";
      for (let item of this._aggregated)
         html += DCCAggregator.itemTemplate
                    .replace("{link}", item.link)
                    .replace("{title}", item.title);
      this._aggregated = [];
      let message = DCCAggregator.template.replace("{items}", html);
      MessageBus.ext.publish(this.publish, message);
   }
}

(function() {
customElements.define("dcc-aggregator", DCCAggregator);

DCCAggregator.template =
`<ul>
{items}
</ul>`;

DCCAggregator.itemTemplate =
`<li><a href="{link}" target="_blank">{title}</a></li>
`;
})();