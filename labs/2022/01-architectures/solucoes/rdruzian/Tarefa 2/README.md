# Estilo Arquitetural I - Mensagens, Eventos e Barramento
# Renato Druzian RA: ex161676
*Lab de Componentização e Reúso de Software 30/07/2022*

## Tarefa 2 - Web Components e RSS

Crie dois componentes RSS usando o `<dcc-rss>` que assinem os canais:
  * canal 1 (ciência): https://www.wired.com/category/science/feed
  * canal 2 (design): https://www.wired.com/category/design/feed

Crie um agregador de mensagens usando o `<dcc-aggregator>` para notícias de ciência em grupos de quatro.

Apresente um botão com o rótulo `Ciências Próxima` que carregue o próximo RSS de Ciência.

Apresente um botão com o rótulo `Design Próxima` que carregue o próximo RSS de Design.

Crie três personagens (`dino`, `doutor` e `enfermeira`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) RSSs ou agregados, conforme os seguintes critérios:
* `doutor` - mostra notícias agregadas de ciências;
* `enfermeira` - mostra notícias de ciências (sem agregar);
* `dino` - mostra notícias de design (sem agregar).

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

<dcc-aggregator 
    topic="aggregate/science" 
    quantity="3" 
    subscribe="rss/science">
</dcc-aggregator>

<dcc-lively-talk 
    haracter="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" 
    speech="Compact: " 
    subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk 
    character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" 
    speech="Noticias: " 
    subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk 
    speech="Eu ouvi sobre: " 
    subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-button label="Ciencia Próxima" topic="next/rss/science"></dcc-button>
<dcc-button label="Design Próxima" topic="next/rss/design"></dcc-button>
`

Para essa tarefa, foram criados os botões pedidos no enunciado que são:
* `Ciências Próxima`
* `Design Próxima`

Com os botôes que criados foram adicioando so tópicos: 
* `rss/science`
* `rss/design`
* `aggregate/science`

Após isso criamos as caixas de diálogo, onde iram aparecer o conteúdo do RSS, abaixo vemos as ligações de cada caixa de diálogo, \
que será um personagem para ficar de identificar na tela:
* `doutor` - `aggregate/science`
* `enfermeira` - `rss/science`
* `dino` - `rss/design`

Cada botão criado, faz a chamada para a próxima notícia do feed RSS através das chamadas `next/rss/science` e `next/rss/design`