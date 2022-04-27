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

function clickRock() {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {

        playerSelection = rock.outerText.toLowerCase();
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
            gameOver();
        }
    }
}

function clickPaper() {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {

        playerSelection = paper.outerText.toLowerCase();
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
            gameOver();
        }
    }
}

function clickScissors() {
    roundCount += 1
    rounds.innerText = roundCount;
    if (!isGameOver) {

        playerSelection = scissors.outerText.toLowerCase();
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
            gameOver();
        }
    }
}

function gameOver() {
    scissors.removeEventListener('click', clickScissors);
    paper.removeEventListener('click', clickPaper);
    rock.removeEventListener('click', clickRock);
    if (playerScore > compScore) {
        final.innerText = "You win!";
    } else {
        final.innerText = "You lose!";
    }
}
rock.addEventListener('click', clickRock);
paper.addEventListener('click', clickPaper);
scissors.addEventListener('click', clickScissors);

