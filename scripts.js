const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  "Fire": "CHARMANDER",
  "Grass": "BULBASAUR",
  "Water": "SQUIRTLE"
};

const fireAttacks = ["EMBER", "FLAME THROWER"];

const grassAttacks = ["RAZOR LEAF", "VINE WHIP"];

const waterAttacks = ["BUBBLE", "HYDRO PUMP", "WATER GUN"];

const attackEffectiveness = {
  "Draw": "But it failed!",
  "Lose": "It's not very effective...",
  "Win": "It's super effective!"
}

const roundResults = ["Draw", "Lose", "Win"];

let playerName = "Drew";
let rivalName = "Gary";
playerName = playerName.toUpperCase()
rivalName = rivalName.toUpperCase()

let playerPokémonAttack;
let rivalPokémonAttack;

let playerPokémon;
let rivalPokémon;

let playerPokémonAttackEffectiveness;
let rivalPokémonAttackEffectiveness;

let playerScore = 0;
let rivalScore = 0;

let roundsDrawn = 0;

let roundResult;

let criticalHitChance;

let totalRoundsPlayed = 0;

let winPercentage;
let lossPercentage;

let totalWinPercentage;
let totalLossPercentage;
let totalDrawPercentage;

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


    /* let rivalChoice = getRivalChoice();
    console.log(`Rival Choice: ${rivalChoice}`); */
    rivalPokémon = pokémon[rivalChoice];
    console.log(`Rival Pokemon: ${rivalPokémon}`);
    rivalPokémonAttack = generateAttack(rivalChoice);
    console.log(`Generated Rival Attack: ${rivalPokémonAttack}`)
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
  totalRoundsPlayed ++;
  console.log(totalRoundsPlayed)
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    generateCriticalHitChance();
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++
    roundResult = roundResults[2];
  } else {
    generateCriticalHitChance();
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore ++;
    roundResult = roundResults[1];
  }
  console.log(choiceFlavourText(playerName, playerPokémon));
  console.log(choiceFlavourText(rivalName, rivalPokémon));
  console.log(attackFlavourText(playerName, playerPokémon, playerPokémonAttack));
  console.log(playerPokémonAttackEffectiveness);
  console.log(attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack));
  console.log(rivalPokémonAttackEffectiveness);
  console.log(generateRoundFlavourText(playerName, playerPokémon, rivalName, rivalPokémon, roundResult));



  if (playerScore === 1) {
    console.log("1 W")
  } else if (playerScore === 2) {
    console.log("2 W")
  } else if (playerScore === 3) {
    console.log("3 W")
  } else if (playerScore === 4) {
    console.log("4 W")
  }

  if (rivalScore === 1) {
    console.log("1 L")
  } else if (rivalScore === 2) {
    console.log("2 L")
  } else if (rivalScore === 3) {
    console.log("3 L")
  } else if (rivalScore === 4) {
    console.log("4 L")
  }


  winPercentage = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  lossPercentage = ((rivalScore/ totalRoundsPlayed) * 100).toFixed(2);

  totalWinPercentage = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercentage = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercentage = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);


  if (playerScore === 5 || rivalScore === 5) {
    console.log("GAME OVER...")
    if (playerScore > rivalScore) {
      console.log("YOU WIN!")
    } else {
      console.log("YOU LOSE!")
    }
    console.log("");
    console.log("STATS:");
    console.log(`ROUNDS DRAWN: ${roundsDrawn}`);
    console.log(`ROUNDS LOST: ${rivalScore}`);
    console.log(`ROUNDS WON: ${playerScore}`);
    console.log(`ROUNDS PLAYED: ${totalRoundsPlayed}`);
    console.log(`Loss Percentage: ${lossPercentage}%`);
    console.log(`Win Percentage: ${winPercentage}%`);  
    console.log(`TOTAL Loss Percentage: ${totalLossPercentage}%`);
    console.log(`TOTAL Win Percentage: ${totalWinPercentage}%`);
    console.log(`TOTAL Draw Percentage: ${totalDrawPercentage}%`);
    console.log("");
  }
};

function choiceFlavourText(name, pokémon) {
  return(`${name}: GO! ${pokémon}!`);
}

function attackFlavourText(name, pokémon, attack) {
  if (name === playerName) {
    return(`${playerName}'s ${pokémon} used ${attack}!`);
  } else {
    return(`Rival ${rivalName}'s ${pokémon} used ${attack}!`);
  } 
};

function generateRoundFlavourText(playerName, playerPokémon, rivalName, rivalPokémon, result) {
  if (result === roundResults[0]) {
    return(`ROUND RESULT: ${playerName}'s ${playerPokémon} drew against ${rivalName}'s ${rivalPokémon}!`)
  } else if (result === roundResults[2]) {
    return(`ROUND RESULT: ${playerName}'s ${playerPokémon} won against ${rivalName}'s ${rivalPokémon}!`)
  } else {
    return(`ROUND RESULT: ${playerName}'s ${playerPokémon} lost against ${rivalName}'s ${rivalPokémon}!`)
  }
}

function generateCriticalHitChance() {
  criticalHitChance = Math.random();
  if (criticalHitChance <= 0.0625) {
    console.log("*******************************************")
    console.log("A CRITICAL HIT")
    console.log("*******************************************")
  }
};