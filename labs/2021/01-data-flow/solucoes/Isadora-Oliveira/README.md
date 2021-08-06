# Lab01 - Data Flow

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
├── images     <- arquivos de imagens usadas no documento
│
└── orange     <- arquivos do Orange
~~~

#Aluna
* `Isadora Mendonça de Oliveira`

# Tarefa 1 - Workflow para Recomendação de Zombie Meals

## Imagem do Projeto
![image](https://user-images.githubusercontent.com/50779822/128445166-ab134d3b-e32e-4960-87a3-99f4cbecb93d.png)


## Arquivo do Projeto


# Tarefa 2 - Projeto de Composição para Venda e Recomendação

## Diagrama de Componentes
![image](https://user-images.githubusercontent.com/50779822/128447978-f30d3560-b994-4f5f-8323-e36f9a39b458.png)



## Texto Explicativo
Foi desenvolvido um diagrama de componentes com um fluxo de pedido de uma refeição. 

O zumbi acessa a plataforma e realiza uma bisca para obter as refeições disponíveis no cardápio.

O primeiro componente "Montar pedido" é o responsável por mandar uma recomendacao de refeição para o componente "Solicita recomendação de refeição", sendo o zumbi responsável, ou não, por aceitar a recomendação.

O componente de recomendação utiliza um modelo de predição utilizando os próprios dados obtidos das vendas fornecidos pelo componente "Consulta venda" e suas respectivas notas por outro componente, o "Consulta rating".

Após a escolha da refeição pelo zumbi, a mesma é enviada para o componente "Solicita refeição", responsável por efetuar o pagamento e criar o pedido. Após confirmar o pagamento , o componente "Prepara Pedido"  entra em cena. 

Após o preparo, ele é enviado para o próximo componente, o "Despacha Pedido", que realiza o envio da refeição para o zumbi cliente. 
