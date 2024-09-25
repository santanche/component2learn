package pt.c08componentes.s01chartseq.s04interface.chart;

import pt.c08componentes.s01chartseq.s04interface.sequence.ISequence;

public class BarChart implements IChart {
   private boolean filled;
   private char character;
   private int n;
   
   private ISequence sequence;
   
   public BarChart(boolean filled, char character, int n,
                   ISequence sequence) {
      this.filled = filled;
      this.character = character;
      this.n = n;
      this.sequence = sequence;
   }

   public boolean isFilled() {
      return filled;
   }

   public void setFilled(boolean filled) {
      this.filled = filled;
   }

   public char getCharacter() {
      return character;
   }

   public void setCharacter(char character) {
      this.character = character;
   }

   public int getN() {
      return n;
   }

   public void setN(int n) {
      this.n = n;
   }

   public void plot() {
      if (sequence != null) {
         int value = sequence.first();
         for (int s = 1; s <= n; s++) {
            for (int v = 1; v < value; v++)
               System.out.print((filled) ? character : ' ');
            System.out.println(character);
            value = sequence.next();
         }
      }
   }
}
