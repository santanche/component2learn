# Data Flow e Componentes
*Lab de Componentização e Reúso de Software 09/08/2025*

## Zombie Meals

Estude o workflow exemplo construído em Orange no arquivo `zombie-meals-01.ows` que carrega o arquivo `zombie-meals.csv`.

O Zombie Meals é um arquivo que mostra uma lista de comidas prontas vendidas em supermercados para zumbis, sua composição e a média da nota dada pelos zumbis para a refeição (rating).

Esquema da tabela:
* name: name of the meal
* mfr: Manufacturer
* type: cold or hot
* calories: calories per serving
* protein: grams of protein
* fat: grams of fat
* sodium: milligrams of sodium
* fiber: grams of dietary fiber
* carbo: grams of complex carbohydrates
* sugars: grams of sugars
* potass: milligrams of potassium
* vitamins: vitamins and minerals - 0, 25, or 100, indicating the typical percentage of FDA recommended
* shelf: display shelf (1, 2, or 3, counting from the floor)
* weight: weight in ounces of one serving
* cuts: number of pieces in one serving
* rating: a rating of the meals

# Tarefa 1

Com o que você conhece do Orange, prepare um workflow ilustrando algum tipo de análise que pode ser interessante para recomendação.

# Tarefa 2 - Workflow para Recomendação de Zombie Meals

Considere o segundo workflow `zombie-meals-02.ows` que usa o recurso de `Feature Constructor` para criar uma coluna `recommended` que indica se o produto será recomendado (`Y`es ou `N`o). Produtos são recomendados se o seu rating for maior ou igual a 50. Foi usado o seguinte tipo de expressão no `Feature Constructor`:

~~~
"y" if rating >= 50 else "n"
~~~

Isso pode ser interpretado da seguinte maneira:
~~~
Se rating >= 50:
  assume “y”
Caso contrário
  assume “n”
~~~

Você pode montar a sua própria expressão substituindo os valores (“y” e “n”) e a expressão (`rating` >= 50).

Faça modificações no workflow com o intuito de explorar diferentes possibilidades de customização de componentes e de substituição de componentes. As seguintes customizações são recomendadas:

* modificar o método de predição - atualmente é o Support Vector Machine (SVN)
  * experimente outros métodos disponíveis na aba Model, como Tree e Logistic Regression
  * analise o desempenho a partir dos valores de F1, Precision e Recall (valores maiores são melhores)
* mude o critério de recomendação mudando a expressão
* modifique as features que você vai analisar para recomendação (quanto menos melhor)

