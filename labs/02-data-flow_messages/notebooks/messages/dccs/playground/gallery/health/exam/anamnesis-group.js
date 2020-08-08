(function() {
insertSource(
"Anamnesis Marker",
`<p>Highlight in green the key findings, in blue the findings that corroborate your hypothesis; in yellow those that are neutral; and in red the ones speaking against your hypothesis.</p>
<p>
<dcc-group-select states=" ,k,+,=,-">
Doctor, I am feeling chest pain since yesterday. The <dcc-state-select id="dcc1">pain is continuous</dcc-state-select> and <dcc-state-select id="dcc2">is located just in the middle of my chest</dcc-state-select> <dcc-state-select id="dcc3">worsening when I breathe</dcc-state-select> and <dcc-state-select id="dcc4">when I lay down on my bed</dcc-state-select>. I have <dcc-state-select id="dcc5">arterial hypertension</dcc-state-select> and <dcc-state-select id="dcc6">I smoke 20 cigarettes</dcc-state-select> every day.
</dcc-group-select>
</p>`
);
})();