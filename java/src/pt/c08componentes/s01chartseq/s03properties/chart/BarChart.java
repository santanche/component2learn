package pt.c08componentes.s01chartseq.s03properties.chart;

import pt.c08componentes.s01chartseq.s03properties.sequence.GeometricProgression;

public class BarChart {
   private boolean filled;
   private char character;
   private int n;
   
   private GeometricProgression sequence;
   
   public BarChart() {
      filled = true;
      character = '*';
      n = 3;
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

   public void connect(GeometricProgression sequence) {
      this.sequence = sequence;
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
