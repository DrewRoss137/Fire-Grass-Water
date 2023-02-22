/* Constants */
const playerName = "Player Name".toUpperCase();
const rivalName = "Rival Name".toUpperCase();

const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE"
};

const attacks = {
  Fire: ["EMBER", "FLAME THROWER"],
  Grass: ["RAZOR LEAF", "VINE WHIP"],
  Water: ["BUBBLE", "HYDRO PUMP", "WATER GUN"]
};

const attackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!"
};

const roundResults = ["Draw", "Lose", "Win"];

/* DOM Elements */

/* Scores */

/* Player Score */
const playerScoreDiv = document.createElement("div");
playerScoreDiv.id = "player-score";

const playerScoreNameSpan = document.createElement("span");
playerScoreNameSpan.id = "player-score-name";
playerScoreNameSpan.textContent = playerName;
playerScoreDiv.appendChild(playerScoreNameSpan);

const playerScoreScoreSpan = document.createElement("span");
playerScoreScoreSpan.id = "player-score-score";
playerScoreDiv.appendChild(playerScoreScoreSpan);

/* Rival Score */
const rivalScoreDiv = document.createElement("div");
rivalScoreDiv.id = "rival-score";

const rivalScoreNameSpan = document.createElement("span");
rivalScoreNameSpan.id = "rival-score-name";
rivalScoreNameSpan.textContent = rivalName;
rivalScoreDiv.appendChild(rivalScoreNameSpan);

const rivalScoreScoreSpan = document.createElement("span");
rivalScoreScoreSpan.id = "rival-score-score";
rivalScoreDiv.appendChild(rivalScoreScoreSpan);

/* Scores Div */
const scoresDiv = document.createElement("div");
scoresDiv.id = "scores";
scoresDiv.appendChild(playerScoreDiv);
scoresDiv.appendChild(rivalScoreDiv);


/* Round Text */
const roundTextDiv = document.createElement("div");
roundTextDiv.id = "round-text";

/* player-pokémon-div */
const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon"

const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonDiv.appendChild(playerPokémonPlayerNameSpan)
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";
playerPokémonPlayerNameSpan.style = "color: orange";
playerPokémonPlayerNameSpan.textContent = `${playerName}: `

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonDiv.appendChild(playerPokémonGoTextSpan)
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.style = "color: pink";
playerPokémonGoTextSpan.textContent = "GO! "

const playerPokémonNameSpan = document.createElement("span");
playerPokémonDiv.appendChild(playerPokémonNameSpan)
playerPokémonNameSpan.id = "player-pokémon-name";
playerPokémonNameSpan.style = "color: red";



/* rival-pokémon-choice-div */
const rivalPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "rival-pokémon"

const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonDiv.appendChild(rivalPokémonRivalNameSpan)
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";
rivalPokémonRivalNameSpan.style = "color: blue";
rivalPokémonRivalNameSpan.textContent = `${rivalName}: `

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonDiv.appendChild(rivalPokémonGoTextSpan)
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.style = "color: purple";
rivalPokémonGoTextSpan.textContent = "GO! ";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonDiv.appendChild(rivalPokémonNameSpan)
rivalPokémonNameSpan.id = "rival-pokémon-name";
rivalPokémonNameSpan.style = "color: red";






/* player-pokémon-attack-div */
const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack";

const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackDiv.appendChild(playerPokémonAttackPlayerNameSpan)
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";
playerPokémonAttackPlayerNameSpan.style = "color: blue;"
playerPokémonAttackPlayerNameSpan.textContent = `${playerName}'s `

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonNameSpan)
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon";
playerPokémonAttackPokémonNameSpan.style = "color: purple";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackDiv.appendChild(playerPokémonAttackUsedTextSpan)
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.style = "color: yellow";
playerPokémonAttackUsedTextSpan.textContent = "used "

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonAttackSpan)
playerPokémonAttackPokémonAttackSpan.id = "player-pokémon-attack-pokémon-attack";
playerPokémonAttackPokémonAttackSpan.style = "color: red";

/* critical-hit-div */
const criticalHitDiv = document.createElement("div");
criticalHitDiv.id = "critical-hit"

/* player-pokémon-attack-effectiveness */
const playerPokémonAttackEffectivenessDiv = document.createElement("div")
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness"

const playerPokémonAttackEffectivenessItTextSpan =  document.createElement("span")
playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessItTextSpan)
playerPokémonAttackEffectivenessItTextSpan.id = "player-pokémon-attack-effectiveness-it-text"
playerPokémonAttackEffectivenessItTextSpan.style = "color: thistle;";

const playerPokémonAttackEffectivenessTextSpan =  document.createElement("span")
playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessTextSpan)
playerPokémonAttackEffectivenessTextSpan.id = "player-pokémon-attack-effectiveness-text"
playerPokémonAttackEffectivenessTextSpan.style = "color: MediumAquamarine;";









/* rival-pokémon-attack-div */
const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";

const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackRivalNameSpan)
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";
rivalPokémonAttackRivalNameSpan.style = "color: blue;"
rivalPokémonAttackRivalNameSpan.textContent = `${rivalName}'s `

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonNameSpan)
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";
rivalPokémonAttackPokémonNameSpan.style = "color: purple";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackUsedTextSpan)
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.style = "color: yellow";
rivalPokémonAttackUsedTextSpan.textContent = "used "

const rivalPokémonAttackPokémonAttackSpan = document.createElement("span");
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonAttackSpan)
rivalPokémonAttackPokémonAttackSpan.id = "rival-pokémon-attack-pokémon-attack";
rivalPokémonAttackPokémonAttackSpan.style = "color: red";


/* rival-pokémon-attack-effectiveness */
const rivalPokémonAttackEffectivenessDiv = document.createElement("div")
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness"

const rivalPokémonAttackEffectivenessItTextSpan =  document.createElement("span")
rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessItTextSpan)
rivalPokémonAttackEffectivenessItTextSpan.id = "rival-pokémon-attack-effectiveness-it-text"
rivalPokémonAttackEffectivenessItTextSpan.style = "color: thistle;"

const rivalPokémonAttackEffectivenessTextSpan =  document.createElement("span")
rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessTextSpan)
rivalPokémonAttackEffectivenessTextSpan.id = "rival-pokémon-attack-effectiveness-text"
rivalPokémonAttackEffectivenessTextSpan.style = "color: MediumAquamarine;"







/* round-result */
const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";

const roundResultPlayerNameSpan = document.createElement("span");
roundResultDiv.appendChild(roundResultPlayerNameSpan)
roundResultPlayerNameSpan.id = "round-result-player-name"
roundResultPlayerNameSpan.style = "color: blue";
roundResultPlayerNameSpan.textContent = `${playerName}'s `

const roundResultPlayerPokémonSpan = document.createElement("span")
roundResultDiv.appendChild(roundResultPlayerPokémonSpan)
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon"
roundResultPlayerPokémonSpan.style = "color: purple;"

const roundResultRoundResultSpan = document.createElement("span")
roundResultDiv.appendChild(roundResultRoundResultSpan)
roundResultRoundResultSpan.id = "round-result-round-result" 
roundResultRoundResultSpan.style = "color: orange;"

const roundResultVersusTextSpan = document.createElement("span")
roundResultDiv.appendChild(roundResultVersusTextSpan)
roundResultVersusTextSpan.id = "round-result-versus-text"
roundResultVersusTextSpan.style = "color: cyan;"
roundResultVersusTextSpan.textContent = " versus "

const roundResultRivalNameSpan = document.createElement("span")
roundResultDiv.appendChild(roundResultRivalNameSpan)
roundResultRivalNameSpan.id = "round-result-rival-name"
roundResultRivalNameSpan.style = "color: yellow";
roundResultRivalNameSpan.textContent = `${rivalName}'s `

const roundResultRivalPokémonSpan = document.createElement("span")
roundResultDiv.appendChild(roundResultRivalPokémonSpan)
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon"
roundResultRivalPokémonSpan.style = "color: red;"

/* round-text append */
roundTextDiv.appendChild(playerPokémonDiv)
roundTextDiv.appendChild(rivalPokémonDiv)
roundTextDiv.appendChild(playerPokémonAttackDiv)
roundTextDiv.appendChild(playerPokémonAttackEffectivenessDiv)
roundTextDiv.appendChild(rivalPokémonAttackDiv)
roundTextDiv.appendChild(rivalPokémonAttackEffectivenessDiv)
roundTextDiv.appendChild(roundResultDiv)

/* post-game */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game"


/* flavour-text */



/* faint */
const faintDiv = document.createElement("div");
faintDiv.id = "faint";

const faintNameSpan = document.createElement("span")
faintDiv.appendChild(faintNameSpan)
faintNameSpan.id = "faint-player-name"
faintNameSpan.style = "color: pink;"

const faintPokémonSpan = document.createElement("span")
faintDiv.appendChild(faintPokémonSpan)
faintPokémonSpan.id = "faint-player-pokémon"
faintPokémonSpan.style = "color: blue;"

const faintfaintedTextSpan = document.createElement("span")
faintDiv.appendChild(faintfaintedTextSpan)
faintfaintedTextSpan.id  ="faint-fainted-text"
faintfaintedTextSpan.style = "color: yellow;"
faintfaintedTextSpan.textContent = "fainted!"





/* exp */
const expDiv = document.createElement("div")
expDiv.id = "exp"

const expNameSpan = document.createElement("span");
expDiv.appendChild(expNameSpan)
expNameSpan.id = "exp-name";
expNameSpan.style = "color: blue;"

const expPokémonSpan = document.createElement("span");
expDiv.appendChild(expPokémonSpan)
expPokémonSpan.id = "exp-pokémon"
expPokémonSpan.style = "color: yellow;"

const expGainedTextSpan = document.createElement("span");
expDiv.appendChild(expGainedTextSpan)
expGainedTextSpan.id = "exp-gained-text";
expGainedTextSpan.style = "color: green;"
expGainedTextSpan.textContent = "gained "

const expAmountSpan = document.createElement("span")
expDiv.appendChild(expAmountSpan)
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
roundsWonDiv.appendChild(roundsWonWonTextSpan);
roundsWonWonTextSpan.id = "rounds-won-won-text"
roundsWonWonTextSpan.style = "color: Purple;"
roundsWonWonTextSpan.textContent = "WON"

const roundsWonColonSpan = document.createElement("span")
roundsWonDiv.appendChild(roundsWonColonSpan)
roundsWonColonSpan.id = "rounds-won-colon"
roundsWonColonSpan.style = "color: cyan"
roundsWonColonSpan.textContent = ": "

const roundsWonPlayerScoreSpan = document.createElement("span")
roundsWonDiv.appendChild(roundsWonPlayerScoreSpan);
roundsWonPlayerScoreSpan.id = "rounds-won-player-score"
roundsWonPlayerScoreSpan.style ="color: red;"


/* rounds-lost */
const roundsLostDiv = document.createElement("div");
roundsLostDiv.id = "rounds-lost"
roundsLostDiv.textContent = "ROUNDS "

const roundsLostLostTextSpan = document.createElement("span");
roundsLostDiv.appendChild(roundsLostLostTextSpan);
roundsLostLostTextSpan.textContent = "LOST";
roundsLostLostTextSpan.id = "rival-lost-lost-text";
roundsLostLostTextSpan.style = "color: purple;"

const roundsLostColonSpan = document.createElement("span");
roundsLostDiv.appendChild(roundsLostColonSpan)
roundsLostColonSpan.textContent = ": ";
roundsLostColonSpan.id = "rounds-lost-colon";
roundsLostColonSpan.style = "color: blue;"

const roundsLostRivalScoreSpan = document.createElement("span");
roundsLostDiv.appendChild(roundsLostRivalScoreSpan);
roundsLostRivalScoreSpan.id = "rounds-lost-rival-score";
roundsLostRivalScoreSpan.style = "color: red;"








/* rounds-drawn */
const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.id = "rounds-drawn"
roundsDrawnDiv.textContent = "ROUNDS "

const roundsDrawnDrawnTextSpan = document.createElement("span");
roundsDrawnDiv.appendChild(roundsDrawnDrawnTextSpan);
roundsDrawnDrawnTextSpan.id = "roundsDrawnDrawnTextSpan-score-won";
roundsDrawnDrawnTextSpan.style = "color: purple;"
roundsDrawnDrawnTextSpan.textContent = "DRAWN";

const roundsDrawnColonSpan = document.createElement("span");
roundsDrawnDiv.appendChild(roundsDrawnColonSpan)
roundsDrawnColonSpan.id = "rounds-drawn-colon";
roundsDrawnColonSpan.style = "color: blue;"
roundsDrawnColonSpan.textContent = ": ";

const roundsDrawnRoundsDrawnSpan = document.createElement("span");
roundsDrawnDiv.appendChild(roundsDrawnRoundsDrawnSpan);
roundsDrawnRoundsDrawnSpan.id = "roundsDrawnRoundsDrawnSpan-score-span";
roundsDrawnRoundsDrawnSpan.style = "color: red;"





/* win-percent */
const winPercentDiv = document.createElement("div");
winPercentDiv.id = "win-percent-div"
winPercentDiv.textContent = "WIN"

const winPercentPrePercentSignSpan = document.createElement("span");
winPercentDiv.appendChild(winPercentPrePercentSignSpan);
winPercentPrePercentSignSpan.id = "winPercent-score-won";
winPercentPrePercentSignSpan.style = "color: purple;"
winPercentPrePercentSignSpan.textContent = "%";

const winPercentColonSpan = document.createElement("span");
winPercentDiv.appendChild(winPercentColonSpan)
winPercentColonSpan.id = "winPercentSpanWon-score-won-colon";
winPercentColonSpan.style = "color: blue;"
winPercentColonSpan.textContent = ": ";

const winPercentWinPercentSpan = document.createElement("span")
winPercentDiv.appendChild(winPercentWinPercentSpan);
winPercentWinPercentSpan.id = "winPercentWinPercentSpan-score-span";
winPercentWinPercentSpan.style = "color: red;"

const winPercentPostPercentSpan = document.createElement("span");
winPercentDiv.appendChild(winPercentPostPercentSpan);
winPercentPostPercentSpan.id = "win-percent-percent-sign";
winPercentPostPercentSpan.style = "color: cyan;"
winPercentPostPercentSpan.textContent = "%";




/* loss-percent */
const lossPercentDiv = document.createElement("div");
lossPercentDiv.id = "loss-percent-div"
lossPercentDiv.textContent = "LOSS"

const lossPercentPrePercentSignSpan = document.createElement("span");
lossPercentDiv.appendChild(lossPercentPrePercentSignSpan)
lossPercentPrePercentSignSpan.id = "lossPercent-score-won";
lossPercentPrePercentSignSpan.style = "color: purple;"
lossPercentPrePercentSignSpan.textContent = "%";

const lossPercentColonSpan = document.createElement("span");
lossPercentDiv.appendChild(lossPercentColonSpan)
lossPercentColonSpan.id = "lossPercentSpanWon-score-won-colon";
lossPercentColonSpan.style = "color: blue;"
lossPercentColonSpan.textContent = ": ";

const lossPercentlossPercentSpan = document.createElement("span");
lossPercentDiv.appendChild(lossPercentlossPercentSpan)
lossPercentlossPercentSpan.id = "lossPercentlossPercentSpan-score-span";
lossPercentlossPercentSpan.style = "color: red;"

const lossPercentSign = document.createElement("span");
lossPercentDiv.appendChild(lossPercentSign);
lossPercentSign.textContent = "%";
lossPercentSign.id = "awdawdore-wawdon-colon";
lossPercentSign.style = "color: cyan;"


/* total-rounds-played */
const totalRoundsPlayedDiv = document.createElement("div")
totalRoundsPlayedDiv.id = "total-rounds-played"
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS "

const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedPlayedTextSpan)
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-played-text";
totalRoundsPlayedPlayedTextSpan.style = "color: purple;"
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedColonSpan)
totalRoundsPlayedColonSpan.id = "total-rounds-played-colon";
totalRoundsPlayedColonSpan.style = "color: blue;"
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedTotalRoundsPlayedSpan)
totalRoundsPlayedTotalRoundsPlayedSpan.id = "total-rounds-played-total-rounds-played";
totalRoundsPlayedTotalRoundsPlayedSpan.style = "color: red;"





/* total-win-percent */
const totalWinPercentDiv = document.createElement("div")
totalWinPercentDiv.id = "total-win-percent"
totalWinPercentDiv.textContent = "TOTAL "

const totalWinPercentWinTextSpan = document.createElement("span");
totalWinPercentDiv.appendChild(totalWinPercentWinTextSpan)
totalWinPercentWinTextSpan.id = "total-win-percent-win-text";
totalWinPercentWinTextSpan.style = "color: yellow;"
totalWinPercentWinTextSpan.textContent = "WIN";

const totalwinPercentPrePercentSignSpan = document.createElement("span");
totalWinPercentDiv.appendChild(totalwinPercentPrePercentSignSpan)
totalwinPercentPrePercentSignSpan.id = "total-win-percent-pre-percent-sign";
totalwinPercentPrePercentSignSpan.style = "color: purple;"
totalwinPercentPrePercentSignSpan.textContent = "%";

const totalWinPercentColonSpan = document.createElement("span");
totalWinPercentDiv.appendChild(totalWinPercentColonSpan)
totalWinPercentColonSpan.id = "total-win-percent-colon";
totalWinPercentColonSpan.style = "color: blue;"
totalWinPercentColonSpan.textContent = ": ";

const totalWinPercentTotalWinPercentSpan = document.createElement("span");
totalWinPercentDiv.appendChild(totalWinPercentTotalWinPercentSpan)
totalWinPercentTotalWinPercentSpan.id = "total-win-percent-total-win-percent";
totalWinPercentTotalWinPercentSpan.style = "color: red;"

const totalWinPercentPostPercentSpan = document.createElement("span");
totalWinPercentDiv.appendChild(totalWinPercentPostPercentSpan)
totalWinPercentPostPercentSpan.id = "total-win-percent-post-percent-sign";
totalWinPercentPostPercentSpan.style = "color: cyan;"
totalWinPercentPostPercentSpan.textContent = "%";




/* total-loss-percent */
const totalLossPercentDiv = document.createElement("div")
totalLossPercentDiv.id = "total-loss-percent"
totalLossPercentDiv.textContent = "TOTAL "

const totalLossPercentLossTextSpan = document.createElement("span");
totalLossPercentDiv.appendChild(totalLossPercentLossTextSpan)
totalLossPercentLossTextSpan.id = "total-loss-percent-loss-text";
totalLossPercentLossTextSpan.style = "color: yellow;"
totalLossPercentLossTextSpan.textContent = "LOSS";

const totalLossPercentPrePercentSignSpan = document.createElement("span");
totalLossPercentDiv.appendChild(totalLossPercentPrePercentSignSpan)
totalLossPercentPrePercentSignSpan.id = "total-loss-percent-pre-percent-sign";
totalLossPercentPrePercentSignSpan.style = "color: purple;"
totalLossPercentPrePercentSignSpan.textContent = "%";

const totalLossPercentColonSpan = document.createElement("span");
totalLossPercentDiv.appendChild(totalLossPercentColonSpan)
totalLossPercentColonSpan.id = "total-loss-percent-colon";
totalLossPercentColonSpan.style = "color: blue;"
totalLossPercentColonSpan.textContent = ": ";

const totalLossPercentTotalLossPercentSpan = document.createElement("span");
totalLossPercentDiv.appendChild(totalLossPercentTotalLossPercentSpan)
totalLossPercentTotalLossPercentSpan.id = "total-loss-percent-total-loss-percent";
totalLossPercentTotalLossPercentSpan.style = "color: red;"

const totalLossPercentPostPercentSpan = document.createElement("span");
totalLossPercentDiv.appendChild(totalLossPercentPostPercentSpan)
totalLossPercentPostPercentSpan.id = "total-loss-percent-post-percent-sign";
totalLossPercentPostPercentSpan.style = "color: cyan;"
totalLossPercentPostPercentSpan.textContent = "%";






/* total-draw-percent */
const totalDrawPercentDiv = document.createElement("div")
totalDrawPercentDiv.id = "total-draw-percent"
totalDrawPercentDiv.textContent = "TOTAL "

const totalDrawPercentDrawTextSpan = document.createElement("span");
totalDrawPercentDiv.appendChild(totalDrawPercentDrawTextSpan);
totalDrawPercentDrawTextSpan.id = "total-draw-percent-draw-text";
totalDrawPercentDrawTextSpan.style = "color: yellow;"
totalDrawPercentDrawTextSpan.textContent = "DRAW";

const totalDrawPercentPrePercentSignSpan = document.createElement("span");
totalDrawPercentDiv.appendChild(totalDrawPercentPrePercentSignSpan);
totalDrawPercentPrePercentSignSpan.id = "total-draw-percent-pre-percent-sign";
totalDrawPercentPrePercentSignSpan.style = "color: purple;"
totalDrawPercentPrePercentSignSpan.textContent = "%";

const totalDrawPercentColonSpan = document.createElement("span");
totalDrawPercentDiv.appendChild(totalDrawPercentColonSpan);
totalDrawPercentColonSpan.id = "awawdaapanWon-score-won-colon";
totalDrawPercentColonSpan.style = "color: blue;"
totalDrawPercentColonSpan.textContent = ": ";

const totalDrawPercentTotalDrawPercentSpan = document.createElement("span");
totalDrawPercentDiv.appendChild(totalDrawPercentTotalDrawPercentSpan)
totalDrawPercentTotalDrawPercentSpan.id = "total-draw-percent-total-draw-percent";
totalDrawPercentTotalDrawPercentSpan.style = "color: red;"

const totalDrawPercentPostPercentSignSpan = document.createElement("span");
totalDrawPercentDiv.appendChild(totalDrawPercentPostPercentSignSpan)
totalDrawPercentPostPercentSignSpan.id = "total-draw-percent-post-percent-sign";
totalDrawPercentPostPercentSignSpan.style = "color: cyan;"
totalDrawPercentPostPercentSignSpan.textContent = "%";

/* stats appendChild() */
statsDiv.appendChild(roundsWonDiv)
statsDiv.appendChild(roundsLostDiv)
statsDiv.appendChild(roundsDrawnDiv)
statsDiv.appendChild(winPercentDiv)
statsDiv.appendChild(lossPercentDiv)
statsDiv.appendChild(totalRoundsPlayedDiv)
statsDiv.appendChild(totalWinPercentDiv)
statsDiv.appendChild(totalLossPercentDiv)
statsDiv.appendChild(totalDrawPercentDiv)

/* game-result */
const gameResultDiv = document.createElement("div")
gameResultDiv.id = "game-result-div"


const gameResultPlayerNameSpan = document.createElement("span");
gameResultDiv.appendChild(gameResultPlayerNameSpan);
gameResultPlayerNameSpan.id = "game-result-player-name";
gameResultPlayerNameSpan.style = "color: blue;"
gameResultPlayerNameSpan.textContent = `${playerName} `;

const gameResultResult = document.createElement("span");
gameResultDiv.appendChild(gameResultResult)
gameResultResult.id = "game-result-result";

const gameResultAgainstTextSpan = document.createElement("span");
gameResultDiv.appendChild(gameResultAgainstTextSpan)
gameResultAgainstTextSpan.id = "game-result-against-text";
gameResultAgainstTextSpan.style = "color: cyan;"
gameResultAgainstTextSpan.textContent = "against";

const gameResultRivalNameSpan = document.createElement("span");
gameResultDiv.appendChild(gameResultRivalNameSpan)
gameResultRivalNameSpan.id = "game-result-rival-name";
gameResultRivalNameSpan.style = "color: purple;"
gameResultRivalNameSpan.textContent = `${rivalName}!`;

/* post-game append */
postGameDiv.appendChild(faintDiv)
postGameDiv.appendChild(expDiv)
postGameDiv.appendChild(statsDiv)
postGameDiv.appendChild(gameResultDiv)

function generateCriticalHitChance(divName) {
  criticalHitChance = Math.random();
  if (criticalHitChance <= 100) {
    return divName.textContent = "A critical hit!";
    }
  } 

function insertElement(newDiv, divID) {
  let overheadDiv = document.getElementById(divID);
  let overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling)
}


/* Variables */



/* Choices */
let playerChoice;
let rivalChoice;
rivalChoice = getRivalChoice();
console.log(rivalChoice)

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
let roundsPlayed;
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;


let expValue;

/* Set Scores To Efficiently Test Post-Game Content - Temporary */
playerScore = 4;
rivalScore = 4;
roundsDrawn = 4;




function getRivalChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
};

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    playerChoice = element.target.alt;
    playerPokémon = pokémon[playerChoice];
    playerPokémonAttack = generateAttack(playerChoice);
    /* ACTUAL CODE TO BE USED WHEN GAME IS READY. DO THIS WHEN TESTS NEED NOT BE CARRIED OUT (IT IS USEFUL TO KNOW AND SEE RIVAL CHOICE IN CONSOLE FOR TESTING WINS, DRAWS, LOSSES.)
    rivalChoice = getRivalChoice(); */
    rivalPokémon = pokémon[rivalChoice];
    rivalPokémonAttack = generateAttack(rivalChoice);
    playRound(playerChoice, rivalChoice)
  }
});

function generateAttack(choice) {
  return attacks[choice][Math.floor(Math.random() * attacks[choice].length)];
};


function playRound(playerChoice, rivalChoice) {
  criticalHitDiv.remove()
  totalRoundsPlayed ++;
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "But it "
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "But it "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn ++; 
    roundResult = roundResults[0];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore ++;
    roundResult = roundResults[2];
    generateCriticalHitChance(criticalHitDiv);
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's "
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore ++;
    roundResult = roundResults[1];
    generateCriticalHitChance(criticalHitDiv);
  }

/* scores */
insertElement(scoresDiv, "buttons")



playerScoreScoreSpan.textContent = playerScore;
rivalScoreScoreSpan.textContent = rivalScore;

/* round-text */
insertElement(roundTextDiv, "scores");






/* player-choice */
playerPokémonNameSpan.textContent = `${playerPokémon}!`


/* rival-choice */
rivalPokémonNameSpan.textContent = `${rivalPokémon}!`


/* player-attack */
playerPokémonAttackPokémonNameSpan.textContent = `${playerPokémon} `
playerPokémonAttackPokémonAttackSpan.textContent = `${playerPokémonAttack}!`

/* player-attack-effectiveness */
playerPokémonAttackEffectivenessTextSpan.textContent = playerPokémonAttackEffectiveness

/* rival-attack */
rivalPokémonAttackPokémonNameSpan.textContent = `${rivalPokémon} `
rivalPokémonAttackPokémonAttackSpan.textContent = `${rivalPokémonAttack}!`


/* rival-attack-effectiveness */
rivalPokémonAttackEffectivenessTextSpan.textContent = rivalPokémonAttackEffectiveness

/* round-result */
roundResultPlayerPokémonSpan.textContent = `${playerPokémon} `
roundResultRivalPokémonSpan.textContent = `${rivalPokémon}!`


switch (roundResult) {
  case roundResults[0]:
    roundResultRoundResultSpan.textContent = " drew ";
    break;
  case roundResults[2]:
    roundResultRoundResultSpan.textContent = " won ";
    roundTextDiv.insertBefore(criticalHitDiv, playerPokémonAttackDiv.nextSibling);
    break;
  case roundResults[1]:
    roundResultRoundResultSpan.textContent = " lost ";
    roundTextDiv.insertBefore(criticalHitDiv, rivalPokémonAttackDiv.nextSibling);
    break;
}

if (playerScore === 5 || rivalScore === 5) {
  expValue = Math.floor(Math.random() * 51) + 50;

  insertElement(postGameDiv, "round-text");
  insertElement(gameResultDiv, "stats")

  if (playerScore > rivalScore) {
    faintNameSpan.textContent = `${rivalName}'s `
    faintPokémonSpan.textContent = ` ${rivalPokémon} `;
    expNameSpan.textContent = `${playerName}'s `;
    expPokémonSpan.textContent = `${playerPokémon} `;
    gameResultResult.style = "color:green;"
    gameResultResult.textContent = "WON";
  } else {
    gameResultResult.style = "color:red;"
    gameResultResult.textContent = "LOST"
    faintNameSpan.textContent = `${playerName}'s `
    faintPokémonSpan.textContent = `${playerPokémon} `;
    expNameSpan.textContent = `${rivalName}'s `;
    expPokémonSpan.textContent = ` ${rivalPokémon} `;
  }
  expAmountSpan.textContent = ` ${expValue} Exp. Points!`; 

  roundsPlayed = playerScore + rivalScore;
  winPercent = ((playerScore / (roundsPlayed)) * 100).toFixed(2);
  lossPercent = ((rivalScore / (roundsPlayed)) * 100).toFixed(2);
  totalWinPercent = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
  totalLossPercent = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
  totalDrawPercent = ((roundsDrawn/ totalRoundsPlayed) * 100).toFixed(2);

  roundsWonPlayerScoreSpan.textContent = playerScore;
  roundsLostRivalScoreSpan.textContent = rivalScore;
  roundsDrawnRoundsDrawnSpan.textContent = roundsDrawn;
  winPercentWinPercentSpan.textContent = winPercent;
  lossPercentlossPercentSpan.textContent = lossPercent;
  totalRoundsPlayedTotalRoundsPlayedSpan.textContent = totalRoundsPlayed;
  totalWinPercentTotalWinPercentSpan.textContent = totalWinPercent;
  totalLossPercentTotalLossPercentSpan.textContent = totalLossPercent;
  totalDrawPercentTotalDrawPercentSpan.textContent = totalDrawPercent;

  playerScore = 0;
  rivalScore = 0;
  totalRoundsPlayed = 0;
  roundsDrawn = 0;
} else {
  postGameDiv.remove()
}
};