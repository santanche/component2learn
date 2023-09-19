package pt.c08componentes.s01chartseq.s05allinterfaces;

import pt.c08componentes.s01chartseq.s05allinterfaces.chart.BarChart;
import pt.c08componentes.s01chartseq.s05allinterfaces.chart.IBarChartProperties;
import pt.c08componentes.s01chartseq.s05allinterfaces.chart.IChart;
import pt.c08componentes.s01chartseq.s05allinterfaces.chart.IRSequence;
import pt.c08componentes.s01chartseq.s05allinterfaces.sequence.GeometricProgression;
import pt.c08componentes.s01chartseq.s05allinterfaces.sequence.IGeometricProgressionProperties;
import pt.c08componentes.s01chartseq.s05allinterfaces.sequence.ISequence;

public class App03ChartSequence {
   public static void main(String args[]) {
      IGeometricProgressionProperties gp = new GeometricProgression();
      gp.setInitial(1);
      gp.setRatio(2);
      
      IBarChartProperties bc = new BarChart();
      bc.setFilled(true);
      bc.setCharacter('#');
      bc.setN(5);
      
      ((IRSequence)bc).connect((ISequence)gp);
      ((IChart)bc).plot();
   }
}
