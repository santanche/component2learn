MVC e Event-driven App
Lab de Componentização e Reúso de Software 14/08/2021

# FELIPE STARLING MEDEIROS (EX150367)

## Tarefa 1
Elabore um protótipo de uma interface gráfica com um usuário no MIT App Inventor que simule uma interface de compra, com as seguintes funcionalidades:

apresente uma interface com as seguintes áreas:
uma lista opções com o nome de três produtos (a sua escolha);
um quadro de detalhes do produto;
um campo para o usuário digitar a quantidade que deseja comprar;
um botão de efetivação da compra;
um campo de mensagens no rodapé.
ao clicar no produto da lista de opções, deve ser apresentado no quadro de detalhamento:
a imagem do produto;
seu nome;
o valor unitário e a unidade (g, kg, l);
quando o botão de efetivação da compra for clicado, deve ser mostrado no campo de mensagem (rodapé) os dados da compra sendo efetivada: nome do produto, quantidade e o valor total a ser pago.
Neste protótipo, não haverá uso de bancos de dados. Tudo será executado


![imagem-tarefa1](https://github.com/f-starling/component2learn/blob/master/labs/2021/03-mvc/solucoes/f-starling/images/app-tarefa1.png)

## Tarefa 3


Modifique o aplicativo que você fez na tarefa anterior da seguinte maneira:

Acrescente um campo que mostre a Lista de Produtos a Serem Comprados. Quando o usuário clicar no botão de efetivação de compra:
adicione no banco de dados CloudDB o item de compras com o rótulo: “compra”:
o item deve ser uma string concatenando os seguintes itens separados por vírgula: nome do produto, quantidade e o valor total a ser pago;
apresente o item adicionado no campo de Lista de Produtos a Serem Comprados.
Sempre que o aplicativo iniciar, verifique se há compras adicionadas no CloudDB com o rótulo “compra” e, se houver, as mostre na Lista de Produtos a Serem Comprados.


![imagem-tarefa3](https://github.com/f-starling/component2learn/blob/master/labs/2021/03-mvc/solucoes/f-starling/images/app-tarefa3.png)
