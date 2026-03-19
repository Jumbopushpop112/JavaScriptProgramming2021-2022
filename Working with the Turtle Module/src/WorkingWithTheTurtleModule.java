/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author 1101923
 */
public class WorkingWithTheTurtleModule {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Turtle bob = new Turtle();
        //drawing a rectangle
        bob.forward(150);
        bob.left(90);
        bob.forward(80);
        bob.left(90);
        bob.forward(150);
        bob.left(90);
        bob.forward(80);
        bob.left(90);
        //draw the triangle
        bob.forward(200);
        bob.left(120);
        bob.forward(200);
        bob.left(120);
        bob.forward(200); 
        bob.penColor("white");
        bob.forward(200);
        bob.penColor("black");  
        
 
    } 
    
}
