/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//"Some global variables you can use:
//Declare Global Variables Needed
var player = {
    playersSum:0, 
    isPlayersTurn:true,
    arrayPlayersCards:[],
    totalPlayerWins:0
};
var dealer = {
    dealersSum:0,
    isDealersTurn:false,
    arrayDealersCards:[],
    totalDealerWins:0  
};   
function initializeGame(){
    document.getElementById("playAgainButton").addEventListener("click", playAgain);
    dealCards(); 
    for(let n = 0; n < 2; n++){
        let i = document.createElement("IMG");
        i.src = getImageFile(-1, -1);
        i.id = "playersBackCards";
        //place the element    
        document.getElementById("playersHand").appendChild(i);
    } 
     for(let n = 0; n < 2; n++){
        let i = document.createElement("IMG");
        i.src = getImageFile(-1, -1);
        i.id = "dealersBackCards";      
        //place the element      
        document.getElementById("dealersHand").appendChild(i);
    }  
}  
function getImageFile(cardVal, suitVal){
    //suit doesn't matter when rendering the back of the card
    if(cardVal === -1){
        const fileName = "PNG/blue_back.png";
        return fileName;    
    }
    //assume suit number between [1,4]; 1=club, 2=diamond, 3=heart, 4=spade
    const suits = ["C","D","H","S"];
    //const colors = ["blue","gray","green","purple","yellow","red"];
    //const color_identifier = colors[suitVal]; 
    const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    const back = "back";  
    //value:= 0 = reverse, 1=ace, 2-10 obvious, 11 = j, 12=q, 13=k
    //const back_value = back[cardVal]; 
    const suit_value = suits[suitVal];
    const value_value = values[cardVal]; 
    const filename = "PNG/" + value_value + suit_value + ".png";
    return filename;                  
}  
function drawCard(containerId, cardID){       
    var card = parseInt(Math.random() * (52));
    var cardVal = card%13;
    var suitVal = parseInt(card/13); 
    let i = document.createElement("IMG");
    i.src = getImageFile(cardVal, suitVal); 
    i.id = cardID;   
    document.getElementById(containerId).appendChild(i); 
    return cardVal;
}       
function dealCards(){   
        //document.getElementById("dealButton").disabled = true; 
        const myPlayerElement = document.getElementById("playersHand");
        for(let i = 1; i<myPlayerElement.children.length; i++){
                var card = parseInt(Math.random() * (52));
                var cardVal = card%13;   
                var suitVal = parseInt(card/13); 
                myPlayerElement.children[i].src = getImageFile(cardVal, suitVal);
                cardVal += 1;
                if(cardVal > 10){ 
                    cardVal = 10;
                }
                player.playersSum += cardVal;       
        }  
        document.getElementById("txtPlayersScore").value = player.playersSum;
        const myDealerElement = document.getElementById("dealersHand");
        var card = parseInt(Math.random() * (52));
        var cardVal = card%13;    
        var suitVal = parseInt(card/13); 
        myDealerElement.children.src = getImageFile(cardVal, suitVal); 
        cardVal += 1;
        if(cardVal > 10){
            cardVal = 10; 
        } 
//        dealer.dealersSum += cardVal; 
//        document.getElementById("txtDealersScore").value = dealer.dealersSum;
} 
function hit(){  
      var cardVal = drawCard("playersHand","playerCard");
      cardVal += 1; 
      if (cardVal > 10){
          cardVal = 10;
      }
      player.playersSum += cardVal;
      console.log(player.playersSum);
      displayScore();
}
function displayScore(){
    var dealersScoreBox = document.getElementById("txtDealersScore");
    var playersScoreBox = document.getElementById("txtPlayersScore");
    dealersScoreBox.value = dealer.dealersSum;
    playersScoreBox.value = player.playersSum;
}
function stay(){
    alert("Player is staying at " + player.playersSum + ". Player switched to dealer.");
     const myDealerElement = document.getElementById("dealersHand");
     var card = parseInt(Math.random() * (52));
     var cardVal = card%13;   
     var suitVal = parseInt(card/13); 
     myDealerElement.children[1].src = getImageFile(cardVal, suitVal);
     dealer.dealersSum += cardVal;
     document.getElementById("txtDealersScore").value = dealer.dealersSum; 
    if(player.playersSum < 21){
        alert("Sum is less than 21. Hit again.");
    }
    if(player.playersSum > 21){
        alert("Dealer wins!");
        playAgain();
    }
    if(dealer.dealersSum > 21){ 
        alert("Player wins!");
        playAgain(); 
    }
    if(player.playersSum === 21){
       alert("Player wins with a sum of 21!");
       playAgain();
    }
    if(dealer.dealersSum === 21){
       alert("Dealer wins with a sum of 21!");
       playAgain();  
    }
}    
function playAgain(){  
   var hitPlayersCards = document.querySelectorAll("[id='playerCard']");
   for(var i = 0; i < hitPlayersCards.length; i++){     
        hitPlayersCards[i].remove();      
   } 
   var playerTurnedCards = document.querySelectorAll("[id='playersBackCards']");
   for(var i = 0; i < playerTurnedCards.length; i++){
       playerTurnedCards[i].src = "PNG/blue_back.png";   
   } 
   var dealerTurnedCards = document.querySelectorAll("[id='dealersBackCards']");
   for(var i = 0; i < dealerTurnedCards.length; i++){ 
       dealerTurnedCards[i].src = "PNG/blue_back.png";   
   }
   player.playersSum += 0; 
   dealer.dealersSum += 0;
   document.getElementById("txtDealersScore").value = 0;
   document.getElementById("txtPlayersScore").value = 0;   
}



 




