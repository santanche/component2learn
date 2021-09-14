# Projeto `CRS - Marketplace`

# Equipe
* `Amanda Souza Macedo Bacelli`
* `Daniela Bouwman Codeceira`
* `Jonata Laureano da Silva Cortez`
* `Matheus Raposo Frauches Vieira Sias`
* `Renato Fernandes Reis`
* `Vitor Corrêa Oliveira`

# Nível 1

## Diagrama Geral do Nível 1

![Modelo de diagrama no nível 1](images/N1-diagrama-barramento.jpg)

### Detalhamento da interação de componentes

* O componente `Distribuição de Ofertas` interage nos processos abaixo:
  * **SendAlert**: Interface que recebe a interface fornecida _Subscribe_ do componente `Cliente` que indica que o cliente quer assinar uma oferta de um determinado produto e assim é feita a distribuição das ofertas conforme essa assinatura
  * **ReceiveChoose**: Interface que recebe a interface _SendChooseCliente_ do componente `Solicita Produto`, quando o cliente escolhe um produto para compra, o componente envia para o componente de Distribuição de Ofertas para que assim ele saiba as escolhas do cliente e prepare ofertas similirares ao produto escolhido
  * **ReceiveOffer**: tópico que recebe o aviso de quando uma `Loja` cria uma oferta faz a leitura de _CreateOffer_ `product/+/alert`
  * **AnalyseSearches**: tópico que analisa as buscas realizadas pelo cliente para que possa gerar ofertas similares, faz a leitura de _FindProducts_`product/+/find`
  * **OrderAnalyser**: Analisa as ordens emitidas pelas `Lojas` através do tópico _Order_ `order/+/send`e assim aprimorar o aprendizado do componente

* O componente `Cliente` interage nos processos abaixo:
  * **Subscribe**: Se inscreve em uma determinada oferta através da interface _SendAlert_ do componente `Distribuição de Ofertas`
  * **PaymentOrder**: Recebe os dados para o pagamento para a interface _RequestPayment_ do componente `Pagamento`
  * **ReceiverOrder**: Recebe a ordem da interface _SendOrder_ do componente `Solicita produto`
  * **ChooseProductAndStore**: Fornece o produto e a loja escolhida para a compra para a interface _ReceiverProductAndStore_ do componente `Solicita Produto`
  * **FindProducts**: Envia mensagem ao buscar um produto através do barramento através da mensagem _ShowProducts_ 
  * **FollowOrder**: Tópico para receber status de ordens emitidas através do tópico _Order_ `order/{orderId}/send`

* O componente `Solicita Produto` interage nos processos abaixo:
  * **SendOrder**: Envia a order para a interface _ReceiveOrder_ do componente `Cliente` com a Ordem recebida via tópico _SendOrder_ `order/+/send`
  * **ReceiveProductAndStore**: Interface que recebe o produto e a loja escolhida pelo cliente
  * **SendChooseClient**: envia a escolha do cliente para o componente `Distribuição de ofertas`
  * **RequestBuy**: envia um tópico para a loja referente ao produto a ser comprado para a loja
  
* O componente `Loja` interage nos processos abaixo:
  * **SendOrder**: Envia a ordem com o produto para que o cliente possa acompanhar através do tópico _FollowOrder_ `order/{orderId}/send`
  * **ReceivePayment**: recebe o pagamento através do tópico _SendPayment_ `order/+/payment/+/accept`do componente `Pagamento` 
  * **CreateOffer**: Cria as ofertas de seus produtos
  * **ShowProduct**: Exibe o produto quando recebe o tópico de busca através do barramento
  * **Order**: envia a order quando a compra é solicitada através do _RequestBuy_ `product/+/store/+/buy`

* O componente `Pagamento` interage nos processos abaixo:
  * **RequestPayment**: solicita o pagamento para a interface do componente `Cliente`
  * **SendPayment**: envia a mensagem do pagamento da ordem através do barramento


> Para cada componente será apresentado um documento conforme o modelo a seguir:

## Componente `Distribuição de Ofertas`
> Componente responsável pela distribuição de ofertas, sendo de origem de assinatura (por desejo do cliente) ou atraves do aprendizado da máquina

![Distribuição de ofertas](images/N1-comp-distribuicao.png)

## Componente `Cliente`

> Componente responsável por orquestrar todos os fluxos do marketplace, sendo na busca, compra, pagmento e recebimento de oferta

![Componente](images/N1-comp-cliente.png

## Componente `Solicita Produto`

> Componente responsável por enviar a solicitação de compra do produto e reencaminhar a ordem ao cliente. Também auxilia na aprendizagem do componente de Distribuição de Ofertas enviando as escolhas do cliente

![Componente](images/N1-comp-solicita-produto.png)

## Componente `Pagamento`

> Componente responsável emitir e controlar pagamento da ordem

![Componente](images/N1-comp-pagamento.png)

## Componente `Loja`

> Componente responsável em emitir ordem, ofertas e exibir seus produtos mediante uma solicitação de busca

![Componente](images/N1-comp-loja.png)

**Interfaces**
> Listagem das interfaces do componente.

As interfaces listadas são detalhadas a seguir:

## Detalhamento das Interfaces

### Interface `FindProducts`

> Envia a busca dos produtos feita pelo cliente

* Type: source
* Topic: product/+/find
* Message type: Product

~~~json
{
  productId: number,
  description: string,
  price: double,
  stores: [
    {
      storeid: number,
      description: string
    }
  ]
}
~~~

### Interface `ShowProduct`

> Exibe os produtos buscados de cada Loja

* Type: sink
* Topic: product/{productId}/find
* Message type: Product

~~~json
{
  productId: number,
  description: string,
  price: double,
  stores: [
    {
      storeid: number,
      description: string
    }
  ]
}
~~~

### Interface `AnalyzerSeaches`

> Analisa as buscas feitas pelo cliente para aprendizagem do componente Distribuição de Ofertas

* Type: sink
* Topic: product/{productId}/find
* Message type: Product

~~~json
{
  productId: number,
  description: string,
  price: double,
  stores: [
    {
      storeid: number,
      description: string
    }
  ]
}
~~~

### Interface `ReceiveOffer`

> Recebe as ofertas emitidas pela Loja

* Type: sink
* Topic: product/{productId}/alert
* Message type: Product

~~~json
{
  productId: number,
  description: string,
  price: double,
  stores: [
    {
      storeid: number,
      description: string
    }
  ]
}
~~~

### Interface `CreateOffer`

> Envia a oferta de um determinado produto

* Type: source
* Topic: product/+/alert
* Message type: Product

~~~json
{
  productId: number,
  description: string,
  price: double,
  stores: [
    {
      storeid: number,
      description: string
    }
  ]
}
~~~

### Interface `RequestBuy`

> Envia a requisição de compra de um produto para uma loja

* Type: source
* Topic: product/+/store/+/buy
* Message type: Order

~~~json
{
  orderId: string,
  date: date,
  total: number,
  statusOrdem: string
  storeId: number,
  products: [
    {
      productId: number,
      quantity: number
    }
  ],
  payment:
  {
    date: date,
    value: number,
    Status: string
  }
}
~~~

### Interface `Order`

> Cria a ordem do produto

* Type: sink
* Topic:product/{productId}/store/{storeId}/buy
* Message type: Order

~~~json
{
  orderId: string,
  date: date,
  total: number,
  statusOrdem: string
  storeId: number
  products: [
    {
      productId: number,
      quantity: number
    }
  ]
  payment:
  {
    date: date,
    value: number,
    Status: string
  }
}
~~~

### Interface `FollowOrder`

> Acompanha o envio da ordem e seu status

* Type: sink
* Topic: order/{orderId}/send
* Message type: Order

~~~json
{
  orderId: string,
  date: date,
  total: number,
  statusOrdem: string
  storeId: number
  products: [
    {
      productId: number,
      quantity: number
    }
  ]
  payment:
  {
    date: date,
    value: number,
    Status: string
  }
}
~~~

### Interface `SendOrder`

> Envia a ordem ao barramento para que o cliente consiga acompanhar

* Type: source
* Topic: order/+/send
* Message type: Order

~~~json
{
  orderId: string,
  date: date,
  total: number,
  storeId: number,
  statusOrdem: string
  products: [
    {
      productId: number,
      quantity: number
    }
  ]
  payment: {
    date: date,
    value: number,
    Status: string
  }
}
~~~

### Interface `SendPayment`

> Envia o status do pagamento da ordem e os dados do pagamento

* Type: source
* Topic: order/+/payment/+/accept
* Message type: Payment

~~~json
{
  paymentId: string,
  date: date,
  value: double,
  status: string,
  order:
  {
    orderId: string
  }
}
~~~

### Interface `ReceivePayment`

> Recebe os dados do pagamento da ordem em questão

* Type: sink
* Topic:order/{orderId}/payment/{paymentId}/accept
* Message type: Payment

~~~json
{
  paymentId: string,
  date: date,
  value: double,
  status: string,
  order:
  {
    orderId: string
  }
}
~~~

# Nível 2

## Componente `Distribuição de Ofertas`

> Resumo do papel do componente e serviços que ele oferece.

## Diagrama Geral do Nível 2

![Componente](images/N2-diagrama-subcomponentes.png)

## Diagrama MVC do Nível 2

![Componente](images/N2-diagrama-subcomponentes-mvc.png)


### Detalhamento da interação de componentes

* O componente `Distribuição de Ofertas` assina no barramento mensagens de tópico `product/+/alert` através da interface _ReceiveOffer_.
  * Ao receber uma mensagem de tópico `product/+/alert` , dispara o início processo de seleção e ranqueamento dos produtos com base menor valor, produtos patrocinados e recomendaçoes com base no perfil do cliente.

* Internamente este evento é atendido por uma interface provida do componente `Busca Melhor Oferta`, que é responsável por selecionar e ranquear os produtos/ofertas.

* O componente `DataSet` assina no barramento mensagens de tópico `product/+/find` através da interface _AnalyseSearches_.
  *  O componente analisa as buscas realizadas pelo cliente para enriquecimento do modelo de recomendações.

* O componente `DataSet` assina no barramento mensagens de tópico ``order/+/send`` através da interface _OrderAnalyser_.
  *  O componente analisa as ordens emitidas pelas `Lojas` através do tópico _Order_ `order/+/send` e utiliza estas informaçoes para enriquecimento do modelo de recomendações.

* O componente `DataSet` conecta-se ao dataset utilizado para treinar o modelo usado para recomendaçoes de produtos com base no perfil do cliente através da interface _Inference_

* O componente `Busca Melhor Oferta` notifica o componente `Filtra Produto Menor Valor` que uma oferta está a caminho através da interface _Solicita Melhor Oferta_.

* O componente `Busca Melhor Oferta` notifica o componente `Recomenda Produtos` que uma oferta está a caminho através da interface _Solicita Recomendacoes Produtos_.

* O componente `Busca Melhor Oferta` notifica o componente `Busca Produtos Patrocinados` que uma oferta está a caminho através da interface _Solicita Produtos Patrocinados_.

* O componente `Filtra Produto Menor Valor` filtra a oferta com o menor valor e notifica o componente `Calcula Melhor Oferta` que uma oferta está a caminho através da interface _Solicita Produto Menor Valor_.

* O componente `Recomenda Produtos` solicita ao componente `DataSet`, através da interface _Inference_, recomendaçoes de ofertas com base no no perfil do cliente.
  
* O componente `Recomenda Produtos` notifica o componente `Calcula Melhor Oferta` que um conjunto de recomendações de ofertas está a caminho através da interface _Solicita Produto Recomendado_.

* O componente `Busca Produtos Patrocinados` consulta sua base de dados de produtos partocinados e notifica o componente `Calcula Melhor Ofertas` que um conjuntos de produtos patrocinados está a caminho através da interface _Solicita Produtos Patrocinados_.

* O componente `Calcula Melhor Ofertas` faz seleção e ranqueamento dos produtos com base menor valor, produtos patrocinados e recomendaçoes com base no perfil do cliente e notifica o componente `Notifica Cliente` sobre melhor oferta disponível através da interface _Notifica Cliente_.

* O componente `Notifica Cliente` notifica o assinante/cliente sobre as melhores ofertas disponíveis baseado no seu perfil através da interface _SendAlert_


## Diagrama do Nível 3

> O aplicativo pode ser acessado [clicando aqui](resources/crsFinalProject.aia)

> Interface de compra de um produto

![Captura de Tela do Protótipo](images/crs-marketplace-product-interface.png)

![Diagrama Nivel 3](images/N3-diagrama.png)

### Detalhamento da interação de componentes

> * O componente `Retrieve Product Info` assina no barramento mensagens de tópico "`product/+/find`" através da interface `ShowProduct`.
  * Ao receber uma mensagem de tópico "`product/+/find`", dispara a busca das informações de um determinado produto.
* O componente `Purchase and Info` se comunica com componentes externos pelo barramento:
  * Para consultar o estoque e a descrição do produto, o componente `Purchase and Info` publica no barramento uma mensagem de tópico "`product/+/find`" através da interface `FindProducts` e assina mensagens de tópico "`product/{productId}/find`" através da interface `ShowProducts` que retorna a disponibilidade e descrição do produto.
  * Para a realização da compra o componente `Purchase and Info` publica no barramento uma mensagem de tópico "`product/{productId}/buy`" através da interface "CreateOrder", que cria uma ordem de compra.
