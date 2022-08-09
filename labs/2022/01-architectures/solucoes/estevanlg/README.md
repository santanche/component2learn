# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* Estevan Luis Gregori

## Tarefa 1 - Web Components e Tópicos

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Crise política no Iraque">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Atual cenário torna terceira via praticamente impossível">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="brazilian dinosaurs">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="nova especia de dinissaura encontrada na Bahia">
</dcc-button>


  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="+/+/politica:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="+/brasil/#:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="I heard about: " subscribe="noticia/#:speech">
  </dcc-lively-talk>
~~~

![Composition Screenshot](images/Tarefa 1.png)

## Tarefa 2 - Web Components e RSS

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/ciencia/rss:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design/rss:next" topic="rss/design">
</dcc-rss>


<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>


<dcc-button label="Ciências Próxima" topic="next/ciencia/rss">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/design/rss">
</dcc-button>


  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="I heard about: " subscribe="rss/design:speech">
  </dcc-lively-talk>
~~~

![Composition Screenshot](images/Tarefa 2.png)

## Tarefa 3 - Painéis de Mensagens com Timer

~~~html
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/ciencia:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/design:next" topic="rss/design">
</dcc-rss>



<dcc-aggregator topic="aggregate/news" quantity="3" subscribe="rss/#">
</dcc-aggregator>



<dcc-button label="Inicia" topic="start/timer">
</dcc-button>

<dcc-timer cycles="9" interval="1000" topic="next/ciencia" subscribe="start/timer:start">
</dcc-timer>

<dcc-timer cycles="9" interval="2000" topic="next/design" subscribe="start/timer:start">
</dcc-timer>


  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="News about science: " subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News about design: " subscribe="rss/design:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="News: " subscribe="aggregate/news:speech">
  </dcc-lively-talk>
~~~

![Composition Screenshot](images/Tarefa 3.png)

## Tarefa 4 - Web Components Dataflow

![Composition Screenshot](images/Tarefa 4.png)
>
O componente DataZombies é responsável por buscar as informações filtradas na base de dados de acordo com os parâmetros que ele recebe e que serão disponibilizadas em um 
barramento para que outro componente, no caso o Gráfico, possa utilizá-los para gerar um gráfico.
