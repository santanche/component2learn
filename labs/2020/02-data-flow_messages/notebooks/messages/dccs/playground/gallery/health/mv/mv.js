(function() {
insertSource(
"Mechanical Ventilation",
`<dcc-image image="images/mv/mv-front-base.svg" style="width:600px"></dcc-image>
<dcc-image image="images/mv/mv-back-base.svg" style="width:600px"></dcc-image>
<dcc-state id="screen" value="off" rotate>
   <dcc-image role="off" image="images/mv/mv-screen-off.svg"
              style="position:absolute;left:72px;top:56px;width:386px">
   </dcc-image>
   <dcc-group role="start">
      <dcc-image image="images/mv/mv-screen-start.svg"
                 style="position:absolute;left:72px;top:56px;width:386px">
      </dcc-image>
      <dcc-image image="images/mv/mv-ventilation-mode.svg"
                 style="position:absolute;left:96px;top:60px;width:80px">
         <trigger-dcc event="click" target="screen" role="state" value="mode"></trigger-dcc>
      </dcc-image>
   </dcc-group>
   <dcc-image role="mode" image="images/mv/mv-mode-options.svg"
              style="position:absolute;left:72px;top:56px;width:386px">
   </dcc-image>
</dcc-state>
<dcc-state id="power-button" value="on" rotate>
   <dcc-image role="on" image="images/mv/mv-power.svg"
              style="position:absolute;left:380px;top:226px;width:40px">
      <trigger-dcc event="click" target="screen" role="state" value="start"></trigger-dcc>
      <trigger-dcc event="click" target="power-button" role="next"></trigger-dcc>
   </dcc-image>
   <dcc-image role="off" image="images/mv/mv-power-pressed.svg"
              style="position:absolute;left:380px;top:226px;width:40px">
      <trigger-dcc event="click" target="screen" role="state" value="off"></trigger-dcc>
      <trigger-dcc event="click" target="power-button" role="next"></trigger-dcc>
   </dcc-image>
</dcc-state>`
);
})();