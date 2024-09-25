package pt.c08componentes.s01chartseq.s02pull.sequence;

public class GeometricProgression {
   private int initial,
               ratio;
   private int current;
   
   public GeometricProgression(int initial, int ratio) {
      this.initial = initial;
      this.ratio = ratio;
      current = initial;
   }
   
   public int first() {
      current = initial;
      return current;
   }
   
   public int next() {
      current *= ratio;
      return current;
   }
}
