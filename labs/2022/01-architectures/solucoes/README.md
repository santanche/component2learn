# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* Nicole Bertolo Rodrigues

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button id="power" label="Mundo Política" topic="noticia/mundo/politica" message="Russia invade Ucrania"></dcc-button>
<dcc-button id="power" label="Brasil Política" topic="noticia/brasil/politica" message="Dolar atinge recorde"></dcc-button>
<dcc-button id="power" label="Brasil Dinos" topic="noticia/brasil/dinos" message="Mercado aceita criptomoeda"></dcc-button>
<dcc-button id="power" label="Bahia Dinos" topic="noticia/bahia/dinos" message="Acarajé é premiado"></dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Notícias Política: " subscribe="noticia/+/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Notícias Brasil:  " subscribe="noticia/brasil/+:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="Notícias: " subscribe="noticia/+/+:speech">
</dcc-lively-talk>
~~~

![Composition Screenshot](images/atividade1.png)

## Tarefa 2 - Web Components e RSS

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next-science/rss:next" topic="rss/science"></dcc-rss>
<dcc-rss source="https://www.wired.com/category/security/feed" subscribe="next-security/rss:next" topic="rss/security"></dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science"></dcc-aggregator>

<dcc-button label="Ciência" topic="next-science/rss"></dcc-button>
<dcc-button label="Segurança" topic="next-security/rss"></dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Notícias de ciências" subscribe="aggregate/science:speech"></dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Ciência" subscribe="rss/science:speech"></dcc-lively-talk>

<dcc-lively-talk speech="Segurança" subscribe="rss/security:speech"></dcc-lively-talk>

![Composition Screenshot](images/atividade2.png)

## Tarefa 3 - Painéis de Mensagens com Timer
<dcc-rss source="https://www.wired.com/category/science/feed" topic="science" subscribe="next-science:next"></dcc-rss>
<dcc-rss source="https://www.wired.com/category/design/feed"  topic="design" subscribe="next-design:next"></dcc-rss>

<dcc-aggregator topic="aggregate/all" quantity="3" subscribe="science"></dcc-aggregator>

<dcc-timer cycles="10" interval="1000" topic="next-science" subscribe="timer:start"></dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="next-design" subscribe="timer:start"></dcc-timer>
<dcc-timer cycles="10" interval="2000" topic="#" subscribe="timer:start"></dcc-timer>

<dcc-button label="Start cycle" topic="timer"></dcc-button>

<dcc-lively-talk speech="science" character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
      subscribe="aggregate/all:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="design" character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"
      subscribe="science:speech">
</dcc-lively-talk>
<dcc-lively-talk speech="Design and Science" subscribe="design:speech"></dcc-lively-talk>

## Tarefa 4 - Web Components Dataflow
![Diagrama Venda](images/dataflow.drawio.png)
> Por Nicole e Júlia
> Inicialmente um fluxo de dados é inputado no componente "Data Flow Input", nele todos os dados são iterados de forma interna no sistema, sem que o usuário tenha ciência de todos os elementos que estão inseridos.
> Após passar pelo componente de entrada, um segundo componente é acionado com a finalidade de filtrar elementos que contenha apenas zombies do gênero femenino, passando o fluxo de dados para o próximo "step"
> Ao chegar no componente de ordenação, o fluxo de dados começa a ser iterado novamente e sendo ordenado de acordo com seu peso e altura, seguindo a prioridade respectivamente.
> Por fim, o fluxo de dados é enviado para um componente de exibição onde os dados serão traduzidos para um gráfico que seja visualmente agradável de interpretar para o usuário
