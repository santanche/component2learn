# Componentes, Mensagens, Eventos e Barramento
*Lab de Componentização e Reúso de Software 21/08/2021*

# FELIPE STARLING MEDEIROS (EX150367)

Esse lab será voltado a componentes na Web usando a implementação do Digital Content Component (DCC).

Utilize o ambiente [DCC Playground](https://harena-lab.github.io/harena-docs/js/harena/dccs/playground/) testar a sua resposta, em seguida, copie e cole a resposta na respectiva resposta.

Utilize o ambiente da seguinte maneira:
1. Escreva o código em HTML no painel `Editor`
2. Clique no botão `Render` para que ele execute o código
3. Veja o resultado da execução no painel `Result`
4. Mensagens enviadas por componentes podem ser vistas no painel `Messages`

Para esta atividade, há um [Tutorial de DCCs](https://harena-lab.github.io/harena-docs/dccs/tutorial/) e uma [Referência](https://harena-lab.github.io/harena-docs/dccs/reference/) disponíveis para a atividade.

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

## Solução 1:
---
```
<dcc-button label="Mundo Política" topic="noticia/mundo/politica" message="mostra notícias sobre política do mundo">
</dcc-button>

<dcc-button label="Brasil Política" topic="noticia/brasil/politica" message="mostra notícias sobre política no Brasil">
</dcc-button>

<dcc-button label="Brasil Dinos" topic="noticia/brasil/dinos" message="mostra notícias sobre dinos brasileiros">
</dcc-button>

<dcc-button label="Bahia Dinos" topic="noticia/bahia/dinos" message="mostra notícias sobre dinos baianos">
</dcc-button>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="I heard about: " subscribe="noticia/#/politica:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="I heard about: " subscribe="noticia/brasil#:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="I heard about: " subscribe="noticia#:speech">
</dcc-lively-talk>
```
## Imagem Solução 1
![Imagem_Solucao_1](https://github.com/f-starling/component2learn/blob/master/labs/2021/04-messages/solucoes/f-starling/images/questao1.PNG)

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

## Solução 2:
---
```
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/science" quantity="4" subscribe="rss/science">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="News: " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Compact: " subscribe="aggregate/science:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="I heard about: " subscribe="rss/design:speech">
</dcc-lively-talk>


<dcc-button label="Ciências Próxima" topic="next/rss/science">
</dcc-button>

<dcc-button label="Design Próxima" topic="next/rss/design">
</dcc-button>
```
## Imagem Solução 2
![Imagem_Solucao_2](https://github.com/f-starling/component2learn/blob/master/labs/2021/04-messages/solucoes/f-starling/images/questao2.PNG)

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

## Solução 3:
---
```
<dcc-rss source="https://www.wired.com/category/science/feed" subscribe="next/rss/science:next" topic="rss/science">
</dcc-rss>

<dcc-rss source="https://www.wired.com/category/design/feed" subscribe="next/rss/design:next" topic="rss/design">
</dcc-rss>

<dcc-aggregator topic="aggregate/#" quantity="3" subscribe="rss/#">
</dcc-aggregator>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png" speech="Notícias Design (2000ms): " subscribe="rss/design:speech">
</dcc-lively-talk>

<dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png" speech="Notícia Ciências (1000ms): " subscribe="rss/science:speech">
</dcc-lively-talk>

<dcc-lively-talk speech="Notícias Agregadas (2000ms):" subscribe="aggregate/#:speech">
</dcc-lively-talk>


<dcc-timer cycles="10" interval="1000" topic="next/rss/science" subscribe="start/feed:start">
</dcc-timer>

<dcc-timer cycles="10" interval="2000" topic="next/rss/design" subscribe="start/feed:start">
</dcc-timer>

<dcc-button label="Inicia" topic="start/feed">
</dcc-button>
```
## Imagem Solução 3
![Imagem_Solucao_3](https://github.com/f-starling/component2learn/blob/master/labs/2021/04-messages/solucoes/f-starling/images/questao3.PNG)

