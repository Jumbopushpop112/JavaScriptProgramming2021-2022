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
    document.getElementById("dealButton").addEventListener("click", dealCards);
    document.getElementById("hitButton").addEventListener("click", hit); 
    document.getElementById("stayButton").addEventListener("click", stay);
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
    //pick card 
    //var suit = parseInt((Math.random()*4) + 1);  
    //var value = parseInt((Math.random()*13) + 1);
    var card = parseInt(Math.random() * (52));
    var cardVal = card%13;
    var suitVal = parseInt(card/13); 
    //create the element 
    let i = document.createElement("IMG");
    i.src = getImageFile(cardVal, suitVal); 
    i.id = cardID;
    //place the element    
    document.getElementById(containerId).appendChild(i); 
    return cardVal;
}       
function dealCards(){   
        document.getElementById("dealButton").disabled = true; 
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
        myDealerElement.children[2].src = getImageFile(cardVal, suitVal); 
        cardVal += 1;
        if(cardVal > 10){
            cardVal = 10; 
        }
        dealer.dealersSum += cardVal;
        document.getElementById("txtDealersScore").value = dealer.dealersSum;
        //drawCard();        
        //deal player cards 
//        var playerCard1 = document.getElementById("txtPlayersCard1");
//        var playerCard2 = document.getElementById("txtPlayersCard2");
//        var card1 = parseInt(Math.random()*11) + 1;  
//        var card2 = parseInt(Math.random()*11) + 1;
//        playerCard1.value = card1; 
//        playerCard2.value = card2; 
//        player.arrayPlayersCards.push(card1,card2);
//        //player.playersSum = sum(player.arrayPlayerCards(); 
//        //deal dealer cards
//        //set dealers second card to "?"
//        var dealerCard1 = document.getElementById("txtDealersCard1");
//        var dealerCard2 = document.getElementById("txtDealersCard2");
//        var card3 = parseInt(Math.random()*11) + 1;
//        var card4 = parseInt(Math.random()*11) + 1;
//        dealerCard1.value = card3; 
//        dealerCard2.style.backgroundColor = "black";
//        dealerCard2.value = card4;
//        dealer.arrayDealersCards.push(card3); 
//        //Number() function converts the input elements' values to a number (int)
//        player.playersSum = Number(playerCard1.value) + Number(playerCard2.value);
//        checkPlayerSum();
//        checkDealerSum();  
//        checkBothHands();   
//      
}         
//function checkBothHands(){ 
//    //if player wins
//    if(player.playersSum === 21){ 
//        alert("Player wins with a sum of " + player.playersSum);
//        document.getElementById("txtPlayersScore").value = player.totalPlayerWins + 1; 
//     } 
//    else if(player.playersSum < 21){
//        alert("With a sum of " + player.playersSum + ", you should hit or stay");  
//    }
//    //if dealer wins   
//    else if(player.playersSum > 21){
//        alert("Dealer wins with a sum of " + player.playersSum);
//        document.getElementById("txtDealersScore").value = dealer.totalDealerWins + 1;
//    }
//    //tie between players    
//    else if(player.playersSum === dealer.dealersSum){  
//         alert("Both players tied with a sum of " + dealer.dealersSum);
//         document.getElementById("txtDealersScore").value = dealer.totalDealerWins + 0; 
//         document.getElementById("txtPlayersScore").value = player.totalPlayerWins + 0; 
//    }  
//}  
//function checkPlayerSum(){ 
//       let count = 0;
//       player.playersSum = 0;
//       for(let i = 0; i < player.arrayPlayersCards.length; i++){
//        if(count < 1 && player.arrayPlayersCards[i]===1){
//               player.playersSum += 11;
//               count += 1;  
//        }
//        else if(count >= 1 && player.arrayPlayersCards[i]===1){
//               player.playersSum += 1;
//               count += 1; 
//        }
//        else{     
//              player.playersSum += player.arrayPlayersCards[i];
//        } 
//  } 
//  console.log(player.playersSum);
//}
//function checkDealerSum(){
//       let count = 0;
//       dealer.dealersSum = 0;
//       for(let i = 0; i < dealer.arrayDealersCards.length; i++){  
//       if(count < 1 && dealer.arrayDealersCards[i]===1){
//               dealer.dealersSum += 11;
//               count += 1;
//       }
//       else if(count >= 1 && dealer.arrayDealersCards[i]===1){
//               dealer.dealersSum += 1;
//               count += 1;   
//       }
//       else{   
//              dealer.dealersSum += dealer.arrayDealersCards[i]; 
//       }    
//  }  
//  console.log(dealer.dealersSum);
//} 
function hit(){  
//    newCardBox = document.createElement("INPUT");
//    var newCardValue = parseInt(Math.random()*11) + 1; 
//    newCardBox.setAttribute("class","txtBox");      
//    newCardBox.setAttribute("type","text");
//    //newCardBox.style.marginRight = "3px";
//    document.getElementById("playersHand").append(newCardBox); 
//    newCardBox.value = newCardValue; 
//    newCardBox.id = "newPlayerCard";
//    player.arrayPlayersCards.push(newCardBox.value);
//    player.playersSum += newCardValue; 
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
//    alert("Player is staying at " + player.playersSum + ". Play switched to dealer.");
//    var dealerCardValue2 = parseInt(Math.random()*11) + 1;
//    document.getElementById("txtDealersCard2").style.backgroundColor = "white";
//    document.getElementById("txtDealersCard2").value = dealerCardValue2; 
//    dealer.arrayDealersCards.push(dealerCardValue2);
//    dealer.dealersSum += dealerCardValue2;
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
//   document.getElementById("txtDealersCard1").value = "";
//   document.getElementById("txtDealersCard2").value = "";
//   document.getElementById("txtPlayersCard1").value = "";
//   document.getElementById("txtPlayersCard2").value = "";
//   document.getElementById("txtDealersCard2").style.backgroundColor = "white";
//   document.getElementById("dealButton").disabled = false;
//   document.getElementById("txtDealersScore").value = "";
//   document.getElementById("txtPlayersScore").value = "";
   document.getElementById("dealButton").disabled = false;  
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



 


