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
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;

/* Set Scores To Efficiently Test Post-Game Content - Temporary */
playerScore = 4;
rivalScore = 4;
roundsDrawn = 4;

/* DOM Variables */


/* player-rival-scores-div */


/* player-name-and-score */


/* rival-name-and-score */


/* round-text */
const roundTextDiv = document.createElement("div");
roundTextDiv.id = "round-text";


/* player-pokémon-div */
const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon"

const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";
playerPokémonPlayerNameSpan.style = "color: orange";

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.style = "color: pink";

const playerPokémonNameSpan = document.createElement("span");
playerPokémonNameSpan.id = "player-pokémon-name";
playerPokémonNameSpan.style = "color: red";


/* rival-pokémon-choice-div */
const rivalPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "rival-pokémon"

const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";
rivalPokémonRivalNameSpan.style = "color: blue";

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.style = "color: purple";
rivalPokémonGoTextSpan.textContent = "GO!";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonNameSpan.id = "rival-pokémon-name";
rivalPokémonNameSpan.style = "color: red";


/* player-pokémon-attack-div */
const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack";

const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";
playerPokémonAttackPlayerNameSpan.style = "color: blue;"

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon-name";
playerPokémonAttackPokémonNameSpan.style = "color: purple";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.style = "color: yellow";
playerPokémonAttackUsedTextSpan.textContent = "used "

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackPokémonAttackSpan.id = "player-pokémon-attack-pokémon-attack";
playerPokémonAttackPokémonAttackSpan.style = "color: red";


/* player-pokémon-attack-effectiveness */
const playerPokémonAttackEffectivenessDiv = document.createElement("div")
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness"

const playerPokémonAttackEffectivenessItTextSpan =  document.createElement("span")
playerPokémonAttackEffectivenessItTextSpan.id = "player-pokémon-attack-effectiveness-it-text"

const playerPokémonAttackEffectivenessTextSpan =  document.createElement("span")
playerPokémonAttackEffectivenessTextSpan.id = "player-pokémon-attack-effectiveness-text"


/* rival-pokémon-attack-div */
const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";

const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";
rivalPokémonAttackRivalNameSpan.style = "color: blue;"

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";
rivalPokémonAttackPokémonNameSpan.style = "color: purple";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.style = "color: yellow";
rivalPokémonAttackUsedTextSpan.textContent = "used "

const rivalPokémonAttackPokémonNameSpanAttackSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpanAttackSpan.id = "rival-pokémon-attack-pokémon-attack";
rivalPokémonAttackPokémonNameSpanAttackSpan.style = "color: red";


/* rival-pokémon-attack-effectiveness */
const rivalPokémonAttackEffectivenessDiv = document.createElement("div")
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness"

const expDivrivalPokémonAttackEffectivenessItTextSpan =  document.createElement("span")
expDivrivalPokémonAttackEffectivenessItTextSpan.id = "rival-pokémon-attack-effectiveness-it-text"

const rivalPokémonAttackEffectivenessTextSpan =  document.createElement("span")
rivalPokémonAttackEffectivenessTextSpan.id = "rival-pokémon-attack-effectiveness-text"


/* round-result */
const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";

const roundResultPlayerNameSpan = document.createElement("span");
roundResultPlayerNameSpan.id = "round-result-player-name"
roundResultPlayerNameSpan.style = "color: blue";

const roundResultPlayerPokémonSpan = document.createElement("span")
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon"
roundResultPlayerPokémonSpan.style = "color: purple;"

const roundResultRoundResultSpan = document.createElement("span")
roundResultRoundResultSpan.id = "round-result-round-result" 
roundResultRoundResultSpan.style = "color: orange;"

const roundResultVersusTextSpan = document.createElement("span")
roundResultVersusTextSpan.id = "round-result-versus-text"
roundResultVersusTextSpan.style = "color: cyan;"

const roundResultRivalNameSpan = document.createElement("span")
roundResultRivalNameSpan.id = "round-result-rival-name"
roundResultRivalNameSpan.style = "coolr: yellow;"

const roundResultRivalPokémonSpan = document.createElement("span")
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon"
roundResultRivalPokémonSpan.style = "color: red;"


/* post-game */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game"


/* flavour-text */


/* faintDiv */
const faintDiv = document.createElement("div");
faintDiv.id = "faint";

const faintNameSpan = document.createElement("span")
faintNameSpan.id = "faint-player-name"
faintNameSpan.style = "color: pink;"

const faintPlayerPokémonSpan = document.createElement("span")
faintPlayerPokémonSpan.id = "faint-player-pokémon"
faintPlayerPokémonSpan.style = "color: blue;"

const faintfaintedTextSpan = document.createElement("span")
faintfaintedTextSpan.id  ="faint-fainted-text"
faintfaintedTextSpan.style = "color: yellow;"
faintfaintedTextSpan.textContent = "fainted!"


/* expDiv */
const expDiv = document.createElement("div")
expDiv.id = "exp"

const expNameSpan = document.createElement("span");
expNameSpan.id = "exp-name";
expNameSpan.style = "color: blue;"

const expPokémonSpan = document.createElement("span");
expPokémonSpan.id = "exp-pokémon"
expPokémonSpan.style = "color: yellow;"

const expGainedTextSpan = document.createElement("span");
expGainedTextSpan.id = "exp-gained-text";
expGainedTextSpan.style = "color: green;"
expGainedTextSpan.textContent = "gained "

const expAmountSpan = document.createElement("span")
expAmountSpan.id = "exp-amount";
expAmountSpan.style = "color: Thistle;"


/* stats */
const statsDiv = document.createElement("div");
statsDiv.id = "stats"


/* rounds-won */
const roundsWonDiv = document.createElement("div")
roundsWonDiv.id = "rounds-won"
roundsWonDiv.textContent = "ROUNDS "

const roundsWonWonTextSpan = document.createElement("span")
roundsWonWonTextSpan.id = "rounds-won-won-text"
roundsWonWonTextSpan.style = "color: Purple;"
roundsWonWonTextSpan.textContent = "WON"

const roundsWonColonSpan = document.createElement("span")
roundsWonColonSpan.id = "rounds-won-colon"
roundsWonColonSpan.style = "color: cyan"
roundsWonColonSpan.textContent = ": "

const roundsWonPlayerScoreSpan = document.createElement("span")
roundsWonPlayerScoreSpan.id = "rounds-won-player-score"
roundsWonPlayerScoreSpan.style ="color: red;"
roundsWonPlayerScoreSpan.textContent = playerScore;


/* rounds-lost */
const roundsLostDiv = document.createElement("div");
roundsLostDiv.id = "rounds-lost"
roundsLostDiv.textContent = "ROUNDS "

const roundsLostLostTextSpan = document.createElement("span");
roundsLostLostTextSpan.textContent = "LOST";
roundsLostLostTextSpan.id = "rival-lost-lost-text";
roundsLostLostTextSpan.style = "color: purple;"

const roundsLostColonSpan = document.createElement("span");
roundsLostColonSpan.textContent = ": ";
roundsLostColonSpan.id = "rounds-lost-colon";
roundsLostColonSpan.style = "color: blue;"

const roundsLostRivalScoreSpan = document.createElement("span");
roundsLostRivalScoreSpan.id = "rounds-lost-rival-score";
roundsLostRivalScoreSpan.style = "color: red;"
roundsLostRivalScoreSpan.textContent = rivalScore;


/* rounds-drawn */
const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.id = "rounds-drawn"
roundsDrawnDiv.textContent = "ROUNDS "

const roundsDrawnDrawnTextSpan = document.createElement("span");
roundsDrawnDrawnTextSpan.id = "roundsDrawnDrawnTextSpan-score-won";
roundsDrawnDrawnTextSpan.style = "color: purple;"
roundsDrawnDrawnTextSpan.textContent = "DRAWN";

const roundsDrawnColonSpan = document.createElement("span");
roundsDrawnColonSpan.id = "rounds-drawn-colon";
roundsDrawnColonSpan.style = "color: blue;"
roundsDrawnColonSpan.textContent = ": ";

const roundsDrawnRoundsDrawnSpan = document.createElement("span");
roundsDrawnRoundsDrawnSpan.id = "roundsDrawnRoundsDrawnSpan-score-span";
roundsDrawnRoundsDrawnSpan.style = "color: red;"
roundsDrawnRoundsDrawnSpan.textContent = roundsDrawn;


/* win-percent */
const winPercentDiv = document.createElement("div");
winPercentDiv.id = "win-percent-div"
winPercentDiv.textContent = "WIN"

const winPercentPrePercentSignSpan = document.createElement("span");
winPercentPrePercentSignSpan.id = "winPercent-score-won";
winPercentPrePercentSignSpan.style = "color: purple;"
winPercentPrePercentSignSpan.textContent = "%";

const winPercentColonSpan = document.createElement("span");
winPercentColonSpan.id = "winPercentSpanWon-score-won-colon";
winPercentColonSpan.style = "color: blue;"
winPercentColonSpan.textContent = ": ";

const winPercentWinPercentSpan = document.createElement("span")
winPercentWinPercentSpan.id = "winPercentWinPercentSpan-score-span";
winPercentWinPercentSpan.style = "color: red;"
winPercentWinPercentSpan.textContent = winPercent;

const winPercentPostPercentSpan = document.createElement("span");
winPercentPostPercentSpan.id = "win-percent-percent-sign";
winPercentPostPercentSpan.style = "color: cyan;"
winPercentPostPercentSpan.textContent = "%";


/* lose-percent */
const losePercentDiv = document.createElement("div");
losePercentDiv.id = "lose-percent-div"
losePercentDiv.textContent = "LOSS"

const losePercentPrePercentSignSpan = document.createElement("span");
losePercentPrePercentSignSpan.id = "losePercent-score-won";
losePercentPrePercentSignSpan.style = "color: purple;"
losePercentPrePercentSignSpan.textContent = "%";

const losePercentColonSpan = document.createElement("span");
losePercentColonSpan.id = "losePercentSpanWon-score-won-colon";
losePercentColonSpan.style = "color: blue;"
losePercentColonSpan.textContent = ": ";

const losePercentLosePercentSpan = document.createElement("span");
losePercentLosePercentSpan.textContent = lossPercent;
losePercentLosePercentSpan.id = "losePercentLosePercentSpan-score-span";
losePercentLosePercentSpan.style = "color: red;"

const losePercentSign = document.createElement("span");
losePercentSign.textContent = "%";
losePercentSign.id = "awdawdore-wawdon-colon";
losePercentSign.style = "color: cyan;"


/* total-rounds-played */
const totalRoundsPlayedDiv = document.createElement("div")
totalRoundsPlayedDiv.id = "total-rounds-played"
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS "

const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-text";
totalRoundsPlayedPlayedTextSpan.style = "color: purple;"
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedColonSpan.id = "losePercentSpanWon-score-won-colon";
totalRoundsPlayedColonSpan.style = "color: blue;"
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedTotalRoundsPlayedSpan.id = "loawdawdSpanNumber-score-span";
totalRoundsPlayedTotalRoundsPlayedSpan.style = "color: red;"
totalRoundsPlayedTotalRoundsPlayedSpan.textContent = totalRoundsPlayed;


/* TOTAL WIN% */
const totalWinPercentDiv = document.createElement("div")
totalWinPercentDiv.id = "total-win-percent-div"
totalWinPercentDiv.textContent = "TOTAL "

const totalwinPercentWinPercentSpan = document.createElement("span");
totalwinPercentWinPercentSpan.textContent = totalWinPercent;
totalwinPercentWinPercentSpan.id = "totalwinPercentWinPercentSpan-score-span";
totalwinPercentWinPercentSpan.style = "color: red;"

const totalwinPercentPrePercentSignSpan = document.createElement("span");
totalwinPercentPrePercentSignSpan.textContent = "%";
totalwinPercentPrePercentSignSpan.id = "lawdawdnt-score-won";
totalwinPercentPrePercentSignSpan.style = "color: purple;"

const totalwinPercentColonSpan = document.createElement("span");
totalwinPercentColonSpan.textContent = ": ";
totalwinPercentColonSpan.id = "awdntSpanWon-score-won-colon";
totalwinPercentColonSpan.style = "color: blue;"

const totalwinPercentPostPercentSpan = document.createElement("span");
totalwinPercentPostPercentSpan.textContent = "%";
totalwinPercentPostPercentSpan.id = "awdawawddore-wawdon-colon";
totalwinPercentPostPercentSpan.style = "color: cyan;"

const totalWinPercentPreSign = document.createElement("span");
totalWinPercentPreSign.textContent = "WIN";
totalWinPercentPreSign.id = "awdawawddore-wawdon-colon";
totalWinPercentPreSign.style = "color: yellow;"

/* TOTAL LOSS% */
const totalLossPercentDiv = document.createElement("div")
totalLossPercentDiv.id = "total-loss-percent-div"

totalLossPercentDiv.textContent = "TOTAL "

const totalLossPercentSpanNumber = document.createElement("span");
totalLossPercentSpanNumber.textContent = totalLossPercent;
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
totalDrawPercentSpanNumber.textContent = totalDrawPercent;
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
    playerPokémonAttackEffectivenessItTextSpan.textContent = "But it "
    expDivrivalPokémonAttackEffectivenessItTextSpan.textContent = "But it "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
    critDiv.remove()
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    expDivrivalPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    generateCriticalHitChance(critDiv);
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    expDivrivalPokémonAttackEffectivenessItTextSpan.textContent = "It's "
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




  createDiv(roundTextDiv, "player-rival-scores-div");
  roundTextDiv.appendChild(playerPokémonDiv)
  roundTextDiv.appendChild(rivalPokémonDiv)
  roundTextDiv.appendChild(playerPokémonAttackDiv)
  roundTextDiv.appendChild(playerPokémonAttackEffectivenessDiv)
  playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessItTextSpan)
  playerPokémonAttackEffectivenessItTextSpan.style = "color: thistle;";
  expDivrivalPokémonAttackEffectivenessItTextSpan.style = "color: thistle;"
  playerPokémonAttackEffectivenessTextSpan.style = "color: MediumAquamarine;";
  rivalPokémonAttackEffectivenessTextSpan.style = "color: MediumAquamarine;"
  playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessTextSpan)
  roundTextDiv.appendChild(rivalPokémonAttackDiv)
  roundTextDiv.appendChild(rivalPokémonAttackEffectivenessDiv)
  rivalPokémonAttackEffectivenessDiv.appendChild(expDivrivalPokémonAttackEffectivenessItTextSpan)
  rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessTextSpan)
  roundTextDiv.appendChild(roundResultDiv)
  
  if (roundResult === roundResults[0]) {
    roundResultRoundResultSpan.textContent = " drew ";
  } else if (roundResult === roundResults[2]) {
    roundResultRoundResultSpan.textContent = " won ";
    roundTextDiv.insertBefore(critDiv, playerPokémonAttackDiv.nextSibling)
  } else if (roundResult === roundResults[1]){
    roundResultRoundResultSpan.textContent = " lost ";
    roundTextDiv.insertBefore(critDiv, rivalPokémonAttackDiv.nextSibling)
  }


  roundResultRivalNameSpan.textContent = `${rivalName}'s`;



  /* CREATED DIVS */

  /* PLAYER CHOICE DIV */
 
  playerPokémonDiv.id = "player-choice-div"
  playerPokémonDiv.appendChild(playerPokémonPlayerNameSpan)
  playerPokémonPlayerNameSpan.textContent = `${playerName}: `
  playerPokémonDiv.appendChild(playerPokémonGoTextSpan)
  playerPokémonDiv.appendChild(playerPokémonNameSpan)
  playerPokémonGoTextSpan.textContent = "GO! "
  playerPokémonNameSpan.textContent = `${playerPokémon}!`
  

  /* RIVAL CHOICE DIV */

  rivalPokémonDiv.id = "rival-choice-div"
  rivalPokémonDiv.appendChild(rivalPokémonRivalNameSpan)
  rivalPokémonRivalNameSpan.textContent = `${rivalName}: `
  rivalPokémonDiv.appendChild(rivalPokémonGoTextSpan)
  rivalPokémonGoTextSpan.textContent = "GO! "
  rivalPokémonDiv.appendChild(rivalPokémonNameSpan)
  rivalPokémonNameSpan.textContent = `${rivalPokémon}!`

  /* PLAYER ATTACK DIV */

  playerPokémonAttackDiv.id = "player-attack-div"
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPlayerNameSpan)
  playerPokémonAttackPlayerNameSpan.textContent = `${playerName}'s `
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonNameSpan)
  playerPokémonAttackPokémonNameSpan.textContent = `${playerPokémon} `
  playerPokémonAttackDiv.appendChild(playerPokémonAttackUsedTextSpan)
  playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonAttackSpan)
  playerPokémonAttackPokémonAttackSpan.textContent = `${playerPokémonAttack}!`

  /* PLAYER ATTACK EFFECTIVENESS DIV */
  playerPokémonAttackEffectivenessTextSpan.textContent = playerPokémonAttackEffectiveness

  /* RIVAL ATTACK DIV */

  rivalPokémonAttackDiv.id = "rival-attack-div"
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackRivalNameSpan)
  rivalPokémonAttackRivalNameSpan.textContent = `${rivalName}'s `
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonNameSpan)
  rivalPokémonAttackPokémonNameSpan.textContent = `${rivalPokémon} `
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackUsedTextSpan)
  rivalPokémonAttackUsedTextSpan.textContent = "used "
  rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonNameSpanAttackSpan)
  rivalPokémonAttackPokémonNameSpanAttackSpan.textContent = `${rivalPokémonAttack}!`

  /* RIVAL ATTACK EFFECTIVENESS DIV */
  rivalPokémonAttackEffectivenessTextSpan.textContent = rivalPokémonAttackEffectiveness




  roundResultDiv.appendChild(roundResultPlayerNameSpan)
  roundResultPlayerNameSpan.textContent = `${playerName}'s `
  roundResultDiv.appendChild(roundResultPlayerPokémonSpan)
  roundResultPlayerPokémonSpan.textContent = `${playerPokémon} `
  roundResultDiv.appendChild(roundResultRoundResultSpan)
  roundResultDiv.appendChild(roundResultRoundResultSpan)
  roundResultDiv.appendChild(roundResultVersusTextSpan)
  roundResultVersusTextSpan.textContent = " versus "
  roundResultDiv.appendChild(roundResultRivalNameSpan)
  roundResultRivalNameSpan.textContent = `${rivalName}'s `
  roundResultDiv.appendChild(roundResultRivalPokémonSpan)
  roundResultRivalPokémonSpan.textContent = `${rivalPokémon}!`



  


  
  playerRivalScoresDiv.appendChild(playerNameAndScoreDiv)
  playerRivalScoresDiv.appendChild(rivalNameAndScoreDiv)

  playerNameAndScoreDiv.appendChild(playerNameScoresDiv)
  playerNameAndScoreDiv.appendChild(playerScoreScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalNameScoresDiv)
  rivalNameAndScoreDiv.appendChild(rivalScoreScoresDiv)



  playerScoreScoresDiv.textContent = playerScore;
  rivalScoreScoresDiv.textContent = rivalScore;




  let roundsPlayed = playerScore + rivalScore;
  winPercent = ((playerScore / (roundsPlayed)) * 100).toFixed(2);
  lossPercent = ((rivalScore / (roundsPlayed)) * 100).toFixed(2);

  totalWinPercent = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercent = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercent = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);


  if (playerScore === 5 || rivalScore === 5) {
    let exp1 = Math.floor(Math.random() * 51) + 50;
    createDiv(postGameDiv, "round-text");

    /* faint TEXT */
    postGameDiv.appendChild(faintDiv)
    faint.appendChild(faintNameSpan)
    faint.appendChild(faintPlayerPokémonSpan)
    faint.appendChild(faintfaintedTextSpan)

    /* EXP TEXT */
    postGameDiv.appendChild(expDiv)
    exp.appendChild(expNameSpan)
    exp.appendChild(expPokémonSpan)
    exp.appendChild(expGainedTextSpan)
    exp.appendChild(expAmountSpan)
  




    if (playerScore > rivalScore) {
      faintNameSpan.textContent = `${rivalName}'s `
      faintPlayerPokémonSpan.textContent = ` ${rivalPokémon} `;
      expNameSpan.textContent = `${playerName}'s `;
      expPokémonSpan.textContent = playerPokémon;
      typeRoundResult.style = "color:green;"
      typeRoundResult.textContent = "WON"

    } else {
      typeRoundResult.style = "color:red;"
      typeRoundResult.textContent = "LOST"
      faintNameSpan.textContent = `${playerName}'s `
      faintPlayerPokémonSpan.textContent = `${playerPokémon} `;
      expNameSpan.textContent = `${rivalName}'s `;
      expPokémonSpan.textContent = ` ${rivalPokémon}`;
    }
    expGainedTextSpan.textContent = ` ${exp1} Exp. Points!`; 

    /* STATS */
    createDiv(postGameDiv, "round-text")
    postGameDiv.appendChild(faintDiv)
    postGameDiv.appendChild(expDiv)
    postGameDiv.appendChild(statsDiv)
    postGameDiv.appendChild(gameResultDiv)


    /* UNSURE OF THE PURPOSE OF THIS CODE. CAUSES STATS TO PERSIST AFTER GAME END. 
    
    createDiv(stats, "post-game"); 
    */

    statsDiv.appendChild(roundsWonDiv)
    roundsWonPlayerScoreSpan.textContent = playerScore;
    roundsWonDiv.appendChild(roundsWonWonTextSpan);
    roundsWonDiv.appendChild(roundsWonColonSpan)
    roundsWonDiv.appendChild(roundsWonPlayerScoreSpan);

    statsDiv.appendChild(roundsLostDiv)
    roundsLostRivalScoreSpan.textContent = rivalScore;
    roundsLostDiv.appendChild(roundsLostLostTextSpan);
    roundsLostDiv.appendChild(roundsLostColonSpan)
    roundsLostDiv.appendChild(roundsLostRivalScoreSpan);

    statsDiv.appendChild(roundsDrawnDiv)
    roundsDrawnRoundsDrawnSpan.textContent = roundsDrawn;
    roundsDrawnDiv.appendChild(roundsDrawnDrawnTextSpan);
    roundsDrawnDiv.appendChild(roundsDrawnColonSpan)
    roundsDrawnDiv.appendChild(roundsDrawnRoundsDrawnSpan);


    statsDiv.appendChild(winPercentDiv)
    winPercentWinPercentSpan.textContent = winPercent;
    winPercentDiv.appendChild(winPercentPostPercentSpan);
    winPercentDiv.appendChild(winPercentColonSpan)
    winPercentDiv.appendChild(winPercentWinPercentSpan);
    winPercentDiv.appendChild(winPercentPrePercentSignSpan);


    statsDiv.appendChild(losePercentDiv)
    losePercentLosePercentSpan.textContent = lossPercent;
    losePercentDiv.appendChild(losePercentSign);
    losePercentDiv.appendChild(losePercentColonSpan)
    losePercentDiv.appendChild(losePercentLosePercentSpan)
    losePercentDiv.appendChild(losePercentPrePercentSignSpan)

    statsDiv.appendChild(totalRoundsPlayedDiv)
    totalRoundsPlayedTotalRoundsPlayedSpan.textContent = totalRoundsPlayed;
    totalRoundsPlayedDiv.appendChild(totalRoundsPlayedPlayedTextSpan)
    totalRoundsPlayedDiv.appendChild(totalRoundsPlayedColonSpan)
    totalRoundsPlayedDiv.appendChild(totalRoundsPlayedTotalRoundsPlayedSpan)

    statsDiv.appendChild(totalWinPercentDiv)
    totalwinPercentWinPercentSpan.textContent = totalWinPercent;
    totalWinPercentDiv.appendChild(totalWinPercentPreSign)
    totalWinPercentDiv.appendChild(totalwinPercentPrePercentSignSpan)
    totalWinPercentDiv.appendChild(totalwinPercentColonSpan)
    totalWinPercentDiv.appendChild(totalwinPercentWinPercentSpan)
    totalWinPercentDiv.appendChild(totalwinPercentPostPercentSpan)

    statsDiv.appendChild(totalLossPercentDiv)
    totalLossPercentSpanNumber.textContent = totalLossPercent;
    totalLossPercentDiv.appendChild(totalLossPercentPreSign)
    totalLossPercentDiv.appendChild(totalLossPercentScoreSpanWon)
    totalLossPercentDiv.appendChild(totalLossPercentScoreSpanWonScoreSpanWonColon)
    totalLossPercentDiv.appendChild(totalLossPercentSpanNumber)
    totalLossPercentDiv.appendChild(totalLossPercentSign)


    statsDiv.appendChild(totalDrawPercentDiv)
    totalDrawPercentSpanNumber.textContent = totalDrawPercent;
    totalDrawPercentDiv.appendChild(totalDrawPercentPreSign)
    totalDrawPercentDiv.appendChild(totalDrawPercentScoreSpanWon)
    totalDrawPercentDiv.appendChild(totalDrawPercentScoreSpanWonScoreSpanWonColon)
    totalDrawPercentDiv.appendChild(totalDrawPercentSpanNumber)
    totalDrawPercentDiv.appendChild(totalDrawPercentSign)

    /* GAME RESULT */
    createDiv(gameResultDiv, "stats")
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