/* Editor for DCC Images
  **********************/

class EditDCCImage extends EditDCC {
   constructor(obj, dcc) {
      super(dcc, dcc.currentPresentation());
      this._componentEditor(obj);
   }

   async _componentEditor(obj) {
      obj.image.path = await this._imageUploadPanel();
      MessageBus.ext.publish("properties/apply/details");
   }
}