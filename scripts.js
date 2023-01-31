const choices = ["Fire", "Grass", "Water"];

let randomChoice = Math.floor(Math.random() * choices.length);
let rivalChoice = (randomChoice, choices[randomChoice]);
console.log(rivalChoice)