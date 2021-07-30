/* Context Menu DCC
  *****************/
class DCCContextMenu {
   constructor(x, y, items) {
      let template = document.createElement("template");
      template.innerHTML = DCCContextMenu.htmlTemplate
         .replace("{css}", Basic.service.themeStyleResolver("dcc-context-menu.css"))
         .replace("{left}", x)
         .replace("{top}", y);
      this._presentation = document.createElement("div");
      this._presentation.appendChild(template.content.cloneNode(true));
      let content = this._presentation.querySelector("#menu-content");

      for (let i in items) {
         let menuItem = document.createElement("div");
         menuItem.classList.add("dcc-context-menu-item");
         menuItem.innerHTML = i;
         let ci = new ContextItem(items[i]);
         menuItem.addEventListener("click", ci.sendMessage);
         content.appendChild(menuItem);
      }
   }

   static async display(x, y, menu) {
      if (DCCContextMenu.menu != null)
         DCCContextMenu.close();
      DCCContextMenu.menu = new DCCContextMenu(x, y, menu);
      document.body.appendChild(DCCContextMenu.menu._presentation);
   }

   static async close() {
      if (DCCContextMenu.menu != null) {
         document.body.removeChild(DCCContextMenu.menu._presentation);
         DCCContextMenu.menu = null;
      }
   }
}

class ContextItem {
   constructor(topicMessage) {
      this._topicMessage = topicMessage;
      this.sendMessage = this.sendMessage.bind(this);
   }

   sendMessage() {
      DCCContextMenu.close();
      MessageBus.ext.publish(this._topicMessage.topic, this._topicMessage.message);
   }
}

(function() {
DCCContextMenu.htmlTemplate =
`<style>@import "{css}"</style>
<div id="menu-content" class="dcc-context-menu" style="left:{left}px;top:{top}px">
</div>`;
DCCContextMenu.itemTemplate =
`<div class="dcc-context-menu-item">{item}</div>`;
})();