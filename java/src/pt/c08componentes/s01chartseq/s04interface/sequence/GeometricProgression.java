package pt.c08componentes.s01chartseq.s04interface.sequence;

public class GeometricProgression implements ISequence {
   private int initial,
               ratio;
   private int current;
   
   public GeometricProgression(int initial, int ratio) {
      this.initial = initial;
      this.ratio = ratio;
      current = initial;
   }
   
   public int getInitial() {
      return initial;
   }
   
   public void setInitial(int initial) {
      this.initial = initial;
   }
   
   public int getRatio() {
      return ratio;
   }
   
   public void setRatio(int ratio) {
      this.ratio = ratio;
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
