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
            return "player";
        } else if (playerSelection === "scissors") {
            return "computer";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "player";
        } else if (playerSelection === "rock") {
            return "computer";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "player"
        } else if (playerSelection === "paper") {
            return "computer";
        }
    } 
    }

function game() {

    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter one of the following: Rock, Paper, Scissors.').toLowerCase();
        console.log(`You threw ${playerSelection}`);
        const computerSelection = computerPlay();
        console.log(`The computer threw ${computerSelection}`)
        let winner = playOneRound(playerSelection, computerSelection);
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            compScore++;
        }
        console.log(`Player: ${playerScore}    Computer: ${compScore}`)
    }
    if (playerScore > compScore) {
        console.log("You win!");
    } else if (playerScore < compScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie.")
    }
}

//const playerSelection = prompt('Enter one of the following: Rock, Paper, Scissors.').toLowerCase()
//console.log(playerSelection)
//const computerSelection = computerPlay()
//console.log(computerSelection)
//console.log(playOneRound(playerSelection, computerSelection))
game()