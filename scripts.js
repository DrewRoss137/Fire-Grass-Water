/****************************************************************************
Const
****************************************************************************/

/* Buttons */
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    playerChoice = element.target.alt;
    playerPokémon = pokémon[playerChoice];
    playerPokémonAttack = generateAttack(playerChoice);
    /* Temporary - Uncomment When Game Ready;)
    rivalChoice = getRivalChoice(); 
    */
    rivalPokémon = pokémon[rivalChoice];
    rivalPokémonAttack = generateAttack(rivalChoice);
    playRound(playerChoice, rivalChoice);
  }
});

/* Names */
const playerName = "Player Name".toUpperCase();
const rivalName = "Rival Name".toUpperCase();

/* Round Text */
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

/* Player Score */
const playerScoreNameSpan = document.createElement("span");
playerScoreNameSpan.id = "player-score-name";
playerScoreNameSpan.textContent = playerName;

const playerScoreScoreSpan = document.createElement("span");
playerScoreScoreSpan.id = "player-score-score";

const playerScoreDiv = document.createElement("div");
playerScoreDiv.id = "player-score";
playerScoreDiv.appendChild(playerScoreNameSpan);
playerScoreDiv.appendChild(playerScoreScoreSpan);

/* Rival Score */
const rivalScoreNameSpan = document.createElement("span");
rivalScoreNameSpan.id = "rival-score-name";
rivalScoreNameSpan.textContent = rivalName;

const rivalScoreScoreSpan = document.createElement("span");
rivalScoreScoreSpan.id = "rival-score-score";

const rivalScoreDiv = document.createElement("div");
rivalScoreDiv.id = "rival-score";
rivalScoreDiv.appendChild(rivalScoreNameSpan);
rivalScoreDiv.appendChild(rivalScoreScoreSpan);

/* Scores Div */
const scoresDiv = document.createElement("div");
scoresDiv.id = "scores";
scoresDiv.appendChild(playerScoreDiv);
scoresDiv.appendChild(rivalScoreDiv);

/* Critical Hit */
const criticalHitDiv = document.createElement("div");
criticalHitDiv.id = "critical-hit";

/* Player Pokémon */
const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";
playerPokémonPlayerNameSpan.style.color = "orange";
playerPokémonPlayerNameSpan.textContent = `${playerName}: `;

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.style.color = "pink";
playerPokémonGoTextSpan.textContent = "GO! ";

const playerPokémonNameSpan = document.createElement("span");
playerPokémonNameSpan.id = "player-pokémon-name";
playerPokémonNameSpan.style.color = "red";

const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon";
playerPokémonDiv.appendChild(playerPokémonPlayerNameSpan);
playerPokémonDiv.appendChild(playerPokémonGoTextSpan);
playerPokémonDiv.appendChild(playerPokémonNameSpan);

/* Rival Pokémon */
const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";
rivalPokémonRivalNameSpan.style.color = "blue";
rivalPokémonRivalNameSpan.textContent = `${rivalName}: `;

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.style.color = "purple";
rivalPokémonGoTextSpan.textContent = "GO! ";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonNameSpan.id = "rival-pokémon-name";
rivalPokémonNameSpan.style.color = "red";

const rivalPokémonDiv = document.createElement("div");
rivalPokémonDiv.id = "rival-pokémon";
rivalPokémonDiv.appendChild(rivalPokémonRivalNameSpan);
rivalPokémonDiv.appendChild(rivalPokémonGoTextSpan);
rivalPokémonDiv.appendChild(rivalPokémonNameSpan);

/* Player Pokémon Attack */
const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";
playerPokémonAttackPlayerNameSpan.style.color = "blue";
playerPokémonAttackPlayerNameSpan.textContent = `${playerName}'s `;

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon";
playerPokémonAttackPokémonNameSpan.style.color = "purple";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.style.color = "yellow";
playerPokémonAttackUsedTextSpan.textContent = "used ";

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackPokémonAttackSpan.id = "player-pokémon-attack-pokémon-attack";
playerPokémonAttackPokémonAttackSpan.style.color = "red";

const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack";
playerPokémonAttackDiv.appendChild(playerPokémonAttackPlayerNameSpan);
playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonNameSpan);
playerPokémonAttackDiv.appendChild(playerPokémonAttackUsedTextSpan);
playerPokémonAttackDiv.appendChild(playerPokémonAttackPokémonAttackSpan);

/* Player Pokémon Attack Effectiveness */
const playerPokémonAttackEffectivenessItTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessItTextSpan.id = "player-pokémon-attack-effectiveness-it-text";
playerPokémonAttackEffectivenessItTextSpan.style.color = "thistle";

const playerPokémonAttackEffectivenessTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessTextSpan.id = "player-pokémon-attack-effectiveness-text";
playerPokémonAttackEffectivenessTextSpan.style.color = "MediumAquamarine";

const playerPokémonAttackEffectivenessDiv = document.createElement("div");
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness";
playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessItTextSpan);
playerPokémonAttackEffectivenessDiv.appendChild(playerPokémonAttackEffectivenessTextSpan);

/* Rival Pokémon Attack */
const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";
rivalPokémonAttackRivalNameSpan.style.color = "blue";
rivalPokémonAttackRivalNameSpan.textContent = `${rivalName}'s `;

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";
rivalPokémonAttackPokémonNameSpan.style.color = "purple";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.style.color = "yellow";
rivalPokémonAttackUsedTextSpan.textContent = "used ";

const rivalPokémonAttackPokémonAttackSpan = document.createElement("span");
rivalPokémonAttackPokémonAttackSpan.id = "rival-pokémon-attack-pokémon-attack";
rivalPokémonAttackPokémonAttackSpan.style.color = "red";

const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackRivalNameSpan);
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonNameSpan);
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackUsedTextSpan);
rivalPokémonAttackDiv.appendChild(rivalPokémonAttackPokémonAttackSpan);

/* Rival Pokémon Attack Effectiveness */
const rivalPokémonAttackEffectivenessItTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessItTextSpan.id = "rival-pokémon-attack-effectiveness-it-text";
rivalPokémonAttackEffectivenessItTextSpan.style.color = "thistle";

const rivalPokémonAttackEffectivenessTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessTextSpan.id = "rival-pokémon-attack-effectiveness-text";
rivalPokémonAttackEffectivenessTextSpan.style.color = "MediumAquamarine";

const rivalPokémonAttackEffectivenessDiv = document.createElement("div");
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness";
rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessItTextSpan);
rivalPokémonAttackEffectivenessDiv.appendChild(rivalPokémonAttackEffectivenessTextSpan);

/* Round Result */
const roundResultPlayerNameSpan = document.createElement("span");
roundResultPlayerNameSpan.id = "round-result-player-name";
roundResultPlayerNameSpan.style.color = "blue";
roundResultPlayerNameSpan.textContent = `${playerName}'s `;

const roundResultPlayerPokémonSpan = document.createElement("span");
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon";
roundResultPlayerPokémonSpan.style.color = "purple";

const roundResultRoundResultSpan = document.createElement("span");
roundResultRoundResultSpan.id = "round-result-round-result"; 
roundResultRoundResultSpan.style.color = "orange";

const roundResultVersusTextSpan = document.createElement("span");
roundResultVersusTextSpan.id = "round-result-versus-text";
roundResultVersusTextSpan.style.color = "cyan";
roundResultVersusTextSpan.textContent = " versus ";

const roundResultRivalNameSpan = document.createElement("span");
roundResultRivalNameSpan.id = "round-result-rival-name";
roundResultRivalNameSpan.style.color = "yellow";
roundResultRivalNameSpan.textContent = `${rivalName}'s `;

const roundResultRivalPokémonSpan = document.createElement("span");
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon";
roundResultRivalPokémonSpan.style.color = "red";

const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";
roundResultDiv.appendChild(roundResultPlayerNameSpan);
roundResultDiv.appendChild(roundResultPlayerPokémonSpan);
roundResultDiv.appendChild(roundResultRoundResultSpan);
roundResultDiv.appendChild(roundResultVersusTextSpan);
roundResultDiv.appendChild(roundResultRivalNameSpan);
roundResultDiv.appendChild(roundResultRivalPokémonSpan);

/* Round */
const roundDiv = document.createElement("div");
roundDiv.id = "round";
roundDiv.appendChild(playerPokémonDiv);
roundDiv.appendChild(rivalPokémonDiv);
roundDiv.appendChild(playerPokémonAttackDiv);
roundDiv.appendChild(playerPokémonAttackEffectivenessDiv);
roundDiv.appendChild(rivalPokémonAttackDiv);
roundDiv.appendChild(rivalPokémonAttackEffectivenessDiv);
roundDiv.appendChild(roundResultDiv);

/* Faint */
const faintNameSpan = document.createElement("span");
faintNameSpan.id = "faint-player-name";
faintNameSpan.style.color = "pink";

const faintPokémonSpan = document.createElement("span");
faintPokémonSpan.id = "faint-player-pokémon";
faintPokémonSpan.style.color = "blue";

const faintFaintedTextSpan = document.createElement("span");
faintFaintedTextSpan.id = "faint-fainted-text";
faintFaintedTextSpan.style.color = "yellow";
faintFaintedTextSpan.textContent = "fainted!";

const faintDiv = document.createElement("div");
faintDiv.id = "faint";
faintDiv.appendChild(faintNameSpan);
faintDiv.appendChild(faintPokémonSpan);
faintDiv.appendChild(faintFaintedTextSpan);

/* Exp */
const expNameSpan = document.createElement("span");
expNameSpan.id = "exp-name";
expNameSpan.style.color = "blue";

const expPokémonSpan = document.createElement("span");
expPokémonSpan.id = "exp-pokémon";
expPokémonSpan.style.color = "yellow";

const expGainedTextSpan = document.createElement("span");
expGainedTextSpan.id = "exp-gained-text";
expGainedTextSpan.style.color = "green";
expGainedTextSpan.textContent = "gained ";

const expAmountSpan = document.createElement("span");
expAmountSpan.id = "exp-amount";
expAmountSpan.style.color = "Thistle";

const expDiv = document.createElement("div");
expDiv.id = "exp";
expDiv.appendChild(expNameSpan);
expDiv.appendChild(expPokémonSpan);
expDiv.appendChild(expGainedTextSpan);
expDiv.appendChild(expAmountSpan);

/* Stats */

/* Rounds Won */
const roundsWonWonTextSpan = document.createElement("span");
roundsWonWonTextSpan.id = "rounds-won-won-text";
roundsWonWonTextSpan.style.color = "purple";
roundsWonWonTextSpan.textContent = "WON";

const roundsWonColonSpan = document.createElement("span");
roundsWonColonSpan.id = "rounds-won-colon";
roundsWonColonSpan.style.color = "cyan";
roundsWonColonSpan.textContent = ": ";

const roundsWonPlayerScoreSpan = document.createElement("span");
roundsWonPlayerScoreSpan.id = "rounds-won-player-score";
roundsWonPlayerScoreSpan.style.color = "red";

const roundsWonDiv = document.createElement("div");
roundsWonDiv.id = "rounds-won";
roundsWonDiv.textContent = "ROUNDS ";
roundsWonDiv.appendChild(roundsWonWonTextSpan);
roundsWonDiv.appendChild(roundsWonColonSpan);
roundsWonDiv.appendChild(roundsWonPlayerScoreSpan);

/* Rounds Lost */
const roundsLostLostTextSpan = document.createElement("span");
roundsLostLostTextSpan.id = "rounds-lost-lost-text";
roundsLostLostTextSpan.style.color = "purple";
roundsLostLostTextSpan.textContent = "LOST";

const roundsLostColonSpan = document.createElement("span");
roundsLostColonSpan.id = "rounds-lost-colon";
roundsLostColonSpan.style.color = "blue";
roundsLostColonSpan.textContent = ": ";

const roundsLostRivalScoreSpan = document.createElement("span");
roundsLostRivalScoreSpan.id = "rounds-lost-rival-score";
roundsLostRivalScoreSpan.style.color = "red";

const roundsLostDiv = document.createElement("div");
roundsLostDiv.id = "rounds-lost";
roundsLostDiv.textContent = "ROUNDS ";
roundsLostDiv.appendChild(roundsLostLostTextSpan);
roundsLostDiv.appendChild(roundsLostColonSpan);
roundsLostDiv.appendChild(roundsLostRivalScoreSpan);

/* Rounds Drawn */
const roundsDrawnDrawnTextSpan = document.createElement("span");
roundsDrawnDrawnTextSpan.id = "rounds-drawn-drawn-text";
roundsDrawnDrawnTextSpan.style.color = "purple";
roundsDrawnDrawnTextSpan.textContent = "DRAWN";

const roundsDrawnColonSpan = document.createElement("span");
roundsDrawnColonSpan.id = "rounds-drawn-colon";
roundsDrawnColonSpan.style.color = "blue";
roundsDrawnColonSpan.textContent = ": ";

const roundsDrawnRoundsDrawnSpan = document.createElement("span");
roundsDrawnRoundsDrawnSpan.id = "rounds-drawn-rounds-drawn";
roundsDrawnRoundsDrawnSpan.style.color = "red";

const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.id = "rounds-drawn";
roundsDrawnDiv.textContent = "ROUNDS ";
roundsDrawnDiv.appendChild(roundsDrawnDrawnTextSpan);
roundsDrawnDiv.appendChild(roundsDrawnColonSpan);
roundsDrawnDiv.appendChild(roundsDrawnRoundsDrawnSpan);

/* Win Percent */
const winPercentPrePercentSignSpan = document.createElement("span");
winPercentPrePercentSignSpan.id = "win-percent-pre-percent-sign";
winPercentPrePercentSignSpan.style.color = "purple";
winPercentPrePercentSignSpan.textContent = "%";

const winPercentColonSpan = document.createElement("span");
winPercentColonSpan.id = "win-percent-colon";
winPercentColonSpan.style.color = "blue";
winPercentColonSpan.textContent = ": ";

const winPercentWinPercentSpan = document.createElement("span");
winPercentWinPercentSpan.id = "win-percent-win-percent";
winPercentWinPercentSpan.style.color = "red";

const winPercentPostPercentSpan = document.createElement("span");
winPercentPostPercentSpan.id = "win-percent-post-percent-sign";
winPercentPostPercentSpan.style.color = "cyan";
winPercentPostPercentSpan.textContent = "%";

const winPercentDiv = document.createElement("div");
winPercentDiv.id = "win-percent-div";
winPercentDiv.textContent = "WIN";
winPercentDiv.appendChild(winPercentPrePercentSignSpan);
winPercentDiv.appendChild(winPercentColonSpan);
winPercentDiv.appendChild(winPercentWinPercentSpan);
winPercentDiv.appendChild(winPercentPostPercentSpan);

/* Loss Percent */
const lossPercentPrePercentSignSpan = document.createElement("span");
lossPercentPrePercentSignSpan.id = "loss-percent-pre-percent-sign";
lossPercentPrePercentSignSpan.style.color = "purple";
lossPercentPrePercentSignSpan.textContent = "%";

const lossPercentColonSpan = document.createElement("span");
lossPercentColonSpan.id = "loss-percent-colon";
lossPercentColonSpan.style.color = "blue";
lossPercentColonSpan.textContent = ": ";

const lossPercentLossPercentSpan = document.createElement("span");
lossPercentLossPercentSpan.id = "loss-percent-loss-percent";
lossPercentLossPercentSpan.style.color = "red";

const lossPercentSign = document.createElement("span");
lossPercentSign.textContent = "%";
lossPercentSign.id = "loss-percent-loss-percent";
lossPercentSign.style.color = "cyan";

const lossPercentDiv = document.createElement("div");
lossPercentDiv.id = "loss-percent-div";
lossPercentDiv.textContent = "LOSS";
lossPercentDiv.appendChild(lossPercentPrePercentSignSpan);
lossPercentDiv.appendChild(lossPercentColonSpan);
lossPercentDiv.appendChild(lossPercentLossPercentSpan);
lossPercentDiv.appendChild(lossPercentSign);

/* Total Rounds Played */
const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-played-text";
totalRoundsPlayedPlayedTextSpan.style.color = "purple";
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedColonSpan.id = "total-rounds-played-colon";
totalRoundsPlayedColonSpan.style.color = "blue";
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedTotalRoundsPlayedSpan.id = "total-rounds-played-total-rounds-played";
totalRoundsPlayedTotalRoundsPlayedSpan.style.color = "red";

const totalRoundsPlayedDiv = document.createElement("div");
totalRoundsPlayedDiv.id = "total-rounds-played";
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS ";
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedPlayedTextSpan);
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedColonSpan);
totalRoundsPlayedDiv.appendChild(totalRoundsPlayedTotalRoundsPlayedSpan);

/* Total Win Percent */
const totalWinPercentWinTextSpan = document.createElement("span");
totalWinPercentWinTextSpan.id = "total-win-percent-win-text";
totalWinPercentWinTextSpan.style.color = "yellow";
totalWinPercentWinTextSpan.textContent = "WIN";

const totalWinPercentPrePercentSignSpan = document.createElement("span");
totalWinPercentPrePercentSignSpan.id = "total-win-percent-pre-percent-sign";
totalWinPercentPrePercentSignSpan.style.color = "purple";
totalWinPercentPrePercentSignSpan.textContent = "%";

const totalWinPercentColonSpan = document.createElement("span");
totalWinPercentColonSpan.id = "total-win-percent-colon";
totalWinPercentColonSpan.style.color = "blue";
totalWinPercentColonSpan.textContent = ": ";

const totalWinPercentTotalWinPercentSpan = document.createElement("span");
totalWinPercentTotalWinPercentSpan.id = "total-win-percent-total-win-percent";
totalWinPercentTotalWinPercentSpan.style.color = "red";

const totalWinPercentPostPercentSpan = document.createElement("span");
totalWinPercentPostPercentSpan.id = "total-win-percent-post-percent-sign";
totalWinPercentPostPercentSpan.style.color = "cyan";
totalWinPercentPostPercentSpan.textContent = "%";

const totalWinPercentDiv = document.createElement("div");
totalWinPercentDiv.id = "total-win-percent";
totalWinPercentDiv.textContent = "TOTAL ";
totalWinPercentDiv.appendChild(totalWinPercentWinTextSpan);
totalWinPercentDiv.appendChild(totalWinPercentPrePercentSignSpan);
totalWinPercentDiv.appendChild(totalWinPercentColonSpan);
totalWinPercentDiv.appendChild(totalWinPercentTotalWinPercentSpan);
totalWinPercentDiv.appendChild(totalWinPercentPostPercentSpan);

/* Total Loss Percent */
const totalLossPercentLossTextSpan = document.createElement("span");
totalLossPercentLossTextSpan.id = "total-loss-percent-loss-text";
totalLossPercentLossTextSpan.style.color = "yellow";
totalLossPercentLossTextSpan.textContent = "LOSS";

const totalLossPercentPrePercentSignSpan = document.createElement("span");
totalLossPercentPrePercentSignSpan.id = "total-loss-percent-pre-percent-sign";
totalLossPercentPrePercentSignSpan.style.color = "purple";
totalLossPercentPrePercentSignSpan.textContent = "%";

const totalLossPercentColonSpan = document.createElement("span");
totalLossPercentColonSpan.id = "total-loss-percent-colon";
totalLossPercentColonSpan.style.color = "blue";
totalLossPercentColonSpan.textContent = ": ";

const totalLossPercentTotalLossPercentSpan = document.createElement("span");
totalLossPercentTotalLossPercentSpan.id = "total-loss-percent-total-loss-percent";
totalLossPercentTotalLossPercentSpan.style.color = "red";

const totalLossPercentPostPercentSpan = document.createElement("span");
totalLossPercentPostPercentSpan.id = "total-loss-percent-post-percent-sign";
totalLossPercentPostPercentSpan.style.color = "cyan";
totalLossPercentPostPercentSpan.textContent = "%";

const totalLossPercentDiv = document.createElement("div");
totalLossPercentDiv.id = "total-loss-percent";
totalLossPercentDiv.textContent = "TOTAL ";
totalLossPercentDiv.appendChild(totalLossPercentLossTextSpan);
totalLossPercentDiv.appendChild(totalLossPercentPrePercentSignSpan);
totalLossPercentDiv.appendChild(totalLossPercentColonSpan);
totalLossPercentDiv.appendChild(totalLossPercentTotalLossPercentSpan);
totalLossPercentDiv.appendChild(totalLossPercentPostPercentSpan);

/* Total Draw Percent */
const totalDrawPercentDrawTextSpan = document.createElement("span");
totalDrawPercentDrawTextSpan.id = "total-draw-percent-draw-text";
totalDrawPercentDrawTextSpan.style.color = "yellow";
totalDrawPercentDrawTextSpan.textContent = "DRAW";

const totalDrawPercentPrePercentSignSpan = document.createElement("span");
totalDrawPercentPrePercentSignSpan.id = "total-draw-percent-pre-percent-sign";
totalDrawPercentPrePercentSignSpan.style.color = "purple";
totalDrawPercentPrePercentSignSpan.textContent = "%";

const totalDrawPercentColonSpan = document.createElement("span");
totalDrawPercentColonSpan.id = "total-draw-percent-colon";
totalDrawPercentColonSpan.style.color = "blue";
totalDrawPercentColonSpan.textContent = ": ";

const totalDrawPercentTotalDrawPercentSpan = document.createElement("span");
totalDrawPercentTotalDrawPercentSpan.id = "total-draw-percent-total-draw-percent";
totalDrawPercentTotalDrawPercentSpan.style.color = "red";

const totalDrawPercentPostPercentSignSpan = document.createElement("span");
totalDrawPercentPostPercentSignSpan.id = "total-draw-percent-post-percent-sign";
totalDrawPercentPostPercentSignSpan.style.color = "cyan";
totalDrawPercentPostPercentSignSpan.textContent = "%";

const totalDrawPercentDiv = document.createElement("div");
totalDrawPercentDiv.id = "total-draw-percent";
totalDrawPercentDiv.textContent = "TOTAL ";
totalDrawPercentDiv.appendChild(totalDrawPercentDrawTextSpan);
totalDrawPercentDiv.appendChild(totalDrawPercentPrePercentSignSpan);
totalDrawPercentDiv.appendChild(totalDrawPercentColonSpan);
totalDrawPercentDiv.appendChild(totalDrawPercentTotalDrawPercentSpan);
totalDrawPercentDiv.appendChild(totalDrawPercentPostPercentSignSpan);

/* Stats */
const statsDiv = document.createElement("div");
statsDiv.id = "stats";
statsDiv.appendChild(roundsWonDiv);
statsDiv.appendChild(roundsLostDiv);
statsDiv.appendChild(roundsDrawnDiv);
statsDiv.appendChild(winPercentDiv);
statsDiv.appendChild(lossPercentDiv);
statsDiv.appendChild(totalRoundsPlayedDiv);
statsDiv.appendChild(totalWinPercentDiv);
statsDiv.appendChild(totalLossPercentDiv);
statsDiv.appendChild(totalDrawPercentDiv);

/* Game Result */
const gameResultPlayerNameSpan = document.createElement("span");
gameResultPlayerNameSpan.id = "game-result-player-name";
gameResultPlayerNameSpan.style.color = "blue";
gameResultPlayerNameSpan.textContent = `${playerName} `;

const gameResultResult = document.createElement("span");
gameResultResult.id = "game-result-result";

const gameResultAgainstTextSpan = document.createElement("span");
gameResultAgainstTextSpan.id = "game-result-against-text";
gameResultAgainstTextSpan.style.color = "cyan";
gameResultAgainstTextSpan.textContent = "against";

const gameResultRivalNameSpan = document.createElement("span");
gameResultRivalNameSpan.id = "game-result-rival-name";
gameResultRivalNameSpan.style.color = "purple";
gameResultRivalNameSpan.textContent = `${rivalName}!`;

const gameResultDiv = document.createElement("div");
gameResultDiv.id = "game-result-div";
gameResultDiv.appendChild(gameResultPlayerNameSpan);
gameResultDiv.appendChild(gameResultResult);
gameResultDiv.appendChild(gameResultAgainstTextSpan);
gameResultDiv.appendChild(gameResultRivalNameSpan);

/* Post-Game */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game";
postGameDiv.appendChild(faintDiv);
postGameDiv.appendChild(expDiv);
postGameDiv.appendChild(statsDiv);
postGameDiv.appendChild(gameResultDiv);

/****************************************************************************
Variables
****************************************************************************/

/* Choices */
let playerChoice;
let rivalChoice;
rivalChoice = getRivalChoice();
console.log(rivalChoice);

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

/* Exp */
let expValue;

/* Stats */
let roundsPlayed;
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;

/* Temporary - Test Post-Game Efficiently  - Remove When Game Ready */
playerScore = 4;
rivalScore = 4;
roundsDrawn = 4;

/****************************************************************************
Functions 
****************************************************************************/

function generateAttack(choice) {
  return attacks[choice][Math.floor(Math.random() * attacks[choice].length)];
};

function getRivalChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerChoice, rivalChoice) {
  criticalHitDiv.remove();
  totalRoundsPlayed++;
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[0]];
    roundsDrawn++;
    roundResult = roundResults[0];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    playerScore++;
    roundResult = roundResults[2];
    generateCriticalHitChance(criticalHitDiv);
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectiveness = attackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = attackEffectiveness[roundResults[2]];
    rivalScore++;
    roundResult = roundResults[1];
    generateCriticalHitChance(criticalHitDiv);
  }

  insertElement(scoresDiv, "buttons");
  playerScoreScoreSpan.textContent = playerScore;
  rivalScoreScoreSpan.textContent = rivalScore;
  
  insertElement(roundDiv, "scores");
  playerPokémonNameSpan.textContent = `${playerPokémon}!`;
  rivalPokémonNameSpan.textContent = `${rivalPokémon}!`;
  
  playerPokémonAttackPokémonNameSpan.textContent = `${playerPokémon} `;
  playerPokémonAttackPokémonAttackSpan.textContent = `${playerPokémonAttack}!`;
  playerPokémonAttackEffectivenessTextSpan.textContent = playerPokémonAttackEffectiveness;
  
  rivalPokémonAttackPokémonNameSpan.textContent = `${rivalPokémon} `;
  rivalPokémonAttackPokémonAttackSpan.textContent = `${rivalPokémonAttack}!`;
  rivalPokémonAttackEffectivenessTextSpan.textContent = rivalPokémonAttackEffectiveness;
  
  roundResultPlayerPokémonSpan.textContent = `${playerPokémon} `;
  roundResultRivalPokémonSpan.textContent = `${rivalPokémon}!`;
  
  switch (roundResult) {
    case roundResults[0]:
      roundResultRoundResultSpan.textContent = "drew ";
      break;
    case roundResults[2]:
      roundResultRoundResultSpan.textContent = "won ";
      roundDiv.insertBefore(criticalHitDiv, playerPokémonAttackDiv.nextSibling);
      break;
    case roundResults[1]:
      roundResultRoundResultSpan.textContent = "lost ";
      roundDiv.insertBefore(criticalHitDiv, rivalPokémonAttackDiv.nextSibling);
      break;
  };

  if (playerScore === 5 || rivalScore === 5) {
    expValue = Math.floor(Math.random() * 51) + 50;
    insertElement(postGameDiv, "round");
    insertElement(gameResultDiv, "stats");
    if (playerScore > rivalScore) {
      faintNameSpan.textContent = `${rivalName}'s `;
      faintPokémonSpan.textContent = ` ${rivalPokémon} `;
      expNameSpan.textContent = `${playerName}'s `;
      expPokémonSpan.textContent = `${playerPokémon} `;
      gameResultResult.style.color = "green";
      gameResultResult.textContent = "WON";
    } else {
      gameResultResult.style.color = "red";
      gameResultResult.textContent = "LOST";
      faintNameSpan.textContent = `${playerName}'s `;
      faintPokémonSpan.textContent = `${playerPokémon} `;
      expNameSpan.textContent = `${rivalName}'s `;
      expPokémonSpan.textContent = ` ${rivalPokémon} `;
    }
    expAmountSpan.textContent = ` ${expValue} Exp. Points!`;
    roundsPlayed = playerScore + rivalScore;
    winPercent = ((playerScore / roundsPlayed) * 100).toFixed(2);
    lossPercent = ((rivalScore / roundsPlayed) * 100).toFixed(2);
    totalWinPercent = ((playerScore / totalRoundsPlayed) * 100).toFixed(2);
    totalLossPercent = ((rivalScore / totalRoundsPlayed) * 100).toFixed(2);
    totalDrawPercent = ((roundsDrawn / totalRoundsPlayed) * 100).toFixed(2);
    roundsWonPlayerScoreSpan.textContent = playerScore;
    roundsLostRivalScoreSpan.textContent = rivalScore;
    roundsDrawnRoundsDrawnSpan.textContent = roundsDrawn;
    winPercentWinPercentSpan.textContent = winPercent;
    lossPercentLossPercentSpan.textContent = lossPercent;
    totalRoundsPlayedTotalRoundsPlayedSpan.textContent = totalRoundsPlayed;
    totalWinPercentTotalWinPercentSpan.textContent = totalWinPercent;
    totalLossPercentTotalLossPercentSpan.textContent = totalLossPercent;
    totalDrawPercentTotalDrawPercentSpan.textContent = totalDrawPercent;
    playerScore = 0;
    rivalScore = 0;
    totalRoundsPlayed = 0;
    roundsDrawn = 0;
  } else {
    postGameDiv.remove();
  }
};

function generateCriticalHitChance(divName) {
  const criticalHitChance = Math.random();
  console.log(criticalHitChance);
  if (criticalHitChance <= 100) {
    divName.textContent = "A critical hit!";
  }
};

function insertElement(newDiv, divID) {
  const overheadDiv = document.getElementById(divID);
  const overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling);
};