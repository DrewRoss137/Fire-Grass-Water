const choices = ["Fire", "Grass", "Water"];
playerChoice = retrievePlayerChoice();
console.log(playerChoice);

rivalChoice = retrieveRivalChoice();
console.log(rivalChoice);

playRound = playRound();

function retrievePlayerChoice() {
    let playerChoice = prompt("Choice: ");
    return(playerChoice);
}

function retrieveRivalChoice() {
    let rivalChoice = Math.floor(Math.random() * choices.length);
    return(rivalChoice, choices[rivalChoice]);
}

function playRound(playerChoice, rivalChoice) {
    
}