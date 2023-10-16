
let compArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let compChoice = compArray[Math.floor(Math.random() * compArray.length)]
    return compChoice
}

let compSelection = getComputerChoice()
let playerSelection = prompt("Rock, Paper, or Scissors?")

function playRound(playerSelection, compSelection){
    console.log(playerSelection)
    console.log(compSelection)
    if (compSelection == "Paper" && playerSelection == "Rock") {
        alert("You lose! Paper beats Rock.")
    } else if (playerSelection == "Rock" && compSelection == "Scissors") {
        alert("You win! Rock beats Scissors.")
    } else if (playerSelection == "Paper" && compSelection == "Rock") {
        alert("You win! Paper beats Rock")
    } else if (playerSelection == "Scissors" && compSelection == "Paper") {
        alert("You win! Scissors beats Paper.")
    } else if (compSelection == "Scissors" && playerSelection == "Paper") {
        alert("You lose! Scissors beats Paper.")
    } else if (compSelection == "Rock" && playerSelection == "Scissors") {
        alert("You lose! Rock beats Scissors.")
    } else {
        alert("Tie! Try Again.")
    }
}
playRound(playerSelection, compSelection)

console.log(playerSelection)
console.log(compSelection)



