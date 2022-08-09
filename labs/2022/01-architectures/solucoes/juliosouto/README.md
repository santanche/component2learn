# Lab01 - Estilos Arquiteturais

# Aluno
* `Julio Cesar Souto Filho`

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-lively-talk speech="" subscribe="noticia/#/politica:speech"  character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png">
</dcc-lively-talk>

<dcc-lively-talk speech="" subscribe="noticia/brasil/#:speech"  character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png">
</dcc-lively-talk>

<dcc-lively-talk speech="" subscribe="noticia/#/#:speech">
</dcc-lively-talk>

<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Mundo política">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Brasil política">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Brasil dinos">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Bahia dinos">
</dcc-button>
~~~

![Composition Screenshot](images/tarefa_1.png)


## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-button label="Ciências Próxima" topic="next/science">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/design">
</dcc-button>

<dcc-lively-talk speech="News :" subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](images/tarefa_2.png)


## Tarefa 3 - Painéis de Mensagens com Timer

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="nextScience/rss:next" topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="nextDesign/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/news" quantity="3" subscribe="rss/#">
</dcc-aggregator>

<dcc-lively-talk subscribe="aggregate/news:speech"></dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="rss/science:speech"></dcc-lively-talk>
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"  subscribe="rss/design:speech"></dcc-lively-talk>

<dcc-timer interval="1000" topic="nextScience/rss" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer interval="2000" topic="nextDesign/rss" subscribe="start/feed:start">
</dcc-timer>
<dcc-timer interval="2000" topic="nextAgregated/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
~~~

![Composition Screenshot](images/tarefa_3.png)


## Tarefa 4 - Web Components Dataflow

![Diagrama de Componentes](images/web_components_dataflow.png)
>
> A fim de manter a intercambiabilidade entre os componentes, foi definido um mesmo padrão de entrada e saída de dados para cada um deles. Isso significa que ao adicionar ou remover componentes, o gráfico ainda sim poderá ser plotado, desde que os novos componentes também possuam o mesmo padrão de entrada e saída de dados.
