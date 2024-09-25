package pt.c08componentes.s01chartseq.s01push.sequence;

import pt.c08componentes.s01chartseq.s01push.chart.BarChart;

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
