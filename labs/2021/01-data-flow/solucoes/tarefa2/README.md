Nome: André Luiz da Cruz Moreira (aluno avulso/extensão)
Professor: André Santanchè
Trabalho: labs/2021/01-dataflow/2021 
Tarefa: 2 - Projeto de Composição para Venda e Recomendação

Para implementar o mecanismo de recomendações de refeições para os clientes, são necessários diferentes módulos, que são apresentados no diagrama UML do sistema, que pode ser visto na figura 1.

A solução apresentada se restringe aos fluxos considerados relevantes para a adição da funcionalidade de recomendações de refeições para os usuários do marketplace.

<p align="center">
  <img width="690" height="450" src="images/DiagramaExtensaoMarketPlace.PNG">
</p>

 <p align=center>Figura 1 - Diagrama UML da solução proposta para prover a funcionalidade de fornecer recomendações ao usuário quando do pedido de uma refeição</p>


A seguir os componentes são brevemente descritos com as suas interface. 

1 - Componente GeraMenu

  Este componente gera a lista de opções de restaurantes e seus menus para o usuário em função do usuário e da sua localização. 
  
  Através da interface IMenu ele oferta ao componente OfertaMenu as opções a serem apresentadas ao usuário.

  Através da interface requerida IRecomendação ele requisita as recomendacões ofertadas pelo componente de Predição.

2 - Componenente OfertaMenu

  Este componente oferece ao usuário as opções de restaurantes e seus menus ofertadas pelo componente GeraMenu a partir da interface IMenu.

  Ele requer a interface ISolicitaçãoPedido para poder efetuar a solicitação de pedido ao componente Pedido através da interface ISolicitaçãoPedido.

3 - Componente Pedido

  Este componente oferece ao componente OfertaMenu a interface para realização de pedidos a partir da interface ISolicitaçãoPedido.

  Ele se integra com componentes de meios de pagamentos, solicitação de pedidos a restaurantes e de gestão da entrega que omitimos aqui em função do escopo do problema a ser modelado.

  Ele requer a interface IAvaliação para poder obter a avaliação do pedido depois de realizado a partir do componente Avaliação.

  Além disto, este componente requer a interface IPedidoRealizado para poder enviar ao componente HistóricoPedidos o pedido realizado para futuras consultas por outros componentes. Esta interface contem os dados providos pela interface IAvaliação de forma que os pedidos avaliados sejam armazenados com suas avaliações, quando houver avaliação para o pedido em questão.

4 - Componente HistóricoPedidos

  Este componente é responsável por armazenar os pedidos realizados com suas respectivas avaliações e fornecer informações a respeito dos mesmos. 

  Para armazenar os dados dos pedidos ele oferece a interface IPedidoRealizado, requerida pelo componente Pedido.

  Ele oferece também a interface HistóricoPedidos para o componente Predição que a requisita a fim de, tendo acesso aos pedidos passados, poder gerar recomendações para o usuário.

5 - Componente Avaliação

  Este componente é responsável por obter a avaliação do pedido realizado e fornecê-la ao componente pedido uma vez que o pedido tenha sido concluído. 

  Ele oferece o serviço através da interface provida IAvaliação.

6 - Componente Predição

  Este componente oferece a interface IRecomendação para o componente GeraMenu a fim de  que este possa fornecer ao usuário recomendações de refeições. 

  Ele requer a interface IHistóricoPedidos ofertada pelo componente HistóricoPedidos para que este forneça informações sobre os pedidos com avaliações realizados pelo usuário e por todos os usuários do sistema a fim de permitir a predição que irá viabilizar a geração de recomendações.







