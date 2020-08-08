(function() {
insertSource(
"Sand Clock Editor",
`<div style="width: 100%; display:flex; flex-direction:row">

<div style="flex:50%">
<dcc-space-cellular-editor id="cellular-space" label="sand clock" cell-width="6" cell-height="6">
#############################################
#...........................................#
#...........................................#
#...........................................#
#...........................................#
##.........................................##
_#.........................................#_
_##.......................................##_
__#.......................................#__
__##.....................................##__
___#.....................................#___
___##...................................##___
____#...................................#____
____##.................................##____
_____##...............................##_____
______##.............................##______
_______##...........................##_______
________##.........................##________
_________##.......................##_________
__________##.....................##__________
___________###.................###___________
_____________###.............###_____________
_______________###.........###_______________
_________________###.....###_________________
___________________##___##___________________
___________________##___##___________________
_________________###_____###_________________
_______________###_________###_______________
_____________###_____________###_____________
___________###_________________###___________
__________##_____________________##__________
_________##_______________________##_________
________##_________________________##________
_______##___________________________##_______
______##_____________________________##______
_____##_______________________________##_____
____##_________________________________##____
____#___________________________________#____
___##___________________________________##___
___#_____________________________________#___
__##_____________________________________##__
__#_______________________________________#__
_##_______________________________________##_
_#_________________________________________#_
##_________________________________________##
#___________________________________________#
#___________________________________________#
#___________________________________________#
#___________________________________________#
#############################################
</dcc-space-cellular-editor>

<dcc-cell-color type="#" label="glass" color="#57c86e"></dcc-cell-color>

<dcc-cell-color type="." label="sand" color="#7f8395"></dcc-cell-color>
<rule-dcc-cell-pair id="fall-vertical" label="fall vertical" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="fall-oblique" label="fall oblique" probability="90" transition="._>_.">
___
___
*_*
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="roll" label="roll" probability="40" transition="._>_.">
___
*_*
___
</rule-dcc-cell-pair>

<div>
   <dcc-trigger label="Próximo" action="state/next"></dcc-trigger>
   <dcc-trigger label="Play" action="timer/start"></dcc-trigger>
   <dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>
   <dcc-trigger label="Gravar" action="state/save"></dcc-trigger>
   <dcc-trigger label="Ler" action="state/load"></dcc-trigger>
   <dcc-trigger label="Baixar" action="state/download"></dcc-trigger>
</div>
</div>

<div style="flex:50%">
Selecione um dos ícones abaixo para editar o ambiente:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row; border:2px">
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Vidro" action="type/glass"
                   image="images/cell/glass.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Areia" action="type/sand"
                   image="images/cell/sand.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Nada" action="type/empty"
                   image="images/cell/cell-yellow.svg">
      </dcc-trigger>
   </div>
</div>

Selecione abaixo a chance de cada um dos eventos:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:40px; margin-right:40px"
           src="images/cell/arrow-down.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="fall_vertical" value="100" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/arrow-left-oblique.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/arrow-right-oblique.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="fall_oblique" value="90" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/arrow-left.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/arrow-right.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="roll" value="40" index></dcc-slider>
   </div>
</div>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" role="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/load" role="load"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/download" role="download"></subscribe-dcc>
<subscribe-dcc target="fall-vertical" topic="var/fall_vertical/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="fall-oblique" topic="var/fall_oblique/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="roll" topic="var/roll/changed" role="probability"></subscribe-dcc>

</div>
</div>`
);
})();