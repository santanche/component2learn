# MVC e Event-driven App
*Lab de Componentização e Reúso de Software 14/08/2021*

## Tarefa 1

Elabore um protótipo de uma interface gráfica com um usuário no MIT App Inventor que simule uma interface de compra, com as seguintes funcionalidades:
1. apresente uma interface com as seguintes áreas:
  * uma lista opções com o nome de três produtos (a sua escolha);
  * um quadro de detalhes do produto;
  * um campo para o usuário digitar a quantidade que deseja comprar;
  * um botão de efetivação da compra;
  * um campo de mensagens no rodapé.
2. ao clicar no produto da lista de opções, deve ser apresentado no quadro de detalhamento:
  * a imagem do produto;
  * seu nome;
  * o valor unitário e a unidade (g, kg, l);
3. quando o botão de efetivação da compra for clicado, deve ser mostrado no campo de mensagem (rodapé) os dados da compra sendo efetivada: nome do produto, quantidade e o valor total a ser pago.

Neste protótipo, não haverá uso de bancos de dados. Tudo será executado

# Tarefa 2

Considere a seguinte abordagem visual para representar os componentes da sua composição e as relações usando uma abordagem dirigida a eventos:

![MIT App Inventor](images/mit-app-inventor-events.png)

Apresente um diagrama equivalente para a aplicação que você desenvolveu na Tarefa 1, considerando:
* para cada evento representado pela cláusula do MIT App Inventor [When (...).Click do], deve haver uma interface que gera eventos equivalente, cujo evento é o capturado (no exemplo apresentado, o evento é o Click);
* a geração do evento está sempre associado ao componente que o produz, neste exemplo, é o Button1;
* capture a imagem Box do MIT App Inventor que representa a captura do evento e coloque próximo à interface, como está na ilustração;
* o componente que responde ao evento deve ter uma interface que monitora o respectivo evento;
* capture as instruções executadas quando o evento é capturado e coloque próximo ao evento que responde - conecte essas instruções à interface que recebe o evento e propriedades relacionadas, como ilustra a figura.

Para construir o diagrama, utilize o [Template do Lab3](https://docs.google.com/presentation/d/1KcXoJJa4up8X8M-7crZzSSg_ZcBGjFH2UX8OugLu-LI/edit?usp=sharing).


# Tarefa 3

Modifique o aplicativo que você fez na tarefa anterior da seguinte maneira:

1. Acrescente um campo que mostre a **Lista de Produtos a Serem Comprados**. Quando o usuário clicar no botão de efetivação de compra:
  * adicione no banco de dados CloudDB o item de compras com o rótulo: “compra”:
    * o item deve ser uma string concatenando os seguintes itens separados por vírgula: nome do produto, quantidade e o valor total a ser pago;
  * apresente o item adicionado no campo de **Lista de Produtos a Serem Comprados**.

2. Sempre que o aplicativo iniciar, verifique se há compras adicionadas no CloudDB com o rótulo “compra” e, se houver, as mostre na **Lista de Produtos a Serem Comprados**.
