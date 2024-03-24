function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result;

    if (computerSelection === "Rock") {
        switch (player){
            case "rock":
                result = "It's a tie!";
                break;
            case "paper":
                result = "You win! Paper beats rock!";
                playerScore += 1;
                break;
            case "scissors":
                result = "You lose! Rock beats scissors!";
                computerScore += 1;
                break;
        }

    } else if (computerSelection === "Paper") {
        switch (player){
            case "rock":
                result = "You lose! Paper beats rock!";
                computerScore += 1;
                break;
            case "paper":
                result = "It's a tie!";
                break;
            case "scissors":
                result = "You win! Scissors beat paper!";
                playerScore += 1;
                break;
        }

    } else if (computerSelection === "Scissors") {
        switch (player){
            case "rock":
                result = "You win! Rock beats scissors!";
                playerScore += 1;
                break;
            case "paper":
                result = "You lose! Scissors beat paper!";
                computerScore += 1;
                break;
            case "scissors":
                result = "It's a tie!";
                break;
        }

    }
    return result;
}


/*
function playGame() {
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}

const playerSelection = prompt("Please make your choice");
const computerSelection = getComputerChoice();
console.log(playGame());

*/

let playerScore = 0;
let computerScore = 0;

const dispPlayScore = document.querySelector('#player');
const dispCompScore = document.querySelector('#computer');

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    const text = document.querySelector('#result');
    text.textContent = result;

    dispPlayScore.textContent = playerScore;
    dispCompScore.textContent = computerScore;

    if (playerScore === 5) {
        alert("You win!");
        location.reload();
    }
    
    if (computerScore === 5) {
        alert('You lose!');
        location.reload();
    }
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    const text = document.querySelector('#result');
    text.textContent = result;

    dispPlayScore.textContent = playerScore;
    dispCompScore.textContent = computerScore;

    if (playerScore === 5) {
        alert("You win!");
        location.reload();
    }
    
    if (computerScore === 5) {
        alert('You lose!');
        location.reload();
    }
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function() {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    const text = document.querySelector('#result');
    text.textContent = result;

    dispPlayScore.textContent = playerScore;
    dispCompScore.textContent = computerScore;

    if (playerScore === 5) {
        alert("You win!");
        location.reload();
    }
    
    if (computerScore === 5) {
        alert('You lose!');
        location.reload();
    }
})

