# Lab04 - Componentes, Mensagens, Eventos e Barramento

# Aluno
* `Carlos Nihelton Santana de Oliveira | ex150295`

## Tarefa 1 - Web Components e Tópicos

~~~html
<!-- BOTÕES -->
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="A política atual do mundo é o politicamente correto">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="A política do Brasil é a polarização das moléculas apolares">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="No Brasil não tem muitos dinos">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Na Bahia eu não sei, mas no Maranhão tem o Flávio.">
</dcc-button>

<!-- PERSONAGENS -->
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="noticia/+/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" subscribe="noticia/brasil/#:speech">
</dcc-lively-talk>

<dcc-lively-talk subscribe="noticia/#:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](./images/tarefa1.png)

## Tarefa 2 - Web Components e RSS
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.
```html
<!-- RSS -->
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<!-- BOTÕES -->
<dcc-button label="Ciências Próxima" topic="next/rss/science">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/rss/design">
</dcc-button>


<!-- PERSONAGENS -->
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk subscribe="rss/design:speech">
</dcc-lively-talk>
```

![Result](./images/tarefa2.png)

## Tarefa 3 - Painéis de Mensagens com Timer

A menos que o feed responda em tempos completamente aleatórios e distintos entre tópicos, a sincronização da fala do dino e enfermeira deveria estar garantida
pela chegada de uma notícia de design que deverá ser agregada com 2 notícias de ciência recebidas no instance t-1 segundos e t segundos.

```html
<!-- RSS -->
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate" quantity="3">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
  <subscribe-dcc topic="rss/design"></subscribe-dcc>
</dcc-aggregator>

<!-- PERSONAGENS -->
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="+/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" subscribe="+/design:speech">
</dcc-lively-talk>

<dcc-lively-talk subscribe="aggregate:speech">
</dcc-lively-talk>

<!-- TIMERS -->
<dcc-timer cycles="4" interval="1000" topic="next/rss/science" subscribe="timer/start:start">
</dcc-timer>
<dcc-timer cycles="2" interval="2000" topic="next/rss/design" subscribe="timer/start:start">
</dcc-timer>

<!-- BOTÃO -->
<dcc-button label="Inicia" topic="timer/start" >
</dcc-button>

```

![Resultado](./images/tarefa3.png)


O barramento desta tarefa ficou assim:


~~~text}

topic: control/button/Inicia/ready
message: "dcc-button"

topic: timer/start
message: {"sourceType":"dcc-button"}

topic: next/rss/science
message: 1

topic: rss/science
message: {"title":"A Plan to Slow the Creep of the Sahara—by Planting Gardens","link":"https://www.wired.com/story/a-plan-to-slow-the-creep-of-the-sahara-by-planting-gardens","image":"https://media.wired.com/photos/61204466a8686e49cfd11b4e/master/pass/Science_climatedesk_RTXEUZB3.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/61204466a8686e49cfd11b4e/master/pass/Science_climatedesk_RTXEUZB3.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/a-plan-to-slow-the-creep-of-the-sahara-by-planting-gardens\" target=\"_blank\">A Plan to Slow the Creep of the Sahara—by Planting Gardens</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: 1

topic: next/rss/science
message: 2

topic: rss/science
message: {"title":"The US Is Getting Covid Booster Shots. The World Is Furious","link":"https://www.wired.com/story/the-us-is-getting-covid-booster-shots-the-world-is-furious","image":"https://media.wired.com/photos/611e8a1a9561b7c69f0785c8/master/pass/Science_vaccine_GettyImages-1231600889.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/611e8a1a9561b7c69f0785c8/master/pass/Science_vaccine_GettyImages-1231600889.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/the-us-is-getting-covid-booster-shots-the-world-is-furious\" target=\"_blank\">The US Is Getting Covid Booster Shots. The World Is Furious</a>\n   </h3>\n</article>"}

topic: rss/design
message: {"title":"How Cleveland's New Park Will Define Resistance at the RNC","link":"https://www.wired.com/2016/07/clevelands-new-park-will-define-resistance-rnc","image":"https://media.wired.com/photos/5926de3baf95806129f50e2c/master/pass/cs_after.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5926de3baf95806129f50e2c/master/pass/cs_after.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/07/clevelands-new-park-will-define-resistance-rnc\" target=\"_blank\">How Cleveland's New Park Will Define Resistance at the RNC</a>\n   </h3>\n</article>"}

topic: aggregate
message: "<ul>\n<li><a href=\"https://www.wired.com/story/a-plan-to-slow-the-creep-of-the-sahara-by-planting-gardens\" target=\"_blank\">A Plan to Slow the Creep of the Sahara—by Planting Gardens</a></li>\n<li><a href=\"https://www.wired.com/story/the-us-is-getting-covid-booster-shots-the-world-is-furious\" target=\"_blank\">The US Is Getting Covid Booster Shots. The World Is Furious</a></li>\n<li><a href=\"https://www.wired.com/2016/07/clevelands-new-park-will-define-resistance-rnc\" target=\"_blank\">How Cleveland's New Park Will Define Resistance at the RNC</a></li>\n\n</ul>"

topic: next/rss/science
message: 3

topic: rss/science
message: {"title":"Biden Pushes Boosters, Schools Mandate Shots, and More News","link":"https://www.wired.com/story/biden-boosters-school-mandates-coronavirus-news","image":"https://media.wired.com/photos/611fb34eb3731b9702b93886/master/pass/Science_covidnl_GettyImages-1230973700.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/611fb34eb3731b9702b93886/master/pass/Science_covidnl_GettyImages-1230973700.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/biden-boosters-school-mandates-coronavirus-news\" target=\"_blank\">Biden Pushes Boosters, Schools Mandate Shots, and More News</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: 2

topic: rss/design
message: {"title":"How Nike Built the HyperAdapt, the Self-Lacing Sneaker of Our Dreams","link":"https://www.wired.com/2016/09/nike-self-lacing-design-hyperadapt","image":"https://media.wired.com/photos/59267870cefba457b079a151/master/pass/2503_cover_beige.png","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/59267870cefba457b079a151/master/pass/2503_cover_beige.png\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/09/nike-self-lacing-design-hyperadapt\" target=\"_blank\">How Nike Built the HyperAdapt, the Self-Lacing Sneaker of Our Dreams</a>\n   </h3>\n</article>"}

topic: next/rss/science
message: 4

topic: rss/science
message: {"title":"How to Ace Physics Class (Even if You Don’t Ace Physics)","link":"https://www.wired.com/story/how-to-ace-physics-class-even-if-you-dont-ace-physics","image":"https://media.wired.com/photos/611e852dea4a8408e0563514/master/pass/Science_school_GettyImages-1233317805.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/611e852dea4a8408e0563514/master/pass/Science_school_GettyImages-1233317805.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/how-to-ace-physics-class-even-if-you-dont-ace-physics\" target=\"_blank\">How to Ace Physics Class (Even if You Don’t Ace Physics)</a>\n   </h3>\n</article>"}

topic: aggregate
message: "<ul>\n<li><a href=\"https://www.wired.com/story/biden-boosters-school-mandates-coronavirus-news\" target=\"_blank\">Biden Pushes Boosters, Schools Mandate Shots, and More News</a></li>\n<li><a href=\"https://www.wired.com/2016/09/nike-self-lacing-design-hyperadapt\" target=\"_blank\">How Nike Built the HyperAdapt, the Self-Lacing Sneaker of Our Dreams</a></li>\n<li><a href=\"https://www.wired.com/story/how-to-ace-physics-class-even-if-you-dont-ace-physics\" target=\"_blank\">How to Ace Physics Class (Even if You Don’t Ace Physics)</a></li>\n\n</ul>"

~~~
