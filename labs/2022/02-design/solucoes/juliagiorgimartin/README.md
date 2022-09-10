# Modelo para Apresentação do Lab01 - Estilos Arquiteturais

# Aluno

- `Julia Giorgi Martin`

## Tarefa 1 - Dados para Treinamento e Recomendação

### Treinamento

- PRODUTO
  - ID
  - NOME
  - PRECO
  - DESCRICAO
  - CATEGORIA_ID
  - AVALIACAO
  - IMAGEM
  - QUANTIDADE_ESTOQUE
- CATEGORIA
  - ID
  - DESCRICAO
- FAVORITO
  - PRODUTO_ID
  - CLIENTE_ID
- TENDENCIA
  - ID
  - CATEGORIA_ID
  - PRODUTO_ID

### Recomendação

- CLIENTE
  - ID
  - NOME
  - DOCUMENTO
  - ENDERECO
  - PAGAMENTO
- VENDEDOR
  - ID
  - NOME
  - DOCUMENTO
  - ENDERECO
  - PRODUTOS
  - AVALIACAO
- COMPRA
  - CLIENTE_ID
  - VENDEDOR_ID
  - PRODUTO
  - QUANTIDADE
  - PRECO_UNITARIO
  - PRECO_TOTAL
  - DATA_COMPRA
  - AVALIACAO

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática

### Composição Dinâmica

> A composição dinâmica incorpora o barramento da mensagem que é responsável por gerenciar as recomendações de acordo com as tendências como, por exemplo, os dados de uma compra efetuada. Com base na compra, as recomendações sofrem uma variação para se adequar.

### Composição Estática

> A composição estática são o conjunto de dados já pré estabelecidos e que dificilmente serão alterados como, por exemplo, as interfaces de identificação dos clientes e dos vendedores. São dados estáticos que vão ser usados em conjunto para retornar ao cliente a recomendação.
