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

let playerAttackEffectiveness;
let rivalAttackEffectiveness;



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
    generateAttackEffectiveness(playerChoice, rivalChoice);


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
  generateFlavourText(playerName, playerPokémon, playerAttack);
  console.log(playerAttackEffectiveness);
  generateFlavourText(rivalName, rivalPokémon, rivalAttack);
  console.log(rivalAttackEffectiveness);

};

function generateFlavourText(name, pokémon, attack) {
  console.log(`${name}: GO! ${pokémon}!`);
  if (name === playerName) {
    console.log(`${pokémon} used ${attack}!`);
  } else {
    console.log(`Foe ${pokémon} used ${attack}!`);
  } 
};

function generateAttackEffectiveness(playerChoice, rivalChoice) {
  if (playerChoice === rivalChoice) {
    playerAttackEffectiveness = "It's not very effective..."
    rivalAttackEffectiveness = "It's not very effective...";
  } else if (playerChoice === "Fire" && rivalChoice === "Grass"
            || playerChoice === "Grass" && rivalChoice === "Water"
            || playerChoice === "Water" && rivalChoice === "Fire") {
              playerAttackEffectiveness = "It's super effective!";
              rivalAttackEffectiveness = "But it failed!";
            } else {
              playerAttackEffectiveness = "But it failed!";
              rivalAttackEffectiveness = "It's super effective!";
            }
            return playerAttackEffectiveness;
            return rivalAttackEffectiveness;
}