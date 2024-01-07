// Setting points to 0
let playerPoint = 0;
let computerPoint = 0;

// Getting computer's input
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}


// Playing a round of rock, paper and scissors and updating scores
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    
    if (playerChoice === "rock" && computerChoice === "paper") {
        computerPoint += 1;
        return "You Lose! Paper beats Rock"
    }   else if (playerChoice === "paper" && computerChoice === "rock") {
        playerPoint += 1;
        return "You Win! Paper beats Rock"
    }   else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerPoint += 1;
        return "You Win! Rock beats Scissors"
    }   else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerPoint += 1;
        return "You Lose! Rock beats Scissors"
    }   else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerPoint += 1;
        return "You Lose! Scissors beats Paper"
    }   else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerPoint += 1;
        return "You Win! Scissors beats Paper"
    }   else {
        return "It's a tie"
    }
}

// Playing until one of them reaches 5 points
function game() {
    if (playerPoint === 5) {
        let buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        });
        winner.textContent = "You Win!"
    }   else if (computerPoint === 5) {
        let buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        });
        winner.textContent = "You Lose!"
    }
}

const container = document.querySelector('#container');
const result = document.createElement('div');
result.style.textAlign = 'center';
result.style.fontSize = '45px';
result.style.marginTop = '50px';

const scoreBox = document.createElement('div');
scoreBox.style.display = 'flex';
scoreBox.style.marginTop = '70px';
scoreBox.style.gap = '170px';
scoreBox.style.justifyContent = 'center';
scoreBox.style.fontSize = '50px';

const playerScore = document.createElement('div');
const computerScore = document.createElement('div')

const winner = document.createElement('div');
winner.style.textAlign = 'center';
winner.style.fontSize = '45px';
winner.style.marginTop = '50px';

document.getElementById('rock').addEventListener('click', function() {
    result.textContent = playRound('rock', getComputerChoice());
    playerScore.textContent = "Player Score: " + playerPoint;
    computerScore.textContent = " Computer Score: " + computerPoint;
    game();
});
document.getElementById('paper').addEventListener('click', function() {
    result.textContent = playRound('paper', getComputerChoice());
    playerScore.textContent = "Player Score: " + playerPoint;
    computerScore.textContent = " Computer Score: " + computerPoint;
    game();
});
document.getElementById('scissors').addEventListener('click', function() {
    result.textContent = playRound('scissors', getComputerChoice());
    playerScore.textContent = "Player Score: " + playerPoint;
    computerScore.textContent = " Computer Score: " + computerPoint;
    game();
});

playerScore.textContent = "Player Score: " + playerPoint;
computerScore.textContent = " Computer Score: " + computerPoint;

scoreBox.appendChild(playerScore);
scoreBox.appendChild(computerScore);
container.appendChild(scoreBox);
container.appendChild(result);
container.appendChild(winner);