# Estilo Arquitetural I - Mensagens, Eventos e Barramento
# Renato Druzian RA: ex161676
*Lab de Componentização e Reúso de Software 30/07/2022*

## Tarefa 3 - Painéis de Mensagens com Timer

Crie dois componentes RSS usando o `<dcc-rss>` que assinem os canais:
  * canal 1 (ciência): https://www.wired.com/category/science/feed
  * canal 2 (design): https://www.wired.com/category/design/feed

Crie um agregador de mensagens usando o `<dcc-aggregator>` para notícias tanto de ciência quanto de design em grupos de três.

Crie três personagens (`dino`, `doutor` e `enfermeira`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) RSSs ou agregados, conforme os seguintes critérios:
* `doutor` - mostra notícias de ciências a cada 1.000 milisegundos;
* `enfermeira` - mostra notícias de design a cada 2.000 milisegundos;
* `dino` - mostra notícias agregadas a cada 2.000 milisegundos.

Apresente um botão com o rótulo `Inicia` que inicie o processo de mostrar notícias com timer.

## Código desenvolvido

`
<dcc-rss 
  source="https://www.wired.com/category/science/feed" 
  subscribe="next/rss/science:next" 
  topic="rss/science">
</dcc-rss>

<dcc-rss 
  source="https://www.wired.com/category/design/feed" 
  subscribe="next/rss/design:next" 
  topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/rss" quantity="3" subscribe="rss/science"></dcc-aggregator>

<dcc-aggregator topic="aggregate/rss" quantity="3" subscribe="rss/design"></dcc-aggregator>

<dcc-lively-talk 
    character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
    speech="Compact: " 
    subscribe="aggregate/rss:speech">
</dcc-lively-talk>

<dcc-lively-talk 
    character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
    speech="Noticias: " 
    subscribe="rss/science:speech">
    <dcc-timer 
      cycles="10" 
      interval="2000" 
      topic="next/rss/science"
      subscribe="start/timer:start">
    </dcc-timer>
</dcc-lively-talk>

<dcc-lively-talk 
    speech="Eu ouvi sobre: " 
    subscribe="rss/design:speech">
    <dcc-timer 
      cycles="10" 
      interval="1000" 
      topic="next/rss/design"
      subscribe="start/timer:start">
    </dcc-timer>
</dcc-lively-talk>

<dcc-button label="Inicia" topic="start/timer"></dcc-button>
`

Para essa tarefa, foi criado o botão pedido no enunciado que é:
* `Inicia`

Com os botôes que criados foram adicioando so tópicos: 
* `rss/science`
* `rss/design`
* `aggregate/rss`

Após isso criamos as caixas de diálogo, onde iram aparecer o conteúdo do RSS, abaixo vemos as ligações de cada caixa de diálogo, \
que será um personagem para ficar de identificar na tela:
* `doutor` - `aggregate/rss`
* `enfermeira` - `rss/science`
* `dino` - `rss/design`

O botão criado, inicia o processo de Timer e cada tempo especificado é atualizado cada diálogo