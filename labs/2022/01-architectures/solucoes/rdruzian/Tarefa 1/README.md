# Estilo Arquitetural I - Mensagens, Eventos e Barramento
# Renato Druzian RA: ex161676
*Lab de Componentização e Reúso de Software 30/07/2022*

## Tarefa 1 - Web Components e Tópicos

Crie quatro botões com rótulos `Mundo Política`, `Brasil Política`, `Brasil Dinos` e `Bahia Dinos` que, ao serem clicados, publiquem notícias nos seguintes tópicos (mensagem com conteúdo a sua escolha):
* `noticia/mundo/politica`
* `noticia/brasil/politica`
* `noticia/brasil/dinos`
* `noticia/bahia/dinos`

O segundo nível do tópico indica a região da notícia e o terceiro o assunto. Associe a cada tópico o texto de uma mensagem de sua criação.

Crie três personagens (`dino`, `doutor` e `enfermeira`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) notícias publicadas pelos botões, conforme os seguintes critérios:
* `doutor` - mostra notícias sobre política (independentemente de região);
* `enfermeira` - mostra notícias cuja região é o Brasil (independentemente do assunto);
* `dino` - mostra todas as notícias.

## Código desenvolvido

`
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="Italia"></dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="Eleição 2022"></dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="Dinossauros brasileiros"></dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="Dinos baianos"></dcc-button>

  <dcc-lively-talk 
    character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
    speech="Eu ouvi sobre: " 
    subscribe="noticia/mundo/politica:speech">
  </dcc-lively-talk>

  <dcc-lively-talk 
    character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
    speech="Eu ouvi sobre: " 
    subscribe="noticia/brasil/politica:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="Eu ouvi sobre: " subscribe="#/dinos:speech"></dcc-lively-talk>
`
Para essa tarefa, foram criados os botões pedidos no enunciado que são:
* `Mundo Política`
* `Brasil Política`
* `Brasil Dinos`
* `Bahia Dinos`

Com os botôes que criados foram adicioando so tópicos: 
* `noticia/mundo/politica`
* `noticia/brasil/politica`
* `noticia/brasil/dinos`
* `noticia/bahia/dinos`

Após isso criamos as caixas de diálogo, onde iram aparecer o conteúdo do RSS, abaixo vemos as ligações de cada caixa de diálogo, \
que será um personagem para ficar de identificar na tela:
* `doutor` - `noticia/mundo/politica`
* `enfermeira` - `noticia/brasil/politica`
* `dino` - `#/dinos:speech`

O `#` siginifica que assina os tópicos `noticia/brasil/dinos` e `noticia/bahia/dinos`