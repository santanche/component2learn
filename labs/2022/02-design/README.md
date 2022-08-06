# Aprendizagem de Máquina no Brechó Online

O uso de serviços que envolvam aprendizagem de máquina está cada vez mais recorrentes em plataformas computacionais. Em plataformas de comércio e redes sociais são frequentes serviços de recomendação, que traçam rotas, ou que estimam preços. Em hospitais tem sido cada vez mais importante integrar serviços de aprendizagem de máquina com sistemas de saúde para, por exemplo, dar suporte à emissão de laudos em exames de imagem.

Este laboratório tem o desafio de trabalhar o tema de serviços de aprendizagem de máquina dentro do contexto do projeto Brechó Online. Mais especificamente será feito um recorte na recomendação de vendedores/produtos para clientes em busca de um produto.

Considere o seguinte cenário: no Brechó Online há uma grande quantidade (sempre crescente) de vendedores oferecendo produtos e de clientes buscando produtos. Você está projetando um serviço de recomendação que deve ranquear ofertas de produtos/vendedores de acordo com um produto buscado por um cliente.

O seu serviço de aprendizagem de máquina vai funcionar em duas partes: módulo de aprendizagem constante e módulo de ranqueamento. O módulo de aprendizagem constante, recebe constantemente dados do sistema (a sua escolha) e aprende padrões sobre preferências de clientes para futura recomendação. Como os produtos, preferências e tendências mudam ao longo do tempo, este módulo está constantemente aprendendo, a fim de atualizar seu conhecimento. O módulo de ranqueamento faz recomendações para clientes, ranqueando ofertas de produtos de acordo com alguma busca que esse cliente esteja executando. Ele deve levar em conta o perfil do cliente e do vendedor para realizar o ranqueamento.

## Tarefa 1 - Dados para Treinamento e Recomendação

Indique um que dados você usaria: (a) para treinar o módulo de aprendizagem constante; (2) para realizar a recomendação. Recomenda-se que seja apresentado da seguinte maneira:

* Entidade X
  * campo A
  * campo B
* Entidade Y
  * campo A
  ...

Exemplos de entidades são: cliente, vendedor, produto, venda, etc. Os campos pertencem à entidade, como: nome, valor, quantidade, etc. Não é necessária a especificação de tipos dos dados.

## Tarefa 2 - Breve descrição de Composições Dinâmica e Estática

Considere que você quer representar na forma de componentes conectados os serviços de treinamento e recomendação descritos. Escolha uma parte desses componentes que você considera que precisam se combinar de forma dinâmica, ou seja, novos componentes podem entrar e sair da composição, que se mantém funcionando. Escolha outra parte que opera de forma estática, ou seja, os componentes se conectam em um roteiro pré-definido para executar uma tarefa. Os componentes estáticos e dinâmicos podem ser de granularidades diferentes, ou seja, um componente pode ser um serviço inteiro representando um vendedor e outro serviço pode ser uma etapa de um processo de aprendizagem de máquina.

Descreva brevemente o que parte você acha que seria estática, que parte você acha que seria dinâmica.

## Tarefa 3 - Composição para Treinamento e Recomendação

Monte um diagrama ilustrando a composição de componentes que realiza o serviço de aprendizagem e recomendação. Você deve indicar os componentes, suas conexões ou participação no barramento, conforme o modelo: [Modelo para o Laboratório 2](https://docs.google.com/presentation/d/1oo6B9InMdkhXbBy1Ccj3TWjCZOCH4Ry10xEC1TDeOn8/edit?usp=sharing).

Para componentes ligados ao barramento, utilize nomes de interface para indicar fontes e escutas de mensagem que estão associadas, ou seja, se for usado o mesmo nome de interface em uma fonte e uma escuta, significa que a escuta assina o tópico de mensagem emitido pela fonte. Não é necessário detalhar as interfaces, basta indicar seus nomes.
