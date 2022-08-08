# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `<nome completo>`

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

> Acrescente uma imagem da composição em funcionamento, como o exemplo a seguir:

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

## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.

## Tarefa 4 - Web Components Dataflow
> Imagem (`PNG`) do diagrama de componentes (veja exemplo abaixo).
![Diagrama Venda](images/web-composition.png)
>
> Escreva aqui o parágrafo de breve discussão.
