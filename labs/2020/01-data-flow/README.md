# Data Flow, Componentes e Regras de Associação
*Lab de Componentização e Reúso de Software 01/08/2020*

# Tarefa Foodmart

## Zombie Health

Estude o exemplo construído Orange no diretório:
* [orange/zombie/](orange/zombie/)

Especificamente o arquivo `zombie-health-ml-association.ows` que carrega o arquivo `zombie-health-association.csv` (pode ser necessário reconfigurar o caminho de entrada do arquivo no Orange).

Este exemplo descobre regras de associação entre sintomas e doenças.

## Tarefa

Acesse o diretório [orange/foodmart/](orange/foodmart/), que relaciona compras realizadas por clientes sobre produtos, e descubra regras de associação entre produtos. Como estes dados poderiam ser explorados para recomendar produtos para clientes?

# Tarefa Google Play Store

Acesse o diretório [orange/google-playstore](orange/google-playstore) e elabore algum projeto que apresente algum gráfico que permita uma análise interessante dos dados.

# Tarefa Projeto de Composição para Recomendação

Elabore um diagrama compondo componentes que seja capaz de executar o seguinte cenário:
1. O cliente escolhe um produto para compra.
2. O sistema encontra os produtos mais prováveis para recomendar, baseado em regras de associação.
3. O sistema recomenda (ranqueados) três outros produtos para o cliente.

Nesta tarefa, basta o diagrama de componentes, não é necessário detalhar as interfaces.

# Tarefa Projeto de Composição de Pedido

Elabore um diagrama de composição de componentes que execute o fluxo de execução que vai desde o pedido de um produto até a sua entrega para o cliente.

Nesta tarefa, você deve detalhar as interfaces em um diagrama UML a parte.