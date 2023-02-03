const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log(rivalChoice);

function getRivalChoice() {
    let randomRivalChoice = choices[~~(Math.random() * choices.length)];
    return randomRivalChoice;
}

