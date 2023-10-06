
let compArray = ["rock", "paper", "scissors"]
let playerSelection = prompt("Rock, Paper, or Scissors?")


function getComputerChoice(){
    let compChoice = compArray[Math.floor(Math.random() * compArray.length)]
    return compChoice
}

let compSelection = getComputerChoice()


function playRound(playerSelection, compSelection){

}

