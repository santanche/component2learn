(function() {
const localTheme = `
<div class="styn-note">
   <div class="styn-control-button">
      <dcc-trigger action="knot/</navigate" label="Previous Knot" image="../themes/minimal/images/icon-back.svg"></dcc-trigger>
   </div>

   <div class="styt-pul-main">{knot}</div>
</div>
`;

MessageBus.int.publish("control/theme/note/load/ready", localTheme);
})();