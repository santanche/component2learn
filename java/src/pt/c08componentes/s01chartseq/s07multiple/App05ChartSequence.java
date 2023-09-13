package pt.c08componentes.s01chartseq.s07multiple;

import pt.c08componentes.s01chartseq.s07multiple.chart.GraphicBarChart;
import pt.c08componentes.s01chartseq.s07multiple.chart.IBarChart;
import pt.c08componentes.s01chartseq.s07multiple.sequence.Fibonacci;
import pt.c08componentes.s01chartseq.s07multiple.sequence.GeometricProgression;
import pt.c08componentes.s01chartseq.s07multiple.sequence.IMathRatioSequence;
import pt.c08componentes.s01chartseq.s07multiple.sequence.IMathSequence;

public class App05ChartSequence {
   public static void main(String args[]) {
      System.out.println("Geometric Progression:");
      
      IMathRatioSequence gp = new GeometricProgression();
      gp.setInitial(1);
      gp.setRatio(2);
      
      IBarChart bcg = new GraphicBarChart();
      bcg.setFilled(true);
      bcg.setN(5);
      
      bcg.connect(gp);
      bcg.plot();
      
      System.out.println("\nFibonacci Sequence:");
      
      IMathSequence fb = new Fibonacci();
      fb.setInitial(1);
      
      IBarChart bcf = new GraphicBarChart();
      bcf.setFilled(true);
      bcf.setN(5);
      
      bcf.connect(fb);
      bcf.plot();
   }
}
