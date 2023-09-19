package pt.c08componentes.s01chartseq.s02pull;

import pt.c08componentes.s01chartseq.s02pull.chart.BarChart;
import pt.c08componentes.s01chartseq.s02pull.sequence.GeometricProgression;

public class App0202GeoChartMultiple {
   public static void main(String args[]) {
      GeometricProgression gp = new GeometricProgression(1, 2);

      BarChart bc1 = new BarChart(true, '#', 7);
      BarChart bc2 = new BarChart(false, '*', 7);

      bc1.connect(gp);
      bc1.plot();

      bc2.connect(gp);
      bc2.plot();
   }
}
