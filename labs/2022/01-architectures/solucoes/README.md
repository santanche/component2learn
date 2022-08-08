# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* Lucas Lopes Moreira

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" subscribe="noticia/+/politica:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" subscribe="+/brasil/#:speech"></dcc-lively-talk>

<dcc-lively-talk subscribe="noticia/+/+:speech"></dcc-lively-talk>

<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Guerra Economica"></dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Eleiçoes 2022"></dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Museu de Dinossauros Brasileiros"></dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Dinossauro do Acaraje faz sucesso"></dcc-button>
~~~

![solução lab 1 componentes at1](https://user-images.githubusercontent.com/92058020/183501078-f6b57927-87e9-480f-a51d-b5fea4dee1e6.PNG)

![Composition Screenshot](images/dcc-composition.png)

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed"subscribe="science/next/rss:next" topic="rss/science"></dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="design/next/rss:next" topic="rss/design"></dcc-rss>

<dcc-button label="Ciências Próxima" topic="science/next/rss"></dcc-button>

<dcc-button label="Design Próxima" topic="design/next/rss"></dcc-button>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science"></dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News - Compact: " subscribe="aggregate/science:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech"></dcc-lively-talk>

<dcc-lively-talk speech="News: " subscribe="rss/design:speech"></dcc-lively-talk>

~~~

![solução lab 1 componentes at2](https://user-images.githubusercontent.com/92058020/183501101-5c5823ef-be60-4a0a-ad8e-0dd638ca1021.PNG)


## Tarefa 3 - Painéis de Mensagens com Timer
~~~html

<dcc-button label="Inicia" topic="start/feed"></dcc-button>

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="science/next/rss:next" topic="rss/science"></dcc-rss>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News: " subscribe="rss/science:speech"></dcc-lively-talk>

<dcc-timer cycles="10" interval="1000" topic="science/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="design/next/rss:next" topic="rss/design"></dcc-rss>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/design:speech"></dcc-lively-talk>

<dcc-timer cycles="10" interval="2000" topic="design/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-aggregator topic="aggregate" quantity="3" subscribe="rss/#"></dcc-aggregator>

<dcc-timer cycles="10" interval="2000" topic="aggregatedtimer/next/rss" subscribe="start/feed:start"></dcc-timer>

<dcc-lively-talk speech="News - Compact: " subscribe="aggregate:speech"></dcc-lively-talk>

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="aggregatedtimer/next/rss:next" topic="rss/science"></dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="aggregatedtimer/next/rss:next" topic="rss/design"></dcc-rss>

~~~

![solução lab 1 componentes at3](https://user-images.githubusercontent.com/92058020/183501125-a4d8e713-8b30-43fe-8fd1-3234af31d05c.PNG)


## Tarefa 4 - Web Components Dataflow
![solução lab 1 componentes](https://user-images.githubusercontent.com/92058020/183490847-9383082c-a3ac-4fdd-8337-5b7c4a137528.PNG)

> O primeiro componente envia os dados completos dos zombies
> Zombies: Genero = any, Height=any, Weight=any
> Esse dados entao são filtrados(sexo feminino) e organizados(por altura e peso) respectivamente os transformando em
> Zombies: Genero = Female, Height = Sorted, Weight = Sorted
> Esses dados entao chegam ao componente de View que ira Apresentar um grafico com a distribuição Height X Weight   
