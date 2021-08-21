# Modelo para Apresentação do Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

~~~
└── README.md  <- arquivo apresentando a tarefa
~~~

# Aluno
* `Renato Fernandes reis`

## Tarefa 1 - Web Components e Tópicos

> Escreva aqui o código da sua composição de componentes Web, como mostra o exemplo a seguir:

~~~html
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="dengue symptoms">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="coronavirus vaccine">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="brazilian dinosaurs">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="brazilian dinosaurs">
</dcc-button>

  <dcc-lively-talk character="https://renareis-content.s3.amazonaws.com/dino.png" speech="I heard about: " subscribe="noticia/#:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://renareis-content.s3.amazonaws.com/doctor.png" speech="I heard about: " subscribe="#/politica:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://renareis-content.s3.amazonaws.com/nurse.png" speech="I heard about: " subscribe="noticia/brasil/+:speech">
  </dcc-lively-talk>
~~~

> ![Tarefa 1](images/tarefa1.png)

## Tarefa 2 - Web Components e RSS
> Escreva aqui o código da sua composição de componentes Web, seguindo a mesma abordagem da tarefa anterior.

## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web, seguindo a mesma abordagem da tarefa anterior.

