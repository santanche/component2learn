# Aluno
* `André Fagundes Carvalho - ex150375`

# Tarefa 1 - Workflow para Recomendação de Zombie Meals

## Imagem do Projeto
* Comparação do SVM com outros métodos de predição:
	- SVM: F1: 0.859 | Precision: 0.893 | Recall 0.875
	![Workflow Orange](images/orange-zombie-meals-prediction.png)
	
	
	- Logistic Regression: F1: 0.940 | Precision: 0.950 | Recall 0.938
	![Workflow Orange](images/orange-zombie-meals-prediction_logisticRegression.png)
	
	
	- Tree: F1: 0.750 | Precision: 0.750 | Recall 0.750
	![Workflow Orange](images/orange-zombie-meals-prediction_tree.png)
	
	
	- KNN: F1: 0.767 | Precision: 0.850 | Recall 0.812
	![Workflow Orange](images/orange-zombie-meals-prediction_knn.png)
	
Comparando os métodos de predição testados, o Logistic Regression possui um melhor desempenho.
	
* Critério de recomendação alterado para a seguinte expressão: "y" if calories > 70 and protein > 2 else "n"

* Features para analise escolhidas foram "calories" e "protein"



## Arquivo do Projeto
Arquivo com o método de predição Logistic Regressio e as alterações de critério de recomendação e features atualizado
> [/orange/tarefa1_zombie-meals.ows](orange/).

# Tarefa 2 - Projeto de Composição para Venda e Recomendação

## Diagrama de Componentes

> Imagem (`PNG`) do diagrama de componentes (veja exemplo abaixo).
![Diagrama Venda](images/diagrama-componentes-venda.png)

## Texto Explicativo

> Texto explicando diagrama, conforme especificação do laboratório.
