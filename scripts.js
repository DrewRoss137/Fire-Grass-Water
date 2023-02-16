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

/* PLAYER AND RIVAL CHOICES */


const playerChoiceDiv = document.createElement("div");
const rivalChoiceDiv = document.createElement("div");
const playerAttackDiv = document.createElement("div");
const rivalAttackDiv = document.createElement("div");




/* round-text */
const roundText = document.createElement("div");
roundText.id = "round-text";



/* PLAYER CHOICE */
const playerNamePlayerChoice = document.createElement("span");
playerNamePlayerChoice.id = "player-name-player-choice";
playerNamePlayerChoice.style = "color: blue";

const playerGoPlayerChoice = document.createElement("span");
playerGoPlayerChoice.id = "player-Go-player-choice";
playerGoPlayerChoice.style = "color: purple";

const playerPokemonPlayerChoice = document.createElement("span");
playerPokemonPlayerChoice.id = "player-Pokemon-player-choice";
playerPokemonPlayerChoice.style = "color: red";



/* RIVAL CHOICE */
const rivalNamePlayerChoice = document.createElement("span");
rivalNamePlayerChoice.id = "rival-name-player-choice";
rivalNamePlayerChoice.style = "color: blue";

const rivalGoPlayerChoice = document.createElement("span");
rivalGoPlayerChoice.textContent = "GO!";
rivalGoPlayerChoice.id = "rival-Go-player-choice";
rivalGoPlayerChoice.style = "color: purple";

const rivalPokemonPlayerChoice = document.createElement("span");
rivalPokemonPlayerChoice.id = "rival-Pokemon-player-choice";
rivalPokemonPlayerChoice.style = "color: red";



/* PLAYER ATTACK */
const playerNamePlayerAttack = document.createElement("span");
playerNamePlayerAttack.id = "player-name-player-attack";
playerNamePlayerAttack.style = "color: blue";

const playerPokemonPlayerAttack = document.createElement("span");
playerPokemonPlayerAttack.id = "player-pokemon-player-attack";
playerPokemonPlayerAttack.style = "color: purple";

const playerUsedPlayerAttack = document.createElement("span");
playerUsedPlayerAttack.textContent = "USED"
playerUsedPlayerAttack.id = "player-used-player-attack";
playerUsedPlayerAttack.style = "color: yellow";

const playerPokemonAttackPlayerAttack = document.createElement("span");
playerPokemonAttackPlayerAttack.id = "player-pokemon-attack-player-attack";
playerPokemonAttackPlayerAttack.style = "color: red";

/* PLAYER ATTACK EFFECTIVENESS */
const playerAttackEffectivenessDiv = document.createElement("div");
playerAttackEffectivenessDiv.id = "player-attack-effectiveness";

/* RIVAL ATTACK */
const rivalNamePlayerAttack = document.createElement("span");
rivalNamePlayerAttack.id = "rival-name-player-attack";
rivalNamePlayerAttack.style = "color: blue";

const rivalPokemonPlayerAttack = document.createElement("span");
rivalPokemonPlayerAttack.id = "rival-pokemon-player-attack";
rivalPokemonPlayerAttack.style = "color: purple";

const rivalUsedPlayerAttack = document.createElement("span");
rivalUsedPlayerAttack.textContent = "USED"
rivalUsedPlayerAttack.id = "rival-used-player-attack";
rivalUsedPlayerAttack.style = "color: yellow";

const rivalPokemonAttackPlayerAttack = document.createElement("span");
rivalPokemonAttackPlayerAttack.id = "rival-pokemon-attack-player-attack";
rivalPokemonAttackPlayerAttack.style = "color: red";

/* RIVAL ATTACK EFFECTIVENESS */
const rivalAttackEffectivenessDiv = document.createElement("div");
rivalAttackEffectivenessDiv.id = "rival-attack-effectiveness";


/* ROUND RESULT DIV */
const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";

/* ROUND RESULT */
const playerNameChoicesRoundResult = document.createElement("span");
playerNameChoicesRoundResult.id = "playerNameChoicesRoundResult";
playerNameChoicesRoundResult.style = "color: blue";

const playerPokemonChoicesRoundResult = document.createElement("span");

playerPokemonChoicesRoundResult.id = "playerPokemonChoicesRoundResult";
playerPokemonChoicesRoundResult.style = "color: purple";

const roundResultRoundResult = document.createElement("span");
roundResultRoundResult.id = "roundResultRoundResult";
roundResultRoundResult.style = "color: orange";

const rivalNameChoicesRoundResult = document.createElement("span");
rivalNameChoicesRoundResult.id = "rivalNameChoicesRoundResult";
rivalNameChoicesRoundResult.style = "color: yellow";

const rivalPokemonChoicesRoundResult = document.createElement("span");
rivalPokemonChoicesRoundResult.id = "rivalPokemonChoicesRoundResult";
rivalPokemonChoicesRoundResult.style = "color: red";


/* POST GAME */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game"


/* STATS */
const statsDiv = document.createElement("div");
statsDiv.id = "stats-div"


/*ROUNDS WON */
const roundsWonDiv = document.createElement("div");
roundsWonDiv.id = "rounds-won-div"

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
const roundsLostDiv = document.createElement("div");
roundsLostDiv.id = "rounds-lost-div"

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
const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.id = "rounds-drawn-div"


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
const winPercentDiv = document.createElement("div");
winPercentDiv.id = "win-percent-div"

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
winPercentSign.id = "win-percent-percent-sign";
winPercentSign.style = "color: cyan;"


/* LOSE% */
const losePercentDiv = document.createElement("div");
losePercentDiv.id = "lose-percent-div"

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
const totalRoundsPlayedDiv = document.createElement("div")
totalRoundsPlayedDiv.id = "total-rounds-played-div"

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
const totalWinPercentDiv = document.createElement("div")
totalWinPercentDiv.id = "total-win-percent-div"

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
const totalLossPercentDiv = document.createElement("div")
totalLossPercentDiv.id = "total-loss-percent-div"

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
const totalDrawPercentDiv = document.createElement("div")
totalDrawPercentDiv.id = "total-draw-percent-div"

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


/* GAME RESULT */
const gameResultDiv = document.createElement("div")
gameResultDiv.id = "game-result-div"

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

/* POST-GAME FLAVOUR TEXT */
const postGameFlavourText = document.createElement("div");
postGameFlavourText.id = "post-game-flavour-text";

/* FAINT FLAVOUR TEXT */
const faintFlavourText = document.createElement("div");
faintFlavourText.id = "faint-flavour-text";

const playerNameFaintFlavourText = document.createElement("span");
playerNameFaintFlavourText.id = "player-name-faint-flavour-text"
playerNameFaintFlavourText.style = "color: pink";

const playerPokemonNameFaintFlavourText = document.createElement("span");
playerPokemonNameFaintFlavourText.id = "player-pokemon-name-faint-flavour-text"
playerPokemonNameFaintFlavourText.style = "color: blue";

const faintedFaintFlavourText = document.createElement("span");
faintedFaintFlavourText.textContent = "fainted!"
faintedFaintFlavourText.id = "fainted-faint-flavour-text"
faintedFaintFlavourText.style = "color: yellow";

/* XP FLAVOUR TEXT */
const expFlavourText = document.createElement("div");
expFlavourText.id = "exp-flavour-text";
expFlavourText.style = "color: pink";

const expPlayerName = document.createElement("span");
expPlayerName.id = "exp-player-name";
expPlayerName.style = "color: blue";

const expPokemonName = document.createElement("span");
expPokemonName.id = "exp-pokemon-name";
expPokemonName.style = "color: yellow";

const gainedPokemonName = document.createElement("span");
gainedPokemonName.id = "gained-pokemon-name";
gainedPokemonName.style = "color: red";
gainedPokemonName.textContent = "gained "

let expGained = document.createElement("span");
expGained.id = "exp-gained";
expGained.style = "color: green";

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
console.log(rivalChoice)

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

/* CRIT GEN */
let critDiv = document.createElement("div");
critDiv.id = "critical-hit"
/* CRIT GEN */


function playRound(playerChoice, rivalChoice) {
  critDiv.remove()
  totalRoundsPlayed ++;
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
    critDiv.remove()
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    generateCriticalHitChance(critDiv);
  } else {
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore ++;
    roundResult = roundResults[1];
    generateCriticalHitChance(critDiv);
  }

  createDiv(roundText, "scoreboard");
  roundText.appendChild(playerChoiceDiv)
  roundText.appendChild(rivalChoiceDiv)
  roundText.appendChild(playerAttackDiv)
  roundText.appendChild(playerAttackEffectivenessDiv)
  roundText.appendChild(rivalAttackDiv)
  roundText.appendChild(rivalAttackEffectivenessDiv)
  roundText.appendChild(roundResultDiv)
  
  if (roundResult === roundResults[0]) {
    roundResultRoundResult.textContent = " drew versus ";
  } else if (roundResult === roundResults[2]) {
    roundResultRoundResult.textContent = " won versus ";
    roundText.insertBefore(critDiv, playerAttackDiv.nextSibling)
  } else if (roundResult === roundResults[1]){
    roundResultRoundResult.textContent = " lost versus ";
    roundText.insertBefore(critDiv, rivalAttackDiv.nextSibling)
  }


  rivalNameChoicesRoundResult.textContent = `${rivalName}'s`;



  /* CREATED DIVS */

  /* PLAYER CHOICE DIV */
 
  playerChoiceDiv.id = "player-choice-div"
  playerChoiceDiv.appendChild(playerNamePlayerChoice)
  playerNamePlayerChoice.textContent = `${playerName}: `
  playerChoiceDiv.appendChild(playerGoPlayerChoice)
  playerChoiceDiv.appendChild(playerPokemonPlayerChoice)
  playerGoPlayerChoice.textContent = "GO! "
  playerPokemonPlayerChoice.textContent = `${playerPokémon}!`
  

  /* RIVAL CHOICE DIV */

  rivalChoiceDiv.id = "rival-choice-div"
  rivalChoiceDiv.appendChild(rivalNamePlayerChoice)
  rivalNamePlayerChoice.textContent = `${rivalName}: `
  rivalChoiceDiv.appendChild(rivalGoPlayerChoice)
  rivalGoPlayerChoice.textContent = "GO! "
  rivalChoiceDiv.appendChild(rivalPokemonPlayerChoice)
  rivalPokemonPlayerChoice.textContent = `${rivalPokémon}!`

  /* PLAYER ATTACK DIV */

  playerAttackDiv.id = "player-attack-div"
  playerAttackDiv.appendChild(playerNamePlayerAttack)
  playerNamePlayerAttack.textContent = `${playerName}'s `
  playerAttackDiv.appendChild(playerPokemonPlayerAttack)
  playerPokemonPlayerAttack.textContent = `${playerPokémon} `
  playerAttackDiv.appendChild(playerUsedPlayerAttack)
  playerUsedPlayerAttack.textContent = "used "
  playerAttackDiv.appendChild(playerPokemonAttackPlayerAttack)
  playerPokemonAttackPlayerAttack.textContent = `${playerPokémonAttack}!`

  /* PLAYER ATTACK EFFECTIVENESS DIV */
  playerAttackEffectivenessDiv.textContent = playerPokémonAttackEffectiveness

  /* RIVAL ATTACK DIV */

  rivalAttackDiv.id = "rival-attack-div"
  rivalAttackDiv.appendChild(rivalNamePlayerAttack)
  rivalNamePlayerAttack.textContent = `${rivalName}'s `
  rivalAttackDiv.appendChild(rivalPokemonPlayerAttack)
  rivalPokemonPlayerAttack.textContent = `${rivalPokémon} `
  rivalAttackDiv.appendChild(rivalUsedPlayerAttack)
  rivalUsedPlayerAttack.textContent = "used "
  rivalAttackDiv.appendChild(rivalPokemonAttackPlayerAttack)
  rivalPokemonAttackPlayerAttack.textContent = `${rivalPokémonAttack}!`

  /* RIVAL ATTACK EFFECTIVENESS DIV */
  rivalAttackEffectivenessDiv.textContent = rivalPokémonAttackEffectiveness




  roundResultDiv.appendChild(playerNameChoicesRoundResult)
  playerNameChoicesRoundResult.textContent = `${playerName}'s `
  roundResultDiv.appendChild(playerPokemonChoicesRoundResult)
  playerPokemonChoicesRoundResult.textContent = `${playerPokémon} `
  roundResultDiv.appendChild(roundResultRoundResult)
  roundResultDiv.appendChild(rivalNameChoicesRoundResult)
  rivalNameChoicesRoundResult.textContent = `${rivalName}'s `
  roundResultDiv.appendChild(rivalPokemonChoicesRoundResult)
  rivalPokemonChoicesRoundResult.textContent = `${rivalPokémon}!`



  


  
  



  displayedPlayerChoice.textContent = (choiceFlavourText(playerName, playerPokémon));
  displayedRivalChoice.textContent = (choiceFlavourText(rivalName, rivalPokémon))
  displayedPlayerPokémonAttack.textContent = attackFlavourText(playerName, playerPokémon, playerPokémonAttack)
  displayedPlayerPokémonAttackEffectiveness.textContent = playerPokémonAttackEffectiveness;
  displayedPlayerPokémonAttackEffectiveness.style = "font-weight: bold;"
  displayedRivalPokémonAttack.textContent = attackFlavourText(rivalName, rivalPokémon, rivalPokémonAttack);
  displayedRivalPokémonAttackEffectiveness.textContent = rivalPokémonAttackEffectiveness;
  displayedRivalPokémonAttackEffectiveness.style = "font-weight: bold;"
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
    let exp = Math.floor(Math.random() * 51) + 50;

    createDiv(postGameFlavourText, "player-rival-choices");

    /* FAINT TEXT */
    postGameFlavourText.appendChild(faintFlavourText)
    faintFlavourText.appendChild(playerNameFaintFlavourText)
    faintFlavourText.appendChild(playerPokemonNameFaintFlavourText)
    faintFlavourText.appendChild(faintedFaintFlavourText)

    /* EXP TEXT */
    postGameFlavourText.appendChild(expFlavourText)
    expFlavourText.appendChild(expPlayerName)
    expFlavourText.appendChild(expPokemonName)
    expFlavourText.appendChild(gainedPokemonName)
    expFlavourText.appendChild(expGained)



    /* displayedGameResult.appendChild(playerNameRoundResult)
    displayedGameResult.appendChild(typeRoundResult)
    displayedGameResult.appendChild(againstRoundResult)
    displayedGameResult.appendChild(rivalNameRoundResult)
    rivalNameRoundResult.textContent = `${rivalName}!`

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

    








  
*/
 









    


    
    if (playerScore > rivalScore) {
      playerNameFaintFlavourText.textContent = `Rival ${rivalName}'s `
      playerPokemonNameFaintFlavourText.textContent = ` ${rivalPokémon} `;
      expPlayerName.textContent = `${playerName}'s `;
      expPokemonName.textContent = playerPokémon;
      typeRoundResult.style = "color:green;"
      typeRoundResult.textContent = "WON"

    } else {
      typeRoundResult.style = "color:red;"
      typeRoundResult.textContent = "LOST"
      playerNameFaintFlavourText.textContent = `${playerName}'s `
      playerPokemonNameFaintFlavourText.textContent = `${playerPokémon} `;
      expPlayerName.textContent = `${rivalName}'s `;
      expPokemonName.textContent = ` ${rivalPokémon}`;
    }
    expGained.textContent = ` ${exp} Exp. Points!`; 

        /* STATS */
    createDiv(postGameDiv, "player-rival-choices")
    postGameDiv.appendChild(postGameFlavourText)
    postGameDiv.appendChild(statsDiv)
    postGameDiv.appendChild(gameResultDiv)


    createDiv(statsDiv, "post-game-flavour-text");
    statsDiv.appendChild(roundsWonDiv)
    playerScoreSpanNumber.textContent = playerScore;
    roundsWonDiv.appendChild(playerScoreSpanWon);
    roundsWonDiv.appendChild(playerScoreSpanWonColon)
    roundsWonDiv.appendChild(playerScoreSpanNumber);

    statsDiv.appendChild(roundsLostDiv)
    rivalScoreSpanNumber.textContent = rivalScore;
    roundsLostDiv.appendChild(rivalScoreSpanWon);
    roundsLostDiv.appendChild(rivalScoreSpanWonColon)
    roundsLostDiv.appendChild(rivalScoreSpanNumber);

    statsDiv.appendChild(roundsDrawnDiv)
    drawSpanNumber.textContent = roundsDrawn;
    roundsDrawnDiv.appendChild(drawScoreSpanWon);
    roundsDrawnDiv.appendChild(drawScoreSpanWonScoreSpanWonColon)
    roundsDrawnDiv.appendChild(drawSpanNumber);


    statsDiv.appendChild(winPercentDiv)
    winPercentSpanNumber.textContent = winPercentage;
    winPercentDiv.appendChild(winPercentSign);
    winPercentDiv.appendChild(winPercentScoreSpanWonScoreSpanWonColon)
    winPercentDiv.appendChild(winPercentSpanNumber);
    winPercentDiv.appendChild(winPercentScoreSpanWon);


    statsDiv.appendChild(losePercentDiv)
    losePercentSpanNumber.textContent = lossPercentage;
    losePercentDiv.appendChild(losePercentSign);
    losePercentDiv.appendChild(losePercentScoreSpanWonScoreSpanWonColon)
    losePercentDiv.appendChild(losePercentSpanNumber)
    losePercentDiv.appendChild(losePercentScoreSpanWon)

    statsDiv.appendChild(totalRoundsPlayedDiv)
    totalRoundsPercentSpanNumber.textContent = totalRoundsPlayed;
    totalRoundsPlayedDiv.appendChild(totalRoundsPercentScoreSpanWon)
    totalRoundsPlayedDiv.appendChild(totalRoundsPercentScoreSpanWonScoreSpanWonColon)
    totalRoundsPlayedDiv.appendChild(totalRoundsPercentSpanNumber)

    statsDiv.appendChild(totalWinPercentDiv)
    totalWinPercentSpanNumber.textContent = totalWinPercentage;
    totalWinPercentDiv.appendChild(totalWinPercentPreSign)
    totalWinPercentDiv.appendChild(totalWinPercentScoreSpanWon)
    totalWinPercentDiv.appendChild(totalWinPercentScoreSpanWonScoreSpanWonColon)
    totalWinPercentDiv.appendChild(totalWinPercentSpanNumber)
    totalWinPercentDiv.appendChild(totalWinPercentSign)

    statsDiv.appendChild(totalLossPercentDiv)
    totalLossPercentSpanNumber.textContent = totalLossPercentage;
    totalLossPercentDiv.appendChild(totalLossPercentPreSign)
    totalLossPercentDiv.appendChild(totalLossPercentScoreSpanWon)
    totalLossPercentDiv.appendChild(totalLossPercentScoreSpanWonScoreSpanWonColon)
    totalLossPercentDiv.appendChild(totalLossPercentSpanNumber)
    totalLossPercentDiv.appendChild(totalLossPercentSign)


    statsDiv.appendChild(totalDrawPercentDiv)
    totalDrawPercentSpanNumber.textContent = totalDrawPercentage;
    totalDrawPercentDiv.appendChild(totalDrawPercentPreSign)
    totalDrawPercentDiv.appendChild(totalDrawPercentScoreSpanWon)
    totalDrawPercentDiv.appendChild(totalDrawPercentScoreSpanWonScoreSpanWonColon)
    totalDrawPercentDiv.appendChild(totalDrawPercentSpanNumber)
    totalDrawPercentDiv.appendChild(totalDrawPercentSign)

    /* GAME RESULT */
    createDiv(gameResultDiv, "stats-div")

    /* POST GAME */



    /*
    displayedGameResult.appendChild(playerNameRoundResult)
    displayedGameResult.appendChild(typeRoundResult)
    displayedGameResult.appendChild(againstRoundResult)
    displayedGameResult.appendChild(rivalNameRoundResult)
    rivalNameRoundResult.textContent = `${rivalName}!`

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
    displayedTotalDrawPercentage.appendChild(totalDrawPercentSign); */



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
    faintFlavourText.textContent = null;
    expFlavourText.textContent = null;
    playerChoiceDiv.remove
    rivalChoiceDiv.remove
    playerAttackDiv.remove
    playerAttackEffectivenessDiv.remove
    rivalAttackDiv.remove
    rivalAttackEffectivenessDiv.remove
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
    return divName.textContent = "A critical hit!";
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