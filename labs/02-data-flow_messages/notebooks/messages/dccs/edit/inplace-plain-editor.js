/* Editor for DCC Plain Texts
  ***************************/

class EditDCCPlain extends EditDCC {
   constructor(obj, dcc, htmlProp, field) {
      super(dcc, dcc.currentPresentation());
      this._objProperties = obj;
      if (field != null)
         this._objField = field;
      this._componentEditor(htmlProp);
   }

   async _componentEditor(htmlProp) {
      if (this._objField != null) {
         this._originalEdit = this._editElement.innerHTML;
         this._editElement.contentEditable = true;
      }
      /*
      let ep = await this._extendedPanel(
            EditDCCPlain.propertiesTemplate.replace("[properties]", htmlProp),
               "properties");
      */
      let ep = await this._buildEditor(htmlProp);
      if (this._objField != null) {
         this._editElement.contentEditable = false;
         if (ep.clicked == "confirm")
            this._objProperties[this._objField] =
               this._editElement.innerHTML.trim().replace(/<br>$/i, "");
         else
            this._editElement.innerHTML = this._originalEdit;
      }
      /*
      if (ep.clicked == "confirm")
         await MessageBus.ext.request("properties/apply/short");
      else
         this._editDCC.reactivateAuthor();
      this._removeExtendedPanel();
      */
      this._handleEditorAction(ep.clicked);
   }
}