package pt.c08componentes.s01chartseq.s01push;

import pt.c08componentes.s01chartseq.s01push.chart.BarChart;
import pt.c08componentes.s01chartseq.s01push.sequence.GeometricProgressionPre;

public class App0102GeoChart {
   public static void main(String args[]) {
      BarChart bc = new BarChart(true, '#');
      
      GeometricProgressionPre gp = new GeometricProgressionPre(1, 2, 7, bc);
      
      gp.present();
   }
}
