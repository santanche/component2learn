(function() {
const localTheme = `
<div class="styt-main-frame">
   <div class="styt-main">
      <div class="styt-main-text">
         <dcc-styler xstyle="out" distribution="generic" targeted="action">
            {knot}
         </dcc-styler>
         <div id="role-1-text"></div>
         <br>
         <div id="role-1"></div>
         <br><br>
         <div id="role-2-text"></div>
         <br>
         <div id="role-2"></div>
         <br><br>
         <div id="role-3-text"></div>
         <br>
         <div id="role-3"></div>
         <br><br>
      </div>
   </div>
</div>
<div id="action-1-wrapper" class="styt-button-frame">
   <div id="action-1" class="styt-button"></div>
</div>
`;

MessageBus.int.publish("control/theme/knot/load/ready", localTheme);
})();