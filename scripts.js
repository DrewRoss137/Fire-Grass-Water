const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log("Rival Choice: " + rivalChoice);

function getPlayerChoice() {
    
}

function getRivalChoice() {
    let rivalChoice = choices[~~(Math.random() * choices.length)];
    return(rivalChoice);
}