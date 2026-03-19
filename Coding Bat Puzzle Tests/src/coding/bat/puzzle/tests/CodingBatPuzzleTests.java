/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package coding.bat.puzzle.tests;

/**
 *
 * @author 1101923
 */
public class CodingBatPuzzleTests {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
    }
    public boolean cigarParty(int cigars, boolean isWeekend) {
        if(cigars >= 40 && cigars <=60){
            return true;
  }
  if(isWeekend){ 
      return true;
  } 
  else{
    return false;
  }  
  }  
}
     