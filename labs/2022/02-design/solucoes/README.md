# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
└── images     <- arquivos de imagens usadas no documento
~~~

# Aluno
* `Richardson Guedes Pinheiro`

## Tarefa 1 - Dados para Treinamento e Recomendação

> Coloque a lista de campos como itens e subitens, conforme exemplo a seguir:
>
### Treinamento
* Entidade Produto
  * campo Descricao
  * campo Preco minimo ofertado
  * campo Preco maximo ofertado
  * campo Quantidade
  * campo Classificacao
  * campo regiao
    
* Entidade Vendedor
  * campo Nome
  * campo descricao
  * campo valor 
  * campo regiao
  

### Recomendação
  * Entidade Produto
  * campo Quantidade
  * campo regiao
  * campo Quantidade

* Entidade Vendedor
  * campo Nome
  * campo descricao
  * campo valor recomendado
  * campo Quantidade recomendado

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática

> Escreva duas breves descrições, conforme exemplos a seguir:
>
### Composição Dinâmica
> Mensagens trocadas entre os usuarios deve ser modelada de forma dinamica, como a consulta de diferentes produtos no barramento
### Composição Estática
> As mensagens enviada pelo barramento como o preco dos produtos ofertados que ja esta precificado.

## Tarefa 3 - Composição para Treinamento e Recomendação

> Coloque a imagem PNG do diagrama, conforme exemplo a seguir:
>
![Diagrama Eventos](exercicio-comp.png)
