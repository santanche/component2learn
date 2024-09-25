package pt.c08componentes.s01chartseq.s02pull;

import pt.c08componentes.s01chartseq.s02pull.chart.BarChart;
import pt.c08componentes.s01chartseq.s02pull.sequence.GeometricProgression;

public class App0201GeoChart {
   public static void main(String args[]) {
      GeometricProgression gp = new GeometricProgression(1, 2);

      BarChart bc = new BarChart(true, '#', 7);

      bc.connect(gp);
      bc.plot();
   }
}
