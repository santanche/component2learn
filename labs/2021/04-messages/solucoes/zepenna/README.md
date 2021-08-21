# Modelo para Apresentação do Lab04 - Componentes, Mensagens, Eventos e Barramento

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `<nome completo>`

## Tarefa 1 - Web Components e Tópicos

> Escreva aqui o código da sua composição de componentes Web, como mostra o exemplo a seguir:

~~~html
<dcc-button 
       label="Mundo Política" 
       topic="noticia/mundo/politica" 
       message="Situação no Afeganistão fica cada vez mais complicada">
</dcc-button>

<dcc-button 
       label="Brasil Política" 
       topic="noticia/brasil/politica" 
       message="CPI do Covid ouvira terá Horário com depoente">
</dcc-button>

<dcc-button 
       label="Brasil Dinos" 
       topic="noticia/brasil/dinos" 
       message="Se interessa por arqueologia? Saiba mais sobre curso voltados à area no link a seguir: http://dino.brasil.br">
</dcc-button>

<dcc-button 
       label="Bahia Dinos" 
       topic="noticia/bahia/dinos" 
       message="Fóssil de brontossauro encontrado em Salvador!">
</dcc-button>

<dcc-lively-talk 
     character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
     subscribe="+/+/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk 
     character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
     subscribe="+/brasil/#:speech">
</dcc-lively-talk>

<dcc-lively-talk
     subscribe="#:speech">
</dcc-lively-talk>
~~~

## Tela do DCC Playground - Tarefa 1

![Composition Screenshot](images/tarefa-1.png)

## Tarefa 2 - Web Components e RSS
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.

## Tarefa 3 - Painéis de Mensagens com Timer
> Escreva aqui o código da sua composição de componentes Web seguida de uma imagem que captura o funcionamento, como foi feito na tarefa anterior.
