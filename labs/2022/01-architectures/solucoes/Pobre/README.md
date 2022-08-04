# Apresentação do Lab01 - Estilos Arquiteturais

# Aluno
* `Alejandro Boidi Rico`

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="É estranha"></dcc-button>
<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Não confie"></dcc-button>
<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Antiguidade"></dcc-button>
<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Nunca houve, Bahia é invenção nossa"></dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="#/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="noticia/brasil/#:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="I heard about: " subscribe="noticia/#:speech">
</dcc-lively-talk>
~~~

![Topico 01](images/topico_01.png)

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-button label="Design Próxima" topic="next/design">
</dcc-button>

<dcc-button label="Ciências Próxima" topic="next/science">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="News :" subscribe="rss/design:speech">
</dcc-lively-talk>
~~~

![Topico 02](images/topico_02.png)

## Tarefa 3 - Painéis de Mensagens com Timer
~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="nextScience/rss:next" topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="nextDesign/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/news" quantity="3" subscribe="rss/#">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="rss/science:speech"></dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"  subscribe="rss/design:speech">
</dcc-lively-talk>
<dcc-lively-talk subscribe="aggregate/news:speech"></dcc-lively-talk>

<dcc-timer interval="1000" topic="nextScience/rss" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer interval="2000" topic="nextDesign/rss" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer interval="2000" topic="nextAgregado/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
~~~

![Tópico 03](images/topico_03.png)

## Tarefa 4 - Web Components Dataflow

![Web Components](images/tarefa04_dataflow.drawio.svg)
