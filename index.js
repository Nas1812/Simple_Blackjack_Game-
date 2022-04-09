

let player = {
  name: "tokola Betu",
  chips: 145
}

let cards = [];
let sum = 0; 
let hasblackjack = false;
let isAlive = false;
let buttonPress = false;

let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent=player.name + " :" + "$" + player.chips

function getRandomCard() {
 
  let num = Math.floor(Math.random() * 13) + 1;
  if (num > 10) {
    return 10;
  }
  else if(num === 1){
    return 11;
  }
  else {
    return num;
  }
}

  



function renderGame() {

  
  if (sum <= 20) {
    message = "Do you want to draw a new card. "
  }
  else if (sum === 21) {
    message = "You have got Blackjack"
    hasblackjack = true;
  }
  else {
    message = "You are out!"
    isAlive = false;
  }
  messageEl.textContent = message;
  cardsEl.textContent = "Cards:- "
  for (i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] +" ";

  }
  
  sumEl.textContent = "Sum:- " + sum;
 
}

function start() {
  if (buttonPress === false) {
    let firstCard = getRandomCard();
  let secondCard = getRandomCard();
   cards = [firstCard,secondCard];
   sum=firstCard+secondCard;
    isAlive = true;
    buttonPress = true;
  renderGame();
  }
  
}


function newCard() {
  
  if (isAlive === true && hasblackjack === false) {
    let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}
