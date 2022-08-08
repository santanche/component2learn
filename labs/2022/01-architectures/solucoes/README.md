# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `João Paulo Cardoso`

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Guerra entre Rússia e Ucrânia">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Nova alta no preço da gasolina">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Dinossauro aparece no Brasil">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Dinossauro estabelece Bahia como novo habitat">
</dcc-button>


<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Ouvi notícias sobre: " subscribe="noticia/#/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Ouvi notícias sobre: " subscribe="#/brasil/#:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="Ouvi notícias sobre: " subscribe="+/+/dinos:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](images/Exercicio1.png)

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science/rss:next" topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-button label="Ciências Próxima" topic="next/science/rss">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/design/rss">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="News: " subscribe="rss/design:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](images/Exercicio2.png)

## Tarefa 3 - Painéis de Mensagens com Timer


~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/science/rss:next" topic="rss/science">
</dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design/rss:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/all" quantity="3" subscribe="rss/+">
</dcc-aggregator>

<dcc-button label="Inicia" topic="start/feed"> </dcc-button>

<dcc-timer cycles="10" interval="1000" topic="next/science/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-timer cycles="10" interval="2000" topic="next/design/rss" subscribe="start/feed:start">
</dcc-timer>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="News: " subscribe="aggregate/all:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](images/Exercicio3.png)

## Tarefa 4 - Web Components Dataflow

![Diagrama Venda](images/Exercicio4.png)
>
> Realizado em dupla com Fábio Domingues. Utilizamos dados padronizados para obtermos componentes intercambiáveis.
