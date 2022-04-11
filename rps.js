function computerPlay() {
    const tools = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    return tools[choice];
}

function playOneRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It is a tie.";
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === "scissors") {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === "paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } 
    }



const playerSelection = prompt('Enter one of the following: Rock, Paper, Scissors.').toLowerCase()
console.log(playerSelection)
const computerSelection = computerPlay()
console.log(computerSelection)
console.log(playOneRound(playerSelection, computerSelection))