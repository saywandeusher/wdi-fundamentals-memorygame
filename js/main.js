var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
	/*
	if(cardsInPlay.length === 2){
	*/
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}
	/*	
	}else{
		alert("Please select only 2 cards.")
	}
	*/
};
var flipcard = function(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipcard(0);
flipcard(2);


