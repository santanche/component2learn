# Modelo para Apresentação do Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* Letícia Rüttimann

## Tarefa 1 - Web Components e Tópicos

> Escreva aqui o código da sua composição de componentes Web, como mostra o exemplo a seguir:
~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Aqui notícias sobre mundo política">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Aqui notícias sobre Brasil política">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Aqui notícias sobre Brasil Dinos">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Aqui notícias sobre Bahia Dinos">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="#/politica:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="noticia/brasil/#:speech">
  </dcc-lively-talk>

<dcc-lively-talk speech="I heard about: " subscribe="noticia/#:speech">
  </dcc-lively-talk>
~~~

> Acrescente uma imagem da composição em funcionamento, como o exemplo a seguir:

<img width="695" alt="MundoPolitica" src="https://user-images.githubusercontent.com/88326093/130333599-c9f9903a-510f-44de-9760-cd681ac49b57.png">

## Tarefa 2 - Web Components e RSS
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.
~~~html

<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss:next" topic="rss/science">
</dcc-rss>

 <dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rssd:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>


<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="I heard about: " subscribe="rss/design:speech">
  </dcc-lively-talk>

<dcc-button label="Next Science" topic="next/rss">
</dcc-button>

<dcc-button label="Next Design" topic="next/rssd">
</dcc-button>
~~~

<img width="729" alt="tarefa2 - nextDesign" src="https://user-images.githubusercontent.com/88326093/130334016-84248932-6326-44ab-9d69-ba1359c468d7.png">
<img width="718" alt="tarefa2 - Science" src="https://user-images.githubusercontent.com/88326093/130334018-73dff1a1-90a1-4537-9a27-c34e2a8c2c04.png">


## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.
