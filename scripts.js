const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  "Fire": "Charmander",
  "Grass": "Bulbasaur",
  "Water": "Squirtle"
};

const fireAttacks = ["Ember", "Flamethrower"];

const grassAttacks = ["Vine Whip", "Razor Leaf"];

const waterAttacks = ["Bubble", "Water Gun", "Hydro Pump"];


let playerName = "Drew";
let rivalName = "Gary";

let playerAttack;
let rivalAttack;

let playerPokémon;
let rivalPokémon;



let rivalChoice = getRivalChoice();
console.log(`Rival Choice: ${rivalChoice}`);

function getRivalChoice() {
    let returnedRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[returnedRivalChoice];
};

const images = document.querySelector("#buttons");
images.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    let playerChoice = element.target.alt;

    console.log(`Player Choice: ${playerChoice}`);
    playerAttack = generateAttack(playerChoice);
    console.log(`Generated Player Attack: ${playerAttack}`);
    playerPokémon = pokémon[playerChoice];
    console.log(`Player Pokemon: ${playerPokémon}`);

    rivalAttack = generateAttack(rivalChoice);
    console.log(`Generated Rival Attack: ${rivalAttack}`)
    rivalPokémon = pokémon[rivalChoice];
    console.log(`Rival Pokemon: ${rivalPokémon}`);

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