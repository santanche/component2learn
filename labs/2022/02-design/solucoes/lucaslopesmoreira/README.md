# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `<Lucas Lopes Moreira>`

## Tarefa 1 - Dados para Treinamento e Recomendação

> Coloque a lista de campos como itens e subitens, conforme exemplo a seguir:
>
### Treinamento
* Entidade Comprador
  * Endereco
  * Genero
  * Ultimas-Categorias
  * Valor-Medio-Compras
  
* Entidade Vendedor
  * Endereco
  * Avaliacao-Media
  * Quantidade-de-Vendas
  
* Entidade Produto
  * Nome
  * Descricao
  * Categoria
  * Qtd-Vendas
  * Avaliacao-Media

* Entidade Vendas
  * itens-Vendidos-Juntos
  * Categoria
  * Qtd
  * Frete

### Recomendação
* Entidade Recomendacao
  * Preco
  * Historico-categorias-pesquisada
  * Avaliação-Vendedor
  * 
* Entidade Y
  * campo A

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática

> Escreva duas breves descrições, conforme exemplos a seguir:
>
### Composição Dinâmica
> Quando a responsabilidade é o treinamento os componentes de entrada e alimentacao de dados devem ser dinamicos devido a modificacao constante dos dados
>e de algoritimo. Isso nos permite utilizar diferentes combinacoes de componentes sobre uma mesma interface.
### Composição Estática
> Essa composicao é ideal para o modulo de recomendacao,tendo que ele é o resultado do aprendizado, pois o resultado é fixo, sendo uma lista classificada. Isso tambem se prova real para os componentes pois assim que definido as entradas e saidas eles não poderam ser alterados.

## Tarefa 3 - Composição para Treinamento e Recomendação

> Coloque a imagem PNG do diagrama, conforme exemplo a seguir:
>
![Diagrama Eventos](images/recomendation-composition.png)
