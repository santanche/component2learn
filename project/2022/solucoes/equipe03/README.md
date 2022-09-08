# Projeto `<Título>`

# Equipe

* `Daniel Pinheiro Cunha - RG: 46.372.879-8 / RA: EX164437`
* `Alejandro Boidi Rico - RG: 48.062.853-1 / RA: 2022600983 / EX161545`
* `Leonardo Machado Moscardo RG: 37.584.461-2 / RA: EX161698`
* `Caio Volpato RA: EX145119`
* `Julio Cesar Souto Filho RG: 48.614.253-X / RA: EX161655`


# Projeto GitHub Original
* `https://github.com/leonardomm1/component2learn/tree/projeto-2022/project/2022/solucoes (branch projeto-2022)`

# Nível 1

> Apresente aqui o detalhamento do Nível 1 conforme detalhado na especificação com, no mínimo, as seguintes subseções:

## Diagrama Geral do Nível 1

> Apresente um diagrama conforme o modelo a seguir:

![Modelo de diagrama no nível 1](images/diagrama-barramento.png)

### Detalhamento da interação de componentes

> O detalhamento deve seguir um formato de acordo com o exemplo a seguir:

* O componente `Leilão` inicia o leilão publicando no barramento a mensagem de tópico "`auction/{auctionId}/start`" através da interface `AuctionStart`, iniciando um leilão.
* Os componentes Loja assinam no barramento mensagens de tópico "`auction/+/start`" através da interface `AuctionEngage`. Quando recebe uma mensagem…

> Para cada componente será apresentado um documento conforme o modelo a seguir:

## Componente `<Nome do Componente>`

> Resumo do papel do componente e serviços que ele oferece.

> Diagrama do componente, conforme exemplo a seguir:

![Componente](diagrama-componente-mensagens.png)

**Interfaces**
> Listagem das interfaces do componente.

As interfaces listadas são detalhadas a seguir:

## Detalhamento das Interfaces

### Interface `<nome da interface>`

> Resumo do papel da interface.

> Dados da interface podem ser apresentados em formato texto, conforme exemplo:

* Type: `sink`
* Topic: `pedido/+/entrega`
* Message type: `Order`

> Ou em formato de imagem, conforme exemplo:

![Diagrama de Interface de Mensagens](images/diagrama-interface-mensagens.png)

> Diagrama representando o esquema das mensagens JSON utilizadas na interface, pode ser em formato texto conforme exemplo:

~~~json
{
  orderId: string,
  dueDate: date,
  total: number,
  items: [
    {
         itemid: string,
         quantity: number
    }
  ]  
}
~~~

> Ou em formato de imagem, conforme exemplo:

![Diagrama de Mensagens JSON](images/diagrama-interface-json.png)

# Nível 2

> Apresente aqui o detalhamento do Nível 2 conforme detalhado na especificação com, no mínimo, as seguintes subseções:

## Diagrama do Nível 2

> ![Modelo de diagrama no nível 2](images/nivel_2_parcial.drawio.png)

Detalhamento do componente comprar produto

O componente `Comprar produto` recebe como entrada a lista de produtos e o mesmo tem como saída a encomenda enviada.

1. O subcomponente `Monta lista compra` solicita para o subcomponente de `estoque` a quantidade disponível dos itens correntes no carinho de compras. Caso um produto esteja indisponível, isso fica marcado para informar o usuário.
2. O subcomponente `Monta lista compra` solicita o subcomponente de `Recomendações` diversas recomendações baseadas em diversos critérios como itens comprados normalmente juntos, produtos do mesmo vendedor, promoções como entrega grátis. Esse subcomponente utiliza modelos preditivos de aprendizado de maquina (machine learning) alimentado de dados históricos de compras para recomendar os produtos.

Enquanto o usuário adiciona ou retira itens do carrinho de compras os passos 1 e 2 são constantemente executados.

Se o usuário selecionar a opção de finalizar a compra o subcomponente `preparar compra` solicita a lista final de itens para o subcomponente `Monta lista de compras`. Para obter dados da compra o subcomponente `Usuario` é acionado para obter dados do vendedor e comprador como endereço e solicita ao usuário a forma de pagamento.

### Detalhamento da interação de componentes

* subcomponente `Monta lista compra` assina o tópico `monta/compra/+/id`
* subcomponente `Estoque` assina o tópico `estoque/produto/+/id`
* subcomponente `Recomendações` assina os tópicos "recomendacoes/{tipo_recomendacao}/+/id" onde `tipo_recomendacao`pode ser produtos similares, produtos tipicamente comprados juntos, produtos do mesmo vendedor, produtos que geram promoções e etc ...
* subcomponente `Preparar Compra` assina o tópico `prepara/compra/+/id`
* subcomponente `Usuario` assina o tópico `usuario/vendedor/+/id` e `usuario/comprador/+/id`
* subcomponente `Endereço` assina o tópico `endereco/usuario/+/id`

> Para cada componente será apresentado um documento conforme o modelo a seguir:

## Componente `<Nome do Componente>`

> Resumo do papel do componente e serviços que ele oferece.

![Componente](images/diagrama-componente.png)

**Interfaces**
> Listagem das interfaces do componente.

As interfaces listadas são detalhadas a seguir:

## Detalhamento das Interfaces

### Interface `<nome da interface>`

![Diagrama da Interface](images/diagrama-interface-itableproducer.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`<id do método>` | `<objetivo do método e descrição dos parâmetros>`

## Exemplos:

### Interface `ITableProducer`

![Diagrama da Interface](images/diagrama-interface-itableproducer.png)

Interface provida por qualquer fonte de dados que os forneça na forma de uma tabela.

Método | Objetivo
-------| --------
`requestAttributes` | Retorna um vetor com o nome de todos os atributos (colunas) da tabela.
`requestInstances` | Retorna uma matriz em que cada linha representa uma instância e cada coluna o valor do respectivo atributo (a ordem dos atributos é a mesma daquela fornecida por `requestAttributes`.

### Interface `IDataSetProperties`

![Diagrama da Interface](images/diagrama-interface-idatasetproperties.png)

Define o recurso (usualmente o caminho para um arquivo em disco) que é a fonte de dados.

Método | Objetivo
-------| --------
`getDataSource` | Retorna o caminho da fonte de dados.
`setDataSource` | Define o caminho da fonte de dados, informado através do parâmetro `dataSource`.

## Diagrama do Nível 3

> Apresente uma imagem com a captura de tela de seu protótipo feito no MIT App Inventor, conforme modelo a seguir:

![Captura de Tela do Protótipo](images/captura-prototipo.png)

> Apresente o diagrama referente ao protótipo conforme o modelo a seguir:

![Modelo de diagrama no nível 2](images/diagrama-prototipo.png)

### Detalhamento da interação de componentes

> O detalhamento deve seguir o mesmo formato usado no Nível 2.
