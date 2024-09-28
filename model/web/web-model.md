# Modelo de Feridas

~~~plantuml
component PacientList {
  [Pesquisa] -[hidden]-> [PatientItem <<NavigationItem>>]
  [PatientItem <<NavigationItem>>] -[hidden]-> [button]
}
~~~

* Como especificaremos que um componente nosso especializa outro do shadcn?
* Como reduzir os nomes do shadcn na implementação?

