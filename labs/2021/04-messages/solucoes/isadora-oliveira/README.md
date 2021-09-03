# Aluno
* `Isadora Mendonça de Oliveira`

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button label="Mundo Politica" topic="news/world/politic" message="US braces for further attacks after Kabul bombing">
</dcc-button>

<dcc-button label="Brasil Politica" topic="news/brasil/politic" message="Sergio Reis denies having participated in the organization of anti-democratic acts">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="news/brasil/dinos" message="Dinos found in Chapada dos Veadeiros">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="news/bahia/dinos" message="Dinos found dancing in Pelourinho">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="#/politic:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="#/brasil/politic:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="I heard about: " subscribe="news/#:speech">
</dcc-lively-talk>
~~~

![image](https://user-images.githubusercontent.com/50779822/131071040-99eb4e19-bcf2-4812-b8ef-361505d3fd68.png)



~~~barramento
topic: control/button/Mundo Política/ready
message: "dcc-button"

topic: control/button/Brasil Política/ready
message: "dcc-button"

topic: control/button/Brasil Dinos/ready
message: "dcc-button"

topic: control/button/Bahia Dinos/ready
message: "dcc-button"

topic: news/world/politic
message: {"sourceType":"dcc-button","value":"US braces for further attacks after Kabul bombing"}

topic: news/brazil/politic
message: {"sourceType":"dcc-button","value":"Sergio Reis denies having participated in the organization of anti-democratic acts"}

topic: news/brazil/dinosaur
message: {"sourceType":"dcc-button","value":"Dinos found in Chapada dos Veadeiros"}

topic: news/bahia/dinosaur
message: {"sourceType":"dcc-button","value":"Dinos found dancing in Pelourinho"}
~~~

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="News :" subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-button label="Ciências Próxima" topic="next/rss/science">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/rss/design">
</dcc-button>
~~~

![image](https://user-images.githubusercontent.com/50779822/131074329-80e29a99-8f60-4e42-b456-7421b9ea25db.png)

~~~barramento
topic: control/button/Ciências Próxima/ready
message: "dcc-button"

topic: control/button/Design Próxima/ready
message: "dcc-button"

topic: next/rss/science
message: {"sourceType":"dcc-button"}

topic: rss/science
message: {"title":"Vaccine Mandates Work—but Only If They’re Done Right","link":"https://www.wired.com/story/vaccine-mandates-work-but-only-if-theyre-done-right","image":"https://media.wired.com/photos/6125538b4715403ae9e99919/master/pass/Science_mandates_GettyImages-1301498840.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/6125538b4715403ae9e99919/master/pass/Science_mandates_GettyImages-1301498840.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/vaccine-mandates-work-but-only-if-theyre-done-right\" target=\"_blank\">Vaccine Mandates Work—but Only If They’re Done Right</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: {"sourceType":"dcc-button"}

topic: rss/design
message: {"title":"How Cleveland's New Park Will Define Resistance at the RNC","link":"https://www.wired.com/2016/07/clevelands-new-park-will-define-resistance-rnc","image":"https://media.wired.com/photos/5926de3baf95806129f50e2c/master/pass/cs_after.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5926de3baf95806129f50e2c/master/pass/cs_after.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/07/clevelands-new-park-will-define-resistance-rnc\" target=\"_blank\">How Cleveland's New Park Will Define Resistance at the RNC</a>\n   </h3>\n</article>"}

topic: next/rss/science
message: {"sourceType":"dcc-button"}

topic: rss/science
message: {"title":"Afghanistan Almost Beat Polio. Now the Future Is Uncertain","link":"https://www.wired.com/story/afghanistan-almost-beat-polio-now-the-future-is-uncertain","image":"https://media.wired.com/photos/612536ef66da627db6260764/master/pass/Science_polio_GettyImages-1233479687.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/612536ef66da627db6260764/master/pass/Science_polio_GettyImages-1233479687.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/afghanistan-almost-beat-polio-now-the-future-is-uncertain\" target=\"_blank\">Afghanistan Almost Beat Polio. Now the Future Is Uncertain</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: {"sourceType":"dcc-button"}

topic: rss/design
message: {"title":"How Nike Built the HyperAdapt, the Self-Lacing Sneaker of Our Dreams","link":"https://www.wired.com/2016/09/nike-self-lacing-design-hyperadapt","image":"https://media.wired.com/photos/59267870cefba457b079a151/master/pass/2503_cover_beige.png","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/59267870cefba457b079a151/master/pass/2503_cover_beige.png\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/09/nike-self-lacing-design-hyperadapt\" target=\"_blank\">How Nike Built the HyperAdapt, the Self-Lacing Sneaker of Our Dreams</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: {"sourceType":"dcc-button"}

topic: rss/design
message: {"title":"In Sunday Sketching, Christoph Niemann Tells the Brutal Truth About the Creative Process","link":"https://www.wired.com/2016/12/sunday-sketching-christoph-niemann-tells-brutal-truth-creative-process","image":"https://media.wired.com/photos/5926972ccefba457b079a7fb/master/pass/NeimannHP.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5926972ccefba457b079a7fb/master/pass/NeimannHP.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/12/sunday-sketching-christoph-niemann-tells-brutal-truth-creative-process\" target=\"_blank\">In Sunday Sketching, Christoph Niemann Tells the Brutal Truth About the Creative Process</a>\n   </h3>\n</article>"}

topic: next/rss/design
message: {"sourceType":"dcc-button"}

topic: rss/design
message: {"title":"Inside a Strange Three-Day, Hand-Crafted Mission to Europa","link":"https://www.wired.com/2016/09/adam-savage-tom-sachs-movie-props","image":"https://media.wired.com/photos/5926bfccaf95806129f50804/master/pass/CaitOppermann_2016_09_09_WIRED_TomSachs__DSC4345.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5926bfccaf95806129f50804/master/pass/CaitOppermann_2016_09_09_WIRED_TomSachs__DSC4345.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2016/09/adam-savage-tom-sachs-movie-props\" target=\"_blank\">Inside a Strange Three-Day, Hand-Crafted Mission to Europa</a>\n   </h3>\n</article>"}

topic: next/rss/science
message: {"sourceType":"dcc-button"}

topic: rss/science
message: {"title":"This Barnacle-Inspired Glue Seals Bleeding Organs in Seconds","link":"https://www.wired.com/story/this-barnacle-inspired-glue-seals-bleeding-organs-in-seconds","image":"https://media.wired.com/photos/6123ba60202b967ede8d7e2f/master/pass/Science_barnacles_GettyImages-177033435.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/6123ba60202b967ede8d7e2f/master/pass/Science_barnacles_GettyImages-177033435.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/this-barnacle-inspired-glue-seals-bleeding-organs-in-seconds\" target=\"_blank\">This Barnacle-Inspired Glue Seals Bleeding Organs in Seconds</a>\n   </h3>\n</article>"}

topic: next/rss/science
message: {"sourceType":"dcc-button"}

topic: rss/science
message: {"title":"Would It Be Fair to Treat Vaccinated Covid Patients First?","link":"https://www.wired.com/story/would-it-be-fair-to-treat-vaccinated-covid-patients-first","image":"https://media.wired.com/photos/611ff5a47bcaa3a8082da10e/master/pass/Science_covidethics_GettyImages-1234489797.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/611ff5a47bcaa3a8082da10e/master/pass/Science_covidethics_GettyImages-1234489797.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/would-it-be-fair-to-treat-vaccinated-covid-patients-first\" target=\"_blank\">Would It Be Fair to Treat Vaccinated Covid Patients First?</a>\n   </h3>\n</article>"}

topic: aggregate/science
~~~


## Tarefa 3 - Painéis de Mensagens com Timer

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>
<dcc-aggregator topic="aggregate/science" quantity="3" subscribe="rss/science">
</dcc-aggregator>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>
<dcc-aggregator topic="aggregate/design" quantity="3" subscribe="rss/design">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Science News: " subscribe="rss/science:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Design News: " subscribe="rss/design:speech">
</dcc-lively-talk>
<dcc-lively-talk speech="Aggregate: " subscribe="aggregate/#:speech">
</dcc-lively-talk>

<dcc-timer cycles="10" interval="1000" topic="next/rss/science" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="next/rss/design" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
~~~

![image](https://user-images.githubusercontent.com/50779822/131076505-32883284-8d75-4505-810a-ee7dacbc1d2d.png)

~~~barramento
topic: control/button/Inicia/ready
message: "dcc-button"

topic: start/feed
message: {"sourceType":"dcc-button"}

topic: nextDesign/rss
message: 1

topic: nextScience/rss
message: 2

topic: rss/science
message: {"title":"The US Is Getting Covid Booster Shots. The World Is Furious","link":"https://www.wired.com/story/the-us-is-getting-covid-booster-shots-the-world-is-furious","image":"https://media.wired.com/photos/611e8a1a9561b7c69f0785c8/master/pass/Science_vaccine_GettyImages-1231600889.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/611e8a1a9561b7c69f0785c8/master/pass/Science_vaccine_GettyImages-1231600889.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/the-us-is-getting-covid-booster-shots-the-world-is-furious\" target=\"_blank\">The US Is Getting Covid Booster Shots. The World Is Furious</a>\n   </h3>\n</article>"}

topic: rss/design
message: {"title":"Mythbuster Adam Savage Has Made a Bag, and It's Beautiful","link":"https://www.wired.com/story/savage-industries-bag","image":"https://media.wired.com/photos/5a0f419aa106f951e4d4ea2f/master/pass/savagebag-FA.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5a0f419aa106f951e4d4ea2f/master/pass/savagebag-FA.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/savage-industries-bag\" target=\"_blank\">Mythbuster Adam Savage Has Made a Bag, and It's Beautiful</a>\n   </h3>\n</article>"}
topic: next/rss/design
message: 1

topic: next/rss/science
message: 2

topic: aggregate
message: {"title":"13 Lessons for Design's New Golden Age","link":"https://www.wired.com/2014/09/design-package-2014","image":"https://media.wired.com/photos/593242732a990b06268a9720/master/pass/design-package-ft.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/593242732a990b06268a9720/master/pass/design-package-ft.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2014/09/design-package-2014\" target=\"_blank\">13 Lessons for Design's New Golden Age</a>\n   </h3>\n</article>"}
message: {"title":"The Ghost of Invention: A Visit to Bell Labs","link":"https://www.wired.com/2014/09/coupland-bell-labs","image":"https://media.wired.com/photos/5932421eedfced5820d0f3d8/master/pass/bell-labs-ft.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5932421eedfced5820d0f3d8/master/pass/bell-labs-ft.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/2014/09/coupland-bell-labs\" target=\"_blank\">The Ghost of Invention: A Visit to Bell Labs</a>\n   </h3>\n</article>"}
message: {"title":"Converse Goes Waterproof, With Some Help From Gore-Tex","link":"https://www.wired.com/story/converse-gore-tex-urban-utility","image":"https://media.wired.com/photos/5a1c98c4c146b6147ee67e9f/master/pass/_31A5452-1.jpg","value":"<article>\n   <img width=\"200px\" height=\"auto\" src=\"https://media.wired.com/photos/5a1c98c4c146b6147ee67e9f/master/pass/_31A5452-1.jpg\" alt=\"\">\n   <h3>\n      <a href=\"https://www.wired.com/story/converse-gore-tex-urban-utility\" target=\"_blank\">Converse Goes Waterproof, With Some Help From Gore-Tex</a>\n   </h3>\n</article>"}
~~~
