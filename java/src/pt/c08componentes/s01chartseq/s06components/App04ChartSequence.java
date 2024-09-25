package pt.c08componentes.s01chartseq.s06components;

import pt.c08componentes.s01chartseq.s06components.chart.BarChart;
import pt.c08componentes.s01chartseq.s06components.chart.IBarChart;
import pt.c08componentes.s01chartseq.s06components.sequence.GeometricProgression;
import pt.c08componentes.s01chartseq.s06components.sequence.IGeometricProgression;

public class App04ChartSequence {
   public static void main(String args[]) {
      IGeometricProgression gp = new GeometricProgression();
      gp.setInitial(1);
      gp.setRatio(2);
      
      IBarChart bc = new BarChart();
      bc.setFilled(true);
      bc.setCharacter('#');
      bc.setN(5);
      
      bc.connect(gp);
      bc.plot();
   }
}
