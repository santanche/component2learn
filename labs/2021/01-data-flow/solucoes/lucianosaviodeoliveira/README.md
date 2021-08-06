# Aluno
* `Luciano Sávio de Oliveira

# Tarefa 1 - Workflow para Recomendação de Zombie Meals

## Imagens do Projeto
> Alteração do método para Tree. Obs.: Aqui é possível verificar uma queda nos valores de F1, Precision e Recall em relação ao método SVM.
![Workflow Orange](lab01/images/zombie-meals-tree.png)

> Alteração do método para Logistic Regression. Obs.: Aqui é possível verificar um aumento nos valores de F1, Precision e Recall em relação ao método SVM.
![Workflow Orange](lab01/images/zombie-meals-logistic-regression.png)

> Alteração do critério de recomendação mudando a expressão. Obs.: Percebeu-se que ao alterar a expressão para "y" if rating >= 68 else "n", temos um aumento nos valores de F1, Precision e Recall em relação ao método SVM.
![Workflow Orange](lab01/images/zombie-meals-recomendacao.png)

> Alteração das features. Obs.: Percebeu-se que ao alterar as features para "y" if fat >= 50 else "n", temos um aumento nos valores de F1, Precision e Recall para método SVM.
![Workflow Orange](lab01/images/zombie-meals-features.png)

## Arquivos do Projeto
> Link para o arquivo em Orange "zombie-meals-tree":
[zombie-meals-tree](lab01/orange/zombie-meals-tree.ows).

> Link para o arquivo em Orange "zombie-meals-logistic-regression":
[zombie-meals-logistic-regression](lab01/orange/zombie-meals-logistic-regression.ows).

> Link para o arquivo em Orange "zombie-meals-recomendacao":
[zombie-meals-recomendacao](lab01/orange/zombie-meals-recomendacao.ows).

> Link para o arquivo em Orange "zombie-meals-features":
[zombie-meals-features](lab01/orange/zombie-meals-features.ows).

# Tarefa 2 - Projeto de Composição para Venda e Recomendação

## Diagrama de Componentes
![Fluxo Marketplace](lab01/images/fluxo-marketplace.png)

## Texto Explicativo
> Cliente escolhe a refeição.
> Sistema sugere refeições avaliadas pelo próprio cliente.
> Sistema sugere refeições avaliadas por outros clientes.
> Cliente realiza o pedido da refeição escolhida e realiza o pagamento.
> Sistema avisa vendedor.
> Vendedor prepara a refeição.
> Vendedor envia o pedido ao entregador.
> Vendedor fornece status de pedido ao sistema.
> Sistema fornece status do pedido ao cliente.
> Entregagor realiza a entrega do pedido ao cliente.
> Cliente avalia a refeição.
