/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//init function that adds event listeners and calls the function
function init(){
    document.getElementById("outdoorTemp").focus(); 
    document.getElementById("calcButton").addEventListener("click", calculateWindChill); 
    document.getElementById("resetButton").addEventListener("click", resetItems);
    calculateWindChill(); 
}
//function that calculates the wind chill and using isNan() check to see if the user entered a number. Then the calculation is done.
function calculateWindChill(){
    var temp = document.getElementById("outdoorTemp").value; 
    var speed = document.getElementById("avgWindSpeed").value; 
    temp = parseInt(temp);
    speed = parseInt(speed);    
    if(isNaN(temp)){
        alert("Temp is not a number!");
    }else{
            
    }  
    if(isNaN(speed)){ 
        alert("Speed is not a number!"); 
    }else{ 
         
    }
    var windChill = 35.74 + (0.6215 * temp) - (35.75* (speed**0.16)) + (0.4275 * temp * (speed**0.16)); 
    windChill = parseFloat(windChill);  
    document.getElementById("windChill").value = windChill.toFixed(2); 
} 
//function that resets the items by setting there value to a blank string
function resetItems(){
    document.getElementById("outdoorTemp").focus();
    document.getElementById("outdoorTemp").value = "";   
    document.getElementById("avgWindSpeed").value = "";
    document.getElementById("windChill").value = "";  
}


