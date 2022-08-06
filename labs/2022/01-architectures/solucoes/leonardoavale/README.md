**Apresentação do Lab01 - Estilos Arquiteturais**

**Aluno:** Leonardo Aguiar do Vale (RG: 6327882)

**Tarefa 1 - Web Components e Tópicos**

```
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="noticia/+/politica:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" subscribe="+/brasil/#:speech"></dcc-lively-talk>

<dcc-lively-talk subscribe="noticia/+/+:speech"></dcc-lively-talk>

<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="NoticiaMundoPolitica"></dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="NoticiaBrasilPolitica"></dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="NoticiaBrasilDinos"></dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="NoticiaBahiaDinos"></dcc-button>
```

Screenshot: https://github.com/leonardoavale/component2learn/blob/main/IN331-Atividade1/Tarefa1.png

**Tarefa 2 - Web Components e RSS**

```
<dcc-rss source="https://www.wired.com/category/science/feed"subscribe="science/next/rss:next" topic="rss/science"></dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="design/next/rss:next" topic="rss/design"></dcc-rss>

<dcc-button label="Ciências Próxima" topic="science/next/rss"></dcc-button>

<dcc-button label="Design Próxima" topic="design/next/rss"></dcc-button>

<dcc-aggregator topic="aggregate/science" quantity="3" subscribe="rss/science"></dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News - Compact: " subscribe="aggregate/science:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech"></dcc-lively-talk>

<dcc-lively-talk speech="News: " subscribe="rss/design:speech"></dcc-lively-talk>
```

![Screenshot: ](https://github.com/leonardoavale/component2learn/blob/main/IN331-Atividade1/Tarefa2.png)

**Tarefa 3 - Painéis de Mensagens com Timer**

```
<dcc-button label="Inicia" topic="start/feed"></dcc-button>

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="science/next/rss:next" topic="rss/science"></dcc-rss>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News: " subscribe="rss/science:speech"></dcc-lively-talk>

<dcc-timer cycles="10" interval="1000" topic="science/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="design/next/rss:next" topic="rss/design"></dcc-rss>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/design:speech"></dcc-lively-talk>

<dcc-timer cycles="10" interval="2000" topic="design/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-aggregator topic="aggregate" quantity="2" subscribe="rss/#"></dcc-aggregator>

<dcc-timer cycles="10" interval="2000" topic="aggregatedtimer/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="aggregatedtimer/next/rss:next" topic="rss/science"></dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="aggregatedtimer/next/rss:next" topic="rss/design"></dcc-rss>

<dcc-lively-talk speech="News - Compact: " subscribe="aggregate:speech"></dcc-lively-talk>
```

![Screenshot: ](https://github.com/leonardoavale/component2learn/blob/main/IN331-Atividade1/Tarefa3.png)

**Tarefa 4 - Web Components Dataflow**

![Screenshot: ](https://github.com/leonardoavale/component2learn/blob/main/IN331-Atividade1/Tarefa4.png)

Pensando no reuso da interface, propus uma dinâmica que abstraia a necessidade específica do plot do dataflow demonstrado.
Além disso, é importante que eles recebam e enviem mensagens seguindo sempre o mesmo schema.
A ideia é garantir que o requerente possa definir um campo a filtrar (que pode ser o gênero ou não) e as dimensões que quer receber para expor no plot.
Só após a definição dos campos é que existe a concretização ("instanciação").
