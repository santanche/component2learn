# Classes pre-Componentes / Abordagem Push

*Documentação gerada a partir do Notebook Jupyter do mesmo exemplo em `notebooks/pt/s04components/s01chart/s01push.ipynb`*

# Componentes `GeometricProgresion` e `BarChart` trabalhando em conjunto via Push

Neste exemplo usaremos a abordagem **Push**, ou seja, o objeto da classe GeometricProgression controla todo o processo gerando a sequência de números e pede para o BarChart plotar cada valor.

O `BarChart` atua de forma passiva, aguardando que lhe solicitem que plote algo.

## `BarChart` Component

Plota um gráfico de barras no console sob demanda.

* Atributos
  * `filled` - define se a plotagem será preenchida;
  * `character` - define o caractere da plotagem.
* Método
  * `plot()` - plota uma barra do gráfico.


```Java
public class BarChart {
   private boolean filled;
   private char character;
   
   public BarChart(boolean filled, char character) {
      this.filled = filled;
      this.character = character;
   }

   public void plot(int value) {
      for (int v = 1; v < value; v++)
         System.out.print((filled) ? character : ' ');
      System.out.println(character);
   }
}
```

## Usando objetos da classe `BarChart`

Abaixo um exemplo de como objetos da classe `BarChart` podem ser usados.


```Java
BarChart bc1 = new BarChart(true, '#');
bc1.plot(10);
bc1.plot(12);
bc1.plot(8);
System.out.println();

BarChart bc2 = new BarChart(false, '*');
bc2.plot(4);
bc2.plot(5);
bc2.plot(7);
```

    ##########
    ############
    ########
    
       *
        *
          *

## Classe `GeometricProgressionPre`

Gera uma sequência de números que crescem em progressão geométrica.

* Atributos
  * `initial` - valor inicial da sequência;
  * `ratio` - taxa de crescimento da progressão;
  * `n` - quantidade de valores na sequência;
  * `output` - referência para um objeto da classe `BarChart`.
* Métodos
  * `present` - apresenta o gráfico exponencial (em conjunto com um objeto da classe `BarChart`).


```Java
public class GeometricProgressionPre {
   private int initial,
               ratio,
               n;
   private BarChart output;

   public GeometricProgressionPre(int initial, int ratio, int n, BarChart output) {
      this.initial = initial;
      this.ratio = ratio;
      this.n = n;
      this.output = output;
   }

   public void present() {
      if (output != null) {
         int value = initial;
         for (int s = 1; s <= n; s++) {
            output.plot(value);
            value *= ratio;
         }
      }
   }
}
```

## Criando objetos associados

Exemplo que cria um objeto da classe `GeometricProgression` outro da classe `BarChart`. O objeto da classe `GeometricProgression` recebe uma referência do objeto `BarChart` no construtor para se relacionar com ele.


```Java
BarChart bc = new BarChart(true, '#');

GeometricProgressionPre gp = new GeometricProgressionPre(1, 2, 7, bc);

gp.present();
```

    #
    ##
    ####
    ########
    ################
    ################################
    ################################################################

## Classe `GeometricProgression`

No `GeometricProgressionPre` a associação com o objeto `BarChart` foi feita pelo construtor, o que limita as possibilidades de combinação, por exemplo, quando queremos conectar a mesma progressão com diversos dispositivos de saída.

### Usando Conectores

Uma abordagem derivada dos componentes considera usar a ideia de conector para ligar dois objetos usando o método `connect`.

* Métodos adicional
  * `conect` - conecta dois objetos informando a um deles (`GeometricProgression`) a identidade do outro `BarChart`.


```Java
public class GeometricProgression {
   private int initial,
               ratio,
               n;
   private BarChart output;

   public GeometricProgression(int initial, int ratio, int n) {
      this.initial = initial;
      this.ratio = ratio;
      this.n = n;
      this.output = null;
   }
    
   public void connect(BarChart output) {
      this.output = output;
   }

   public void present() {
      if (output != null) {
         int value = initial;
         for (int s = 1; s <= n; s++) {
            output.plot(value);
            value *= ratio;
         }
      }
   }
}
```

## Criando e Conectando objetos - abordagem Push

Exemplo que cria um objeto da classe `GeometricProgression` outro da classe `BarChart` e os conecta através do novo método `connect`. Por ser uma abordagem Push, o `GeometricProgression` tem a referência do `BarChart` e envia (“empurra”) valores para ele.


```Java
BarChart bc = new BarChart(true, '#');

GeometricProgression gp = new GeometricProgression(1, 2, 7);

gp.connect(bc);
gp.present();
```

    #
    ##
    ####
    ########
    ################
    ################################
    ################################################################

## Conectando o objeto `GeometricProgression` com dois objetos `BarChart` - abordagem Push

Exemplo conectando o mesmo objeto da classe `GeometricProgression` com dois objetos da classe `BarChart`.

```Java
BarChart bc1 = new BarChart(true, '#');
BarChart bc2 = new BarChart(false, '*');

GeometricProgression gp = new GeometricProgression(1, 2, 7);

gp.connect(bc1);
gp.present();

gp.connect(bc2);
gp.present();
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

Escreva uma classe `SecondDegree` cujos objetos produzam valores de uma função de segundo grau na abordagem **Push** e os enviem para um objeto `BarChart`.

## Plotagem de parábola

Escreva um programa que conecte um objeto da classe `SecondDegree` a um objeto da classe `BarChart` de forma que seja plotada uma parábola na abordagem **Push**. Por conta do comportamento da classe `BarChart`, a parábola será plotada virada, ou seja eixos X e Y trocados.
