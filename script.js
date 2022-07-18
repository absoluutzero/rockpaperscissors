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

function Game(playerSelection, computerSelection = getComputerChoice()) {
    let lower = playerSelection.toLowerCase();
    if (lower === "rock" && computerSelection === "scissors") {
        return "player won, rock beats scissors";
    } else if (lower === "rock" && computerSelection === "paper") {
        return "computer won, paper beats rock";
    } else if (lower === "rock" && computerSelection === "rock") {
        return "Tie, both chose rock";
    } else if (lower === "paper" && computerSelection === "scissors") {
        return "computer won, scissors beats paper";
    } else if (lower === "paper" && computerSelection === "rock") {
        return "player won, paper beats rock";
    } else if (lower === "paper" && computerSelection === "paper") {
        return "Tie! Both chose paper";
    } else if (lower === "scissors" && computerSelection === "paper") {
        return "player won, scissors beats paper";
    } else if (lower === "scissors" && computerSelection === "rock") {
        return "computer won, rock beats scissors";
    } else if (lower === "scissors" && computerSelection === "scissors") {
        return "Tie!, both chose scissors";
    } else {
        return "You can't choose that."
    }
}