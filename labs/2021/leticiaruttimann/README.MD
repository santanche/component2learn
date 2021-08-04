

**Descrição passo a passo do processo** 🤘

A compra de refeições no marketplace compreende duas opções: o usuário pode realizar a busca livre de uma refeição ou  escolher uma das opções oferecidas pelo marketplace através 
da funcionalidade de sugestão de refeições.<br /><br />
Independente da forma com a qual o processo de busca/escolha de um refeição foi iniciado, ele sempre irá terminar com a exibição da refeição escolhida pelo usuário em tela.<br /><br />
Sendo assim, o processo supracitado pode ser explicado seguindo o passo a passo abaixo:

1. O processo inicia-se com o usuário acessando o marketplace para comprar uma refeição. O componente "Refeição Set" contém todas as 
  refeições disponíveis no marketplace para compra;
2. O Marketplace então exibe um campo para busca, no qual o usuário pode entrar com o nome da refeição e buscá-la;<br />
    2.1 O componente "busca refeição" recebe o nome da refeição informada pelo usuário através da interface "solicita refeição" com o 
        componente "refeição set";<br />
    2.2 Caso a refeição exista na lista, "busca refeição" envia para o componente "refeição display" a refeição através da interface "exibe refeição";<br />
    2.3 Por fim, o componente "refeição display" recebe e exibe a refeição para o usuário que, por sua vez, pode decidir entre comprá-la ou não.<br />
3. O Marketplace também exibe automaticamente uma lista de refeições sugeridas para o usuário (essa funcionalidade é uma alternativa
   ao campo de busca de refeições) e ela se baseia nos parâmetros listados abaixo para predizer as refeições:
      * refeições que o cliente já comprou e a nota (rating) que ele atribuiu;
      * refeições que todos os clientes compraram e notas atribuídas por eles.<br />
   
   3.1 Para exibir automaticamente sugestões, o componente "recomenda refeição" recebe de "refeição set" uma lista de refeições por meio da interface "solicita refeição
       recomendada";<br />
   3.2 "Recomenda refeição" aplica uma inteligência na lista de refeições recebidas e envia essa lista de refeições sugeridas para o componente
    "refeições display";<br />
    3.3 Por fim, o componente "refeição display" recebe de "recomenda refeição" uma lista de refeições sugeridas para o usuário e as exibe em tela.

***Obs do prof: A descrição está falando o que faz cada componente, mas não está explicando a sequência em si. 
Ou seja, imagine que você está descrevendo passo a passo um processo, indicando o que entra, o que o 
usuário ou processo faz e o que é gerado/passado para o próximo passo. Você precisa construir uma narrativa que vai do começo ao fim.***
