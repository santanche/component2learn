(function() {
insertSource(
"Colors - Movement and Influence",
`<dcc-space-cellular id="cellular-space" rows="50" cell-width="7" cell-height="7" grid infinite>
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
</dcc-space-cellular>

<dcc-cell-color type="u" label="up" color="#ff0000"></dcc-cell-color>
<dcc-cell-color type="d" label="down" color="#00ff00"></dcc-cell-color>
<dcc-cell-color type="l" label="left" color="#0000ff"></dcc-cell-color>
<dcc-cell-color type="r" label="right" color="#ff00ff"></dcc-cell-color>

<rule-dcc-cell-pair label="follow" probability="50" transition="?!>!!">
  ***
  *_*
  ***
</rule-dcc-cell-pair>

<rule-dcc-cell-pair label="turn" probability="10" transition="?!>?@">
  ___
  _*_
  ___
</rule-dcc-cell-pair>

<rule-dcc-cell-pair label="move up" transition="u_>_u">
  _*_
  ___
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move down" transition="d_>_d">
  ___
  ___
  _*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move left" transition="l_>_l">
  ___
  *__
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move right" transition="r_>_r">
  ___
  __*
  ___
</rule-dcc-cell-pair>

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