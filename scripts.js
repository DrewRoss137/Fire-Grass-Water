/* 
To-Do:
  -Post-Input Timings;
  -
*/


/* Pre-Overlay */
/* Additional Flavour Text */
const preOverlayAdditionalFlavourText = document.createElement("span");
preOverlayAdditionalFlavourText.id = "pre-overlay-additional-flavour-text";

/* Attribution Text */
const preOverlayAttributionText = document.createElement("span");
preOverlayAttributionText.id = "pre-overlay-attribution-text";

/* Flavour Text */
const preOverlayFlavourText = document.createElement("span");
preOverlayFlavourText.id = "pre-overlay-flavour-text";

/* Name Text */
const preOverlayNameText = document.createElement("span");
preOverlayNameText.id = "pre-overlay-name-text";

/* Player Input Box */
const preOverlayPlayerInputBox = document.createElement("input");
preOverlayPlayerInputBox.id = "pre-overlay-player-input-box";
preOverlayPlayerInputBox.style.opacity = "0";
preOverlayPlayerInputBox.type = "text";

/* Rival Input Box */
const preOverlayRivalInputBox = document.createElement("input");
preOverlayRivalInputBox.id = "pre-overlay-rival-input-box";
preOverlayRivalInputBox.style.opacity = "0";
preOverlayRivalInputBox.type = "text";

/* Grass Pokémon Text */
const preOverlayGrassPokémonText = document.createElement("span");
preOverlayGrassPokémonText.id = "pre-overlay-grass-pokémon-text";
preOverlayGrassPokémonText.textContent = "GRASS POKéMON BULBASAUR";

/* Grass Water Text */
const preOverlayWaterPokémonText = document.createElement("span");
preOverlayWaterPokémonText.style.color = "rgb(0, 128, 255)";
preOverlayWaterPokémonText.textContent = "WATER POKéMON SQUIRTLE";

/* Grass Fire Text */
const preOverlayFirePokémonText = document.createElement("span");
preOverlayFirePokémonText.style.color = "rgb(255, 128, 0)";
preOverlayFirePokémonText.textContent = "FIRE POKéMON CHARMANDER";

/* Text */
const preOverlayText = document.createElement("span");
preOverlayText.id = "pre-overlay-text";
preOverlayText.style.opacity = "0";

/* Overlay */
const preOverlayOverlay = document.createElement("div");
preOverlayOverlay.id = "pre-overlay";
preOverlayOverlay.style.opacity = "1";

/* Body */
/* Body */
const body = document.querySelector("body");
body.insertBefore(preOverlayOverlay, body.firstChild);

/* Buttons */
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", getImgAlt);

/* GitHub Logo */
const githubLogo = document.querySelector("#github-logo");
githubLogo.addEventListener("click", function openGitHubProfile() {
  window.open("https://github.com/DrewRoss137", "_blank");
});

/* Scores */
/* Player Score */
const playerScoreNameSpan = document.createElement("span");
playerScoreNameSpan.id = "player-score-name";

const playerScoreScoreSpan = document.createElement("span");
playerScoreScoreSpan.id = "player-score-score";

const playerScoreDiv = document.createElement("div");
playerScoreDiv.id = "player-score";
playerScoreDiv.append(playerScoreNameSpan, playerScoreScoreSpan);

/* Rival Score */
const rivalScoreNameSpan = document.createElement("span");
rivalScoreNameSpan.id = "rival-score-name";

const rivalScoreScoreSpan = document.createElement("span");
rivalScoreScoreSpan.id = "rival-score-score";

const rivalScoreDiv = document.createElement("div");
rivalScoreDiv.id = "rival-score";
rivalScoreDiv.append(rivalScoreNameSpan, rivalScoreScoreSpan);

/* Scores */
const scoresDiv = document.createElement("div");
scoresDiv.id = "scores";
scoresDiv.append(playerScoreDiv, rivalScoreDiv);

/* Round */
/* Critical Hit */
const criticalHitDiv = document.createElement("div");
criticalHitDiv.id = "critical-hit";
criticalHitDiv.textContent = "A critical hit!";

/* Player Pokémon */
const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.textContent = "GO! ";

const playerPokémonNameSpan = document.createElement("span");
playerPokémonNameSpan.id = "player-pokémon-name";

const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon";
playerPokémonDiv.append(
  playerPokémonPlayerNameSpan,
  playerPokémonGoTextSpan,
  playerPokémonNameSpan
);

/* Rival Pokémon */
const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.textContent = "GO! ";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonNameSpan.id = "rival-pokémon-name";

const rivalPokémonDiv = document.createElement("div");
rivalPokémonDiv.id = "rival-pokémon";
rivalPokémonDiv.append(
  rivalPokémonRivalNameSpan,
  rivalPokémonGoTextSpan,
  rivalPokémonNameSpan
);

/* Player Pokémon Attack */
const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.textContent = "used ";

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackPokémonAttackSpan.id =
  "player-pokémon-attack-pokémon-attack";

const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack";
playerPokémonAttackDiv.append(
  playerPokémonAttackPlayerNameSpan,
  playerPokémonAttackPokémonNameSpan,
  playerPokémonAttackUsedTextSpan,
  playerPokémonAttackPokémonAttackSpan
);

/* Player Pokémon Attack Effectiveness */
const playerPokémonAttackEffectivenessItTextSpan =
  document.createElement("span");
playerPokémonAttackEffectivenessItTextSpan.id =
  "player-pokémon-attack-effectiveness-it-text";

const playerPokémonAttackEffectivenessTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessTextSpan.id =
  "player-pokémon-attack-effectiveness-text";

const playerPokémonAttackEffectivenessDiv = document.createElement("div");
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness";
playerPokémonAttackEffectivenessDiv.append(
  playerPokémonAttackEffectivenessItTextSpan,
  playerPokémonAttackEffectivenessTextSpan
);

/* Rival Pokémon Attack */
const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.textContent = "used ";

const rivalPokémonAttackPokémonAttackSpan = document.createElement("span");
rivalPokémonAttackPokémonAttackSpan.id = "rival-pokémon-attack-pokémon-attack";

const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";
rivalPokémonAttackDiv.append(
  rivalPokémonAttackRivalNameSpan,
  rivalPokémonAttackPokémonNameSpan,
  rivalPokémonAttackUsedTextSpan,
  rivalPokémonAttackPokémonAttackSpan
);

/* Rival Pokémon Attack Effectiveness */
const rivalPokémonAttackEffectivenessItTextSpan =
  document.createElement("span");
rivalPokémonAttackEffectivenessItTextSpan.id =
  "rival-pokémon-attack-effectiveness-it-text";

const rivalPokémonAttackEffectivenessTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessTextSpan.id =
  "rival-pokémon-attack-effectiveness-text";

const rivalPokémonAttackEffectivenessDiv = document.createElement("div");
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness";
rivalPokémonAttackEffectivenessDiv.append(
  rivalPokémonAttackEffectivenessItTextSpan,
  rivalPokémonAttackEffectivenessTextSpan
);

/* Round Result */
const roundResultPlayerNameSpan = document.createElement("span");
roundResultPlayerNameSpan.id = "round-result-player-name";

const roundResultPlayerPokémonSpan = document.createElement("span");
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon";

const roundResultRoundResultSpan = document.createElement("span");
roundResultRoundResultSpan.id = "round-result-round-result";

const roundResultVersusTextSpan = document.createElement("span");
roundResultVersusTextSpan.id = "round-result-versus-text";
roundResultVersusTextSpan.textContent = " versus ";

const roundResultRivalNameSpan = document.createElement("span");
roundResultRivalNameSpan.id = "round-result-rival-name";

const roundResultRivalPokémonSpan = document.createElement("span");
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon";

const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";
roundResultDiv.append(
  roundResultPlayerNameSpan,
  roundResultPlayerPokémonSpan,
  roundResultRoundResultSpan,
  roundResultVersusTextSpan,
  roundResultRivalNameSpan,
  roundResultRivalPokémonSpan
);

/* Faint */
const faintNameSpan = document.createElement("span");
faintNameSpan.id = "faint-name";

const faintPokémonSpan = document.createElement("span");
faintPokémonSpan.id = "faint-pokémon";

const faintFaintedTextSpan = document.createElement("span");
faintFaintedTextSpan.id = "faint-fainted-text";
faintFaintedTextSpan.textContent = "fainted!";

const faintDiv = document.createElement("div");
faintDiv.id = "faint";
faintDiv.append(faintNameSpan, faintPokémonSpan, faintFaintedTextSpan);

/* Exp */
const expNameSpan = document.createElement("span");
expNameSpan.id = "exp-name";

const expPokémonSpan = document.createElement("span");
expPokémonSpan.id = "exp-pokémon";

const expGainedTextSpan = document.createElement("span");
expGainedTextSpan.id = "exp-gained-text";
expGainedTextSpan.textContent = "gained ";

const expAmountSpan = document.createElement("span");
expAmountSpan.id = "exp-amount";

const expDiv = document.createElement("div");
expDiv.id = "exp";
expDiv.append(expNameSpan, expPokémonSpan, expGainedTextSpan, expAmountSpan);

/* Round */
const roundDiv = document.createElement("div");
roundDiv.id = "round";
roundDiv.append(
  playerPokémonDiv,
  rivalPokémonDiv,
  playerPokémonAttackDiv,
  playerPokémonAttackEffectivenessDiv,
  rivalPokémonAttackDiv,
  rivalPokémonAttackEffectivenessDiv,
  roundResultDiv
);

/* Post-Game */
/* Rounds Won */
const roundsWonWonTextSpan = document.createElement("span");
roundsWonWonTextSpan.id = "rounds-won-won-text";
roundsWonWonTextSpan.textContent = "WON";

const roundsWonColonSpan = document.createElement("span");
roundsWonColonSpan.id = "rounds-won-colon";
roundsWonColonSpan.textContent = ": ";

const roundsWonPlayerScoreSpan = document.createElement("span");
roundsWonPlayerScoreSpan.id = "rounds-won-player-score";

const roundsWonDiv = document.createElement("div");
roundsWonDiv.id = "rounds-won";
roundsWonDiv.textContent = "ROUNDS ";
roundsWonDiv.append(
  roundsWonWonTextSpan,
  roundsWonColonSpan,
  roundsWonPlayerScoreSpan
);

/* Rounds Lost */
const roundsLostLostTextSpan = document.createElement("span");
roundsLostLostTextSpan.id = "rounds-lost-lost-text";
roundsLostLostTextSpan.textContent = "LOST";

const roundsLostColonSpan = document.createElement("span");
roundsLostColonSpan.id = "rounds-lost-colon";
roundsLostColonSpan.textContent = ": ";

const roundsLostRivalScoreSpan = document.createElement("span");
roundsLostRivalScoreSpan.id = "rounds-lost-rival-score";

const roundsLostDiv = document.createElement("div");
roundsLostDiv.id = "rounds-lost";
roundsLostDiv.textContent = "ROUNDS ";
roundsLostDiv.append(
  roundsLostLostTextSpan,
  roundsLostColonSpan,
  roundsLostRivalScoreSpan
);

/* Rounds Drawn */
const roundsDrawnDrawnTextSpan = document.createElement("span");
roundsDrawnDrawnTextSpan.id = "rounds-drawn-drawn-text";
roundsDrawnDrawnTextSpan.textContent = "DRAWN";

const roundsDrawnColonSpan = document.createElement("span");
roundsDrawnColonSpan.id = "rounds-drawn-colon";
roundsDrawnColonSpan.textContent = ": ";

const roundsDrawnRoundsDrawnSpan = document.createElement("span");
roundsDrawnRoundsDrawnSpan.id = "rounds-drawn-rounds-drawn";

const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.id = "rounds-drawn";
roundsDrawnDiv.textContent = "ROUNDS ";
roundsDrawnDiv.append(
  roundsDrawnDrawnTextSpan,
  roundsDrawnColonSpan,
  roundsDrawnRoundsDrawnSpan
);

/* Win Percent */
const winPercentWinText = document.createElement("span");
winPercentWinText.id = "win-percent-win-text";
winPercentWinText.textContent = "WIN";

const winPercentPrePercentSignSpan = document.createElement("span");
winPercentPrePercentSignSpan.id = "win-percent-pre-percent-sign";
winPercentPrePercentSignSpan.textContent = "%";

const winPercentColonSpan = document.createElement("span");
winPercentColonSpan.id = "win-percent-colon";
winPercentColonSpan.textContent = ": ";

const winPercentWinPercentSpan = document.createElement("span");
winPercentWinPercentSpan.id = "win-percent-win-percent";

const winPercentPostPercentSpan = document.createElement("span");
winPercentPostPercentSpan.id = "win-percent-post-percent-sign";
winPercentPostPercentSpan.textContent = "%";

const winPercentDiv = document.createElement("div");
winPercentDiv.id = "win-percent";
winPercentDiv.append(
  winPercentWinText,
  winPercentPrePercentSignSpan,
  winPercentColonSpan,
  winPercentWinPercentSpan,
  winPercentPostPercentSpan
);

/* Loss Percent */
const lossPercentLossText = document.createElement("span");
lossPercentLossText.id = "loss-percent-loss-text";
lossPercentLossText.textContent = "LOSS";

const lossPercentPrePercentSignSpan = document.createElement("span");
lossPercentPrePercentSignSpan.id = "loss-percent-pre-percent-sign";
lossPercentPrePercentSignSpan.textContent = "%";

const lossPercentColonSpan = document.createElement("span");
lossPercentColonSpan.id = "loss-percent-colon";
lossPercentColonSpan.textContent = ": ";

const lossPercentLossPercentSpan = document.createElement("span");
lossPercentLossPercentSpan.id = "loss-percent-loss-percent";

const lossPercentSign = document.createElement("span");
lossPercentSign.textContent = "%";
lossPercentSign.id = "loss-percent-post-percent-sign";

const lossPercentDiv = document.createElement("div");
lossPercentDiv.id = "loss-percent";
lossPercentDiv.append(
  lossPercentLossText,
  lossPercentPrePercentSignSpan,
  lossPercentColonSpan,
  lossPercentLossPercentSpan,
  lossPercentSign
);

/* Total Rounds Played */
const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-played-text";
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedColonSpan.id = "total-rounds-played-colon";
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedTotalRoundsPlayedSpan.id =
  "total-rounds-played-total-rounds-played";

const totalRoundsPlayedDiv = document.createElement("div");
totalRoundsPlayedDiv.id = "total-rounds-played";
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS ";
totalRoundsPlayedDiv.append(
  totalRoundsPlayedPlayedTextSpan,
  totalRoundsPlayedColonSpan,
  totalRoundsPlayedTotalRoundsPlayedSpan
);

/* Total Win Percent */
const totalWinPercentWinTextSpan = document.createElement("span");
totalWinPercentWinTextSpan.id = "total-win-percent-win-text";
totalWinPercentWinTextSpan.textContent = "WIN";

const totalWinPercentPrePercentSignSpan = document.createElement("span");
totalWinPercentPrePercentSignSpan.id = "total-win-percent-pre-percent-sign";
totalWinPercentPrePercentSignSpan.textContent = "%";

const totalWinPercentColonSpan = document.createElement("span");
totalWinPercentColonSpan.id = "total-win-percent-colon";
totalWinPercentColonSpan.textContent = ": ";

const totalWinPercentTotalWinPercentSpan = document.createElement("span");
totalWinPercentTotalWinPercentSpan.id = "total-win-percent-total-win-percent";

const totalWinPercentPostPercentSpan = document.createElement("span");
totalWinPercentPostPercentSpan.id = "total-win-percent-post-percent-sign";
totalWinPercentPostPercentSpan.textContent = "%";

const totalWinPercentDiv = document.createElement("div");
totalWinPercentDiv.id = "total-win-percent";
totalWinPercentDiv.textContent = "TOTAL ";
totalWinPercentDiv.append(
  totalWinPercentWinTextSpan,
  totalWinPercentPrePercentSignSpan,
  totalWinPercentColonSpan,
  totalWinPercentTotalWinPercentSpan,
  totalWinPercentPostPercentSpan
);

/* Total Loss Percent */
const totalLossPercentLossTextSpan = document.createElement("span");
totalLossPercentLossTextSpan.id = "total-loss-percent-loss-text";
totalLossPercentLossTextSpan.textContent = "LOSS";

const totalLossPercentPrePercentSignSpan = document.createElement("span");
totalLossPercentPrePercentSignSpan.id = "total-loss-percent-pre-percent-sign";
totalLossPercentPrePercentSignSpan.textContent = "%";

const totalLossPercentColonSpan = document.createElement("span");
totalLossPercentColonSpan.id = "total-loss-percent-colon";
totalLossPercentColonSpan.textContent = ": ";

const totalLossPercentTotalLossPercentSpan = document.createElement("span");
totalLossPercentTotalLossPercentSpan.id =
  "total-loss-percent-total-loss-percent";

const totalLossPercentPostPercentSpan = document.createElement("span");
totalLossPercentPostPercentSpan.id = "total-loss-percent-post-percent-sign";
totalLossPercentPostPercentSpan.textContent = "%";

const totalLossPercentDiv = document.createElement("div");
totalLossPercentDiv.id = "total-loss-percent";
totalLossPercentDiv.textContent = "TOTAL ";
totalLossPercentDiv.append(
  totalLossPercentLossTextSpan,
  totalLossPercentPrePercentSignSpan,
  totalLossPercentColonSpan,
  totalLossPercentTotalLossPercentSpan,
  totalLossPercentPostPercentSpan
);

/* Total Draw Percent */
const totalDrawPercentDrawTextSpan = document.createElement("span");
totalDrawPercentDrawTextSpan.id = "total-draw-percent-draw-text";
totalDrawPercentDrawTextSpan.textContent = "DRAW";

const totalDrawPercentPrePercentSignSpan = document.createElement("span");
totalDrawPercentPrePercentSignSpan.id = "total-draw-percent-pre-percent-sign";
totalDrawPercentPrePercentSignSpan.textContent = "%";

const totalDrawPercentColonSpan = document.createElement("span");
totalDrawPercentColonSpan.id = "total-draw-percent-colon";
totalDrawPercentColonSpan.textContent = ": ";

const totalDrawPercentTotalDrawPercentSpan = document.createElement("span");
totalDrawPercentTotalDrawPercentSpan.id =
  "total-draw-percent-total-draw-percent";

const totalDrawPercentPostPercentSignSpan = document.createElement("span");
totalDrawPercentPostPercentSignSpan.id = "total-draw-percent-post-percent-sign";
totalDrawPercentPostPercentSignSpan.textContent = "%";

const totalDrawPercentDiv = document.createElement("div");
totalDrawPercentDiv.id = "total-draw-percent";
totalDrawPercentDiv.textContent = "TOTAL ";
totalDrawPercentDiv.append(
  totalDrawPercentDrawTextSpan,
  totalDrawPercentPrePercentSignSpan,
  totalDrawPercentColonSpan,
  totalDrawPercentTotalDrawPercentSpan,
  totalDrawPercentPostPercentSignSpan
);

/* Stats */
const statsDiv = document.createElement("div");
statsDiv.id = "stats";
statsDiv.append(
  roundsWonDiv,
  roundsLostDiv,
  roundsDrawnDiv,
  winPercentDiv,
  lossPercentDiv,
  totalRoundsPlayedDiv,
  totalWinPercentDiv,
  totalLossPercentDiv,
  totalDrawPercentDiv
);

/* Game Result */
const gameResultPlayerNameSpan = document.createElement("span");
gameResultPlayerNameSpan.id = "game-result-player-name";

const gameResultResult = document.createElement("span");
gameResultResult.id = "game-result-result";

const gameResultVersusTextSpan = document.createElement("span");
gameResultVersusTextSpan.id = "game-result-versus-text";
gameResultVersusTextSpan.textContent = "versus ";

const gameResultRivalNameSpan = document.createElement("span");
gameResultRivalNameSpan.id = "game-result-rival-name";

const gameResultDiv = document.createElement("div");
gameResultDiv.id = "game-result";
gameResultDiv.append(
  gameResultPlayerNameSpan,
  gameResultResult,
  gameResultVersusTextSpan,
  gameResultRivalNameSpan
);

/* Retry Button */
const retryButtonDiv = document.createElement("div");
retryButtonDiv.id = "retry-button";

const retryButtonGoAGSpan = document.createElement("span");
retryButtonGoAGSpan.id = "retry-button-go-ag-text";
retryButtonGoAGSpan.textContent = "GO AG";

const retryButtonAINSpan = document.createElement("span");
retryButtonAINSpan.id = "retry-button-ain-text";
retryButtonAINSpan.textContent = "AIN!";

const retryButtonTextSpan = document.createElement("span");
retryButtonTextSpan.id = "retry-button-text";
retryButtonTextSpan.append(retryButtonGoAGSpan, retryButtonAINSpan);

retryButtonDiv.appendChild(retryButtonTextSpan);

/* Post-Game */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game";
postGameDiv.append(statsDiv, gameResultDiv, retryButtonDiv);

/* Variables */
/* Enter Key Pressed */
let enterKeyPressed;

/* Names */
let playerName;
let rivalName;

/* Choices */
let playerChoice;
let rivalChoice;

/* Scores */
let playerScore = 0;
let rivalScore = 0;
let roundsDrawn = 0;
let totalRoundsPlayed = 0;

/* Pokémon */
let playerPokémon, rivalPokémon;

/* Pokémon Attacks */
let playerPokémonAttack, rivalPokémonAttack;

/* Pokémon Attack Effectiveness */
let playerPokémonAttackEffectiveness, rivalPokémonAttackEffectiveness;

/* Round Result */
let roundResult;

/* Exp */
let expValue;

/* Stats */
let roundsPlayed,
  winPercent,
  lossPercent,
  totalWinPercent,
  totalLossPercent,
  totalDrawPercent;

/* Data Structures */
/* Choices */
const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE",
};

/* Pokémon Attacks */
const pokémonAttacks = {
  Fire: ["EMBER", "FLAME THROWER"],
  Grass: ["RAZOR LEAF", "VINE WHIP"],
  Water: ["BUBBLE", "HYDRO PUMP", "WATER GUN"],
};

/* Pokémon Attack Effectiveness */
const pokémonAttackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!",
};

/* Round Results */
const roundResults = ["Draw", "Lose", "Win"];

/* Pokémon Colours */
const pokémonColours = {
  CHARMANDER: "rgb(255, 128, 0)",
  BULBASAUR: "rgb(128, 255, 0)",
  SQUIRTLE: "rgb(0, 128, 255)",
};

/* Pokémon Attack Colours */
const pokémonAttackColours = {
  CHARMANDER: "rgb(255, 255, 180)",
  BULBASAUR: "rgb(180, 255, 255)",
  SQUIRTLE: "rgb(180, 255, 180)",
};

/* Functions */
/* preOverlay */
preOverlay();

function preOverlay() {
  preOverlayText.append(preOverlayFlavourText);
  preOverlayOverlay.append(preOverlayText);

  setTimeout(() => {
    preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
    preOverlayFlavourText.textContent = "Hello, there! Glad to meet you!";
    preOverlayText.style.borderColor = "rgb(170, 160, 90)";

    setTimeout(() => {
      preOverlayText.style.opacity = "1";
      preOverlayText.style.transition = "opacity 1s";
    }, 2000);

    setTimeout(() => {
      preOverlayText.style.opacity = "0";
      preOverlayText.style.transition = "opacity 1s";
    }, 4000);

    setTimeout(() => {
      preOverlayFlavourText.textContent = "Welcome to the world of ";
      preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
      preOverlayNameText.textContent = "POKéMON!"
      preOverlayText.appendChild(preOverlayNameText);

      setTimeout(() => {
        preOverlayText.style.opacity = "1";
        preOverlayText.style.transition = "opacity 1s";
      }, 2000);

      setTimeout(() => {
        preOverlayText.style.opacity = "0";
        preOverlayText.style.transition = "opacity 1s";
      }, 4000);

      setTimeout(() => {
        preOverlayFlavourText.textContent = "My name is ";
        preOverlayNameText.textContent= "OAK.";

        setTimeout(() => {
          preOverlayText.style.opacity = "1";
          preOverlayText.style.transition = "opacity 1s";
        }, 2000);

        setTimeout(() => {
          preOverlayText.style.opacity = "0";
          preOverlayText.style.transition = "opacity 1s";
        }, 4000);

        setTimeout(() => {
          preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
          preOverlayAttributionText.textContent = "OAK:";
          preOverlayFlavourText.textContent = " People affectionately refer to me as the ";
          preOverlayNameText.textContent= "POKéMON Professor.";
          preOverlayText.append(preOverlayAttributionText, preOverlayFlavourText, preOverlayNameText);

          setTimeout(() => {
            preOverlayText.style.opacity = "1";
            preOverlayText.style.transition = "opacity 1s";
          }, 2000);

          setTimeout(() => {
            preOverlayText.style.opacity = "0";
            preOverlayText.style.transition = "opacity 1s";
          }, 4000);

          setTimeout(() => {
            preOverlayNameText.remove();
            preOverlayAttributionText.textContent = "PROFESSOR OAK:";
            preOverlayFlavourText.textContent = " But first, tell me a little about yourself.";

            setTimeout(() => {
              preOverlayText.style.opacity = "1";
              preOverlayText.style.transition = "opacity 1s";
            }, 2000);

            setTimeout(() => {
              preOverlayText.style.opacity = "0";
              preOverlayText.style.transition = "opacity 1s";
            }, 4000);

            setTimeout(() => {
              preOverlayFlavourText.textContent = " Let's begin with your name. What is it?";

              setTimeout(() => {
                preOverlayText.style.opacity = "1";
                preOverlayText.style.transition = "opacity 1s";
                preOverlayOverlay.appendChild(preOverlayPlayerInputBox);
              }, 2000);

              setTimeout(() => {
                setTimeout(() => {
                  preOverlayPlayerInputBox.style.opacity = "1";
                  preOverlayPlayerInputBox.style.transition = "opacity 1s";
                }, 500);

                preOverlayPlayerInputBox.addEventListener("keydown", (event) => {
                  if (event.key === "Enter") {
                    playerName = preOverlayPlayerInputBox.value;
                    setTimeout(() => {
                      preOverlayPlayerInputBox.style.opacity = "0";
                      preOverlayPlayerInputBox.style.transition = "opacity 1s";
                
                      setTimeout(() => {
                        preOverlayPlayerInputBox.remove();
                        preOverlayFlavourText.textContent = " And your sworn ";
                        preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                        preOverlayNameText.textContent = "rival...";
                        preOverlayText.appendChild(preOverlayNameText);
                
                        setTimeout(() => {
                          preOverlayText.style.opacity = "1";
                          preOverlayText.style.transition = "opacity 1s";
                        }, 2000);
                
                        setTimeout(() => {
                          preOverlayText.style.opacity = "0";
                          preOverlayText.style.transition = "opacity 1s";
                        }, 4000);

                        setTimeout(() => {
                          preOverlayNameText.remove();
                          preOverlayFlavourText.textContent = " ...Erm, what was their name now?";

                          setTimeout(() => {
                            preOverlayText.style.opacity = "1";
                            preOverlayText.style.transition = "opacity 1s";
                          }, 2000);

                          setTimeout(() => {
                            preOverlayText.style.opacity = "0";
                            preOverlayText.style.transition = "opacity 1s";
                          }, 4000);
                        })}, 500);
                    }, 500)
                  }
             
                      setTimeout(() => {
                        preOverlayNameText.remove();
                        preOverlayFlavourText.textContent = " ...Erm, what was their name now?";

                        setTimeout(() => {
                          preOverlayText.style.opacity = "1";
                          preOverlayText.style.transition = "opacity 1s";
                          preOverlayOverlay.appendChild(preOverlayRivalInputBox);
                        }, 2000);

                        setTimeout(() => {
                          
                          setTimeout(() => {
                            preOverlayRivalInputBox.style.opacity = "1";
                            preOverlayRivalInputBox.style.transition = "opacity 1s";
                          }, 500);

                          preOverlayRivalInputBox.addEventListener("keydown", (event) => {
                            if (event.key === "Enter") {
                              rivalName = preOverlayRivalInputBox.value;
                              setTimeout(() => {
                                preOverlayRivalInputBox.style.opacity = "0";
                                preOverlayRivalInputBox.style.transition = "opacity 1s";
                              }, 500);
                              setTimeout(() => {
                                preOverlayText.style.opacity = "0";
                                preOverlayText.style.transition = "opacity 1s";
                                }, 500);
                              }

                              setTimeout(() => {
                                preOverlayRivalInputBox.remove();
                                preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(100, 100, 170), 4.5px 4.5px rgb(100, 100, 170), 5px 5px rgb(100, 100, 170)";
                                preOverlayNameText.textContent = ` ${playerName}`;
                                preOverlayFlavourText.textContent = ", there are three POKéMON for you. Here!";
                                preOverlayText.append(preOverlayNameText, preOverlayFlavourText);

                                setTimeout(() => {
                                  preOverlayText.style.opacity = "1";
                                  preOverlayText.style.transition = "opacity 1s";
                                }, 2000);

                                setTimeout(() => {
                                  preOverlayText.style.opacity = "0";
                                  preOverlayText.style.transition = "opacity 1s";
                                }, 4000);

                                setTimeout(() => {
                                  preOverlayNameText.remove();
                                  preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                  preOverlayAttributionText.textContent = `${rivalName}: `;
                                  preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                  preOverlayFlavourText.textContent = "Hey! No fair! What about me?";
                                  preOverlayText.style.borderColor = "rgb(170, 100, 100)";

                                  setTimeout(() => {
                                    preOverlayText.style.opacity = "1";
                                    preOverlayText.style.transition = "opacity 1s";
                                  }, 2000);

                                  setTimeout(() => {
                                    preOverlayText.style.opacity = "0";
                                    preOverlayText.style.transition = "opacity 1s";
                                  }, 4000);

                                  setTimeout(() => {
                                    preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                    preOverlayAttributionText.textContent = "PROFESSOR OAK:";
                                    preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                    preOverlayFlavourText.textContent = ". Be patient, ";
                                    preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                    preOverlayNameText.textContent = ` ${rivalName}`;
                                    preOverlayAdditionalFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                    preOverlayAdditionalFlavourText.textContent = "you can have three, too!";
                                    preOverlayText.append(preOverlayNameText, preOverlayFlavourText, preOverlayAdditionalFlavourText);
                                    preOverlayText.style.borderColor = "rgb(173, 156, 89)";

                                    setTimeout(() => {
                                      preOverlayText.style.opacity = "1";
                                      preOverlayText.style.transition = "opacity 1s";
                                    }, 2000);

                                    setTimeout(() => {
                                      preOverlayText.style.opacity = "0";
                                      preOverlayText.style.transition = "opacity 1s";
                                    }, 4000);

                                    setTimeout(() => {
                                      preOverlayAdditionalFlavourText.remove();
                                      preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(100, 100, 170), 4.5px 4.5px rgb(100, 100, 170), 5px 5px rgb(100, 100, 170)";
                                      preOverlayAttributionText.textContent = `${playerName}`;
                                      preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(86, 73, 92), 4.5px 4.5px rgb(86, 73, 92), 5px 5px rgb(86, 73, 92)";
                                      preOverlayFlavourText.textContent = " received the ";
                                      preOverlayFlavourText.append(preOverlayGrassPokémonText, ", ", preOverlayWaterPokémonText, ", and the ", preOverlayFirePokémonText, " from ");
                                      preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)"
                                      preOverlayNameText.textContent = "PROF. OAK!";
                                      preOverlayText.style.borderColor = "rgb(86, 73, 92)";
                                      preOverlayText.append(preOverlayFlavourText, preOverlayNameText);
                                      

                                      setTimeout(() => {
                                        preOverlayText.style.opacity = "1";
                                        preOverlayText.style.transition = "opacity 1s";
                                      }, 2000);

                                      setTimeout(() => {
                                        preOverlayText.style.opacity = "0";
                                        preOverlayText.style.transition = "opacity 1s";
                                      }, 6000);

                                      setTimeout(() => {
                                        preOverlayGrassPokémonText.remove();
                                        preOverlayWaterPokémonText.remove();
                                        preOverlayFirePokémonText.remove();
                                        preOverlayNameText.remove()
                                        preOverlayAttributionText.textContent = `${rivalName}:`;
                                        preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                        preOverlayFlavourText.textContent = " I'll take these ones, then!";
                                        preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                        preOverlayText.style.borderColor = "rgb(170, 100, 100)";

                                        setTimeout(() => {
                                          preOverlayText.style.opacity = "1";
                                          preOverlayText.style.transition = "opacity 1s";
                                        }, 2000);

                                        setTimeout(() => {
                                          preOverlayText.style.opacity = "0";
                                          preOverlayText.style.transition = "opacity 1s";
                                        }, 4000);

                                        setTimeout(() => {
                                          preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(86, 73, 92), 4.5px 4.5px rgb(86, 73, 92), 5px 5px rgb(86, 73, 92)";
                                          preOverlayFlavourText.textContent = " received the ";
                                          preOverlayFlavourText.append(preOverlayGrassPokémonText, ", ", preOverlayWaterPokémonText, ", and the ", preOverlayFirePokémonText, " from ");
                                          preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                          preOverlayNameText.textContent = "PROF. OAK!";
                                          preOverlayText.style.borderColor = "rgb(86, 73, 92)";
                                          preOverlayText.appendChild(preOverlayNameText);

                                          setTimeout(() => {
                                            preOverlayText.style.opacity = "1";
                                            preOverlayText.style.transition = "opacity 1s";
                                          }, 2000);

                                          setTimeout(() => {
                                            preOverlayText.style.opacity = "0";
                                            preOverlayText.style.transition = "opacity 1s";
                                          }, 6000);

                                          setTimeout(() => {
                                            preOverlayNameText.remove();
                                            preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                            preOverlayAttributionText.textContent = `${rivalName}:`;
                                            preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                            preOverlayFlavourText.textContent = " My POKéMON look a lot tougher than yours.";
                                            preOverlayText.append(preOverlayAttributionText, preOverlayFlavourText);
                                            preOverlayText.style.borderColor = "rgb(170, 100, 100)";

                                            setTimeout(() => {
                                              preOverlayText.style.opacity = "1";
                                              preOverlayText.style.transition = "opacity 1s";
                                            }, 2000);

                                            setTimeout(() => {
                                              preOverlayText.style.opacity = "0";
                                              preOverlayText.style.transition = "opacity 1s";
                                            }, 4000);

                                            setTimeout(() => {
                                              preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                              preOverlayAttributionText.textContent = "PROFESSOR OAK:";
                                              preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                              preOverlayNameText.textContent = ` ${rivalName}`;
                                              preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 160, 90), 4.5px 4.5px rgb(170, 160, 90), 5px 5px rgb(170, 160, 90)";
                                              preOverlayFlavourText.textContent = ", you both have identical POKéMON...";
                                              preOverlayText.append(preOverlayAttributionText, preOverlayNameText, preOverlayFlavourText);
                                              preOverlayText.style.borderColor = "rgb(170, 160, 90)";

                                              setTimeout(() => {
                                                preOverlayText.style.opacity = "1";
                                                preOverlayText.style.transition = "opacity 1s";
                                              }, 2000);

                                              setTimeout(() => {
                                                preOverlayText.style.opacity = "0";
                                                preOverlayText.style.transition = "opacity 1s";
                                              }, 4000);

                                              setTimeout(() => {
                                                preOverlayNameText.remove();
                                                preOverlayFlavourText.textContent = " If a TRAINER wants to pit their POKéMON against yours, your POKéMON can battle.";

                                                setTimeout(() => {
                                                  preOverlayText.style.opacity = "1";
                                                  preOverlayText.style.transition = "opacity 1s";
                                                }, 2000);

                                                setTimeout(() => {
                                                  preOverlayText.style.opacity = "0";
                                                  preOverlayText.style.transition = "opacity 1s";
                                                }, 4000);

                                                setTimeout(() => {
                                                  preOverlayAttributionText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                                  preOverlayAttributionText.textContent = `${rivalName}:`;
                                                  preOverlayNameText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(89, 97, 173), 4.5px 4.5px rgb(89, 97, 173), 5px 5px rgb(89, 97, 173)";
                                                  preOverlayNameText.textContent = ` ${playerName}!`;
                                                  preOverlayFlavourText.style.textShadow = "3px 3px rgb(0, 0, 0), 4px 4px rgb(170, 100, 100), 4.5px 4.5px rgb(170, 100, 100), 5px 5px rgb(170, 100, 100)";
                                                  preOverlayFlavourText.textContent = " Let's check out our POKéMON!";
                                                  preOverlayText.append(preOverlayNameText, preOverlayFlavourText);
                                                  preOverlayText.style.borderColor = "rgb(170, 100, 100)";

                                                  setTimeout(() => {
                                                    preOverlayText.style.opacity = "1";
                                                    preOverlayText.style.transition = "opacity 1s";
                                                  }, 2000);

                                                  setTimeout(() => {
                                                    preOverlayText.style.opacity = "0";
                                                    preOverlayText.style.transition = "opacity 1s";
                                                  }, 4000);

                                                  setTimeout(() => {
                                                    preOverlayNameText.remove();
                                                    preOverlayFlavourText.textContent = " Come on, I'll take you on!";

                                                    setTimeout(() => {
                                                      preOverlayText.style.opacity = "1";
                                                      preOverlayText.style.transition = "opacity 1s";
                                                    }, 2000);

                                                    setTimeout(() => {
                                                      preOverlayText.style.opacity = "0";
                                                      preOverlayText.style.transition = "opacity 1s";
                                                    }, 4000);
                                                    setTimeout(() => {
                                                      preOverlayOverlay.style.opacity = "0";
                                                      preOverlayOverlay.style.transition = "opacity 3s";
                                                      preOverlayOverlay.addEventListener("transitionend", () => {
                                                        preOverlayOverlay.remove();
                                                      }, 0);
                                                    }, 10000);
                                                  }, 5000);
                                                }, 5000);
                                              }, 5000);
                                            }, 5000);
                                          }, 8000);
                                        }, 5000);
                                      }, 8000);
                                    }, 5000);
                                  }, 5000);
                                }, 5000);
                              }, 5000);
                            }, 5000);
                        }, 5000);
                      }, 5000);
                    }, 5000);
                  }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, );
};

function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    playerChoice = element.target.alt;
    playerPokémon = pokémon[playerChoice];
    playerPokémonAttack = generateAttack(playerChoice);
    rivalChoice = getRivalChoice();
    rivalPokémon = pokémon[rivalChoice];
    rivalPokémonAttack = generateAttack(rivalChoice);
    playRound(playerChoice, rivalChoice);
  }
};

function generateAttack(choice) {
  return pokémonAttacks[choice][
    Math.floor(Math.random() * pokémonAttacks[choice].length)
  ];
};

function getRivalChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerChoice, rivalChoice) {
  playerScoreNameSpan.textContent = playerName;
  rivalScoreNameSpan.textContent = rivalName;
  playerPokémonPlayerNameSpan.textContent = `${playerName}: `;
  rivalPokémonRivalNameSpan.textContent = `${rivalName}: `;
  playerPokémonAttackPlayerNameSpan.textContent = `${playerName}'s `;
  rivalPokémonAttackRivalNameSpan.textContent = `${rivalName}'s `;
  roundResultPlayerNameSpan.textContent = `${playerName}'s `;
  roundResultRivalNameSpan.textContent = `${rivalName}'s `;
  gameResultPlayerNameSpan.textContent = `${playerName} `;
  gameResultRivalNameSpan.textContent = `${rivalName}!`;
  criticalHitDiv.remove();
  totalRoundsPlayed++;
  generateCriticalHit(roundResult);

  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(0, 0, 255)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(0, 0, 255)";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[0]];
    roundsDrawn++;
    roundResultRoundResultSpan.style.color = "rgb(0, 0, 255)";
    roundResult = roundResults[0];
  } else if (
    (playerChoice === "Fire" && rivalChoice === "Grass") ||
    (playerChoice === "Grass" && rivalChoice === "Water") ||
    (playerChoice === "Water" && rivalChoice === "Fire")
  ) {
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(0, 255, 0)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(255, 0, 0)";
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[1]];
    playerScore++;
    roundResultRoundResultSpan.style.color = "rgb(0, 255, 0)";
    roundResult = roundResults[2];
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(255, 0, 0)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(0, 255, 0)";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[2]];
    rivalScore++;
    roundResultRoundResultSpan.style.color = "rgb(255, 0, 0)";
    roundResult = roundResults[1];
  };

  insertElement(scoresDiv, "buttons");
  playerScoreScoreSpan.textContent = playerScore;
  rivalScoreScoreSpan.textContent = rivalScore;

  insertElement(roundDiv, "scores");
  playerPokémonNameSpan.textContent = `${playerPokémon}!`;
  rivalPokémonNameSpan.textContent = `${rivalPokémon}!`;
  playerPokémonNameSpan.style.color = pokémonColours[playerPokémon];
  rivalPokémonNameSpan.style.color = pokémonColours[rivalPokémon];

  playerPokémonAttackPokémonNameSpan.textContent = `${playerPokémon} `;
  playerPokémonAttackPokémonNameSpan.style.color =
    pokémonColours[playerPokémon];
  playerPokémonAttackPokémonAttackSpan.textContent = `${playerPokémonAttack}!`;
  playerPokémonAttackPokémonAttackSpan.style.color =
    pokémonAttackColours[playerPokémon];
  playerPokémonAttackEffectivenessTextSpan.textContent =
    playerPokémonAttackEffectiveness;

  rivalPokémonAttackPokémonNameSpan.textContent = `${rivalPokémon} `;
  rivalPokémonAttackPokémonNameSpan.style.color = pokémonColours[rivalPokémon];
  rivalPokémonAttackPokémonAttackSpan.textContent = `${rivalPokémonAttack}!`;
  rivalPokémonAttackPokémonAttackSpan.style.color =
    pokémonAttackColours[rivalPokémon];
  rivalPokémonAttackEffectivenessTextSpan.textContent =
    rivalPokémonAttackEffectiveness;

  roundResultPlayerPokémonSpan.textContent = `${playerPokémon} `;
  roundResultPlayerPokémonSpan.style.color = pokémonColours[playerPokémon];
  roundResultRivalPokémonSpan.textContent = `${rivalPokémon}!`;
  roundResultRivalPokémonSpan.style.color = pokémonColours[rivalPokémon];

  switch (roundResult) {
    case roundResults[0]:
      roundResultRoundResultSpan.textContent = "drew ";
      break;
    case roundResults[2]:
      roundResultRoundResultSpan.textContent = "won ";
      break;
    case roundResults[1]:
      roundResultRoundResultSpan.textContent = "lost ";
      break;
  };

  if (playerScore === 5 || rivalScore === 5) {
    buttons.removeEventListener("click", getImgAlt);
    const expValue = Math.floor(Math.random() * 51) + 50;
    insertElement(postGameDiv, "round");
    insertElement(gameResultDiv, "stats");

    const playerColours = {
      [playerName]: "rgb(100, 100, 170)",
      [rivalName]: "rgb(170, 100, 100)",
    };

    if (playerScore > rivalScore) {
      faintNameSpan.style.color = playerColours[rivalName];
      faintPokémonSpan.style.color = pokémonColours[rivalPokémon];
      expNameSpan.style.color = playerColours[playerName];
      expPokémonSpan.style.color = pokémonColours[playerPokémon];
      faintNameSpan.textContent = `${rivalName}'s `;
      faintPokémonSpan.textContent = ` ${rivalPokémon} `;
      expNameSpan.textContent = `${playerName}'s `;
      expPokémonSpan.textContent = `${playerPokémon} `;
      gameResultResult.style.color = "rgb(0, 255, 0)";
      gameResultResult.textContent = "WON ";
    } else {
      faintNameSpan.style.color = playerColours[playerName];
      faintPokémonSpan.style.color = pokémonColours[playerPokémon];
      expNameSpan.style.color = playerColours[rivalName];
      expPokémonSpan.style.color = pokémonColours[rivalPokémon];
      faintNameSpan.textContent = `${playerName}'s `;
      faintPokémonSpan.textContent = `${playerPokémon} `;
      expNameSpan.textContent = `${rivalName}'s `;
      expPokémonSpan.textContent = ` ${rivalPokémon} `;
      gameResultResult.style.color = "rgb(255, 0, 0)";
      gameResultResult.textContent = "LOST ";
    }

    expAmountSpan.textContent = ` ${expValue} Exp. Points!`;
    roundDiv.append(faintDiv, expDiv);

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

    const retryButton = document.getElementById("retry-button");
    retryButton.addEventListener("click", resetGame);
  } else {
    faintDiv.remove();
    expDiv.remove();
    postGameDiv.remove();
  }
};

function insertElement(newDiv, divID) {
  const overheadDiv = document.getElementById(divID);
  const overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling);
};

function generateCriticalHit(roundResult) {
  if (roundResult === roundResults[2] || roundResult === roundResults[1]) {
    const attackElement =
      roundResult === roundResults[2]
        ? document.getElementById("player-pokémon-attack")
        : document.getElementById("rival-pokémon-attack");
    if (Math.random() <= 0.33) {
      attackElement.insertAdjacentElement("afterend", criticalHitDiv);
    }
  }
};

function resetGame() {
  playerScoreScoreSpan.textContent = 0;
  rivalScoreScoreSpan.textContent = 0;
  roundDiv.remove();
  postGameDiv.remove();
  buttons.addEventListener("click", getImgAlt);
};
