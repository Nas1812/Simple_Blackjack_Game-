


const comEl = document.getElementById("com__choice")
const userEl = document.querySelector("#user__choice") //it also can be use
const resultEl = document.getElementById("result")

const choice = document.querySelectorAll("button")//pick up the button ids
// console.log(choice)
let userChoice
let comChoice
let resultDisplay

// grab the buttons
choice.forEach(choice => choice.addEventListener("click", (e) => {
  // console.log(choice)
  userChoice = e.target.id //target the ids
  // console.log(userChoice)
  userEl.innerHTML = userChoice//display in userEl
  // console.log(userEl)
  generateComChoice()
  getResult()
}))



function generateComChoice() {
 
  const randomNumber = Math.floor(Math.random() * 3 + 1 )  //or choice.lenght can be used
  if (randomNumber === 1)
  {
    comChoice = "Paper"
   
  }
   if (randomNumber === 2) {
    comChoice = "Rock"
    
}
  if (randomNumber === 3) {
    comChoice = "Scissor"
  }
  comEl.textContent = comChoice
  // console.log(randomNumber)
}


function getResult() {

  if (comChoice === userChoice) {

    resultDisplay = "Its a Draw"
  
  }
  if (comChoice === 'Rock' && userChoice=== 'Paper') {

    resultDisplay = "You Win"
  
  }
  if (comChoice === 'Rock' && userChoice==='Scissor') {

    resultDisplay = "You Lose"
  
  }
  if (comChoice === 'Scissor' && userChoice==='Rock') {

    resultDisplay = "You Win"
  
  }
  if (comChoice === 'Scissor' && userChoice==='Paper') {

    resultDisplay = "You Lose"
  
  }
  if (comChoice === 'Paper' && userChoice==='rock') {

    resultDisplay = "You Lose"
  
  }
  if (comChoice === 'Paper' && userChoice==='Scissor') {

    resultDisplay = "You Win"
  
  }

  resultEl.innerHTML = resultDisplay
}

