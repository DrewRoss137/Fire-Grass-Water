const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log(rivalChoice);

function getRivalChoice() {
    let randomRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[randomRivalChoice];
  }