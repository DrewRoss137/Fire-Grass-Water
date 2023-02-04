const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  "Fire": "CHARMANDER",
  "Grass": "BULBASAUR",
  "Water": "SQUIRTLE"
};

const fireAttacks = ["EMBER", "FLAME THROWER"];

const grassAttacks = ["VINE WHIP", "RAZOR LEAF"];

const waterAttacks = ["BUBBLE", "WATER GUN", "HYDRO PUMP"];

const attackEffectiveness = {
  "Draw": "But it failed!",
  "Lose": "It's not very effective...",
  "Win": "It's super effective!"
}

const roundResults = ["Draw", "Lose", "Win"];

let playerName = "Drew";
let rivalName = "Gary";

let playerPokémonAttack;
let rivalPokémonAttack;

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
    playerPokémonAttack = generateAttack(playerChoice);
    console.log(`Generated Player Attack: ${playerPokémonAttack}`);


    rivalPokémon = pokémon[rivalChoice];
    console.log(`Rival Pokemon: ${rivalPokémon}`);
    rivalPokémonAttack = generateAttack(rivalChoice);
    console.log(`Generated Rival Attack: ${rivalPokémonAttack}`)
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
  if (playerChoice === rivalChoice) {
    playerAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalAttackEffectiveness = attackEffectiveness[roundResults[0]];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass"
            || playerChoice === "Grass" && rivalChoice === "Water"
            || playerChoice === "Water" && rivalChoice === "Fire") {
    playerAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalAttackEffectiveness = attackEffectiveness[roundResults[1]];
  } else {
    playerAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalAttackEffectiveness = attackEffectiveness[roundResults[2]];
  }
  console.log(playerAttackEffectiveness);
  console.log(rivalAttackEffectiveness);
  console.log(choiceFlavourText(playerName, playerPokémon));
  console.log(choiceFlavourText(rivalName, rivalPokémon));
  console.log(attackFlavourText(playerName, playerPokémon, playerPokémonAttack));
  console.log(playerAttackEffectiveness);
  console.log(attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack));
  console.log(rivalAttackEffectiveness);
};

function choiceFlavourText(name, pokémon) {
  return(`${name}: GO! ${pokémon}!`);
}

function attackFlavourText(name, pokémon, attack) {
  if (name === playerName) {
    return(`${pokémon} used ${attack}!`);
  } else {
    return(`Foe ${pokémon} used ${attack}!`);
  } 
};

function generateAttackEffectiveness(playerChoice, rivalChoice) {

}

