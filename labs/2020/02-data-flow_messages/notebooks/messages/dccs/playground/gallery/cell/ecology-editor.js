(function() {
insertSource(
"Ecology",
`<div style="width: 100%; display:flex; flex-direction:row">

<div style="flex:50%">
<dcc-space-cellular-editor id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________h________c__
____p_______p_______
________h_____p____h
___c_p____p____r____
_____c__w________h__
h____pwwwww___p_____
___p_wwwwwww____c___
____h__wwwwwpp__p___
__p__c___wwr_____r__
____________p_______
_h_____r___c__h_____
___ppp___________r__
___________p________
_____h______________
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>
<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="70" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-dies" label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-replicates" label="herbivore eat and replicates"
                    probability="25" transition="hp>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-dies" label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-replicates" label="carnivore eat and replicates"
                    probability="25" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="cp>pc">
   ***
   *_*
   ***
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
      <dcc-trigger label="Água" action="type/water"
                   image="images/cell/waves.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Rocha" action="type/rock"
                   image="images/cell/rock01.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Planta" action="type/plant"
                   image="images/cell/plant01.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Herbívoro" action="type/herbivore"
                   image="images/cell/brontosaurus.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Carnívoro" action="type/carnivore"
                   image="images/cell/carnivorous-dinosaur.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Nada" action="type/empty"
                   image="images/cell/cell-green.svg">
      </dcc-trigger>
   </div>
</div>

Selecione abaixo a chance de cada um dos eventos:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/plant01.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/plant01.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="plant_replicates" value="70" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/plant-dies.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="plant_dies" value="15" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/brontosaurus.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/brontosaurus.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="herbivore_replicates" value="25" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/brontosaurus-dies.svg" style="flex:10%; max-width:48px; max-height:48px">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="herbivore_dies" value="10" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/carnivorous-dinosaur.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/carnivorous-dinosaur.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="carnivore_replicates" value="25" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/carnivorous-dinosaur-dies.svg" style="flex:10%; max-width:48px; max-height:48px">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="carnivore_dies" value="10" index></dcc-slider>
   </div>
</div>

<dcc-timer cycles="100000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/plant_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/plant_dies/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="herbivore-replicates" topic="var/herbivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="herbivore-dies" topic="var/herbivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-replicates" topic="var/carnivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-dies" topic="var/carnivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" role="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/load" role="load"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/download" role="download"></subscribe-dcc>

</div>
</div>`
);
})();