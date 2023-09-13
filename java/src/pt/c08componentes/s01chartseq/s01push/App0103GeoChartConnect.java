package pt.c08componentes.s01chartseq.s01push;

import pt.c08componentes.s01chartseq.s01push.chart.BarChart;
import pt.c08componentes.s01chartseq.s01push.sequence.GeometricProgression;

public class App0103GeoChartConnect {
   public static void main(String args[]) {
      BarChart bc = new BarChart(true, '#');
      
      GeometricProgression gp = new GeometricProgression(1, 2, 7);
      
      gp.connect(bc);
      gp.present();
   }
}
