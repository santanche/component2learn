package pt.c08componentes.s01chartseq.s03properties;

import pt.c08componentes.s01chartseq.s03properties.chart.BarChart;
import pt.c08componentes.s01chartseq.s03properties.sequence.GeometricProgression;

public class App01ChartSequence {
   public static void main(String args[]) {
      GeometricProgression gp = new GeometricProgression();
      gp.setInitial(1);
      gp.setRatio(2);
      
      BarChart bc = new BarChart();
      bc.setFilled(true);
      bc.setCharacter('#');
      bc.setN(7);
      
      bc.connect(gp);
      bc.plot();
   }
}
