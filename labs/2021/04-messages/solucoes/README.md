# Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `<Gustavp Donizeti Gini>`

## Tarefa 1 - Web Components e Tópicos

> Escreva aqui o código da sua composição de componentes Web, como mostra o exemplo a seguir:

~~~html
<dcc-lively-talk>
   <subscribe-dcc topic="noticia/#" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png">
   <subscribe-dcc topic="noticia/brasil/#" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png">
   <subscribe-dcc topic="noticia/#/politica" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<div style="width: 80px"><dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Angela Merkel quer dominar o mundo!"></dcc-button></div>
<div style="width: 80px"><dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Política no Brasil tá foda!"></dcc-button></div>
<div style="width: 80px"><dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Ovo de Tricerátops é encontrado no Nordeste."></dcc-button></div>
<div style="width: 80px"><dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Nasce o primeiro dinosauro preguiçoso do mundo"></dcc-button></div>
~~~

> Acrescente uma imagem da composição em funcionamento, como o exemplo a seguir:

![Composition Screenshot](imagens/Imagem_Parte01.PNG)

## Tarefa 2 - Web Components e RSS
~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss:next" topic="rss/science"></dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss:next" topic="rss/design"></dcc-rss>
<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science"></dcc-aggregator>
<dcc-lively-talk>
   <subscribe-dcc topic="rss/design" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png">
   <subscribe-dcc topic="rss/science" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png">
   <subscribe-dcc topic="aggregate/science" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<div style="width: 80px"><dcc-button label="Ciência Próxima" topic="next/rss"></dcc-button></div>
<div style="width: 80px"><dcc-button label="Design Próxima" topic="next/rss"></dcc-button></div>
~~~

![Composition Screenshot](imagens/Imagem_Parte02.PNG)

## Tarefa 3 - Painéis de Mensagens com Timer
~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss:next" topic="rss/science"></dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next1/rss:next" topic="rss/design"></dcc-rss>
<dcc-aggregator topic="aggregate/science" quantity="3" subscribe="rss/science"></dcc-aggregator>
<dcc-aggregator topic="aggregate/design" quantity="3" subscribe="rss/design"></dcc-aggregator>
<dcc-lively-talk>
   <subscribe-dcc topic="aggregate/science" map="speech"></subscribe-dcc>
   <subscribe-dcc topic="aggregate/design" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png">
   <subscribe-dcc topic="rss/design" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png">
   <subscribe-dcc topic="rss/science" map="speech"></subscribe-dcc>
</dcc-lively-talk>
<dcc-timer cycles="10" interval="1000" topic="next/rss" subscribe="start/feed:start"></dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="next1/rss" subscribe="start/feed:start"></dcc-timer>
<div style="width: 80px"><dcc-button label="Inicia" topic="start/feed"></dcc-button></div>
~~~
![Composition Screenshot](imagens/Imagem_Parte03.PNG)
