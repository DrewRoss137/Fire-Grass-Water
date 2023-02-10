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

let playerName = "playerName";
let rivalName = "rivalName";

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

/* ************************************************************************************************************************************************************************************** /*

/* JS-MADE HTML ELEMENTS */

/* CHOICES */

/* BASE CODE FOR CREATING HTML ELEMENTS ON THE FLY. UNSURE IF TO BE USED. */
/* const playerChoiceDiv = document.createElement("div");
const parentDiv = document.getElementById("player-rival-choices");
parentDiv.appendChild(playerChoiceDiv);
const rivalChoiceDiv = document.createElement("div"); */
/* */

/* SCORES */

/* ROUND RESULT */

/* CRIT GEN */
const critDiv = document.createElement("div");
critDiv.id = "critical"

/* STATS */



/* ************************************************************************************************************************************************************************************** /*






/* **************************************************************************************************************************************************************************************
JS-DOM
*/



/* STATS */
let displayedRoundsWon = document.querySelector("#rounds-won");
let displayedRoundsLost = document.querySelector("#rounds-lost");
let displayedRoundsDrawn = document.querySelector("#rounds-drawn");
let displayedWinPercentage = document.querySelector("#win-percentage");
let displayedLossPercentage = document.querySelector("#lose-percentage");
let displayedTotalRoundsPlayed = document.querySelector("#total-rounds-played");
let displayedTotalWinPercentage= document.querySelector("#total-win-percentage");
let displayedTotalLossPercentage= document.querySelector("#total-loss-percentage");
let displayedTotalDrawPercentage = document.querySelector("#total-draw-percentage");


/* CHOICES */
let displayedPlayerChoice = document.querySelector("#choice-player");
let displayedRivalChoice = document.querySelector("#choice-rival");


/* ATTACKS */
let displayedPlayerPokémonAttack = document.querySelector("#attack-player");
let displayedRivalPokémonAttack = document.querySelector("#attack-rival");


/* EFFECTIVENESS */
let displayedPlayerPokémonAttackEffectiveness = document.querySelector("#effectiveness-player");
let displayedRivalPokémonAttackEffectiveness = document.querySelector("#effectiveness-rival");

/* RESULT */
let displayedRoundResult = document.querySelector("#result");
let displayedGameResult = document.querySelector("#game-result");

/* NAMES */
let displayedPlayerName = document.querySelector("#player-name");
displayedPlayerName.textContent = playerName;

let displayedRivalName = document.querySelector("#rival_name");
displayedRivalName.textContent = rivalName;


/* SCORES */
let displayedPlayerScore = document.querySelector("#player-score");
displayedPlayerScore.textContent = playerScore;


let displayedRivalScore = document.querySelector("#rival-score");
displayedRivalScore.textContent = rivalScore;


/* **************************************************************************************************************************************************************************************
JS-DOM
*/

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


    /* ACTUAL CODE TO BE USED WHEN GAME IS READY. DO THIS WHEN TESTS NEED NOT BE CARRIED OUT (IT IS USEFUL TO KNOW AND SEE RIVAL CHOICE IN CONSOLE FOR TESTING WINS, DRAWS, LOSSES.)
    let rivalChoice = getRivalChoice();
    console.log(`Rival Choice: ${rivalChoice}`); 
    */
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
  critDiv.remove()
  totalRoundsPlayed ++;
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    let critGenDiv = createDiv(critDiv, "attack-player");
    generateCriticalHitChance(critGenDiv);
  } else {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore ++;
    roundResult = roundResults[1];
    let critGenDiv = createDiv(critDiv, "attack-rival");
    generateCriticalHitChance(critGenDiv);
  }

  /* let insertDivLocation = document.getElementById(divName);
  let parentOfDiv = insertDivLocation.parentNode;
  parentOfDiv.insertBefore(critDiv, insertDivLocation.nextSibling);
  critDiv.textContent = "PLAYER CRIT!"; */


  displayedPlayerChoice.textContent = (choiceFlavourText(playerName, playerPokémon));
  console.log(choiceFlavourText(playerName, playerPokémon));
  displayedRivalChoice.textContent = (choiceFlavourText(rivalName, rivalPokémon))
  console.log(choiceFlavourText(rivalName, rivalPokémon));
  displayedPlayerPokémonAttack.textContent = attackFlavourText(playerName, playerPokémon, playerPokémonAttack)
  console.log(attackFlavourText(playerName, playerPokémon, playerPokémonAttack));
  displayedPlayerPokémonAttackEffectiveness.textContent = playerPokémonAttackEffectiveness;
  console.log(playerPokémonAttackEffectiveness);
  displayedRivalPokémonAttack.textContent = attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack);
  console.log(attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack));
  displayedRivalPokémonAttackEffectiveness.textContent = rivalPokémonAttackEffectiveness;
  console.log(rivalPokémonAttackEffectiveness);
  displayedRoundResult.textContent = (generateRoundFlavourText(playerName, playerPokémon, rivalName, rivalPokémon, roundResult))
  console.log(generateRoundFlavourText(playerName, playerPokémon, rivalName, rivalPokémon, roundResult));
  displayedPlayerScore.textContent = playerScore;
  displayedRivalScore.textContent = rivalScore;



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

  let roundsPlayed = playerScore + rivalScore;
  winPercentage = ((playerScore / (roundsPlayed)) * 100).toFixed(2);
  lossPercentage = ((rivalScore / (roundsPlayed)) * 100).toFixed(2);

  totalWinPercentage = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercentage = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercentage = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);


  if (playerScore === 5 || rivalScore === 5) {
    displayGameResult(playerName, playerScore, rivalName, rivalScore);
    displayedRoundsWon.textContent = `ROUNDS WON: ${playerScore}`;
    displayedRoundsDrawn.textContent = `ROUNDS DRAWN: ${roundsDrawn}`
    displayedRoundsLost.textContent = `ROUNDS LOST: ${rivalScore}`;
    displayedWinPercentage.textContent = `WIN%: ${winPercentage}%`;
    displayedLossPercentage.textContent = `LOSS%: ${lossPercentage}%`;
    displayedTotalRoundsPlayed.textContent = `TOTAL ROUNDS PLAYED: ${totalRoundsPlayed}`;
    displayedTotalWinPercentage.textContent = `TOTAL WIN%: ${totalWinPercentage}%`;
    displayedTotalLossPercentage.textContent = `TOTAL LOSS%: ${totalLossPercentage}%`
    displayedTotalDrawPercentage.textContent = `TOTAL DRAW%: ${totalDrawPercentage}%`;
    console.log("");
    console.log("*******************************")
    console.log("STATS:");
    console.log("*******************************")
    console.log(`ROUNDS WON: ${playerScore}`);
    console.log(`ROUNDS LOST: ${rivalScore}`);
    console.log(`ROUNDS DRAWN: ${roundsDrawn}`);
    console.log("-------------------------------")
    console.log(`Win Percentage: ${winPercentage}%`);  
    console.log(`Loss Percentage: ${lossPercentage}%`);
    console.log("-------------------------------")
    console.log(`TOTAL ROUNDS PLAYED: ${totalRoundsPlayed}`);
    console.log(`TOTAL Win Percentage: ${totalWinPercentage}%`);
    console.log(`TOTAL Loss Percentage: ${totalLossPercentage}%`);
    console.log(`TOTAL Draw Percentage: ${totalDrawPercentage}%`);
    console.log("-------------------------------")
    console.log("");
    playerScore = 0;
    rivalScore = 0;
    totalRoundsPlayed = 0;
    roundsDrawn = 0;
  } else {
    displayedGameResult.textContent = null;
    displayedRoundsWon.textContent = null;
    displayedRoundsLost.textContent = null;
    displayedRoundsDrawn.textContent = null;
    displayedWinPercentage.textContent = null;
    displayedLossPercentage.textContent = null;
    displayedTotalRoundsPlayed.textContent = null;
    displayedTotalWinPercentage.textContent = null;
    displayedTotalLossPercentage.textContent = null;
    displayedTotalDrawPercentage.textContent = null;
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

function generateCriticalHitChance(divName) {
  criticalHitChance = Math.random();
  if (criticalHitChance <= 100) {
    console.log("*******************************************")
    console.log("A CRITICAL HIT")
    console.log("*******************************************")
    divName.textContent = "PLAYER CRIT!";
    }
  }

function displayGameResult(playerName, playerScore, rivalName, rivalScore) {
  if (playerScore > rivalScore) {
    displayedGameResult.textContent = (`${playerName} won against ${rivalName}!`)
  } else {
    displayedGameResult.textContent = (`${playerName} lost against ${rivalName}!`)
  }
}

function createDiv(newDiv, divID) {
  let overheadDiv = document.getElementById(divID);
  let overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling)
}