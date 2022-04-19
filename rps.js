const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rounds = document.querySelector('#rounds');
const final = document.querySelector('#finalWinner');
const playerCount = document.querySelector('#playerScore');
const compCount = document.querySelector('#compScore');
let playerScore = 0;
let compScore = 0;
let playerSelection = '';
let isGameOver = false;
roundCount = 0;

function computerPlay() {
    const tools = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
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

function displayWinner(playerScore, compScore) {
    if (playerScore > compScore) {
        console.log("You win!");
    } else if (playerScore < compScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie.");
    }
}


let click_rock = rock.addEventListener('click', () => {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {
        click_rock = rock.outerText.toLowerCase();
        playerSelection = click_rock;
        computerSelection = computerPlay();
        let winner = playOneRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
            playerCount.innerText = playerScore;
        } else {
            compScore++;
            compCount.innerText = compScore;
        }

        if (playerScore === 5 || compScore === 5) {
            isGameOver = true;
            if (playerScore > compScore) {
                final.innerText = "You win!";
            } else {
                final.innerText = "You lose!";
            }
        }
    }
});

let click_paper = paper.addEventListener('click', () => {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {
        click_paper = paper.outerText.toLowerCase();
        playerSelection = click_paper
        computerSelection = computerPlay();
        let winner = playOneRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
            playerCount.innerText = playerScore;
        } else {
            compScore++;
            compCount.innerText = compScore;
        }
        if (playerScore === 5 || compScore === 5) {
            isGameOver = true;
            if (playerScore > compScore) {
                final.innerText = "You win!";
            } else {
                final.innerText = "You lose!";
            }
        }
    }
});

let click_scissors = scissors.addEventListener('click', () => {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {
        click_scissors = scissors.outerText.toLowerCase();
        playerSelection = click_scissors
        computerSelection = computerPlay();
        let winner = playOneRound(playerSelection, computerSelection);
        if (winner === 'player') {
            playerScore++;
            playerCount.innerText = playerScore;
        } else {
            compScore++;
            compCount.innerText = compScore;
        }
        if (playerScore === 5 || compScore === 5) {
            isGameOver = true;
            if (playerScore > compScore) {
                final.innerText = "You win!";
            } else {
                final.innerText = "You lose!";
            }
        }
    }
});

