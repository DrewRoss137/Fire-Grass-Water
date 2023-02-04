const choices = ["Fire", "Grass", "Water"];

const pokemon = {
  "Fire": "Charmander",
  "Grass": "Bulbasaur",
  "Water": "Squirtle"
};

const fireAttacks = ["Ember", "Flamethrower"];

const grassAttacks = ["Vine Whip", "Razor Leaf"];

const waterAttacks = ["Bubble", "Water Gun", "Hydro Pump"];


let playerName = prompt("Let's begin with your name. What is it?");
let rivalName = prompt("...Erm, what was their name now?");

let rivalAttack;
let playerAttack;

let rivalChoice = getRivalChoice();
console.log(`Rival Choice: ${rivalChoice}`);

function getRivalChoice() {
    let randomRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[randomRivalChoice];
};

const images = document.querySelector("#buttons");
images.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    let playerChoice = element.target.alt;
    console.log(`Player Choice: ${playerChoice}`);
    generatePlayerAttack(playerChoice);
    generateRivalAttack(rivalChoice);
    playRound(playerChoice, rivalChoice)
  }
});

function generatePlayerAttack(playerChoice) {
  if (playerChoice === "Fire") {
    playerAttack = fireAttacks[Math.floor(Math.random() * fireAttacks.length)];
  } else if (playerChoice === "Grass") {
    playerAttack = grassAttacks[Math.floor(Math.random() * grassAttacks.length)];
  } else {
    playerAttack = waterAttacks[Math.floor(Math.random() * waterAttacks.length)];
  }
  console.log(`Generated Player Attack: ${playerAttack}`);
  return playerAttack;
};

function generateRivalAttack(rivalChoice) {
  if (rivalChoice === "Fire") {
    rivalAttack = fireAttacks[Math.floor(Math.random() * fireAttacks.length)];
  } else if (rivalChoice === "Grass") {
    rivalAttack = grassAttacks[Math.floor(Math.random() * grassAttacks.length)];
  } else {
    rivalAttack = waterAttacks[Math.floor(Math.random() * waterAttacks.length)];
  }
  console.log(`Generated Rival Attack: ${rivalAttack}`);
  return rivalAttack;
};

function playRound(playerChoice, rivalChoice) {
  console.log(`${playerName}`)
}