(function() {
insertSource(
"Microworld - Replication and Predation",
`<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" grid>
  ______c___
  __a_c_____
  ___cc_____
  _______c__
  ____ac____
  _c____c___
  ______c___
</dcc-space-cellular>

<dcc-cell-image type="c" label="cyanobacteria" image="images/cell/cyanobacteria.svg">
</dcc-cell-image>
<rule-dcc-cell-pair label="cyanobacteria replication" probability="30" transition="c_>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-cell-image type="a" label="amoeba" image="images/cell/amoeba.svg"></dcc-cell-image>
<rule-dcc-cell-pair label="amoeba replication" probability="5" transition="a_>aa">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="eat"probability="50" transition="ac>_a">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>`
);
})();