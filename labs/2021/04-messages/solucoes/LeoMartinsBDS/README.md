# Aluno
* `Leonardo Martins de Oliveira (ex150339)`

## Tarefa 1 - Web Components e Tópicos

> Código

~~~html
<dcc-button label="Mundo Politica" topic="noticia/mundo/politica" message="Politica mundo">
</dcc-button>
<dcc-button label="Brasil Politica" topic="noticia/brasil/politica" message="Politica brasil">
</dcc-button>
<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Brasil dinos">
</dcc-button>
<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Bahia dinos">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Notícias sobre: " subscribe="noticia/+/politica:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Notícias sobre: " subscribe="+/brasil#:speech"></dcc-lively-talk>

<dcc-lively-talk speech="Notícias sobre: " subscribe="noticia/#:speech"></dcc-lively-talk>
~~~

> Imagem

![Tarefa 1](images/tarefa1.png)

## Tarefa 2 - Web Components e RSS

> Código

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="ciencias/rss:next" topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="design/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-button label="Ciências Próxima" topic="ciencias/rss">
</dcc-button>
<dcc-button label="Design Próxima" topic="design/rss">
</dcc-button>

<dcc-lively-talk subscribe="rss/design:speech"></dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="aggregate/science:speech">
</dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"  subscribe="rss/science:speech">
</dcc-lively-talk>
~~~

> Imagem

![Tarefa 2](images/tarefa2.png)

## Tarefa 3 - Painéis de Mensagens com Timer

> Código

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
<dcc-timer interval="3000" topic="nextAgregado/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
~~~

> Imagem

![Tarefa 3](images/tarefa3.png)

