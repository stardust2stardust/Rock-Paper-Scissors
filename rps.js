const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

let playerScore = 0;
let compScore = 0;
let playerSelection = ''

let click_rock = rock.addEventListener('click', () => {
    click_rock = rock.outerText.toLowerCase();
    playerSelection = click_rock
    computerSelection = computerPlay();
    let winner = playOneRound(playerSelection, computerSelection);
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        compScore++;
    }
    console.log(`Player: ${playerScore}    Computer: ${compScore}`)
});

let click_paper = paper.addEventListener('click', () => {
    click_paper = paper.outerText.toLowerCase();
    playerSelection = click_paper
    computerSelection = computerPlay();
    let winner = playOneRound(playerSelection, computerSelection);
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        compScore++;
    }
    console.log(`Player: ${playerScore}    Computer: ${compScore}`)
});

let click_scissors = scissors.addEventListener('click', () => {
    click_scissors = scissors.outerText.toLowerCase();
    playerSelection = click_scissors
    computerSelection = computerPlay();
    let winner = playOneRound(playerSelection, computerSelection);
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        compScore++;
    }
    console.log(`Player: ${playerScore}    Computer: ${compScore}`)
});
function displayWinner(playerScore, compScore) {
    if (playerScore > compScore) {
        console.log("You win!");
    } else if (playerScore < compScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie.");
    }
}

