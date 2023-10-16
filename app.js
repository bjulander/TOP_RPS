
let compArray = ["Rock", "Paper", "Scissors"]



function getComputerChoice(){
    let compChoice = compArray[Math.floor(Math.random() * compArray.length)]
    return compChoice
}

let compSelection = getComputerChoice()
let playerSelection = prompt("Rock, Paper, or Scissors?")

console.log(playerSelection)
console.log(compSelection)

function playRound(playerSelection, compSelection){
    if (playerSelection == compSelection) {
        return "Tie! Try Again."
    } else if (playerSelection == "Rock" && compSelection == "Scissors") {
        return "You win! Rock beats Scissors."
    } else if (playerSelection == "Paper" && compSelection == "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection == "Scissors" && compSelection == "Paper") {
        return "You win! Scissors beats Paper."
    } else if (compSelection == "Scissors" && playerSelection == "Paper") {
        return "You lose! Scissors beats Paper."
    } else if (compSelection == "Rock" && playerSelection == "Scissors") {
        return "You lose! Rock beats Scissors."
    } else (compSelection == "Paper" && playerSelection == "Rock")
        return "You lose! Paper beats Rock."
}
playRound(playerSelection, compSelection)

