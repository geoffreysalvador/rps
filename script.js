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
                break;
            case "scissors":
                result = "You lose! Rock beats scissors!";
                break;
        }

    } else if (computerSelection === "Paper") {
        switch (player){
            case "rock":
                result = "You lose! Paper beats rock!";
                break;
            case "paper":
                result = "It's a tie!";
                break;
            case "scissors":
                result = "You win! Scissors beat paper!";
                break;
        }

    } else if (computerSelection === "Scissors") {
        switch (player){
            case "rock":
                result = "You win! Rock beats scissors!";
                break;
            case "paper":
                result = "You lose! Scissors beat paper!";
                break;
            case "scissors":
                result = "It's a tie!";
                break;
        }

    }
    return result;
}

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