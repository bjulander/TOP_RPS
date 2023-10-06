
let compArray = ["rock", "paper", "scissors"]



function getComputerChoice(){
    let compChoice = compArray[Math.floor(Math.random() * compArray.length)]
    return compChoice
}

let compSelection = getComputerChoice()
//let playerSelection = prompt("Rock, Paper, or Scissors?")

console.log(playerSelection)
console.log(compSelection)

function playRound(playerSelection, compSelection){
    console.log(playerSelection)
    console.log(compSelection)
}
playRound()

