package pt.c08componentes.s01chartseq.s01push;

import pt.c08componentes.s01chartseq.s01push.chart.BarChart;

public class App0101BarChart {
   public static void main(String args[]) {
      BarChart bc1 = new BarChart(true, '#');
      bc1.plot(10);
      bc1.plot(12);
      bc1.plot(8);
      System.out.println();

      BarChart bc2 = new BarChart(false, '*');
      bc2.plot(4);
      bc2.plot(5);
      bc2.plot(7);
   }
}
