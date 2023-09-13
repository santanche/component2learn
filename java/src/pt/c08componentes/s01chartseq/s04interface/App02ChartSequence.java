package pt.c08componentes.s01chartseq.s04interface;

import pt.c08componentes.s01chartseq.s04interface.chart.BarChart;
import pt.c08componentes.s01chartseq.s04interface.chart.IChart;
import pt.c08componentes.s01chartseq.s04interface.sequence.GeometricProgression;
import pt.c08componentes.s01chartseq.s04interface.sequence.ISequence;

public class App02ChartSequence {
   public static void main(String args[]) {
      ISequence gp = new GeometricProgression(1, 2);
      
      IChart bc = new BarChart(true, '#', 5, gp);
      
      bc.plot();
   }
}
