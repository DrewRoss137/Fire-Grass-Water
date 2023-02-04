const choices = ["Fire", "Grass", "Water"];

const pokemon = {
  "Fire": "Charmander",
  "Grass": "Bulbasaur",
  "Water": "Squirtle"
};

const fireAttacks = ["Ember", "Flamethrower"];

const grassAttacks = ["Vine Whip", "Razor Leaf"];

const waterAttacks = ["Bubble", "Water Gun", "Hydro Pump"];


/* let playerName = prompt("Let's begin with your name. What is it?");
let rivalName = prompt("...Erm, what was their name now?"); */

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
    generateAttack(playerChoice);
    playerAttack = generateAttack(playerChoice);
    console.log(`Generated Player Attack: ${playerAttack}`);
    generateAttack(rivalChoice);
    rivalAttack = generateAttack(rivalChoice);
    console.log(`Generated Rival Attack: ${rivalAttack}`)
    playRound(playerChoice, rivalChoice)
  }
});

function generateAttack(choice) {
  if (choice === "Fire") {
    attack = fireAttacks[Math.floor(Math.random() * fireAttacks.length)];
  } else if (choice === "Grass") {
    attack = grassAttacks[Math.floor(Math.random() * grassAttacks.length)];
  } else {
    attack = waterAttacks[Math.floor(Math.random() * waterAttacks.length)];
  }
  return attack;
};



function playRound(playerChoice, rivalChoice) {
  
}