const preOverlayAdditionalFlavourText = document.createElement("span");
preOverlayAdditionalFlavourText.classList.add(
  "pre-overlay-additional-flavour-text"
);
preOverlayAdditionalFlavourText.id = "pre-overlay-additional-flavour-text";

const preOverlayAttributionText = document.createElement("span");
preOverlayAttributionText.classList.add("pre-overlay-attribution-text");
preOverlayAttributionText.id = "pre-overlay-attribution-text";

const preOverlayFlavourText = document.createElement("span");
preOverlayFlavourText.classList.add("pre-overlay-flavour-text");
preOverlayFlavourText.id = "pre-overlay-flavour-text";

const preOverlayNameText = document.createElement("span");
preOverlayNameText.classList.add("pre-overlay-name-text");
preOverlayNameText.id = "pre-overlay-name-text";

const preOverlayPlayerInputBox = document.createElement("input");
preOverlayPlayerInputBox.classList.add("pre-overlay-player-input-box");
preOverlayPlayerInputBox.id = "pre-overlay-player-input-box";
preOverlayPlayerInputBox.style.opacity = "0";
preOverlayPlayerInputBox.type = "text";

const preOverlayRivalInputBox = document.createElement("input");
preOverlayRivalInputBox.classList.add("pre-overlay-rival-input-box");
preOverlayRivalInputBox.id = "pre-overlay-rival-input-box";
preOverlayRivalInputBox.style.opacity = "0";
preOverlayRivalInputBox.type = "text";

const preOverlayGrassPokémonText = document.createElement("span");
preOverlayGrassPokémonText.classList.add("pre-overlay-grass-pokémon-text");
preOverlayGrassPokémonText.id = "pre-overlay-grass-pokémon-text";
preOverlayGrassPokémonText.style.color = "rgba(128, 255, 0, 1)";
preOverlayGrassPokémonText.textContent = "GRASS POKéMON BULBASAUR";

const preOverlayWaterPokémonText = document.createElement("span");
preOverlayWaterPokémonText.classList.add("pre-overlay-water-pokémon-text");
preOverlayWaterPokémonText.id = "pre-overlay-water-pokémon-text";
preOverlayWaterPokémonText.style.color = "rgba(0, 128, 255, 1)";
preOverlayWaterPokémonText.textContent = "WATER POKéMON SQUIRTLE";

const preOverlayFirePokémonText = document.createElement("span");
preOverlayFirePokémonText.classList.add("pre-overlay-fire-pokémon-text");
preOverlayFirePokémonText.id = "pre-overlay-fire-pokémon-text";
preOverlayFirePokémonText.style.color = "rgba(255, 128, 0, 1)";
preOverlayFirePokémonText.textContent = "FIRE POKéMON CHARMANDER";

const preOverlayText = document.createElement("span");
preOverlayText.classList.add("pre-overlay-text");
preOverlayText.id = "pre-overlay-text";
preOverlayText.style.opacity = "0";

const preOverlayOverlay = document.createElement("div");
preOverlayOverlay.classList.add("pre-overlay");
preOverlayOverlay.id = "pre-overlay";
preOverlayOverlay.style.opacity = "1";

const body = document.querySelector("body");
body.insertBefore(preOverlayOverlay, body.firstChild);

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", getImgAlt);

const playerScoreNameSpan = document.createElement("span");
playerScoreNameSpan.classList.add("player-score-name");
playerScoreNameSpan.id = "player-score-name";

const playerScoreScoreSpan = document.createElement("span");
playerScoreScoreSpan.classList.add("player-score-score");
playerScoreScoreSpan.id = "player-score-score";

const playerScoreDiv = document.createElement("div");
playerScoreDiv.classList.add("player-score");
playerScoreDiv.id = "player-score";
playerScoreDiv.append(playerScoreNameSpan, playerScoreScoreSpan);

const rivalScoreNameSpan = document.createElement("span");
rivalScoreNameSpan.classList.add("rival-score-name");
rivalScoreNameSpan.id = "rival-score-name";

const rivalScoreScoreSpan = document.createElement("span");
rivalScoreScoreSpan.classList.add("rival-score-score");
rivalScoreScoreSpan.id = "rival-score-score";

const rivalScoreDiv = document.createElement("div");
rivalScoreDiv.classList.add("rival-score");
rivalScoreDiv.id = "rival-score";
rivalScoreDiv.append(rivalScoreNameSpan, rivalScoreScoreSpan);

const scoresDiv = document.createElement("div");
scoresDiv.classList.add("scpres");
scoresDiv.id = "scores";
scoresDiv.append(playerScoreDiv, rivalScoreDiv);

const criticalHitDiv = document.createElement("div");
criticalHitDiv.classList.add("critical-hit");
criticalHitDiv.id = "critical-hit";
criticalHitDiv.textContent = "A critical hit!";

const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonPlayerNameSpan.classList.add("player-pokémon-player-name");
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonGoTextSpan.classList.add("player-pokémon-go-text");
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.textContent = "GO! ";

const playerPokémonNameSpan = document.createElement("span");
playerPokémonNameSpan.classList.add("player-pokémon-name");
playerPokémonNameSpan.id = "player-pokémon-name";

const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.classList.add("player-pokémon");
playerPokémonDiv.id = "player-pokémon";
playerPokémonDiv.append(
  playerPokémonPlayerNameSpan,
  playerPokémonGoTextSpan,
  playerPokémonNameSpan
);

const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonRivalNameSpan.classList.add("rival-pokémon-rival-name");
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonGoTextSpan.classList.add("rival-pokémon-go-text");
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.textContent = "GO! ";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonNameSpan.classList.add("rival-pokémon-name");
rivalPokémonNameSpan.id = "rival-pokémon-name";

const rivalPokémonDiv = document.createElement("div");
rivalPokémonDiv.classList.add("rival-pokémon");
rivalPokémonDiv.id = "rival-pokémon";
rivalPokémonDiv.append(
  rivalPokémonRivalNameSpan,
  rivalPokémonGoTextSpan,
  rivalPokémonNameSpan
);

const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackPlayerNameSpan.classList.add(
  "player-pokémon-attack-player-name"
);
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackPokémonNameSpan.classList.add(
  "player-pokémon-attack-pokémon"
);
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackUsedTextSpan.classList.add(
  "player-pokémon-attack-used-text"
);
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.textContent = "used ";

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackPokémonAttackSpan.classList.add(
  "player-pokémon-attack-pokémon-attack"
);
playerPokémonAttackPokémonAttackSpan.id =
  "player-pokémon-attack-pokémon-attack";

const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.classList.add("player-pokémon-attack");
playerPokémonAttackDiv.id = "player-pokémon-attack";
playerPokémonAttackDiv.append(
  playerPokémonAttackPlayerNameSpan,
  playerPokémonAttackPokémonNameSpan,
  playerPokémonAttackUsedTextSpan,
  playerPokémonAttackPokémonAttackSpan
);

const playerPokémonAttackEffectivenessItTextSpan =
  document.createElement("span");
playerPokémonAttackEffectivenessItTextSpan.classList.add(
  "player-pokémon-attack-effectiveness-it-text"
);
playerPokémonAttackEffectivenessItTextSpan.id =
  "player-pokémon-attack-effectiveness-it-text";

const playerPokémonAttackEffectivenessTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessTextSpan.classList.add(
  "player-pokémon-attack-effectiveness-text"
);
playerPokémonAttackEffectivenessTextSpan.id =
  "player-pokémon-attack-effectiveness-text";

const playerPokémonAttackEffectivenessDiv = document.createElement("div");
playerPokémonAttackEffectivenessDiv.classList.add(
  "player-pokémon-attack-effectiveness"
);
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness";
playerPokémonAttackEffectivenessDiv.append(
  playerPokémonAttackEffectivenessItTextSpan,
  playerPokémonAttackEffectivenessTextSpan
);

const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackRivalNameSpan.classList.add(
  "rival-pokémon-attack-rival-name"
);
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpan.classList.add("rival-pokémon-attack-pokémon");
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackUsedTextSpan.classList.add("rival-pokémon-attack-used-text");
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.textContent = "used ";

const rivalPokémonAttackPokémonAttackSpan = document.createElement("span");
rivalPokémonAttackPokémonAttackSpan.classList.add(
  "rival-pokémon-attack-pokémon-attack"
);
rivalPokémonAttackPokémonAttackSpan.id = "rival-pokémon-attack-pokémon-attack";

const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.classList.add("rival-pokémon-attack");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";
rivalPokémonAttackDiv.append(
  rivalPokémonAttackRivalNameSpan,
  rivalPokémonAttackPokémonNameSpan,
  rivalPokémonAttackUsedTextSpan,
  rivalPokémonAttackPokémonAttackSpan
);

const rivalPokémonAttackEffectivenessItTextSpan =
  document.createElement("span");
rivalPokémonAttackEffectivenessItTextSpan.classList.add(
  "rival-pokémon-attack-effectiveness-it-text"
);
rivalPokémonAttackEffectivenessItTextSpan.id =
  "rival-pokémon-attack-effectiveness-it-text";

const rivalPokémonAttackEffectivenessTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessTextSpan.classList.add(
  "rival-pokémon-attack-effectiveness-text"
);
rivalPokémonAttackEffectivenessTextSpan.id =
  "rival-pokémon-attack-effectiveness-text";

const rivalPokémonAttackEffectivenessDiv = document.createElement("div");
rivalPokémonAttackEffectivenessDiv.classList.add(
  "rival-pokémon-attack-effectiveness"
);
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness";
rivalPokémonAttackEffectivenessDiv.append(
  rivalPokémonAttackEffectivenessItTextSpan,
  rivalPokémonAttackEffectivenessTextSpan
);

const roundResultPlayerNameSpan = document.createElement("span");
roundResultPlayerNameSpan.classList.add("round-result-player-name");
roundResultPlayerNameSpan.id = "round-result-player-name";

const roundResultPlayerPokémonSpan = document.createElement("span");
roundResultPlayerPokémonSpan.classList.add("round-result-player-pokémon");
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon";

const roundResultRoundResultSpan = document.createElement("span");
roundResultRoundResultSpan.classList.add("round-result-round-result");
roundResultRoundResultSpan.id = "round-result-round-result";

const roundResultVersusTextSpan = document.createElement("span");
roundResultVersusTextSpan.classList.add("round-result-versus-text");
roundResultVersusTextSpan.id = "round-result-versus-text";
roundResultVersusTextSpan.textContent = " versus ";

const roundResultRivalNameSpan = document.createElement("span");
roundResultRivalNameSpan.classList.add("round-result-rival-name");
roundResultRivalNameSpan.id = "round-result-rival-name";

const roundResultRivalPokémonSpan = document.createElement("span");
roundResultRivalPokémonSpan.classList.add("round-result-rival-pokémon");
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon";

const roundResultDiv = document.createElement("div");
roundResultDiv.classList.add("round-result");
roundResultDiv.id = "round-result";
roundResultDiv.append(
  roundResultPlayerNameSpan,
  roundResultPlayerPokémonSpan,
  roundResultRoundResultSpan,
  roundResultVersusTextSpan,
  roundResultRivalNameSpan,
  roundResultRivalPokémonSpan
);

const faintNameSpan = document.createElement("span");
faintNameSpan.classList.add("faint-name");
faintNameSpan.id = "faint-name";

const faintPokémonSpan = document.createElement("span");
faintPokémonSpan.classList.add("faint-pokémon");
faintPokémonSpan.id = "faint-pokémon";

const faintFaintedTextSpan = document.createElement("span");
faintFaintedTextSpan.classList.add("faint-fainted-text");
faintFaintedTextSpan.id = "faint-fainted-text";
faintFaintedTextSpan.textContent = "fainted!";

const faintDiv = document.createElement("div");
faintDiv.classList.add("faintDiv");
faintDiv.id = "faint";
faintDiv.append(faintNameSpan, faintPokémonSpan, faintFaintedTextSpan);

const expNameSpan = document.createElement("span");
expNameSpan.classList.add("expNameSpan");
expNameSpan.id = "exp-name";

const expPokémonSpan = document.createElement("span");
expPokémonSpan.classList.add("exp-pokémon");
expPokémonSpan.id = "exp-pokémon";

const expGainedTextSpan = document.createElement("span");
expGainedTextSpan.classList.add("exp-gained-text");
expGainedTextSpan.id = "exp-gained-text";
expGainedTextSpan.textContent = "gained ";

const expAmountSpan = document.createElement("span");
expAmountSpan.classList.add("exp-amount");
expAmountSpan.id = "exp-amount";

const expDiv = document.createElement("div");
expDiv.classList.add("exp");
expDiv.id = "exp";
expDiv.append(expNameSpan, expPokémonSpan, expGainedTextSpan, expAmountSpan);

const roundDiv = document.createElement("div");
roundDiv.classList.add("round");
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

const roundsWonWonTextSpan = document.createElement("span");
roundsWonWonTextSpan.classList.add("rounds-won-won-text");
roundsWonWonTextSpan.id = "rounds-won-won-text";
roundsWonWonTextSpan.textContent = "WON";

const roundsWonColonSpan = document.createElement("span");
roundsWonColonSpan.classList.add("rounds-won-colon");
roundsWonColonSpan.id = "rounds-won-colon";
roundsWonColonSpan.textContent = ": ";

const roundsWonPlayerScoreSpan = document.createElement("span");
roundsWonPlayerScoreSpan.classList.add("rounds-won-player-score");
roundsWonPlayerScoreSpan.id = "rounds-won-player-score";

const roundsWonDiv = document.createElement("div");
roundsWonDiv.classList.add("rounds-won");
roundsWonDiv.id = "rounds-won";
roundsWonDiv.textContent = "ROUNDS ";
roundsWonDiv.append(
  roundsWonWonTextSpan,
  roundsWonColonSpan,
  roundsWonPlayerScoreSpan
);

const roundsLostLostTextSpan = document.createElement("span");
roundsLostLostTextSpan.classList.add("rounds-lost-lost-text");
roundsLostLostTextSpan.id = "rounds-lost-lost-text";
roundsLostLostTextSpan.textContent = "LOST";

const roundsLostColonSpan = document.createElement("span");
roundsLostColonSpan.classList.add("rounds-lost-colon");
roundsLostColonSpan.id = "rounds-lost-colon";
roundsLostColonSpan.textContent = ": ";

const roundsLostRivalScoreSpan = document.createElement("span");
roundsLostRivalScoreSpan.classList.add("rounds-lost-rival-score");
roundsLostRivalScoreSpan.id = "rounds-lost-rival-score";

const roundsLostDiv = document.createElement("div");
roundsLostDiv.classList.add("rounds-lost");
roundsLostDiv.id = "rounds-lost";
roundsLostDiv.textContent = "ROUNDS ";
roundsLostDiv.append(
  roundsLostLostTextSpan,
  roundsLostColonSpan,
  roundsLostRivalScoreSpan
);

const roundsDrawnDrawnTextSpan = document.createElement("span");
roundsDrawnDrawnTextSpan.classList.add("rounds-drawn-drawn-text");
roundsDrawnDrawnTextSpan.id = "rounds-drawn-drawn-text";
roundsDrawnDrawnTextSpan.textContent = "DRAWN";

const roundsDrawnColonSpan = document.createElement("span");
roundsDrawnColonSpan.classList.add("rounds-drawn-colon");
roundsDrawnColonSpan.id = "rounds-drawn-colon";
roundsDrawnColonSpan.textContent = ": ";

const roundsDrawnRoundsDrawnSpan = document.createElement("span");
roundsDrawnRoundsDrawnSpan.classList.add("rounds-drawn-rounds-drawn");
roundsDrawnRoundsDrawnSpan.id = "rounds-drawn-rounds-drawn";

const roundsDrawnDiv = document.createElement("div");
roundsDrawnDiv.classList.add("rounds-drawn");
roundsDrawnDiv.id = "rounds-drawn";
roundsDrawnDiv.textContent = "ROUNDS ";
roundsDrawnDiv.append(
  roundsDrawnDrawnTextSpan,
  roundsDrawnColonSpan,
  roundsDrawnRoundsDrawnSpan
);

const winPercentWinText = document.createElement("span");
winPercentWinText.classList.add("win-percent-win-text");
winPercentWinText.id = "win-percent-win-text";
winPercentWinText.textContent = "WIN";

const winPercentPrePercentSignSpan = document.createElement("span");
winPercentPrePercentSignSpan.classList.add("win-percent-pre-percent-sign");
winPercentPrePercentSignSpan.id = "win-percent-pre-percent-sign";
winPercentPrePercentSignSpan.textContent = "%";

const winPercentColonSpan = document.createElement("span");
winPercentColonSpan.classList.add("win-percent-colon");
winPercentColonSpan.id = "win-percent-colon";
winPercentColonSpan.textContent = ": ";

const winPercentWinPercentSpan = document.createElement("span");
winPercentWinPercentSpan.classList.add("win-percent-win-percent");
winPercentWinPercentSpan.id = "win-percent-win-percent";

const winPercentPostPercentSpan = document.createElement("span");
winPercentPostPercentSpan.classList.add("win-percent-post-percent-sign");
winPercentPostPercentSpan.id = "win-percent-post-percent-sign";
winPercentPostPercentSpan.textContent = "%";

const winPercentDiv = document.createElement("div");
winPercentDiv.classList.add("win-percent");
winPercentDiv.id = "win-percent";
winPercentDiv.append(
  winPercentWinText,
  winPercentPrePercentSignSpan,
  winPercentColonSpan,
  winPercentWinPercentSpan,
  winPercentPostPercentSpan
);

const lossPercentLossText = document.createElement("span");
lossPercentLossText.classList.add("loss-percent-loss-text");
lossPercentLossText.id = "loss-percent-loss-text";
lossPercentLossText.textContent = "LOSS";

const lossPercentPrePercentSignSpan = document.createElement("span");
lossPercentPrePercentSignSpan.classList.add("loss-percent-pre-percent-sign");
lossPercentPrePercentSignSpan.id = "loss-percent-pre-percent-sign";
lossPercentPrePercentSignSpan.textContent = "%";

const lossPercentColonSpan = document.createElement("span");
lossPercentColonSpan.classList.add("loss-percent-colon");
lossPercentColonSpan.id = "loss-percent-colon";
lossPercentColonSpan.textContent = ": ";

const lossPercentLossPercentSpan = document.createElement("span");
lossPercentLossPercentSpan.classList.add("loss-percent-loss-percent");
lossPercentLossPercentSpan.id = "loss-percent-loss-percent";

const lossPercentSign = document.createElement("span");
lossPercentSign.classList.add("loss-percent-post-percent-sign");
lossPercentSign.id = "loss-percent-post-percent-sign";
lossPercentSign.textContent = "%";

const lossPercentDiv = document.createElement("div");
lossPercentDiv.classList.add("loss-percent");
lossPercentDiv.id = "loss-percent";
lossPercentDiv.append(
  lossPercentLossText,
  lossPercentPrePercentSignSpan,
  lossPercentColonSpan,
  lossPercentLossPercentSpan,
  lossPercentSign
);

const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedPlayedTextSpan.classList.add(
  "total-rounds-played-played-text"
);
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-played-text";
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedColonSpan.classList.add("total-rounds-played-colon");
totalRoundsPlayedColonSpan.id = "total-rounds-played-colon";
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedTotalRoundsPlayedSpan.classList.add(
  "total-rounds-played-total-rounds-played"
);
totalRoundsPlayedTotalRoundsPlayedSpan.id =
  "total-rounds-played-total-rounds-played";

const totalRoundsPlayedDiv = document.createElement("div");
totalRoundsPlayedDiv.classList.add("total-rounds-played");
totalRoundsPlayedDiv.id = "total-rounds-played";
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS ";
totalRoundsPlayedDiv.append(
  totalRoundsPlayedPlayedTextSpan,
  totalRoundsPlayedColonSpan,
  totalRoundsPlayedTotalRoundsPlayedSpan
);

const totalWinPercentWinTextSpan = document.createElement("span");
totalWinPercentWinTextSpan.classList.add("total-win-percent-win-text");
totalWinPercentWinTextSpan.id = "total-win-percent-win-text";
totalWinPercentWinTextSpan.textContent = "WIN";

const totalWinPercentPrePercentSignSpan = document.createElement("span");
totalWinPercentPrePercentSignSpan.classList.add(
  "total-win-percent-pre-percent-sign"
);
totalWinPercentPrePercentSignSpan.id = "total-win-percent-pre-percent-sign";
totalWinPercentPrePercentSignSpan.textContent = "%";

const totalWinPercentColonSpan = document.createElement("span");
totalWinPercentColonSpan.classList.add("total-win-percent-colon");
totalWinPercentColonSpan.id = "total-win-percent-colon";
totalWinPercentColonSpan.textContent = ": ";

const totalWinPercentTotalWinPercentSpan = document.createElement("span");
totalWinPercentTotalWinPercentSpan.classList.add(
  "total-win-percent-total-win-percent"
);
totalWinPercentTotalWinPercentSpan.id = "total-win-percent-total-win-percent";

const totalWinPercentPostPercentSpan = document.createElement("span");
totalWinPercentPostPercentSpan.classList.add(
  "total-win-percent-post-percent-sign"
);
totalWinPercentPostPercentSpan.id = "total-win-percent-post-percent-sign";
totalWinPercentPostPercentSpan.textContent = "%";

const totalWinPercentDiv = document.createElement("div");
totalWinPercentDiv.classList.add("total-win-percent");
totalWinPercentDiv.id = "total-win-percent";
totalWinPercentDiv.textContent = "TOTAL ";
totalWinPercentDiv.append(
  totalWinPercentWinTextSpan,
  totalWinPercentPrePercentSignSpan,
  totalWinPercentColonSpan,
  totalWinPercentTotalWinPercentSpan,
  totalWinPercentPostPercentSpan
);

const totalLossPercentLossTextSpan = document.createElement("span");
totalLossPercentLossTextSpan.classList.add("total-loss-percent-loss-text");
totalLossPercentLossTextSpan.id = "total-loss-percent-loss-text";
totalLossPercentLossTextSpan.textContent = "LOSS";

const totalLossPercentPrePercentSignSpan = document.createElement("span");
totalLossPercentPrePercentSignSpan.classList.add(
  "total-loss-percent-pre-percent-sign"
);
totalLossPercentPrePercentSignSpan.id = "total-loss-percent-pre-percent-sign";
totalLossPercentPrePercentSignSpan.textContent = "%";

const totalLossPercentColonSpan = document.createElement("span");
totalLossPercentColonSpan.classList.add("total-loss-percent-colon");
totalLossPercentColonSpan.id = "total-loss-percent-colon";
totalLossPercentColonSpan.textContent = ": ";

const totalLossPercentTotalLossPercentSpan = document.createElement("span");
totalLossPercentTotalLossPercentSpan.classList.add(
  "total-loss-percent-total-loss-percent"
);
totalLossPercentTotalLossPercentSpan.id =
  "total-loss-percent-total-loss-percent";

const totalLossPercentPostPercentSpan = document.createElement("span");
totalLossPercentPostPercentSpan.classList.add(
  "total-loss-percent-post-percent-sign"
);
totalLossPercentPostPercentSpan.id = "total-loss-percent-post-percent-sign";
totalLossPercentPostPercentSpan.textContent = "%";

const totalLossPercentDiv = document.createElement("div");
totalLossPercentDiv.classList.add("total-loss-percent");
totalLossPercentDiv.id = "total-loss-percent";
totalLossPercentDiv.textContent = "TOTAL ";
totalLossPercentDiv.append(
  totalLossPercentLossTextSpan,
  totalLossPercentPrePercentSignSpan,
  totalLossPercentColonSpan,
  totalLossPercentTotalLossPercentSpan,
  totalLossPercentPostPercentSpan
);

const totalDrawPercentDrawTextSpan = document.createElement("span");
totalDrawPercentDrawTextSpan.classList.add("total-draw-percent-draw-text");
totalDrawPercentDrawTextSpan.id = "total-draw-percent-draw-text";
totalDrawPercentDrawTextSpan.textContent = "DRAW";

const totalDrawPercentPrePercentSignSpan = document.createElement("span");
totalDrawPercentPrePercentSignSpan.classList.add(
  "total-draw-percent-pre-percent-sign"
);
totalDrawPercentPrePercentSignSpan.id = "total-draw-percent-pre-percent-sign";
totalDrawPercentPrePercentSignSpan.textContent = "%";

const totalDrawPercentColonSpan = document.createElement("span");
totalDrawPercentColonSpan.classList.add("total-draw-percent-colon");
totalDrawPercentColonSpan.id = "total-draw-percent-colon";
totalDrawPercentColonSpan.textContent = ": ";

const totalDrawPercentTotalDrawPercentSpan = document.createElement("span");
totalDrawPercentTotalDrawPercentSpan.classList.add(
  "total-draw-percent-total-draw-percent"
);
totalDrawPercentTotalDrawPercentSpan.id =
  "total-draw-percent-total-draw-percent";

const totalDrawPercentPostPercentSignSpan = document.createElement("span");
totalDrawPercentPostPercentSignSpan.classList.add(
  "total-draw-percent-post-percent-sign"
);
totalDrawPercentPostPercentSignSpan.id = "total-draw-percent-post-percent-sign";
totalDrawPercentPostPercentSignSpan.textContent = "%";

const totalDrawPercentDiv = document.createElement("div");
totalDrawPercentDiv.classList.add("total-draw-percent");
totalDrawPercentDiv.id = "total-draw-percent";
totalDrawPercentDiv.textContent = "TOTAL ";
totalDrawPercentDiv.append(
  totalDrawPercentDrawTextSpan,
  totalDrawPercentPrePercentSignSpan,
  totalDrawPercentColonSpan,
  totalDrawPercentTotalDrawPercentSpan,
  totalDrawPercentPostPercentSignSpan
);

const statsDiv = document.createElement("div");
statsDiv.classList.add("stats");
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

const gameResultPlayerNameSpan = document.createElement("span");
gameResultPlayerNameSpan.classList.add("game-result-player-name");
gameResultPlayerNameSpan.id = "game-result-player-name";

const gameResultResult = document.createElement("span");
gameResultResult.classList.add("game-result-result");
gameResultResult.id = "game-result-result";

const gameResultVersusTextSpan = document.createElement("span");
gameResultVersusTextSpan.classList.add("game-result-versus-text");
gameResultVersusTextSpan.id = "game-result-versus-text";
gameResultVersusTextSpan.textContent = "versus ";

const gameResultRivalNameSpan = document.createElement("span");
gameResultRivalNameSpan.classList.add("game-result-rival-name");
gameResultRivalNameSpan.id = "game-result-rival-name";

const gameResultDiv = document.createElement("div");
gameResultDiv.classList.add("game-result");
gameResultDiv.id = "game-result";
gameResultDiv.append(
  gameResultPlayerNameSpan,
  gameResultResult,
  gameResultVersusTextSpan,
  gameResultRivalNameSpan
);

const retryButtonDiv = document.createElement("div");
retryButtonDiv.classList.add("retry-button");
retryButtonDiv.id = "retry-button";
retryButtonDiv.addEventListener("click", resetGame);

const retryButtonGoAGSpan = document.createElement("span");
retryButtonGoAGSpan.classList.add("retry-button-go-ag-text");
retryButtonGoAGSpan.id = "retry-button-go-ag-text";
retryButtonGoAGSpan.textContent = "GO AG";

const retryButtonAINSpan = document.createElement("span");
retryButtonAINSpan.classList.add("retry-button-ain-text");
retryButtonAINSpan.id = "retry-button-ain-text";
retryButtonAINSpan.textContent = "AIN!";

const retryButtonTextSpan = document.createElement("span");
retryButtonTextSpan.classList.add("retry-button-text");
retryButtonTextSpan.id = "retry-button-text";
retryButtonTextSpan.append(retryButtonGoAGSpan, retryButtonAINSpan);
retryButtonDiv.appendChild(retryButtonTextSpan);

const roundAndStatsDiv = document.createElement("div");
roundAndStatsDiv.classList.add("round-and-stats");
roundAndStatsDiv.id = "round-and-stats";
roundAndStatsDiv.append(roundDiv, statsDiv);

const postGameDiv = document.createElement("div");
postGameDiv.classList.add("post-game");
postGameDiv.id = "post-game";
postGameDiv.append(gameResultDiv, retryButtonDiv);

const choices = ["Fire", "Grass", "Water"];

const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE",
};

const pokémonAttacks = {
  Fire: ["EMBER", "FLAME THROWER"],
  Grass: ["RAZOR LEAF", "VINE WHIP"],
  Water: ["BUBBLE", "HYDRO PUMP", "WATER GUN"],
};

const pokémonAttackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!",
};

const roundResults = ["Draw", "Lose", "Win"];

const pokémonColours = {
  CHARMANDER: "rgba(255, 128, 0, 1)",
  BULBASAUR: "rgba(128, 255, 0, 1)",
  SQUIRTLE: "rgba(0, 128, 255, 1)",
};

const pokémonAttackColours = {
  CHARMANDER: "rgba(255, 255, 180, 1)",
  BULBASAUR: "rgba(180, 255, 180, 1)",
  SQUIRTLE: "rgba(180, 255, 255, 1)",
};

let playerName = "PLAYER";
let rivalName = "RIVAL";
let playerScore = 0;
let rivalScore = 0;
let playerChoice;
let rivalChoice;
let roundsDrawn = 0;
let totalRoundsPlayed = 0;
let playerPokémon;
let rivalPokémon;
let playerPokémonAttack;
let rivalPokémonAttack;
let playerPokémonAttackEffectiveness;
let rivalPokémonAttackEffectiveness;
let roundResult;
let expValue;
let roundsPlayed;
let winPercent;
let lossPercent;
let totalWinPercent;
let totalLossPercent;
let totalDrawPercent;

preOverlay();

function preOverlay() {
  preOverlayText.append(preOverlayFlavourText);
  preOverlayOverlay.append(preOverlayText);

  setTimeout(() => {
    preOverlayFlavourText.style.textShadow =
      "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
    preOverlayFlavourText.textContent = "Hello, there! Glad to meet you!";
    preOverlayText.style.borderColor = "rgba(170, 160, 90, 1)";

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
      preOverlayNameText.style.textShadow =
        "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
      preOverlayNameText.textContent = "POKéMON!";
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
        preOverlayNameText.textContent = "OAK.";

        setTimeout(() => {
          preOverlayText.style.opacity = "1";
          preOverlayText.style.transition = "opacity 1s";
        }, 2000);

        setTimeout(() => {
          preOverlayText.style.opacity = "0";
          preOverlayText.style.transition = "opacity 1s";
        }, 4000);

        setTimeout(() => {
          preOverlayAttributionText.style.textShadow =
            "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
          preOverlayAttributionText.textContent = "OAK:";
          preOverlayFlavourText.textContent =
            " People affectionately refer to me as the ";
          preOverlayNameText.textContent = "POKéMON Professor.";
          preOverlayText.append(
            preOverlayAttributionText,
            preOverlayFlavourText,
            preOverlayNameText
          );

          setTimeout(() => {
            preOverlayText.style.opacity = "1";
            preOverlayText.style.transition = "opacity 1s";
          }, 2000);

          setTimeout(() => {
            preOverlayText.style.opacity = "0";
            preOverlayText.style.transition = "opacity 1s";
          }, 4000);

          // setTimeout(() => {
          //   preOverlayNameText.remove();
          //   preOverlayAttributionText.textContent = "PROFESSOR OAK:";
          //   preOverlayFlavourText.textContent = " But first, tell me a little about yourself.";

          //   setTimeout(() => {
          //     preOverlayText.style.opacity = "1";
          //     preOverlayText.style.transition = "opacity 1s";
          //   }, 2000);

          //   setTimeout(() => {
          //     preOverlayText.style.opacity = "0";
          //     preOverlayText.style.transition = "opacity 1s";
          //   }, 4000);

          // setTimeout(() => {
          //   preOverlayFlavourText.textContent = " Let's begin with your name. What is it?";

          //   setTimeout(() => {
          //     preOverlayText.style.opacity = "1";
          //     preOverlayText.style.transition = "opacity 1s";
          //     preOverlayOverlay.appendChild(preOverlayPlayerInputBox);
          //   }, 2000);

          //   setTimeout(() => {
          //     setTimeout(() => {
          //       preOverlayPlayerInputBox.style.opacity = "1";
          //       preOverlayPlayerInputBox.style.transition = "opacity 1s";
          //     }, 500);

          //     preOverlayPlayerInputBox.addEventListener("keydown", (event) => {
          //       if (event.key === "Enter") {
          //         playerName = preOverlayPlayerInputBox.value;
          //         setTimeout(() => {
          //           preOverlayPlayerInputBox.style.opacity = "0";
          //           preOverlayPlayerInputBox.style.transition = "opacity 1s";
          //           }, 500);
          //           setTimeout(() => {
          //             preOverlayText.style.opacity = "0";
          //             preOverlayText.style.transition = "opacity 1s";
          //           }, 500);
          //         }

          //         setTimeout(() => {
          //           preOverlayPlayerInputBox.remove();
          //           preOverlayFlavourText.textContent = " And your sworn ";
          //           preOverlayNameText.style.textShadow = "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
          //           preOverlayNameText.textContent = "rival...";
          //           preOverlayText.appendChild(preOverlayNameText);

          //           setTimeout(() => {
          //             preOverlayText.style.opacity = "1";
          //             preOverlayText.style.transition = "opacity 1s";
          //           }, 2000);

          //           setTimeout(() => {
          //             preOverlayText.style.opacity = "0";
          //             preOverlayText.style.transition = "opacity 1s";
          //           }, 4000);

          //           setTimeout(() => {
          //             preOverlayNameText.remove();
          //             preOverlayFlavourText.textContent = " ...Erm, what was their name now?";

          //             setTimeout(() => {
          //               preOverlayText.style.opacity = "1";
          //               preOverlayText.style.transition = "opacity 1s";
          //               preOverlayOverlay.appendChild(preOverlayRivalInputBox);
          //             }, 2000);

          //             setTimeout(() => {

          //               setTimeout(() => {
          //                 preOverlayRivalInputBox.style.opacity = "1";
          //                 preOverlayRivalInputBox.style.transition = "opacity 1s";
          //               }, 500);

          //               preOverlayRivalInputBox.addEventListener("keydown", (event) => {
          //                 if (event.key === "Enter") {
          //                   rivalName = preOverlayRivalInputBox.value;
          //                   setTimeout(() => {
          //                     preOverlayRivalInputBox.style.opacity = "0";
          //                     preOverlayRivalInputBox.style.transition = "opacity 1s";
          //                   }, 500);
          //                   setTimeout(() => {
          //                     preOverlayText.style.opacity = "0";
          //                     preOverlayText.style.transition = "opacity 1s";
          //                     }, 500);
          //                   }

          setTimeout(() => {
            preOverlayRivalInputBox.remove();
            preOverlayNameText.style.textShadow =
              "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(100, 100, 170, 1), 4.5px 4.5px rgba(100, 100, 170, 1), 5px 5px rgba(100, 100, 170, 1)";
            preOverlayNameText.textContent = ` ${playerName}, `;
            preOverlayFlavourText.textContent =
              "there are three POKéMON for you. Here!";
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
              preOverlayAttributionText.style.textShadow =
                "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
              preOverlayAttributionText.textContent = `${rivalName}: `;
              preOverlayFlavourText.style.textShadow =
                "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
              preOverlayFlavourText.textContent =
                "Hey! No fair! What about me?";
              preOverlayText.style.borderColor = "rgba(170, 100, 100, 1)";

              setTimeout(() => {
                preOverlayText.style.opacity = "1";
                preOverlayText.style.transition = "opacity 1s";
              }, 2000);

              setTimeout(() => {
                preOverlayText.style.opacity = "0";
                preOverlayText.style.transition = "opacity 1s";
              }, 4000);

              setTimeout(() => {
                preOverlayAttributionText.style.textShadow =
                  "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                preOverlayAttributionText.textContent = "PROFESSOR OAK:";
                preOverlayFlavourText.style.textShadow =
                  "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                preOverlayFlavourText.textContent = "Be patient, ";
                preOverlayNameText.style.textShadow =
                  "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                preOverlayNameText.textContent = ` ${rivalName}. `;
                preOverlayAdditionalFlavourText.style.textShadow =
                  "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                preOverlayAdditionalFlavourText.textContent =
                  "you can have three, too!";
                preOverlayText.append(
                  preOverlayNameText,
                  preOverlayFlavourText,
                  preOverlayAdditionalFlavourText
                );
                preOverlayText.style.borderColor = "rgba(173, 156, 89, 1)";

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
                  preOverlayAttributionText.style.textShadow =
                    "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(100, 100, 170, 1), 4.5px 4.5px rgba(100, 100, 170, 1), 5px 5px rgba(100, 100, 170, 1)";
                  preOverlayAttributionText.textContent = `${playerName}`;
                  preOverlayFlavourText.style.textShadow =
                    "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(86, 73, 92, 1), 4.5px 4.5px rgba(86, 73, 92, 1), 5px 5px rgba(86, 73, 92, 1)";
                  preOverlayFlavourText.textContent = " received the ";
                  preOverlayFlavourText.append(
                    preOverlayGrassPokémonText,
                    ", ",
                    preOverlayWaterPokémonText,
                    ", and the ",
                    preOverlayFirePokémonText,
                    " from "
                  );
                  preOverlayNameText.style.textShadow =
                    "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                  preOverlayNameText.textContent = "PROF. OAK!";
                  preOverlayText.style.borderColor = "rgba(86, 73, 92, 1)";
                  preOverlayText.append(
                    preOverlayFlavourText,
                    preOverlayNameText
                  );

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
                    preOverlayAttributionText.textContent = `${rivalName}:`;
                    preOverlayAttributionText.style.textShadow =
                      "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                    preOverlayFlavourText.textContent =
                      " I'll take these ones, then!";
                    preOverlayFlavourText.style.textShadow =
                      "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                    preOverlayText.style.borderColor = "rgba(170, 100, 100, 1)";
                    preOverlayText.append(
                      preOverlayAttributionText,
                      preOverlayFlavourText
                    );

                    setTimeout(() => {
                      preOverlayText.style.opacity = "1";
                      preOverlayText.style.transition = "opacity 1s";
                    }, 2000);

                    setTimeout(() => {
                      preOverlayText.style.opacity = "0";
                      preOverlayText.style.transition = "opacity 1s";
                    }, 4000);

                    setTimeout(() => {
                      preOverlayAttributionText.textContent = `${rivalName}`;
                      preOverlayFlavourText.style.textShadow =
                        "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(86, 73, 92, 1), 4.5px 4.5px rgba(86, 73, 92, 1), 5px 5px rgba(86, 73, 92, 1)";
                      preOverlayFlavourText.textContent = " received the ";
                      preOverlayFlavourText.append(
                        preOverlayGrassPokémonText,
                        ", ",
                        preOverlayWaterPokémonText,
                        ", and the ",
                        preOverlayFirePokémonText,
                        " from "
                      );
                      preOverlayNameText.style.textShadow =
                        "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                      preOverlayNameText.textContent = "PROF. OAK!";
                      preOverlayText.style.borderColor = "rgba(86, 73, 92, 1)";
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
                        preOverlayAttributionText.style.textShadow =
                          "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                        preOverlayAttributionText.textContent = `${rivalName}:`;
                        preOverlayFlavourText.style.textShadow =
                          "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                        preOverlayFlavourText.textContent =
                          " My POKéMON look a lot tougher than yours.";
                        preOverlayText.append(
                          preOverlayAttributionText,
                          preOverlayFlavourText
                        );
                        preOverlayText.style.borderColor =
                          "rgba(170, 100, 100, 1)";

                        setTimeout(() => {
                          preOverlayText.style.opacity = "1";
                          preOverlayText.style.transition = "opacity 1s";
                        }, 2000);

                        setTimeout(() => {
                          preOverlayText.style.opacity = "0";
                          preOverlayText.style.transition = "opacity 1s";
                        }, 4000);

                        setTimeout(() => {
                          preOverlayAttributionText.style.textShadow =
                            "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                          preOverlayAttributionText.textContent =
                            "PROFESSOR OAK:";
                          preOverlayNameText.style.textShadow =
                            "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                          preOverlayNameText.textContent = ` ${rivalName}, `;
                          preOverlayFlavourText.style.textShadow =
                            "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 160, 90, 1), 4.5px 4.5px rgba(170, 160, 90, 1), 5px 5px rgba(170, 160, 90, 1)";
                          preOverlayFlavourText.textContent =
                            "you both have identical POKéMON...";
                          preOverlayText.append(
                            preOverlayAttributionText,
                            preOverlayNameText,
                            preOverlayFlavourText
                          );
                          preOverlayText.style.borderColor =
                            "rgba(170, 160, 90, 1)";

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
                            preOverlayFlavourText.textContent =
                              " If a TRAINER wants to pit their POKéMON against yours, your POKéMON can battle.";

                            setTimeout(() => {
                              preOverlayText.style.opacity = "1";
                              preOverlayText.style.transition = "opacity 1s";
                            }, 2000);

                            setTimeout(() => {
                              preOverlayText.style.opacity = "0";
                              preOverlayText.style.transition = "opacity 1s";
                            }, 4000);

                            setTimeout(() => {
                              preOverlayAttributionText.style.textShadow =
                                "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                              preOverlayAttributionText.textContent = `${rivalName}:`;
                              preOverlayNameText.style.textShadow =
                                "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(89, 97, 173, 1), 4.5px 4.5px rgba(89, 97, 173, 1), 5px 5px rgba(89, 97, 173, 1)";
                              preOverlayNameText.textContent = ` ${playerName}!`;
                              preOverlayFlavourText.style.textShadow =
                                "3px 3px rgba(0, 0, 0, 1), 4px 4px rgba(170, 100, 100, 1), 4.5px 4.5px rgba(170, 100, 100, 1), 5px 5px rgba(170, 100, 100, 1)";
                              preOverlayFlavourText.textContent =
                                " Let's check out our POKéMON!";
                              preOverlayText.append(
                                preOverlayNameText,
                                preOverlayFlavourText
                              );
                              preOverlayText.style.borderColor =
                                "rgba(170, 100, 100, 1)";

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
                                preOverlayFlavourText.textContent =
                                  " Come on, I'll take you on!";

                                setTimeout(() => {
                                  preOverlayText.style.opacity = "1";
                                  preOverlayText.style.transition =
                                    "opacity 1s";
                                }, 2000);

                                setTimeout(() => {
                                  preOverlayText.style.opacity = "0";
                                  preOverlayText.style.transition =
                                    "opacity 1s";
                                }, 4000);

                                setTimeout(() => {
                                  preOverlayOverlay.style.opacity = "0";
                                  preOverlayOverlay.style.transition =
                                    "opacity 1s";
                                  preOverlayOverlay.addEventListener(
                                    "transitionend",
                                    () => {
                                      preOverlayOverlay.remove();
                                    },
                                    10000
                                  );
                                }, 5000);
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
    // }, 5000);
    //               }, 5000);
    //           }, 5000);
    //         }, 5000);
    //       }, 5000);
    //     }, 5000);
    //   }, 5000);
    // }, 5000);
  }, 0);
}

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
}

function generateAttack(choice) {
  return pokémonAttacks[choice][
    Math.floor(Math.random() * pokémonAttacks[choice].length)
  ];
}

function getRivalChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

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
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgba(0, 0, 255, 1)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgba(0, 0, 255, 1)";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[0]];
    roundsDrawn++;
    roundResultRoundResultSpan.style.color = "rgba(0, 0, 255, 1)";
    roundResult = roundResults[0];
  } else if (
    (playerChoice === "Fire" && rivalChoice === "Grass") ||
    (playerChoice === "Grass" && rivalChoice === "Water") ||
    (playerChoice === "Water" && rivalChoice === "Fire")
  ) {
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgba(0, 255, 0, 1)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgba(255, 0, 0, 1)";
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[1]];
    playerScore++;
    roundResultRoundResultSpan.style.color = "rgba(0, 255, 0, 1)";
    roundResult = roundResults[2];
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgba(255, 0, 0, 1)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgba(0, 255, 0, 1)";
    playerPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness =
      pokémonAttackEffectiveness[roundResults[2]];
    rivalScore++;
    roundResultRoundResultSpan.style.color = "rgba(255, 0, 0, 1)";
    roundResult = roundResults[1];
  }
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
  }
  if (playerScore === 5 || rivalScore === 5) {
    roundAndStatsDiv.append(roundDiv, statsDiv);
    buttons.removeEventListener("click", getImgAlt);
    const expValue = Math.floor(Math.random() * 51) + 50;
    insertElement(roundAndStatsDiv, "scores");
    insertElement(postGameDiv, "round-and-stats");

    const playerColours = {
      [playerName]: "rgba(100, 100, 170, 1)",
      [rivalName]: "rgba(170, 100, 100, 1)",
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
      gameResultResult.style.color = "rgba(0, 255, 0, 1)";
      gameResultResult.textContent = "won ";
    } else {
      faintNameSpan.style.color = playerColours[playerName];
      faintPokémonSpan.style.color = pokémonColours[playerPokémon];
      expNameSpan.style.color = playerColours[rivalName];
      expPokémonSpan.style.color = pokémonColours[rivalPokémon];
      faintNameSpan.textContent = `${playerName}'s `;
      faintPokémonSpan.textContent = `${playerPokémon} `;
      expNameSpan.textContent = `${rivalName}'s `;
      expPokémonSpan.textContent = ` ${rivalPokémon} `;
      gameResultResult.style.color = "rgba(255, 0, 0, 1)";
      gameResultResult.textContent = "lost ";
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
  } else {
    faintDiv.remove();
    expDiv.remove();
    postGameDiv.remove();
  }
}

function insertElement(newDiv, divID) {
  const overheadDiv = document.getElementById(divID);
  const overheadDivParent = overheadDiv.parentNode;
  return overheadDivParent.insertBefore(newDiv, overheadDiv.nextSibling);
}

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
}

function resetGame() {
  playerScoreScoreSpan.textContent = 0;
  rivalScoreScoreSpan.textContent = 0;
  roundAndStatsDiv.remove();
  postGameDiv.remove();
  buttons.addEventListener("click", getImgAlt);
}
