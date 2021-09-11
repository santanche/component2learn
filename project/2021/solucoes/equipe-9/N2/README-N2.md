
# Nível 2

## Diagrama do Nível 2

> ![Diagrama no nível 2](images/N2-diagrama.png)

### Detalhamento da interação de componentes

* O componente `Assinatura` em sua camada de View, possui o sub-componente `Gerencia preenchimento`, responsável por validar o preenchimento necessários de assinatura pela sua interface.
  * O componente `Seleciona assinatura` interage com o usuário recebendo o plano de assinatura selecionado.
  * O componente `Periodo da assinatura` interage com o usuário recebendo o periodo desejado de duração do plano, e para identificar as possibilidades de periodos, ele interage com Seleciona assinatura para receber a assinatura selecionada.
* O componente `Gerencia preenchimento` fornece a camada de Controle os dados entrados pelo usuario.
* O componente `Gerencia assinatura` recebe esses dados do cliente atraves da interface e repassa a validacao ao componente `Processa assinatura` que faz as validações com Cliente e de Pagamento externos.

## Componente `Gerencia preenchimento`
> Valida o preenchimento necessários de assinatura
![Componente](images/N2-gerencia-preenchimento.png)

## Componente `Seleciona assinatura`
> Plano de assinatura selecionado
![Componente](images/N2-seleciona-assinatura.png)

## Componente `Periodo da assinatura`
> Periodo do plano de assinatura selecionado
![Componente](images/N2-periodo-assinatura.png)

## Componente `Gerencia assinatura`
> Manipula os dados do cliente
![Componente](images/N2-gerencia-assinatura.png)

## Componente `Processa assinatura`
> Expões os dados de assinatura para componentes externos e trata a validade dos dados
![Componente](images/N2-processa-assinatura.png)

**Interfaces**
> Listagem das interfaces do componente.

As interfaces listadas são detalhadas a seguir:

## Detalhamento das Interfaces

### Interface `ISignaturePlan`

![Diagrama da Interface](images/N2-signaturePlan.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`getSignaturePlan: Plan` | `Recebe um objeto de plano de assinatura`

### Interface `ISignaturePeriod`

![Diagrama da Interface](images/N2-signaturePeriod.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`getSignaturePeriod: Date` | `Recebe uma data de periodo de plano de assinatura`

### Interface `ISendSignatureData`

![Diagrama da Interface](images/N2-sendSignature.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`sendData: Signature` | `Envia dados da assinatura selecionada`

### Interface `ISignatureValid`

![Diagrama da Interface](images/N2-signatureValid.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`signature: Signature` | `Envia dados de assinatura validados para componente expor`

### Interface `IRequestSignaturePayment`

![Diagrama da Interface](images/N2-requestPayment.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`requestPayment(Signature): void` | `Envia assinatura para pagamento`

### Interface `IRequestSignatureCustomer`

![Diagrama da Interface](images/N2-requestCustomer.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`requestCustomer(Signature): void` | `Envia assinatura para vincular a um cliente`

### Interface `ISignatureErrorHandler`

![Diagrama da Interface](images/N2-genericError.png)

> Resumo do papel da interface.

Método | Objetivo
-------| --------
`genericError: Error` | `Recebe algum erro para tratar no componente de assinatura`
