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


/* player-pokémon-div */
const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon"

const playerPokémonPlayerName = document.createElement("span");
playerPokémonPlayerName.id = "player-pokémon-player-name";
playerPokémonPlayerName.style = "color: orange";

const playerPokémonGoText = document.createElement("span");
playerPokémonGoText.id = "player-pokémon-go-text";
playerPokémonGoText.style = "color: pink";

const playerPokémonName = document.createElement("span");
playerPokémonName.id = "player-pokémon-name";
playerPokémonName.style = "color: red";


/* rival-pokémon-choice-div */
const rivalPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "rival-pokémon"

const rivalPokémonRivalName = document.createElement("span");
rivalPokémonRivalName.id = "rival-pokémon-rival-name";
rivalPokémonRivalName.style = "color: blue";

const rivalPokémonGoText = document.createElement("span");
rivalPokémonGoText.id = "rival-pokémon-go-text";
rivalPokémonGoText.style = "color: purple";
rivalPokémonGoText.textContent = "GO!";

const rivalPokémonName = document.createElement("span");
rivalPokémonName.id = "rival-pokémon-name";
rivalPokémonName.style = "color: red";


/* player-pokémon-attack-div */
const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack-div";

const playerPokémonAttackPlayerName = document.createElement("span");
playerPokémonAttackPlayerName.id = "player-pokémon-attack-player-name";
playerPokémonAttackPlayerName.style = "color: blue;"

const playerPokémonAttackPokémonName = document.createElement("span");
playerPokémonAttackPokémonName.id = "player-pokémon-attack-pokémon";
playerPokémonAttackPokémonName.style = "color: purple";

const playerPokémonAttackUsedText = document.createElement("span");
playerPokémonAttackUsedText.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedText.style = "color: yellow";
playerPokémonAttackUsedText.textContent = "used "

const playerPokémonAttackPokémonAttack = document.createElement("span");
playerPokémonAttackPokémonAttack.id = "player-pokémon-attack-pokémon-attack";
playerPokémonAttackPokémonAttack.style = "color: red";


/* player-pokémon-attack-effectiveness */
const playerPokémonAttackEffectivenessDiv = document.createElement("div")
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness"

const playerPokémonAttackEffectivenessItText =  document.createElement("span")
playerPokémonAttackEffectivenessItText.id = "player-pokémon-attack-effectiveness-it-text"

const playerPokémonAttackEffectivenessText =  document.createElement("span")
playerPokémonAttackEffectivenessText.id = "player-pokémon-attack-effectiveness-text"


/* rival-pokémon-attack-div */
const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack-div";

const rivalPokémonAttackRivalName = document.createElement("span");
rivalPokémonAttackRivalName.id = "rival-pokémon-attack-rival-name";
rivalPokémonAttackRivalName.style = "color: blue;"

const rivalPokémonAttackPokémonName = document.createElement("span");
rivalPokémonAttackPokémonName.id = "rival-pokémon-attack-pokémon";
rivalPokémonAttackPokémonName.style = "color: purple";

const rivalPokémonAttackUsedText = document.createElement("span");
rivalPokémonAttackUsedText.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedText.style = "color: yellow";
rivalPokémonAttackUsedText.textContent = "used "

const rivalPokémonAttackPokémonNameAttack = document.createElement("span");
rivalPokémonAttackPokémonNameAttack.id = "rival-pokémon-attack-pokémon-attack";
rivalPokémonAttackPokémonNameAttack.style = "color: red";


/* rival-pokémon-attack-effectiveness */
const rivalPokémonAttackEffectivenessDiv = document.createElement("div")
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness"

const rivalPokémonAttackEffectivenessItText =  document.createElement("span")
rivalPokémonAttackEffectivenessItText.id = "rival-pokémon-attack-effectiveness-it"

const rivalPokémonAttackEffectivenessText =  document.createElement("span")
rivalPokémonAttackEffectivenessText.id = "rival-pokémon-attack-effectiveness-text"


/* round-result */
const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";

const roundResultPlayerName = document.createElement("span");
roundResultPlayerName.id = "round-result-player-name"
roundResultPlayerName.style = "color: blue";

const roundResultPlayerPokémon = document.createElement("span")
roundResultPlayerPokémon.id = "round-result-player-pokémon"
roundResultPlayerPokémon.style = "color: purple;"

const roundResultRoundResult = document.createElement("span")
roundResultRoundResult.id = "round-result-round-result" 
roundResultRoundResult.style = "color: orange;"

const roundResultVersusText = document.createElement("span")
roundResultVersusText.id = "round-result-versus-text"
roundResultVersusText.style = "color: cyan;"

const roundResultRivalName = document.createElement("span")
roundResultRivalName.id = "round-result-rival-name"
roundResultRivalName.style = "coolr: yellow;"

const roundResultRivalPokémon = document.createElement("span")
roundResultRivalPokémon.id = "round-result-rival-pokémon"
roundResultRivalPokémon.style = "color: red;"


/* post-game */
const postGame = document.createElement("div");
postGame.id = "post-game"

/* flavour-text */

/* faint */
const faint = document.createElement("div");
faint.id = "faint";

const faintName = document.createElement("span")
faintName.id = "faint-player-name"
faintName.style = "color: pink;"

const faintPlayerPokémon = document.createElement("span")
faintPlayerPokémon.id = "faint-player-Pokémon"
faintPlayerPokémon.style = "color: blue;"

const faintFaintedText = document.createElement("span")
faintFaintedText.id  ="faint-fainted-text"
faintFaintedText.style = "color: yellow;"
faintFaintedText.textContent = "fainted!"

/* exp */
const exp = document.createElement("div")
exp.id = "exp"

const expName = document.createElement("span");
expName.id = "exp-name";
expName.style = "color: blue;"

const expPokémon = document.createElement("span");
expPokémon.id = "exp-pokémon"
expPokémon.style = "color: yellow;"

const expGainedText = document.createElement("span");
expGainedText.id = "exp-gained-text";
expGainedText.style = "color: green;"
expGainedText.textContent = "gained "

const expAmount = document.createElement("span")
expAmount.id = "exp-amount";
expAmount.style = "color: Thistle;"


/* stats */

/* game-result */

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
    playerPokémonAttackEffectivenessItText.textContent = "But it "
    rivalPokémonAttackEffectivenessItText.textContent = "But it "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
    critDiv.remove()
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectivenessItText.textContent = "It's "
    rivalPokémonAttackEffectivenessItText.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    generateCriticalHitChance(critDiv);
  } else {
    playerPokémonAttackEffectivenessItText.textContent = "It's "
    rivalPokémonAttackEffectivenessItText.textContent = "It's "
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
  roundText.appendChild(playerPokémonDiv)
  roundText.appendChild(rivalPokémonDiv)
  roundText.appendChild(playerPokémonAttackDiv)
  roundText.appendChild(playerPokémonAttackEffectivenessDiv)
  playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessItText)
  playerPokémonAttackEffectivenessItText.style = "color: thistle;";
  rivalPokémonAttackEffectivenessItText.style = "color: thistle;"
  playerPokémonAttackEffectivenessText.style = "color: MediumAquamarine;";
  rivalPokémonAttackEffectivenessText.style = "color: MediumAquamarine;"
  playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessText)
  roundText.appendChild(rivalPokémonAttackDiv)
  roundText.appendChild(rivalPokémonAttackEffectivenessDiv)
  rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessItText)
  rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessText)
  roundText.appendChild(roundResultDiv)
  
  if (roundResult === roundResults[0]) {
    roundResultRoundResult.textContent = " drew ";
  } else if (roundResult === roundResults[2]) {
    roundResultRoundResult.textContent = " won ";
    roundText.insertBefore(critDiv, playerPokémonAttackDiv.nextSibling)
  } else if (roundResult === roundResults[1]){
    roundResultRoundResult.textContent = " lost ";
    roundText.insertBefore(critDiv, rivalPokémonAttackDiv.nextSibling)
  }


  roundResultRivalName.textContent = `${rivalName}'s`;



  /* CREATED DIVS */

  /* PLAYER CHOICE DIV */
 
  playerPokémonDiv.id = "player-choice-div"
  playerPokémonDiv.appendChild(playerPokémonPlayerName)
  playerPokémonPlayerName.textContent = `${playerName}: `
  playerPokémonDiv.appendChild(playerPokémonGoText)
  playerPokémonDiv.appendChild(playerPokémonName)
  playerPokémonGoText.textContent = "GO! "
  playerPokémonName.textContent = `${playerPokémon}!`
  

  /* RIVAL CHOICE DIV */

  rivalPokémonDiv.id = "rival-choice-div"
  rivalPokémonDiv.appendChild(rivalPokémonRivalName)
  rivalPokémonRivalName.textContent = `${rivalName}: `
  rivalPokémonDiv.appendChild(rivalPokémonGoText)
  rivalPokémonGoText.textContent = "GO! "
  rivalPokémonDiv.appendChild(rivalPokémonName)
  rivalPokémonName.textContent = `${rivalPokémon}!`

  /* PLAYER ATTACK DIV */

  playerPokémonAttackDiv.id = "player-attack-div"
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPlayerName)
  playerPokémonAttackPlayerName.textContent = `${playerName}'s `
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonName)
  playerPokémonAttackPokémonName.textContent = `${playerPokémon} `
  playerPokémonAttackDiv.appendChild(playerPokémonAttackUsedText)
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonAttack)
  playerPokémonAttackPokémonAttack.textContent = `${playerPokémonAttack}!`

  /* PLAYER ATTACK EFFECTIVENESS DIV */
  playerPokémonAttackEffectivenessText.textContent = playerPokémonAttackEffectiveness

  /* RIVAL ATTACK DIV */

  rivalPokémonAttackDiv.id = "rival-attack-div"
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackRivalName)
  rivalPokémonAttackRivalName.textContent = `${rivalName}'s `
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonName)
  rivalPokémonAttackPokémonName.textContent = `${rivalPokémon} `
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackUsedText)
  rivalPokémonAttackUsedText.textContent = "used "
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonNameAttack)
  rivalPokémonAttackPokémonNameAttack.textContent = `${rivalPokémonAttack}!`

  /* RIVAL ATTACK EFFECTIVENESS DIV */
  rivalPokémonAttackEffectivenessText.textContent = rivalPokémonAttackEffectiveness




  roundResultDiv.appendChild(roundResultPlayerName)
  roundResultPlayerName.textContent = `${playerName}'s `
  roundResultDiv.appendChild(roundResultPlayerPokémon)
  roundResultPlayerPokémon.textContent = `${playerPokémon} `
  roundResultDiv.appendChild(roundResultRoundResult)
  roundResultDiv.appendChild(roundResultRoundResult)
  roundResultDiv.appendChild(roundResultVersusText)
  roundResultVersusText.textContent = " versus "
  roundResultDiv.appendChild(roundResultRivalName)
  roundResultRivalName.textContent = `${rivalName}'s `
  roundResultDiv.appendChild(roundResultRivalPokémon)
  roundResultRivalPokémon.textContent = `${rivalPokémon}!`



  


  
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
    let exp1 = Math.floor(Math.random() * 51) + 50;
    createDiv(postGame, "round-text");

    /* FAINT TEXT */
    postGame.appendChild(faint)
    faint.appendChild(faintName)
    faint.appendChild(faintPlayerPokémon)
    faint.appendChild(faintFaintedText)

    /* EXP TEXT */
    postGame.appendChild(exp)
    exp.appendChild(expName)
    exp.appendChild(expPokémon)
    exp.appendChild(expGainedText)
    exp.appendChild(expAmount)
  




    if (playerScore > rivalScore) {
      faintName.textContent = `${rivalName}'s `
      faintPlayerPokémon.textContent = ` ${rivalPokémon} `;
      expName.textContent = `${playerName}'s `;
      expPokémon.textContent = playerPokémon;
      typeRoundResult.style = "color:green;"
      typeRoundResult.textContent = "WON"

    } else {
      typeRoundResult.style = "color:red;"
      typeRoundResult.textContent = "LOST"
      faintName.textContent = `${playerName}'s `
      faintPlayerPokémon.textContent = `${playerPokémon} `;
      expName.textContent = `${rivalName}'s `;
      expPokémon.textContent = ` ${rivalPokémon}`;
    }
    expGainedText.textContent = ` ${exp1} Exp. Points!`; 

        /* STATS */
    createDiv(postGame, "round-text")
    postGame.appendChild(faint)
    postGame.appendChild(statsDiv)
    postGame.appendChild(gameResultDiv)


    createDiv(statsDiv, "post-game");
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
    postGame.remove()
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