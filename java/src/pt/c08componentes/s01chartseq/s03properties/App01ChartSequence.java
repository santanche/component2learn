package pt.c08componentes.s01chartseq.s03properties;

import pt.c08componentes.s01chartseq.s03properties.chart.BarChart;
import pt.c08componentes.s01chartseq.s03properties.sequence.GeometricProgression;

public class App01ChartSequence {
   public static void main(String args[]) {
      GeometricProgression gp = new GeometricProgression(1, 2);
      
      BarChart bc = new BarChart(true, '#', 5, gp);
      
      bc.plot();
   }
}
