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

/* temp */
playerScore = 4;
rivalScore = 4;
roundsDrawn = 4;


/* CRIT GEN */
const critDiv = document.createElement("div");
critDiv.id = "critical-hit"




/* STATS */
/*ROUNDS WON */
const playerScoreSpanNumber = document.createElement("span");
playerScoreSpanNumber.textContent = playerScore;
playerScoreSpanNumber.id = "player-score-span";
playerScoreSpanNumber.style = "color: red;"

const playerScoreSpanWon = document.createElement("span");
playerScoreSpanWon.textContent = "WON";
playerScoreSpanWon.id = "player-score-won";
playerScoreSpanWon.style = "color: purple;"

const playerScoreSpanWonColon = document.createElement("span");
playerScoreSpanWonColon.textContent = ": ";
playerScoreSpanWonColon.id = "player-score-won-colon";
playerScoreSpanWonColon.style = "color: blue;"


/*ROUNDS LOST */
const rivalScoreSpanNumber = document.createElement("span");
rivalScoreSpanNumber.textContent = rivalScore;
rivalScoreSpanNumber.id = "rival-score-span";
rivalScoreSpanNumber.style = "color: red;"

const rivalScoreSpanWon = document.createElement("span");
rivalScoreSpanWon.textContent = "LOST";
rivalScoreSpanWon.id = "rival-score-won";
rivalScoreSpanWon.style = "color: purple;"

const rivalScoreSpanWonColon = document.createElement("span");
rivalScoreSpanWonColon.textContent = ": ";
rivalScoreSpanWonColon.id = "rival-score-won-colon";
rivalScoreSpanWonColon.style = "color: blue;"


/*ROUNDS DRAWN */
const drawSpanNumber = document.createElement("span");
drawSpanNumber.textContent = roundsDrawn;
drawSpanNumber.id = "drawSpanNumber-score-span";
drawSpanNumber.style = "color: red;"

const drawScoreSpanWon = document.createElement("span");
drawScoreSpanWon.textContent = "DRAWN";
drawScoreSpanWon.id = "drawScoreSpanWon-score-won";
drawScoreSpanWon.style = "color: purple;"

const drawScoreSpanWonScoreSpanWonColon = document.createElement("span");
drawScoreSpanWonScoreSpanWonColon.textContent = ": ";
drawScoreSpanWonScoreSpanWonColon.id = "drawScoreSpanWon-score-won-colon";
drawScoreSpanWonScoreSpanWonColon.style = "color: blue;"


/* WIN% */
const winPercentSpanNumber = document.createElement("span");
winPercentSpanNumber.textContent = winPercentage;
winPercentSpanNumber.id = "winPercentSpanNumber-score-span";
winPercentSpanNumber.style = "color: red;"

const winPercentScoreSpanWon = document.createElement("span");
winPercentScoreSpanWon.textContent = "%";
winPercentScoreSpanWon.id = "winPercent-score-won";
winPercentScoreSpanWon.style = "color: purple;"

const winPercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
winPercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
winPercentScoreSpanWonScoreSpanWonColon.id = "winPercentSpanWon-score-won-colon";
winPercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"

const winPercentSign = document.createElement("span");
winPercentSign.textContent = "%";
winPercentSign.id = "awdawdore-won-colon";
winPercentSign.style = "color: cyan;"


/* LOSE% */
const losePercentSpanNumber = document.createElement("span");
losePercentSpanNumber.textContent = lossPercentage;
losePercentSpanNumber.id = "losePercentSpanNumber-score-span";
losePercentSpanNumber.style = "color: red;"

const losePercentScoreSpanWon = document.createElement("span");
losePercentScoreSpanWon.textContent = "%";
losePercentScoreSpanWon.id = "losePercent-score-won";
losePercentScoreSpanWon.style = "color: purple;"

const losePercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
losePercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
losePercentScoreSpanWonScoreSpanWonColon.id = "losePercentSpanWon-score-won-colon";
losePercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"

const losePercentSign = document.createElement("span");
losePercentSign.textContent = "%";
losePercentSign.id = "awdawdore-wawdon-colon";
losePercentSign.style = "color: cyan;"

/* TOTAL ROUNDS PLAYED */
const totalRoundsPercentSpanNumber = document.createElement("span");
totalRoundsPercentSpanNumber.textContent = totalRoundsPlayed;
totalRoundsPercentSpanNumber.id = "loawdawdSpanNumber-score-span";
totalRoundsPercentSpanNumber.style = "color: red;"

const totalRoundsPercentScoreSpanWon = document.createElement("span");
totalRoundsPercentScoreSpanWon.textContent = "PLAYED";
totalRoundsPercentScoreSpanWon.id = "losePercent-score-won";
totalRoundsPercentScoreSpanWon.style = "color: purple;"

const totalRoundsPercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
totalRoundsPercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
totalRoundsPercentScoreSpanWonScoreSpanWonColon.id = "losePercentSpanWon-score-won-colon";
totalRoundsPercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"


/* TOTAL WIN% */
const totalWinPercentSpanNumber = document.createElement("span");
totalWinPercentSpanNumber.textContent = totalWinPercentage;
totalWinPercentSpanNumber.id = "totalwinpercentSpanNumber-score-span";
totalWinPercentSpanNumber.style = "color: red;"

const totalWinPercentScoreSpanWon = document.createElement("span");
totalWinPercentScoreSpanWon.textContent = "%";
totalWinPercentScoreSpanWon.id = "lawdawdnt-score-won";
totalWinPercentScoreSpanWon.style = "color: purple;"

const totalWinPercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
totalWinPercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
totalWinPercentScoreSpanWonScoreSpanWonColon.id = "awdntSpanWon-score-won-colon";
totalWinPercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"

const totalWinPercentSign = document.createElement("span");
totalWinPercentSign.textContent = "%";
totalWinPercentSign.id = "awdawawddore-wawdon-colon";
totalWinPercentSign.style = "color: cyan;"

const totalWinPercentPreSign = document.createElement("span");
totalWinPercentPreSign.textContent = "WIN";
totalWinPercentPreSign.id = "awdawawddore-wawdon-colon";
totalWinPercentPreSign.style = "color: yellow;"

/* TOTAL LOSS% */
const totalLossPercentSpanNumber = document.createElement("span");
totalLossPercentSpanNumber.textContent = totalLossPercentage;
totalLossPercentSpanNumber.id = "tawdentSpanNumber-score-span";
totalLossPercentSpanNumber.style = "color: red;"

const totalLossPercentScoreSpanWon = document.createElement("span");
totalLossPercentScoreSpanWon.textContent = "%";
totalLossPercentScoreSpanWon.id = "laawdt-score-won";
totalLossPercentScoreSpanWon.style = "color: purple;"

const totalLossPercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
totalLossPercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
totalLossPercentScoreSpanWonScoreSpanWonColon.id = "awawdpanWon-score-won-colon";
totalLossPercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"

const totalLossPercentSign = document.createElement("span");
totalLossPercentSign.textContent = "%";
totalLossPercentSign.id = "awdawaawde-wawdon-colon";
totalLossPercentSign.style = "color: cyan;"

const totalLossPercentPreSign = document.createElement("span");
totalLossPercentPreSign.textContent = "LOSS";
totalLossPercentPreSign.id = "awdawaawwe-wawdon-colon";
totalLossPercentPreSign.style = "color: yellow;"

/* TOTAL DRAW% */
const totalDrawPercentSpanNumber = document.createElement("span");
totalDrawPercentSpanNumber.textContent = totalDrawPercentage;
totalDrawPercentSpanNumber.id = "tawdeaaantSpanNumber-score-span";
totalDrawPercentSpanNumber.style = "color: red;"

const totalDrawPercentScoreSpanWon = document.createElement("span");
totalDrawPercentScoreSpanWon.textContent = "%";
totalDrawPercentScoreSpanWon.id = "laaaaawdt-score-won";
totalDrawPercentScoreSpanWon.style = "color: purple;"

const totalDrawPercentScoreSpanWonScoreSpanWonColon = document.createElement("span");
totalDrawPercentScoreSpanWonScoreSpanWonColon.textContent = ": ";
totalDrawPercentScoreSpanWonScoreSpanWonColon.id = "awawdaapanWon-score-won-colon";
totalDrawPercentScoreSpanWonScoreSpanWonColon.style = "color: blue;"

const totalDrawPercentSign = document.createElement("span");
totalDrawPercentSign.textContent = "%";
totalDrawPercentSign.id = "awdawaaaawde-wawdon-colon";
totalDrawPercentSign.style = "color: cyan;"

const totalDrawPercentPreSign = document.createElement("span");
totalDrawPercentPreSign.textContent = "DRAW";
totalDrawPercentPreSign.id = "awdawaaaawwe-wawdon-colon";
totalDrawPercentPreSign.style = "color: yellow;"


/* ROUND RESULT */
const playerNameRoundResult = document.createElement("span");
playerNameRoundResult.textContent = playerName;
playerNameRoundResult.id = "player-name-round-result";
playerNameRoundResult.style = "color: blue;"

const rivalNameRoundResult = document.createElement("span");
rivalNameRoundResult.textContent = rivalName;
rivalNameRoundResult.id = "rival-name-round-result";
rivalNameRoundResult.style = "color: purple;"

let typeRoundResult = document.createElement("span");
typeRoundResult.id = "type-round-result";

const againstRoundResult = document.createElement("span");
againstRoundResult.textContent = "against";
againstRoundResult.id = "against-round-result";
againstRoundResult.style = "color: cyan;"

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

function getRivalChoice() {
    let returnedRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[returnedRivalChoice];
};

const buttonImgs = document.querySelector("#buttons");
buttonImgs.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    let playerChoice = element.target.alt;
    playerPokémon = pokémon[playerChoice];
    playerPokémonAttack = generateAttack(playerChoice);


    /* ACTUAL CODE TO BE USED WHEN GAME IS READY. DO THIS WHEN TESTS NEED NOT BE CARRIED OUT (IT IS USEFUL TO KNOW AND SEE RIVAL CHOICE IN CONSOLE FOR TESTING WINS, DRAWS, LOSSES.)
    let rivalChoice = getRivalChoice();
    */

    rivalPokémon = pokémon[rivalChoice];
    rivalPokémonAttack = generateAttack(rivalChoice);
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


  displayedPlayerChoice.textContent = (choiceFlavourText(playerName, playerPokémon));
  displayedRivalChoice.textContent = (choiceFlavourText(rivalName, rivalPokémon))
  displayedPlayerPokémonAttack.textContent = attackFlavourText(playerName, playerPokémon, playerPokémonAttack)
  displayedPlayerPokémonAttackEffectiveness.textContent = playerPokémonAttackEffectiveness;
  displayedRivalPokémonAttack.textContent = attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack);
  displayedRivalPokémonAttackEffectiveness.textContent = rivalPokémonAttackEffectiveness;
  displayedRoundResult.textContent = (generateRoundFlavourText(playerName, playerPokémon, rivalName, rivalPokémon, roundResult))

  displayedPlayerScore.textContent = playerScore;
  displayedRivalScore.textContent = rivalScore;




  let roundsPlayed = playerScore + rivalScore;
  winPercentage = ((playerScore / (roundsPlayed)) * 100).toFixed(2);
  lossPercentage = ((rivalScore / (roundsPlayed)) * 100).toFixed(2);

  totalWinPercentage = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercentage = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercentage = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);


  if (playerScore === 5 || rivalScore === 5) {
    /* displayGameResult(playerName, playerScore, rivalName, rivalScore); */

  
    if (playerScore > rivalScore) {
      typeRoundResult.style = "color:green;"
      typeRoundResult.textContent = "WON"
    } else {
      typeRoundResult.style = "color:red;"
      typeRoundResult.textContent = "LOST"
    }
    displayedGameResult.textContent = "GAME RESULT:";
    displayedGameResult.appendChild(playerNameRoundResult)
    displayedGameResult.appendChild(typeRoundResult)
    displayedGameResult.appendChild(againstRoundResult)
    displayedGameResult.appendChild(rivalNameRoundResult)

    displayedRoundsWon.textContent = `ROUNDS `;
    playerScoreSpanNumber.textContent = playerScore;
    displayedRoundsWon.appendChild(playerScoreSpanWon);
    displayedRoundsWon.appendChild(playerScoreSpanWonColon)
    displayedRoundsWon.appendChild(playerScoreSpanNumber);


    displayedRoundsLost.textContent = `ROUNDS `;
    rivalScoreSpanNumber.textContent = rivalScore;
    displayedRoundsLost.appendChild(rivalScoreSpanWon);
    displayedRoundsLost.appendChild(rivalScoreSpanWonColon)
    displayedRoundsLost.appendChild(rivalScoreSpanNumber);

    
    displayedRoundsDrawn.textContent = `ROUNDS `;
    drawSpanNumber.textContent = roundsDrawn;
    displayedRoundsDrawn.appendChild(drawScoreSpanWon);
    displayedRoundsDrawn.appendChild(drawScoreSpanWonScoreSpanWonColon)
    displayedRoundsDrawn.appendChild(drawSpanNumber);


    displayedWinPercentage.textContent = `WIN`;
    winPercentSpanNumber.textContent = winPercentage;
    displayedWinPercentage.appendChild(winPercentSign);
    displayedWinPercentage.appendChild(winPercentScoreSpanWonScoreSpanWonColon)
    displayedWinPercentage.appendChild(winPercentSpanNumber);
    displayedWinPercentage.appendChild(winPercentScoreSpanWon);


    displayedLossPercentage.textContent = `LOSS`;
    losePercentSpanNumber.textContent = lossPercentage;
    displayedLossPercentage.appendChild(losePercentSign);
    displayedLossPercentage.appendChild(losePercentScoreSpanWonScoreSpanWonColon)
    displayedLossPercentage.appendChild(losePercentSpanNumber)
    displayedLossPercentage.appendChild(losePercentScoreSpanWon)



    displayedTotalRoundsPlayed.textContent = `TOTAL ROUNDS `;
    totalRoundsPercentSpanNumber.textContent = totalRoundsPlayed;
    displayedTotalRoundsPlayed.appendChild(totalRoundsPercentScoreSpanWon)
    displayedTotalRoundsPlayed.appendChild(totalRoundsPercentScoreSpanWonScoreSpanWonColon)
    displayedTotalRoundsPlayed.appendChild(totalRoundsPercentSpanNumber)


    displayedTotalWinPercentage.textContent = `TOTAL `;
    totalWinPercentSpanNumber.textContent = totalWinPercentage;
    displayedTotalWinPercentage.appendChild(totalWinPercentPreSign);
    displayedTotalWinPercentage.appendChild(totalWinPercentScoreSpanWon)
    displayedTotalWinPercentage.appendChild(totalWinPercentScoreSpanWonScoreSpanWonColon)
    displayedTotalWinPercentage.appendChild(totalWinPercentSpanNumber)
    displayedTotalWinPercentage.appendChild(totalWinPercentSign);
  

    displayedTotalLossPercentage.textContent = `TOTAL `
    totalLossPercentSpanNumber.textContent = totalLossPercentage;
    displayedTotalLossPercentage.appendChild(totalLossPercentPreSign);
    displayedTotalLossPercentage.appendChild(totalLossPercentScoreSpanWon)
    displayedTotalLossPercentage.appendChild(totalLossPercentScoreSpanWonScoreSpanWonColon)
    displayedTotalLossPercentage.appendChild(totalLossPercentSpanNumber)
    displayedTotalLossPercentage.appendChild(totalLossPercentSign);


    displayedTotalDrawPercentage.textContent = `TOTAL `;
    totalDrawPercentSpanNumber.textContent = totalDrawPercentage;
    displayedTotalDrawPercentage.appendChild(totalDrawPercentPreSign);
    displayedTotalDrawPercentage.appendChild(totalDrawPercentScoreSpanWon)
    displayedTotalDrawPercentage.appendChild(totalDrawPercentScoreSpanWonScoreSpanWonColon)
    displayedTotalDrawPercentage.appendChild(totalDrawPercentSpanNumber)
    displayedTotalDrawPercentage.appendChild(totalDrawPercentSign);



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
    return(`${playerName}'s ${playerPokémon} drew against ${rivalName}'s ${rivalPokémon}!`)
  } else if (result === roundResults[2]) {
    return(`${playerName}'s ${playerPokémon} won against ${rivalName}'s ${rivalPokémon}!`)
  } else {
    return(`${playerName}'s ${playerPokémon} lost against ${rivalName}'s ${rivalPokémon}!`)
  }
}

 function generateCriticalHitChance(divName) {
  criticalHitChance = Math.random();
  if (criticalHitChance <= 100) {
    divName.textContent = "A critical hit!";
    }
  } 

/* function displayGameResult(playerName, playerScore, rivalName, rivalScore) {
  if (playerScore > rivalScore) {
    displayedGameResult.textContent = (`${playerName} won against ${rivalName}!`)
  } else {
    displayedGameResult.textContent = (`${playerName} lost against ${rivalName}!`)
  }
} */

function createDiv(newDiv, divID) {
  let overheadDiv = document.getElementById(divID);
  let overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling)
}