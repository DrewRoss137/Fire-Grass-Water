const choices = ["fire", "grass", "water"];

playerChoice = retrievePlayerChoice();
console.log(playerChoice);

rivalChoice = retrieveRivalChoice();
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
    console.log(playerChoice);
    rivalChoice = rivalChoice.toLowerCase();
    console.log(rivalChoice);
}
