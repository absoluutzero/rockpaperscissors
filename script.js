let playerScore = 0
let computerScore = 0

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3+1)
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }    
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let lower = playerSelection.toLowerCase();
    if (lower === "rock" && computerSelection === "scissors") {
        playerScore = ++playerScore;
        return "player won, rock beats scissors";
    } else if (lower === "rock" && computerSelection === "paper") {
        computerScore = ++computerScore;
        return "computer won, paper beats rock";
    } else if (lower === "rock" && computerSelection === "rock") {
        return "Tie, both chose rock";
    } else if (lower === "paper" && computerSelection === "scissors") {
        computerScore = ++computerScore;
        return "computer won, scissors beats paper";
    } else if (lower === "paper" && computerSelection === "rock") {
        playerScore = ++playerScore;
        return "player won, paper beats rock";
    } else if (lower === "paper" && computerSelection === "paper") {
        return "Tie! Both chose paper";
    } else if (lower === "scissors" && computerSelection === "paper") {
        playerScore = ++playerScore;
        return "player won, scissors beats paper";
    } else if (lower === "scissors" && computerSelection === "rock") {
        computerScore = ++computerScore;
        return "computer won, rock beats scissors";
    } else if (lower === "scissors" && computerSelection === "scissors") {
        return "Tie!, both chose scissors";
    } else {
        return "You can't choose that."
    }
}

function Game() {
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Make a Choice of Rock/Paper/Scissors:")
        console.log(playRound(playerSelection));
    }
    console.log("player score: " + playerScore)
    console.log("computer score: " + computerScore)
    if (playerScore > computerScore) {
        console.log("The Player Won This Game")
    } else if (computerScore > playerScore) {
        console.log("The Computer Won This Game")
    } else {
        console.log("This game was a tie.")
    }
}