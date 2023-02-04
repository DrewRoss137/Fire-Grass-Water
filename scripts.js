const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  "Fire": "CHARMANDER",
  "Grass": "BULBASAUR",
  "Water": "SQUIRTLE"
};

const fireAttacks = ["EMBER", "FLAME THROWER"];

const grassAttacks = ["VINE WHIP", "RAZOR LEAF"];

const waterAttacks = ["BUBBLE", "WATER GUN", "HYDRO PUMP"];


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

const buttonImgs = document.querySelector("#buttons");
buttonImgs.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    let playerChoice = element.target.alt;
    console.log(`Player Choice: ${playerChoice}`);
    playerPokémon = pokémon[playerChoice];
    console.log(`Player Pokemon: ${playerPokémon}`);
    playerAttack = generateAttack(playerChoice);
    console.log(`Generated Player Attack: ${playerAttack}`);


    rivalPokémon = pokémon[rivalChoice];
    console.log(`Rival Pokemon: ${rivalPokémon}`);
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
  createFlavourText(playerName, playerPokémon, playerAttack);
  createFlavourText(rivalName, rivalPokémon, rivalAttack);
  
};

function createFlavourText(name, pokémon, attack) {
  console.log(`${name}: GO! ${pokémon}!`);
  if (name === playerName) {
    console.log(`${pokémon} used ${attack}!`);
  } else {
    console.log(`Foe ${pokémon} used ${attack}!`);
  }
};