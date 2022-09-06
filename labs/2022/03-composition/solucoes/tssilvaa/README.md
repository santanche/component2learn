# Modelo para Apresentação do Lab03 - Coreografia e Orquestração no Brechó Online

Estrutura de pastas:

~~~
├── README.md  <- arquivo apresentando a tarefa
│
├── images     <- arquivos de imagens usadas no documento
│
└── workflows  <- arquivos de workflows
~~~

# Aluno
* `Thiago Silva de Souza`

## Tarefa 1 - Detalhando a Negociação das Ofertas

a) Representação do DTO
>
![DTO](images/DTO.png)

b) Diagrama de Componentes e Descrição
>
![Coreografia](images/Coreografia.png)
>
> Descrição de como a coreografia opera na forma de tópicos, conforme exemplo a seguir:
>
> * Cliente inicia solicitação de novo pedido;
> * Componente de leilão é notificado do novo pedido;
> * Componentes dos vendedores acessam novos pedidos;
> * Componentes leilão notifica componente Rastreio.

## Tarefa 2 - Recomendação de Preço

a) Workflow em Orange para recomendação
>
![Workflow Orange](images/WorkflowOrange.png)
>[Arquivo Orange] (workflows/OrangeFile)
>
> Coloque um link para o arquivo em Orange – o arquivo deverá estar na pasta workflows (veja estrutura acima).

b) Workflow em uma representação UML
>
![Workflow UML](images/WorkflowUML.png)
