package pt.c06patterns.factory.s03aquatic;

import pt.c06patterns.factory.s03aquatic.console.AquaticFactoryConsole;
import pt.c06patterns.factory.s03aquatic.interfaces.IAquaticFactory;
import pt.c06patterns.factory.s03aquatic.interfaces.IFishTank;
import pt.c06patterns.factory.s03aquatic.interfaces.ISeaAnimal;

public class AppAquaticConsole2 {
   public static void main(String[] args) {
      IAquaticFactory factory = new AquaticFactoryConsole();
      ISeaAnimal aq1 = factory.createSeaAnimal("fish"),
                 aq2 = factory.createSeaAnimal("crab");
      IFishTank ft = factory.createFishTank("standard");
      ft.addSeaAnimal(aq1);
      ft.addSeaAnimal(aq2);
      ft.showFishTank();
    }
}
