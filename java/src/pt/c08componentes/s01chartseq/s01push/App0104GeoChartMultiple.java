package pt.c08componentes.s01chartseq.s01push;

import pt.c08componentes.s01chartseq.s01push.chart.BarChart;
import pt.c08componentes.s01chartseq.s01push.sequence.GeometricProgression;

public class App0104GeoChartMultiple {
   public static void main(String args[]) {
      BarChart bc1 = new BarChart(true, '#');
      BarChart bc2 = new BarChart(false, '*');

      GeometricProgression gp = new GeometricProgression(1, 2, 7);

      gp.connect(bc1);
      gp.present();

      gp.connect(bc2);
      gp.present();
   }
}
