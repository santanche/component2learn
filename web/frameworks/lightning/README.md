# ComponentVerse

# Salesforce Lightning

Entre no catálogo de componentes Lightning do Salesforce: [Catálogo](https://developer.salesforce.com/docs/component-library/overview/components)

Na categoria `COMPONENTS/Lightning` à esquerda selecione o componente `slider`.

Na aba `basic.html` configure o componente para criar um slider que faça o registro de uma temperatura usando o seguinte código HTML:

~~~html
<template>
    <lightning-slider label="Temperatura" min=-90 max=57 value=30></lightning-slider>
</template>
~~~

O código fica contido dentro do elemento `<template></template>`.

Nesse código, o elemento `<lightning-slider>` instancia um componente `lightning-slider`.

Em seguida são definidos os valores para propriedades do componente:
* `label` - rótulo do slider
* `min` - valor mínimo
* `max` - valor máximo
* `value` - valor padrão inicial

Clique no botão `Run` para executar o código.

## Tarefa 1

Adapte o slider para registrar a idade de uma pessoa.

# Agregando Componentes

Componentes podem ser agregados colocando-se elementos dentro de elementos. Encontre o componente `tabset` e configure com o seguinte código:

~~~html
<template>
    <lightning-tabset>
        <lightning-tab label="Despesas">
            Despesas efetuadas.
        </lightning-tab>
        <lightning-tab label="A Pagar" title="Contas a Pagar">
            Lista de contas a pagar.
        </lightning-tab>
        <lightning-tab label="Observações">
            Observações.
        </lightning-tab>
    </lightning-tabset>
</template>
~~~

## Tarefa 2

Configure estas abas para um outro tipo de aplicação que você proponha.

## Tarefa 3

Seguindo a mesma lógica da tarefa anterior, configure o componente do tipo `input` para que receba uma entrada de uma cor, usando a cor inicial padrão vermelha.

## Tarefa 4

Escolha um componente lightning (diferente dos exemplos anteriores) e o configure. Descreva o propósito do seu componente configurado.