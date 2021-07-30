(function() {
insertSource(
"Eletro Image Marker",
`<dcc-group-marker context="ekg" image="images/ekg.png"
  states="empty, key, contibutes, indiferent, against"
  label="Highlight: key (green), corroborate (blue), neutral (yellow), against (red)">
   <dcc-image-marker label="Difuse ST-segment elevation" coords='129,56,56,46'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='779,33,81,65'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='126,204,60,54'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='315,205,67,60'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='784,190,74,70'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='594,365,74,90'></dcc-image-marker>
   <dcc-image-marker label="Difuse ST-segment elevation" coords='777,346,75,70'></dcc-image-marker>
   <dcc-image-marker label="PR depression in DII lead" coords='374,511,50,59'></dcc-image-marker>
   <dcc-image-marker label="PR depression in DII lead" coords='510,514,52,50'></dcc-image-marker>
</dcc-group-marker>`
);
})();