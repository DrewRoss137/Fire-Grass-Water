const choices = ["fire", "grass", "water"];

const playerChoice = retrievePlayerChoice();
console.log(playerChoice);

const rivalChoice = retrieveRivalChoice();
console.log(rivalChoice);

playRound = playRound(playerChoice, rivalChoice);

function retrievePlayerChoice() {
    let playerChoice = prompt("Choice: ");
    return(playerChoice);
}

function retrieveRivalChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return(randomChoice);
}

function playRound(playerChoice, rivalChoice) {
    playerChoice = playerChoice.toLowerCase();
    rivalChoice = rivalChoice.toLowerCase();
    if (playerChoice === rivalChoice) {
        return("Draw");
    }
    else if (playerChoice === "fire" && rivalChoice == "grass" || playerChoice === "grass" && rivalChoice === "water" || playerChoice === "water" && rivalChoice === "fire") {
        return("Win");
    }
    else {
        return("Lose")
    }
}
