# Classes pre-Componentes / Abordagem Pull

*Documentação gerada a partir do Notebook Jupyter do mesmo exemplo em `notebooks/pt/s04components/s01chart/s02pull.ipynb`*

# Componentes `GeometricProgresion` e `BarChart` trabalhando em conjunto via Pull

Neste exemplo usaremos a abordagem **Pull**, ou seja, o objeto da classe `BarChart` controla todo o processo e solicita os valores para o objeto da classe `GeometricProgression`.

## `GeometricProgression` abordagem Pull

O `GeometricProgression` passa a atuar de forma passiva, aguardando que lhe solicitem valores através dos métodos `first` e `next`.

Três modificações podem ser observadas:
1. a informação do número de valores plotados (`n`) passa para o `BarChart` que controla o processo;
2. o `BarChart` passa a ter a referência para o `GeometricProgression` que, por sua vez, não tem mais a referência e consequentemente o `connect`;
3. o método `present` que atuava ativamente gerando a sequência e enviando para o gráfico foi substituído por dois métodos (`first` e `next`) que atuam passivamente aguardando a solicitação de valor.

## Classe `GeometricProgression`

Gera uma sequência de números que crescem em progressão geométrica.

* Atributos
  * `initial` - valor inicial da sequência;
  * `ratio` - taxa de crescimento da progressão;
  * `current` - valor corrente (para controle interno).
* Métodos
  * `first` - gera o primeiro valor da sequência e o retorna;
  * `next` - gera o próximo valor da sequência (em relação à última solicitação) e o retorna.


```Java
public class GeometricProgression {
   private int initial,
               ratio;
   private int current;
   
   public GeometricProgression(int initial, int ratio) {
      this.initial = initial;
      this.ratio = ratio;
      current = initial;
   }
   
   public int first() {
      current = initial;
      return current;
   }
   
   public int next() {
      current *= ratio;
      return current;
   }
}

## `BarChart` abordagem Pull

Três modificações podem ser observadas:
1. o método `plot` foi modificado -- em vez de plotar apenas uma barra, ele plota o gráfico inteiro, já que o `BarChart` controla o processo;
2. por causa da modificação (1), o `BarChart` passa a ter a informação de quantos valores serão plotados;
3. o `BarChart` passa a ter o método `connect`, já que ele guarda a referência para o objeto `GeometricProgression` para solicitar os valores.

## `BarChart` Component

Plota um gráfico de barras no console coletando ativamente dados a serem plotados.

* Atributos
  * `filled` - define se a plotagem será preenchida;
  * `character` - define o caractere da plotagem;
  * `n` - quantidade de valores na sequência;
  * `sequence` - referência para um objeto da classe `BarChart`.
* Método
  * `conect` - conecta dois objetos informando a um deles (`BarChart`) a identidade do outro `GeometricProgression`.
  * `plot()` - plota o gráfico inteiro.


```Java
public class BarChart {
   private boolean filled;
   private char character;
   private int n;
   
   private GeometricProgression sequence;
   
   public BarChart(boolean filled, char character, int n) {
      this.filled = filled;
      this.character = character;
      this.n = n;
      this.sequence = null;
   }

   public void connect(GeometricProgression sequence) {
      this.sequence = sequence;
   }
   
   public void plot() {
      if (sequence != null) {
         int value = sequence.first();
         for (int s = 1; s <= n; s++) {
            for (int v = 1; v < value; v++)
               System.out.print((filled) ? character : ' ');
            System.out.println(character);
            value = sequence.next();
         }
      }
   }
}
```

## Criando e Conectando objetos - abordagem Pull

Exemplo que cria um objeto da classe `GeometricProgression` outro da classe `BarChart` e os conecta através do novo método `connect`. Note que há uma inversão em relação a abordagem **Pull**. Aqui, o `BarChart` possui o método `connect` e se conecta ao `GeometricProgression` de quem ele solicitará os valores.


```Java
GeometricProgression gp = new GeometricProgression(1, 2);

BarChart bc = new BarChart(true, '#', 7);

bc.connect(gp);
bc.plot();
```

    #
    ##
    ####
    ########
    ################
    ################################
    ################################################################

## Conectando o objeto `GeometricProgression` com dois objetos `BarChart` - abordagem Pull

Exemplo conectando o mesmo objeto da classe `GeometricProgression` com dois objetos da classe `BarChart`.


```Java
GeometricProgression gp = new GeometricProgression(1, 2);

BarChart bc1 = new BarChart(true, '#', 7);
BarChart bc2 = new BarChart(false, '*', 7);

bc1.connect(gp);
bc1.plot();

bc2.connect(gp);
bc2.plot();
```

    #
    ##
    ####
    ########
    ################
    ################################
    ################################################################
    *
     *
       *
           *
                   *
                                   *
                                                                   *

# Tarefa do Gráfico de Segundo Grau

## Função de segundo grau

Escreva uma classe `SecondDegree` cujos objetos produzam valores de uma função de segundo grau na abordagem **Pull**, ou seja, são produzidos sob demanda a partir de solicitação dos métodos `first` e `next`.

## Plotagem de parábola

Escreva um programa que conecte um objeto da classe `SecondDegree` a um objeto da classe `BarChart` de forma que seja plotada uma parábola na abordagem **Pull**. Por conta do comportamento da classe `BarChart`, a parábola será plotada virada, ou seja eixos X e Y trocados.
