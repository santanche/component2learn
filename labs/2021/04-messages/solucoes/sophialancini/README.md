# Aluno
* `Sophia Carvalho Lancini`

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Após tomada de poder pelo Talibã, vacinação no Afeganistão cai, aponta a ONU">
</dcc-button>
<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Morte do presidente">
</dcc-button>
<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Staurikosaurus">
</dcc-button>
<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Spinosaurus">
</dcc-button>


<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="noticia/+/politica:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="noticia/brasil/#:speech">
</dcc-lively-talk>
<dcc-lively-talk speech="I heard about: " subscribe="#:speech">
</dcc-lively-talk>
~~~

![Tarefa 1 Screenshot](images/tarefa1.png)

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>
<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>


<dcc-button label="Ciência Próxima" topic="next/rss/science">
</dcc-button>
<dcc-button label="Design Próxima" topic="next/rss/design">
</dcc-button>


<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>
<dcc-lively-talk speech="News: " subscribe="rss/design:speech">
</dcc-lively-talk>
~~~

![Tarefa 2 Screenshot](images/tarefa2.png)

## Tarefa 3 - Painéis de Mensagens com Timer

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>
<dcc-aggregator topic="aggregate/science" quantity="3" subscribe="rss/science">
</dcc-aggregator>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/science:next" topic="rss/design">
</dcc-rss>
<dcc-aggregator topic="aggregate/design" quantity="3" subscribe="rss/design">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News on Science: " subscribe="rss/science:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News on Design: " subscribe="rss/design:speech">
</dcc-lively-talk>
<dcc-lively-talk speech="Compact : " subscribe="aggregate/#:speech">
</dcc-lively-talk>

<dcc-timer cycles="10" interval="1000" topic="next/rss/science" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="next/rss/design" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="aggregate/#" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Start" topic="start/feed">
</dcc-button>
~~~

![Tarefa 3 Screenshot](images/tarefa3.png)