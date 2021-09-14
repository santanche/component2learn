# Projeto de componentização: Marketplace
## Equipe 1
> Bernardo Fonseca Andrade de Carvalho <br>
> Hélio De Rosa Junior <br>
> José Octavio Vitoriano Martines Penna <br>
> Pablo Gabriel Rodrigues Neves Bedoya <br>
> Rodrigo Leonel Sartorato <br>
# Nível 1

## Diagramas Gerais do Nível 1

## Diagrama do Processo de Compra
![DiagramaNivel1Compra](images/DiagramaNivel1Compra.png)
## Diagrama do Processo de Distribuição de Ofertas
![DiagramaNivel1Ofertas](images/DiagramaNivel1Ofertas.png)

> O diagrama escolhido para análise foi o **Diagrama do Processo de Distribuição de Ofertas**.<br>

## Detalhamento de interação de componentes
* O componente `Customer{n}` envia para o barramento de mensagens do tipo `Request` pelo tópico `{customerId}/{requestproduct}` através da interface `ReceiveProcessedRequests`.
	*  Isso simula a ação de um cliente em demonstrar interesse por um produto (e.g. adicionar produto à uma lista de favoritos).
* Então, tal evento é atendido por uma interface `ReceiveCustomerRequest` do componente `ProcessCustomerRequests`.
    * Neste ponto, o componente `ReceiveCustomerRequest` assina um tópico de mensagens do tipo `#/requestproduct`, o que faz com que ele receba os interesses por produtos `Request` dos n clientes `Customer{n}`.
* O componente `ProcessCustomerRequests` então processa os pedidos marcados como interessantes para os clientes, montando uma lista com os {20} produtos mais desejados, juntamente com uma lista de clientes que marcaram pelo menos {1/3} da lista de produtos como interessantes.
* Em seguida o componente `ProcessCustomerRequests` envia tal lista de produtos e clientes em uma mensagem do tipo `MWProducts`, através da inteface `ProcessedCustomerRequests` para os componentes `Campaign` e `OfferDistribution`, por meio do tópico de mensagens `products/mostwanted`.
    * O componente `Campaign` assina o tópico `products/mostwanted`, recebe a lista de produtos e clientes pela interface `ReceiveProcessedRequests` e então engatilha o início de uma nova campanha de ofertas por meio da interface `CampaignStart`, com o tópico de mensagens `campaign/{campaignId}/notification`.
    * Já o componente `OfferDistribution` recebe a lista anteriormente citada, também usando a interface `ReceiveProcessedRequests` e tópico `products/mostwanted`, e a usa como lista de referência para operação de IA.
* Pela interface `CampaingEngage` e o tópico `campaign/{campaignId}/notification` os componentes `Store{n}` entendem que há uma campanha corrente e que podem enviar lances promocionais de seus produtos em mensagens do tipo `Offer`, através da interface `MakeOffer`, pelo tópico `campaign/{campaignId}/makeoffer/{offerId}`.
* As mensagens do tipo `Offer` são enviadas para o barramento e lidas pelo componente `OfferDistribuition` que assina o tópico `campaign/+/makeoffer/+`.
* Em posse das ofertas feitas por cada uma das n lojas, o componente `OfferDistribuition` monta uma lista de produtos em ofertas, a compara com a lista de produtos mais desejados pelos clientes e por meio de operações de IA ranqueia as ofertas das lojas e monta uma nova lista de ofertas ranqueadas e clientes em uma mensagem to tipo `OnSales`.
* Após isso o componente `OfferDistribuition` envia a mensagem `OnSales` para o barramento utilizando o tópico `campaign/{campaignId}/provideoffers`, que é assinado pelos clientes utilizando o tópico `campaign/+/provideoffers`, finalizando assim o processo de distribuição de ofertas.

## Detalhamento dos Componentes:

**Componente ProcessCustomerRequests**
> Papel: O componente `ProcessCustomerRequests` recebe a requisição ou o interesse de produtos dos clientes através da da assinatura do tópico `#/requestproduct`, presente na interface `ReceiveCustomerRequests`. Ele ainda possui a responsabilidade enviar para o barramento, a lista de produtos mais desejados da última quinzena, juntamente com a lista de consumidores interessados por pelo menos 1/3 dos produtos listados, através da interface `ProcessedCustomerRequests`.

![ProcessCustomerRequests](images/ProcessCustomerRequests.png)

## Interfaces:
> ReceiveCustomerRequests<br>
> ProcessedCustomerRequests<br>

## Detalhamento das Interfaces

**Inteface ReceiveCustomerRequests**

> Papel: Interface que recebe requests/interesse de produtos de {n} clientes do barramento, através da da assinatura do tópico `#/requestproduct`.

![ReceiveCustomerRequests](images/ReceiveCustomerRequests.png)

> Mensagem JSON utilizada na interface:

**Request**
~~~json
{
  customerId: string,
  products:
    [
      productId: string
  ]
}

~~~

**ProcessedCustomerRequests**

> Interface que envia para o barramento, utilizando o tópico `products/mostwanted`, a lista de produtos mais desejados da última quinzena, juntamente com a lista de consumidores interessados por pelo menos 1/3 dos produtos listados.

![ProcessedCustomerRequests](images/ProcessedCustomerRequests.png)

> Mensagem JSON utilizada na interface:

**MWProducts**
~~~json
{
  customers:
    [
      customerId: string
    ],
  products:
    [
      productId: string
    ]
}
~~~

**Componente Campaign**


> Papel: O componente `Campaign` recebe do barramento a lista de produtos mais desejados da (última quinzena), juntamente com a lista de consumidores interessados por pelo menos 1/3 dos produtos listados, através da assinatura do tópico `products/mostwanted` e da interface `ReceiveProcessedRequests`, e retorna para o barramento a solicitação do início de uma nova campanha de ofertas, através da interface `CampaignStart`.  

![Campaign](images/Campaign.png)

## Interfaces:
> ReceiveProcessedRequests<br>
> CampaignStart<br>

## Detalhamento das Interfaces

**Inteface ReceiveProcessedRequests**

> Papel: Interface que recebe do barramento a lista de produtos mais desejados da (última quinzena), juntamente com a lista de consumidores interessados por pelo menos 1/3 dos produtos listados, através da assinatura do tópico `products/mostwanted`.

![ReceiveProcessedRequests](images/ReceiveProcessedRequests.png)

> Mensagem JSON utilizada na interface:

**MWProducts**
~~~json
{
  customers:
    [
      customerId: string
    ],
  products:
    [
      productId: string
    ]
}
~~~

**CampaignStart**

> Interface envia ao barramento a solicitação do início de uma nova campanha de ofertas, através da interface `CampaignStart` com o tópico `campaign/{campaignId}/notification`.

![CampaignStart](images/CampaignStart.png)

> Mensagem JSON utilizada na interface:

**Campaign**
~~~json
{
    campaignId: string,
    campaignName: string,
    campaignURL: string,
    startDay: date,
    daysOfDuration: number
}

~~~



**Inteface ReceiveOffer**

> Papel: Interface que lê a offer do barramento, recebendo uma oferta de desconto das stores{n}.

![ReceiveOffer](images/ReceiveOffer.png)

> Mensagem JSON utilizada na interface:

**Offer**
~~~json
{
    storeId: string,
    productId: string,
    salesPrice: number,
    inStock: number
}
~~~

**Componente OfferDistribution**
> Papel: O componente `OfferDistribution` recebe a lista de produtos mais desejados pelos clientes do Marketplace por meio da assinatura do tópico `products/mostwanted`, presente na interface `ReceiveProcessedRequests`. Ele ainda possui a responsabilidade enviar a mensagem de ofertas aos clientes através do tópico `campaign/campaignId/provideoffers` na interface `ProvideRankedOffers`. Por fim, por meio da interface `ReceiveOffer`, o componente assina o tópico `campaign/+/makeoffer/+` para receber as ofertas enviadas pelas lojas.

![OfferDistribution](images/OfferDistribution.png)

## Interfaces:
> ReceiveProcessedRequests<br>
> ProvideRankedOffers<br>
> ReceiveOffer<br>

## Detalhamento das Interfaces

**Inteface ReceiveProcessedRequests**

> Papel: Interface que lê do barramento a lista de produtos mais desejados da {última quinzena}, juntamente com a lista de customers interessados por pelo menos ⅓ dos produtos listados.

![ReceiveProcessedRequests](images/ReceiveProcessedRequests.png)

> Mensagem JSON utilizada na interface:

**MWProducts**
~~~json
{
    customers: [
        customerId: string
    ],
    products: [
        productId: string
    ]
}
~~~

**Inteface ProvideRankedOffers**

> Papel: Interface que envia vetor de offers para barramento (e.g. informação alimenta serviço de e-mail).

![ProvideRankedOffers](images/ProvideRankedOffers1.png)

> Mensagem JSON utilizada na interface:

**OnSales**
~~~json
{
    customers: [
        customerId: string
    ],
    products: [
        {
         productId: string
         store: {
             storeId: string,
             inStock: number,
             salesPrice: number

         }
        }
    ],
    endDate: date
}
~~~

**Inteface ReceiveOffer**

> Papel: Interface que lê a offer do barramento, recebendo uma oferta de desconto das stores{n}.

![ReceiveOffer](images/ReceiveOffer.png)

> Mensagem JSON utilizada na interface:

**Offer**
~~~json
{
    storeId: string,
    productId: string,
    salesPrice: number,
    inStock: number
}
~~~


**Componente Customer**
> Papel: O componente `Customer` tem a função de, através da interface `ReceiveRankedOffers` e fazendo a assinatura do tópico `campaign/+/provideoffers`, ler a lista de ofertas disponibilizadas no barramento. Além disso, através da interface `RequestProducts`, enviar para o barramento mensagens que representam o interesse do consumidor por determinado produto, utilizando o tópico `{customeId}/requestproduct`.

![OfferDistribution](images/Customer.png)

## Interfaces:
> ReceiveRankedOffers<br>
> RequestProducts<br>

## Detalhamento das Interfaces

**Inteface ReceiveRankedOffers**

> Papel: Interface que lê do barramento a lista de ofertas do barramento, através da assinatura do tópico `campaign/+/provideoffers`.

![ReceiveRankedOffers](images/ReceiveRankedOffers.png)

> Mensagem JSON utilizada na interface:


**OnSales**
~~~json
{
    customers: [
        customerId: string
    ],
    products: [
        {
         productId: string
         store: {
             storeId: string,
             inStock: number,
             salesPrice: number

         }
        }
    ],
    endDate: date
}
~~~



**Inteface RequestProducts**

> Papel: Interface que envia para o barramento mensagens com o tópico `{customeId}/requestproduct` representanado o interesse do consumidor por determinado produto.

![RequestProducts](images/RequestProducts.png)

> Mensagem JSON utilizada na interface:

**Request**
~~~json
{
  customerId: string,
  products:
    [
      productId: string
  ]
}

~~~

**Componente Store**
> Papel: O componente `Store` assina o tópico `campaign/+/notification`, presente na interface `CampaignEngage`, com o objetivo de receber informações sobre a campanha de ofertas vigente. Esse componente ainda é responsável por publicar ofertas de produtos através do tópico `capaign/+/makeoffer/+` na interface `MakeOffer`.

![Store](images/Store.png)

## Interfaces:
> CampaignEngage<br>
> MakeOffer<br>

## Detalhamento das Interfaces

**Inteface CampaignEngage**

> Papel: Interface que escuta o barramento a fim de identificar a campanha corrente.

![CampaignEngage](images/CampaignEngage.png)

> Mensagem JSON utilizada na interface:

**Campaign**
~~~json
{
    campaignId: string,
    campaignName: string,
    campaignURL: string,
    startDay: date,
    daysOfDuration: number
}
~~~

**Inteface MakeOffer**

> Papel: Interface que envia offer para o barramento quando é lançada uma oferta de produto.

![MakeOffer](images/MakeOffer.png)

> Mensagem JSON utilizada na interface:

**Offer**
~~~json
{
    storeId: string,
    productId: string,
    salesPrice: number,
    inStock: number
}
~~~

# Nível 2

## Diagrama do Nível 2
![DiagramaNivel2](images/DiagramaNivel2.png)

## Detalhamento de interação de componentes
* O componente `OfferDistribution` assina o barramento de mensagens de tópico `products/mostwanted` através da interface `ReceiveProcessedRequests`
	* Através da mensagem de tópico `products/mostwanted`, que chega na interface requerida `IRequest` do componente interno `ExtractProductList`, o componente `OfferDistribution` recebe uma lista que contém o array produtos mais desejados pelos clientes do Marketplace, juntamente com um array de clientes que marcaram como desejados pelo menos ⅓ dos produtos presentes na lista. Tal lista é filtrada para a última quinzena
* Então, tal evento é atendido por uma interface provida do componente `ExtractProductList`.
* O componente `ExtractProductList` separa os arrays de produtos e clientes, os fornece em duas interfaces providas `IRequestProductList` e `IRequestCustomerList`
	* A lista de produtos fornecida pela interface `IRequestProductList` é enviada para o componente `RankOffersBasedOnReference`, e neste componente, é usada como lista de referência para o ranqueamento de ofertas de lojas para operações em IA. 
	* A lista de clientes fornecida pela interface `IRequestCustomerList` é enviada para o componente `AssembleOnSales` que montará mensagens do tipo `OnSale`, que serão enviadas para o barramento com o tópico `campaign/{campaignId}/provideoffers`.
* O componente `OfferDistribution` também assina o barramento de mensagens de tópico `campaign/+/makeoffer/+` através da interface `ReceiveOffer`
	* Através da mensagem de tópico `campaign/+/makeoffer/+`, que chega na interface requerida `IOffer` do componente interno `ProcessStoreOffer`, o componente `OfferDistribution` recebe cada uma das ofertas, no tipo de mensagem `Offer`, feitas pelas lojas que escrevem no barramento através do tópico `campaign/{campaignId}/makeoffer/{offerId}`.
* Esse evento faz com o componente `ProcessStoreOffer`, monte/agrupe um array de produtos em oferta, monte/agrupe um array que contém dados das lojas ofertantes, e separe os dados da campanha, e os forneça respectivamente nas interfaces: `IOfferProductList`, `IOfferStoreDataList` e `IOfferCapaignDataList`.
	* O array de produtos em oferta é enviado para o componente `RankOffersBasedOnReference`, através da interface provida `IOfferProductList` para que alimente as operações de IA mencionadas anteriormente.
* O array de informação das lojas ofertantes e os dados da campanha são enviados para o componente `AssembleOnSales`, para que sejam incorporados nas mensagens do tipo `OnSales` como dito anteriormente
* A lista de produtos separados/rankeados pelo componente `RankOfferBasedOnReference` também é enviado para o componente `AssembleOnSales`, para que também seja acrescentado à mensagem do tipo `OnSale`
* Por fim, o componente `AssembleOnSales`, finaliza a montagem da mensagem do tipo `OnSale` e a escreve no barramento através do tópico `campaign/+/provideoffers`, na interface `ProvideRankedOffers`.

## Detalhamento dos Componentes:

**Componente ExtractProductsList**<br>
> Papel: é responsável por receber a lista de produtos pré-processada pelo componente `ProcessCustomerRequests` e separar tal lista em um array de produtos pré-selecionados e em um array de clientes que assinalaram interesse em pelo menos ⅓ da lista de produtos previamente mencionada. 

![ExtractProductsList](images/ExtractProductsList.png)

## Interfaces:
> IRequest<br>
> IRequestCustomerList<br>
> IRequestProductList<br>

## Detalhamento das Interfaces

**Inteface IRequest**<br>
![IRequest](images/IRequest.png)
> Papel: Interface requerida que pede por dados de produtos e clientes na forma de lista.

Método | Objetivo
-------| --------
`getProcessedRequests` | `pede por uma lista de dados pré-processados`.

**Inteface IRequestProductList**<br>
![IRequestProductList](images/IRequestProductList.png)
> Papel: Interface provida que fornece um array de produtos, para que seja usado como array de referência.

Método | Objetivo
-------| --------
`getProductList` | `fornece um array de produtos`.


**Inteface IRequestCustomerList**<br>
![IRequestCustomerList](images/IRequestCustomerList.png)
> Papel: Interface provida que fornece um array de customerId, para que seja usado na montagem de mensagens de campanhas de desconto.

Método | Objetivo
-------| --------
`getCustomerList` | `fornece um array de customer`.


**Componente ProcessStoreOffer**<br>
> Papel: é responsável por processar cada uma das ofertas feitas por lojas, e separar e agrupar/destacar os produtos, dados da loja e dados da campanha contidos nas ofertas.

![ProcessStoreOffer](images/ProcessStoreOffer.png)

## Interfaces:
> IOffer<br>
> IOfferProductList<br>
> IOfferStoreDataList<br>
> IOfferCampaignDataList<br>

## Detalhamento das Interfaces
**Inteface IOffer**<br>
![IOffer](images/IOffer.png)
> Papel: Interface requerida que pede por ofertas de cada loja.

Método | Objetivo
-------| --------
`requestOffer` | `pede por uma oferta de um lojista`.

**Inteface IOfferProductList**<br>
![IOfferProductList](images/IOfferProductList.png)
> Papel: Interface provida que fornece a lista de produtos ofertados por `n` lojas.

Método | Objetivo
-------| --------
`getOfferProductList` | `fornece uma lista de produtos ofertados pelas lojas`.

**Inteface IOfferStoreDataList**<br>
![IOfferStoreDataList](images/IOfferStoreDataList.png)
> Papel: Interface provida que fornece a lista de dados referente às lojas.

Método | Objetivo
-------| --------
`getOfferStoreIdList` | `fornece uma lista que contém strings compostas por id da loja storeId, número de unidades inStock do produto e valor com desconto ofertado salesPrice`

**Inteface IOfferCampaignDataList**<br>
![IOfferCampaignDataList](images/IOfferCampaignDataList.png)
> Papel: Interface provida que fornece a data final da campanha.

Método | Objetivo
-------| --------
`getOfferCampaignEndDate` | `fornece a data de término endDate da campanha`.

**Componente RankOffersBasedOnReference**<br>
> Papel: é responsável fornecer uma lista de ofertas ranqueadas, de acordo com operações de IA .

![ProcessStoreOffer](images/RankOffersBasedOnReference.png)

## Interfaces:
> IRankedProducts<br>

## Detalhamento das Interfaces

**Inteface IRankedProducts**<br>
![IRankedProducts](images/IRankedProducts.png)
> Papel: Interface provida que fornece a lista final de produtos rankeados por IA.

Método | Objetivo
-------| --------
`getRankedProductsList` | `fornece uma lista de produtos ranqueados por operações de IA (e.g. opereções com base em Support-vector Machine ou Logistic Regression)`.

**Componente AssembleOnSales**<br>
> Papel: é responsável fornecer a mensagens de campanha de ofertas que será recebida por clientes.

![ProcessStoreOffer](images/AssembleOnSales.png)

## Interfaces:
> ProvideRankedOffers<br>

## Detalhamento das Interfaces

**Inteface ProvideRankedOffers**<br>
![ProvideRankedOffers](images/ProvideRankedOffers.png)
> Papel: Interface provida que fornece a mensagem final que será enviada aos clientes.

Método | Objetivo
-------| --------
`getRankedOffers` | `fornece a mensagem final que será escrita no barramento para que os clientes as possam consumir`.

## Diagrama do Nível 3

> Protótipo no MIT APP Inventor:

![Captura de Tela do Protótipo](images/appinventorui.jpg)
![Componentes do Protótipo](images/appinventorcomponents.jpg)

> Diagrama Referente ao Protótipo:

![Modelo de diagrama no nível 3](images/Nivel3.jpg)

### Detalhamento da interação de componentes

* O componente `GetProductsCampaignList` recebe os produtos passíveis de receberem ofertas por lojistas cadastrados no marketplace. Ele disponibiliza os produtos obtidos através da interface `IProductsCampaignList`.

* O componente `ComputeProductData` é responsável por ler os produtos recebidos e gerar modelos compatíveis com os componentes da GUI. Ele ainda inicia o evento que irá listar os produtos disponíveis para oferta na interface gráfica. Além disso, esse componente permite que se pesquise por um produto, por categoria ou palavra-chave, retornando os modelos que correspondam aos critérios de busca.

* O componente `ProductComponent` é o responsável por exibir as informações dos produtos. Além disso, ele possui componentes internos que permitem receber os inputs necessários para que o lojista realize uma oferta, sendo eles o valor e a quantidade de produtos. Este componente possui ainda um botão como componente interno, que dispara o evento de envio de oferta.

* O evento de envio de oferta é recebido pelo componente `SendOffer`, que receberá os dados inputados pelo lojista, relacionado com a sua oferta. Além disso, para que a oferta seja criada, é necessário que esse componente busque as informações do lojista autenticado, utilizando a interface provida pelo componente `GetUserInfo`. Após a obtenção dos dados do lojista autenticado e dos inputs da oferta, o componente é reponsável por publicar a oferta no barramento, enviando uma mensagem do tipo `Offer` para o tópico `campaign/+/makeoffer/+`

* Tem-se ainda o componente `GetUserInfo` que recebe as informações do usuário lojista autenticado de um componente externo. Essas informações são expostas através da interface `IUserInfo`, permitindo que o componente de envio de oferta (`SendOffer`), consuma esses dados para conseguir enviar uma oferta com sucesso.

* Por fim há ainda dois componentes na interface que permitem filtros da lista de produtos. O primeiro deles permite filtros por categoria e o segundo permite filtros por palavra-chave.