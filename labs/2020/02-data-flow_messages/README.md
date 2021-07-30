# Data Flow e Componentes (parte 2)
*Lab de Componentização e Reúso de Software 08/08/2020*

No diretório [notebooks/data-flow/](notebooks/data-flow/) você encontrará duas pastas.

Na pasta [s01interfaces](notebooks/data-flow/s01interfaces/) está um notebook de explicação sobre como combinar múltiplas interfaces menores em uma maior. Ele tem a função de revisar o assunto de interfaces. Essa estratégia é usada aqui para componentes.

No diretório [s02catalog](notebooks/data-flow/s02catalog/) estão três notebooks:
* `components-01-catalog.ipynb` - Apresenta o catálogo de componentes, o modo de conectá-los (visto pela perspectiva blackbox - externa) para montar uma composição. Ele apresenta seis tarefas que devem ser resolvidas.
* `components-02-whitebox.ipynb` - Visão interna dos componentes (whitebox).
* `components-03-statistics.ipynb` - Exemplo adicional sobre o componente `Statistics` para estudo (opcional).

A entrega desse lab será formada pelo notebook `components-01-catalog.ipynb` com as seis tarefas resolvidas. Os notebooks `multiplas-interfaces.ipynb` (revisão) e `components-02-whitebox.ipynb` não têm tarefas associadas e o notebook `components-03-statistics.ipynb` tem exercícios opcionais que não precisam ser entregues.

# Componentes e Mensagens

Esse lab será voltado a componentes na Web usando a implementação do Digital Content Component (DCC).

Utilize o ambiente [DCC Playground](https://santanche.github.io/component2learn/labs/02-data-flow_messages/notebooks/messages/dccs/playground/) testar a sua resposta, em seguida, copie e cole a resposta na respectiva resposta.

Utilize o ambiente da seguinte maneira:
1. Escreva o código em HTML no painel `Editor`
2. Clique no botão `Render` para que ele execute o código
3. Veja o resultado da execução no painel `Result`
4. Mensagens enviadas por componentes podem ser vistas no painel `Messages`

Para esta atividade, há uma referência compacta em que são selecionados os componentes usados, bem como padrões de mensagens: [Referência compacta](dcc-reference.md).
Para consultar a sintaxe e ver exemplos dos DCCs veja a [Referência dos DCCS](https://ds4h.org/harena-space/src/adonisjs/public/dccs/).

## Tarefa Web Components 1

Crie quatro botões com rótulos `Mundo`, `Brasil P`, `Brasil E` e `Bahia` que, ao serem clicados, publiquem notícias nos seguintes tópicos (conteúdo a sua escolha):
* `noticia/mundo/politica`
* `noticia/brasil/politica`
* `noticia/brasil/esporte`
* `noticia/bahia/esporte`

O segundo nível do tópico indica a região da notícia e o terceiro o assunto. Associe a cada tópico o texto de uma mensagem de sua criação.

Crie três personagens (`doctor`, `nurse` e `patient`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) notícias publicadas pelos botões, conforme os seguintes critérios:
* `doctor` - mostra notícias sobre política (independentemente de região);
* `nurse` - mostra notícias cuja região é o Brasil (independentemente do assunto);
* `patient` - mostra todas as notícias.

## Tarefa Web Components 2

Crie dois componentes RSS usando o `<dcc-rss>` que assinem os canais:
  * canal 1 (ciência): https://www.wired.com/category/science/feed
  * canal 2 (design): https://www.wired.com/category/design/feed

Crie um agregador de mensagens usando o `<dcc-aggregator>` para notícias de ciência.

Crie três personagens (`doctor`, `nurse` e `patient`) usando o `<dcc-lively-talk>`. Cada um deles deve mostrar seletivamente (em seu balão) RSSs ou agregados, conforme os seguintes critérios:
* `doctor` - mostra notícias agregadas de ciências;
* `nurse` - mostra notícias de ciências;
* `patient` - mostra notícias de design.