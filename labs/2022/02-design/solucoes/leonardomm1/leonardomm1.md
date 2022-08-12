# Aluno
* Leonardo Machado Moscardo. RA: EX161698

## Tarefa 1 - Dados para Treinamento e Recomendação
### Treinamento
* Produto
  * valor
  * nome
  * descrição
  * categoria
  * quantidade
  * avaliação
  * marca
  * modelo
  * quantidade de devoluções
* Vendedor
  * localização
  * avaliação
  * quantidade de venda
  * tipos de produto
  * quantidade de devoluções
* Comprador
  * categoria do produto comprado
  * quantidade
  * vendedores comprados
  * regiao que mora
  * maiores valores de compra
  * genero
  * pagina de item aberto
  * produtos devolvidos
  * idade

### Recomendação
* Produto
  * valor
  * quantidade vendida
  * categorias
  * descrição
  * avaliação
* Vendedor
  * localização
  * avaliação
  * vendas
  * devoluções
  * vendedores similares
  * destaque de pagamento
* Comprador
  * filtros utilizados
  * avaliação
  * localização
  * genero
  * compras realizadas

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática
### Composição Dinâmica
* Dinâmica seria toda a inserção de dados, métricas utilizadas na plataforma, dados coletados na plataforma citados anteriormente. Definindo assim dinâmicamente o que é mais valioso naquele momento.
### Composição Estática
* Estático seria toda a anáilise feita com os dados dinâmicos. Podem existir novas analises com o decorrer do tempo, mas para fim de históricos e comparações de decisões os pontos de resultados devem ser iguais.

## Tarefa 3 - Composição para Treinamento e Recomendação
![Diagrama Eventos](images/recomendation-composition.png)

