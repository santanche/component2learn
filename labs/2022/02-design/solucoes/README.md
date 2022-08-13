# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `Fábio Fernandes Domingues`

## Tarefa 1 - Dados para Treinamento e Recomendação

> Coloque a lista de campos como itens e subitens, conforme exemplo a seguir:
>
### Treinamento
* Vendedor
  * id
  * Lista de vendas
  * Avaliação media dos produtos
 
 * Comprador
  * id
  * Compras
  * Ticket médio

* Produtos vendidos
  * Id
  * Categoria
  * estado de conservação
  * preço
  * avaliação
  * data de compra
  * marca (se houver)
  * tempo de uso

### Recomendação
* Lista Recomendação
  * id
  * data de criação
  * usuário comprador em potencial
  * produtos à venda
  * modelo usado
  
* Produtos
  * id
  * categoria
  * estado de conservação
  * preço
  * vendedor
  * marca (se houver)
  * tempo de uso

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática

> Escreva duas breves descrições, conforme exemplos a seguir:
>
### Composição Dinâmica
> Centralizando em um componente agregador teremos os dados de negócio e de usuário. 
> Eventos como a venda de produtos, inclusão de novos produtos, compra do produto por um cliente e criação de usuários.
>
> Visando o processamento de dados e o tempo/esforço que isso pode demandar o serviço o treinamento ocorrrá de forma dinâmica,
> assim o serviço do modelo de dados será avisado ao final do procesamento.
> 
> O serviço do modelo requisita por meio de um evento o serviço de recomendação, para que a plataforma seja atualizada e
> possibilte a visão de dados.

### Composição Estática
> A parte estática da composição é composta por 4 partes:
> Na estrutura definida temos a busca dos dados no serviço de treinamento, dessa forma dados estruturados são retornados a fim de manter
> os objetos definidos. Uma interface irá solicitar o treinamento do modelo, e assim ocorrerá o processo em backend, tendo como resultado
> o modelo de dados treinado, que será retornado para o solicitante. 

## Tarefa 3 - Composição para Treinamento e Recomendação

> Coloque a imagem PNG do diagrama, conforme exemplo a seguir:
>
![Diagrama Eventos](images/recomendation-composition.png)
