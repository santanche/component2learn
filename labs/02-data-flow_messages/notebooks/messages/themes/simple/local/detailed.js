(function() {
const localTheme = `
<div class="styt-main-frame">
   <div class="styt-main">
      <div id="knot-wrapper" class="styt-main-text">
         <dcc-styler xstyle="out" distribution="generic" targeted="action">
            {knot}
         </dcc-styler>
      </div>
   </div>
</div>
<div id="action-1-wrapper" class="styt-button-frame">
   <div id="action-1" class="styt-button"></div>
</div>
`;

MessageBus.int.publish("control/theme/knot/load/ready", localTheme);
})();