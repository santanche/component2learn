package pt.c08componentes.s01chartseq.s02pull.chart;

import pt.c08componentes.s01chartseq.s02pull.sequence.GeometricProgression;

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
