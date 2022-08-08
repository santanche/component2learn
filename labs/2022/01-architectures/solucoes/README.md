# Estilo Arquitetural I - Mensagens, Eventos e Barramento
*Lab de Componentização e Reúso de Software 30/07/2022*

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

# Estilo Arquitetural II - Dataflow

Considerando que você vai reproduzir este processo do Orange em Web Components:

![Orange Workflow](images/orange-workflow.png)

## Tarefa 4 - Web Components Dataflow

Defina quais os componentes envolvidos na tarefa e que informações eles devem trocar entre si. Os componentes podem ser representados por retângulo com um título e breve descrição. As informações devem ser representadas por mensagens, em que são listados os títulos e breve descrição dos campos.

Sugere-se que siga o [Modelo de Apresentação](https://docs.google.com/presentation/d/164yR2vLB9KOLCgsDWjbNun7A87emRfy6VI6DGEVX0J4/edit?usp=sharing).

Lembre que os componentes são intercambiáveis e a interface deve suportar isso.

Escreva uma breve discussão sobre como você organizou a interface para que os componentes sejam intercambiáveis (um parágrafo).
