(function() {
insertSource(
"Energy",
`<dcc-space-cellular id="cellular-space" cell-width="10" cell-height="10">
swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
</dcc-space-cellular>
<dcc-cell-color type="w" label="wire type 1" color="#00ff00"></dcc-cell-color>
<dcc-cell-color type="s" label="energy source" color="#808000">
  <property-dcc name="value" initial="45"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="e" label="eletron" color="#0000ff" opacity="45"></dcc-cell-color>

<rule-dcc-cell-flow label="create energy" probability="100" transition="sw>se" flow="==">
***
*_*
***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="follow wire" probability="100" transition="ew>we" flow="-">
***
*_*
***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="dies" probability="100" transition="ew>ww" flow="1">
***
*_*
***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="10000" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>`
);
})();