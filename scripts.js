/* Arrays & Dictionaries */
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
  "Draw": "failed!",
  "Lose": "not very effective...",
  "Win": "super effective!"
}

const roundResults = ["Draw", "Lose", "Win"];

/* Initialised Variables */

/* Names */
let playerName = "playername".toUpperCase();
let rivalName = "rivalname".toUpperCase();

/* Scores */
let playerScore = 0;
let rivalScore = 0;
let roundsDrawn = 0;
let totalRoundsPlayed = 0;

/* Pokémon */
let playerPokémon;
let rivalPokémon;

/* Pokémon Attacks */
let playerPokémonAttack;
let rivalPokémonAttack;

/* Critical Hit Chance */
let criticalHitChance;

/* Pokémon Attack Effectiveness */
let playerPokémonAttackEffectiveness;
let rivalPokémonAttackEffectiveness;

/* Round Result */
let roundResult;

/* Stats */
let winPercentage;
let lossPercentage;
let totalWinPercentage;
let totalLossPercentage;
let totalDrawPercentage;

/* Set Scores To Efficiently Test Post-Game Content - Temporary */
playerScore = 4;
rivalScore = 4;
roundsDrawn = 4;

/* DOM Variables */


/* player-rival-scores-div */


/* player-name-and-score */


/* rival-name-and-score */


/* round-text */
const roundText = document.createElement("div");
roundText.id = "round-text";


/* player-choice-div */
const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.id = "player-choice"

const playerChoicePlayerName = document.createElement("span");
playerChoicePlayerName.id = "player-choice-player-name";
playerChoicePlayerName.style = "color: orange";

const playerChoiceGo = document.createElement("span");
playerChoiceGo.id = "player-choice-go";
playerChoiceGo.style = "color: pink";

const playerChoicePokémon = document.createElement("span");
playerChoicePokémon.id = "player-choice-pokémon";
playerChoicePokémon.style = "color: red";


/* rival-choice-div */
const rivalChoiceDiv = document.createElement("div");
playerChoiceDiv.id = "rival-choice"

const rivalChoiceRivalName = document.createElement("span");
rivalChoiceRivalName.id = "rival-choice-rival-name";
rivalChoiceRivalName.style = "color: blue";

const rivalChoiceGo = document.createElement("span");
rivalChoiceGo.id = "rival-choice-go";
rivalChoiceGo.style = "color: purple";
rivalChoiceGo.textContent = "GO!";

const rivalChoicePokémon = document.createElement("span");
rivalChoicePokémon.id = "rival-choice-pokémon";
rivalChoicePokémon.style = "color: red";


/* player-attack-div */
const playerAttackDiv = document.createElement("div");
playerAttackDiv.id = "player-attack-div";

const playerAttackPlayerName = document.createElement("span");
playerAttackPlayerName.id = "player-attack-player-name";
playerAttackPlayerName.style = "color: blue;"

const playerAttackPokémon = document.createElement("span");
playerAttackPokémon.id = "player-attack-pokémon";
playerAttackPokémon.style = "color: purple";

const playerAttackUsed = document.createElement("span");
playerAttackUsed.id = "player-attack-used";
playerAttackUsed.style = "color: yellow";
playerAttackUsed.textContent = "used "

const playerAttackPokémonAttack = document.createElement("span");
playerAttackPokémonAttack.id = "player-attack-pokémon-attack";
playerAttackPokémonAttack.style = "color: red";


/* player-attack-effectiveness */


/* rival-attack-div */
const rivalAttackDiv = document.createElement("div");


/* rival-attack-effectiveness */


/* round-result */














/* PLAYER CHOICE */




/* RIVAL CHOICE */




/* PLAYER ATTACK */


/* PLAYER ATTACK EFFECTIVENESS */
const playerAttackEffectivenessDiv = document.createElement("div");
playerAttackEffectivenessDiv.id = "player-attack-effectiveness";

const playerAttackEffectivenessIt = document.createElement("span")
playerAttackEffectivenessIt.id = "player-attack-effectiveness-it"

const playerAttackEffectivenessSpan = document.createElement("span");
playerAttackEffectivenessSpan.id = "player-attack-effectiveness-span"

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

const rivalAttackEffectivenessIt = document.createElement("span")
rivalAttackEffectivenessIt.id = "rival-attack-effectiveness-it"

const rivalAttackEffectivenessSpan = document.createElement("span");
rivalAttackEffectivenessSpan.id = "rival-attack-effectiveness-span"

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

const roundResultVersus = document.createElement("span");
roundResultVersus.id = "round-result-versus";
roundResultVersus.style = "color: cyan";

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

roundsWonDiv.textContent = "ROUNDS "

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

roundsLostDiv.textContent = "ROUNDS "

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

roundsDrawnDiv.textContent = "ROUNDS "


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

winPercentDiv.textContent = "WIN"

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

losePercentDiv.textContent = "LOSS"

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

totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS "

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
totalWinPercentDiv.textContent = "TOTAL "

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

totalLossPercentDiv.textContent = "TOTAL "

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

totalDrawPercentDiv.textContent = "TOTAL "

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
playerNameRoundResult.textContent = `${playerName} `;
playerNameRoundResult.id = "player-name-round-result";
playerNameRoundResult.style = "color: blue;"

const rivalNameRoundResult = document.createElement("span");
rivalNameRoundResult.textContent = `${rivalName}`;
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


const playerRivalScoresDiv = document.createElement("div");
playerRivalScoresDiv.id = "player-rival-scores-div"

const playerNameAndScoreDiv = document.createElement("div");
playerNameAndScoreDiv.id = "player-name-and-score"

const playerNameScoresDiv = document.createElement("div");
playerNameScoresDiv.id = "player-name-scores-div"
playerNameScoresDiv.textContent = playerName
const playerScoreScoresDiv = document.createElement("div");
playerScoreScoresDiv.id = "player-score-scores-div"

const rivalNameAndScoreDiv = document.createElement("div");
rivalNameAndScoreDiv.id = "rival-name-and-score"

const rivalNameScoresDiv = document.createElement("div");
rivalNameScoresDiv.id = "rival-name-scores-div"
rivalNameScoresDiv.textContent = rivalName
const rivalScoreScoresDiv = document.createElement("div");
rivalScoreScoresDiv.id = "rival-score-scores-div"



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
    playerAttackEffectivenessIt.textContent = "But it "
    rivalAttackEffectivenessIt.textContent = "But it "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
    critDiv.remove()
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerAttackEffectivenessIt.textContent = "It's "
    rivalAttackEffectivenessIt.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    generateCriticalHitChance(critDiv);
  } else {
    playerAttackEffectivenessIt.textContent = "It's "
    rivalAttackEffectivenessIt.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore ++;
    roundResult = roundResults[1];
    generateCriticalHitChance(critDiv);
  }

  createDiv(playerRivalScoresDiv, "buttons")
  playerRivalScoresDiv.appendChild(playerNameAndScoreDiv)
  playerRivalScoresDiv.appendChild(rivalNameAndScoreDiv)

  playerNameAndScoreDiv.appendChild(playerNameScoresDiv)
  playerNameAndScoreDiv.appendChild(playerScoreScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalNameScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalScoreScoresDiv)




  createDiv(roundText, "player-rival-scores-div");
  roundText.appendChild(playerChoiceDiv)
  roundText.appendChild(rivalChoiceDiv)
  roundText.appendChild(playerAttackDiv)
  roundText.appendChild(playerAttackEffectivenessDiv)
  playerAttackEffectivenessDiv.appendChild(playerAttackEffectivenessIt)
  playerAttackEffectivenessIt.style = "color: thistle;";
  rivalAttackEffectivenessIt.style = "color: thistle;"
  playerAttackEffectivenessSpan.style = "color: MediumAquamarine;";
  rivalAttackEffectivenessSpan.style = "color: MediumAquamarine;"
  playerAttackEffectivenessDiv.appendChild(playerAttackEffectivenessSpan)
  roundText.appendChild(rivalAttackDiv)
  roundText.appendChild(rivalAttackEffectivenessDiv)
  rivalAttackEffectivenessDiv.appendChild(rivalAttackEffectivenessIt)
  rivalAttackEffectivenessDiv.appendChild(rivalAttackEffectivenessSpan)
  roundText.appendChild(roundResultDiv)
  
  if (roundResult === roundResults[0]) {
    roundResultRoundResult.textContent = " drew ";
  } else if (roundResult === roundResults[2]) {
    roundResultRoundResult.textContent = " won ";
    roundText.insertBefore(critDiv, playerAttackDiv.nextSibling)
  } else if (roundResult === roundResults[1]){
    roundResultRoundResult.textContent = " lost ";
    roundText.insertBefore(critDiv, rivalAttackDiv.nextSibling)
  }


  rivalNameChoicesRoundResult.textContent = `${rivalName}'s`;



  /* CREATED DIVS */

  /* PLAYER CHOICE DIV */
 
  playerChoiceDiv.id = "player-choice-div"
  playerChoiceDiv.appendChild(playerChoicePlayerName)
  playerChoicePlayerName.textContent = `${playerName}: `
  playerChoiceDiv.appendChild(playerChoiceGo)
  playerChoiceDiv.appendChild(playerChoicePokémon)
  playerChoiceGo.textContent = "GO! "
  playerChoicePokémon.textContent = `${playerPokémon}!`
  

  /* RIVAL CHOICE DIV */

  rivalChoiceDiv.id = "rival-choice-div"
  rivalChoiceDiv.appendChild(rivalChoiceRivalName)
  rivalChoiceRivalName.textContent = `${rivalName}: `
  rivalChoiceDiv.appendChild(rivalChoiceGo)
  rivalChoiceGo.textContent = "GO! "
  rivalChoiceDiv.appendChild(rivalChoicePokémon)
  rivalChoicePokémon.textContent = `${rivalPokémon}!`

  /* PLAYER ATTACK DIV */

  playerAttackDiv.id = "player-attack-div"
  playerAttackDiv.appendChild(playerAttackPlayerName)
  playerAttackPlayerName.textContent = `${playerName}'s `
  playerAttackDiv.appendChild(playerAttackPokémon)
  playerAttackPokémon.textContent = `${playerPokémon} `
  playerAttackDiv.appendChild(playerAttackUsed)
  playerAttackDiv.appendChild(playerAttackPokémonAttack)
  playerAttackPokémonAttack.textContent = `${playerPokémonAttack}!`

  /* PLAYER ATTACK EFFECTIVENESS DIV */
  playerAttackEffectivenessSpan.textContent = playerPokémonAttackEffectiveness

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
  rivalAttackEffectivenessSpan.textContent = rivalPokémonAttackEffectiveness




  roundResultDiv.appendChild(playerNameChoicesRoundResult)
  playerNameChoicesRoundResult.textContent = `${playerName}'s `
  roundResultDiv.appendChild(playerPokemonChoicesRoundResult)
  playerPokemonChoicesRoundResult.textContent = `${playerPokémon} `
  roundResultDiv.appendChild(roundResultRoundResult)
  roundResultDiv.appendChild(roundResultVersus)
  roundResultVersus.textContent = " versus "
  roundResultDiv.appendChild(rivalNameChoicesRoundResult)
  rivalNameChoicesRoundResult.textContent = `${rivalName}'s `
  roundResultDiv.appendChild(rivalPokemonChoicesRoundResult)
  rivalPokemonChoicesRoundResult.textContent = `${rivalPokémon}!`



  


  
  playerRivalScoresDiv.appendChild(playerNameAndScoreDiv)
  playerRivalScoresDiv.appendChild(rivalNameAndScoreDiv)

  playerNameAndScoreDiv.appendChild(playerNameScoresDiv)
  playerNameAndScoreDiv.appendChild(playerScoreScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalNameScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalScoreScoresDiv)



  playerScoreScoresDiv.textContent = playerScore;
  rivalScoreScoresDiv.textContent = rivalScore;




  let roundsPlayed = playerScore + rivalScore;
  winPercentage = ((playerScore / (roundsPlayed)) * 100).toFixed(2);
  lossPercentage = ((rivalScore / (roundsPlayed)) * 100).toFixed(2);

  totalWinPercentage = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercentage = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercentage = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);


  if (playerScore === 5 || rivalScore === 5) {
    let exp = Math.floor(Math.random() * 51) + 50;
    createDiv(postGameFlavourText, "round-text");

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
  




    if (playerScore > rivalScore) {
      playerNameFaintFlavourText.textContent = `${rivalName}'s `
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
    createDiv(postGameDiv, "round-text")
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
    gameResultDiv.appendChild(playerNameRoundResult)
    gameResultDiv.appendChild(typeRoundResult)
    gameResultDiv.appendChild(againstRoundResult)
    gameResultDiv.appendChild(rivalNameRoundResult)
    rivalNameRoundResult.textContent = `${rivalName}!`






    playerScore = 0;
    rivalScore = 0;
    totalRoundsPlayed = 0;
    roundsDrawn = 0;
  } else {
    postGameDiv.remove()
  }
};

 function generateCriticalHitChance(divName) {
  criticalHitChance = Math.random();
  if (criticalHitChance <= 100) {
    return divName.textContent = "A critical hit!";
    }
  } 

function createDiv(newDiv, divID) {
  let overheadDiv = document.getElementById(divID);
  let overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling)
}