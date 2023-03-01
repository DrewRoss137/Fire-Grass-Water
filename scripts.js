/**************
Data Structures
**************/

/**************
Elements
**************/

/* Body */
const body = document.querySelector("body");

/* Main */
const main = document.querySelector("main");

function fadeIn() {
  /* Pre-Overlay */
  const fadeInOverlay = document.createElement("div");
  fadeInOverlay.id = "fade-in-overlay"
  document.body.insertBefore(fadeInOverlay, body.firstChild)
  
  /* Text: "OAK: Let's begin with your name. What is it?" */
  setTimeout(() => {
    const fadeInOverlayText = document.createElement("span");
    fadeInOverlayText.id = "fade-in-overlay-text";
    fadeInOverlayText.textContent = "OAK: Let's begin with your name. What is it?";
    fadeInOverlayText.style.opacity = "0";
    fadeInOverlay.appendChild(fadeInOverlayText);

    /* Fade In Text: "OAK: Let's begin with your name. What is it?" */
    setTimeout(() => {
      fadeInOverlayText.style.transition = "opacity 1s";
      fadeInOverlayText.style.opacity = "1";
    }, 1000);

    /* Input Box */
    setTimeout(() => {
      const fadeInOverlayInputBox = document.createElement("input");
      fadeInOverlayInputBox.type = "text";
      fadeInOverlayInputBox.style.position = "fixed";
      fadeInOverlayInputBox.style.top = "50%";
      fadeInOverlayInputBox.style.left = "50%";
      fadeInOverlayInputBox.style.transform = "translate(-50%, -50%)";
      fadeInOverlayInputBox.style.opacity = "0";
      fadeInOverlayInputBox.style.transition = "opacity 1s"; // Add transition to the input box
      document.body.appendChild(fadeInOverlayInputBox);

      // Fade in the text-box
      setTimeout(() => {
        fadeInOverlayInputBox.style.opacity = "1";
      }, 1000); // Wait for 1 second before fading in the input box

      // Fade out the text and the text-box after enter key pressed
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          setTimeout(() => {
            fadeInOverlayText.style.opacity = "0";
            input.style.opacity = "0";
          }, 0);

          // Fade in the text "Right..."
          setTimeout(() => {
            const text2 = document.createElement("div");
            text2.textContent = "Right...";
            text2.style.color = "white";
            text2.style.position = "fixed";
            text2.style.top = "40%";
            text2.style.left = "50%";
            text2.style.transform = "translate(-50%, -50%)";
            text2.style.opacity = "0";
            document.body.appendChild(text2);

            // Fade in the text
            setTimeout(() => {
              text2.style.transition = "opacity 2s"; // Increase the time for the text to fade in
              text2.style.opacity = "1";
            }, 1000); // Wait for 1 second before fading in the text

            // Fade out the text "Right..."
            setTimeout(() => {
              text2.style.transition = "opacity 2s"; // Increase the time for the text to fade out
              text2.style.opacity = "0";
            }, 3000); // Wait for 3 seconds before fading out the text

            // Fade in the text "So your         // name is playerName."
        setTimeout(() => {
          const text3 = document.createElement("div");
          text3.textContent = `So your name is ${input.value}.`;
          text3.style.color = "white";
          text3.style.position = "fixed";
          text3.style.top = "40%";
          text3.style.left = "50%";
          text3.style.transform = "translate(-50%, -50%)";
          text3.style.opacity = "0";
          document.body.appendChild(text3);

          // Fade in the text
          setTimeout(() => {
            text3.style.transition = "opacity 2s"; // Increase the time for the text to fade in
            text3.style.opacity = "1";
          }, 4000); // Wait for 4 seconds before fading in the text

          // Fade out the text "So your name is playerName."
          setTimeout(() => {
            text3.style.transition = "opacity 2s"; // Increase the time for the text to fade out
            text3.style.opacity = "0";
          }, 7000); // Wait for 7 seconds before fading out the text

          // Fade in the text "And your rival since you both were babies..."
          setTimeout(() => {
            const text4 = document.createElement("div");
            text4.textContent = "And your rival since you both were babies...";
            text4.style.color = "white";
            text4.style.position = "fixed";
            text4.style.top = "40%";
            text4.style.left = "50%";
            text4.style.transform = "translate(-50%, -50%)";
            text4.style.opacity = "0";
            document.body.appendChild(text4);

            // Fade in the text
            setTimeout(() => {
              text4.style.transition = "opacity 2s"; // Increase the time for the text to fade in
              text4.style.opacity = "1";
            }, 8000); // Wait for 8 seconds before fading in the text

            // Fade out the text "And your rival since you both were babies..."
            setTimeout(() => {
              text4.style.transition = "opacity 2s"; // Increase the time for the text to fade out
              text4.style.opacity = "0";
            }, 11000); // Wait for 11 seconds before fading out the text

            // Fade in the text "...Erm, what was his name now?"
            setTimeout(() => {
              const text5 = document.createElement("div");
              text5.textContent = "...Erm, what was his name now?";
              text5.style.color = "white";
              text5.style.position = "fixed";
              text5.style.top = "40%";
              text5.style.left = "50%";
              text5.style.transform = "translate(-50%, -50%)";
              text5.style.opacity = "0";
              document.body.appendChild(text5);

              // Fade in the text
              setTimeout(() => {
                text5.style.transition = "opacity 2s"; // Increase the time for the text to fade in
                text5.style.opacity = "1";
              }, 12000); // Wait for 12 seconds before fading in the text

              // Fade in the text-box for user input
              setTimeout(() => {
                const input2 = document.createElement("input");
                input2.type = "text";
                input2.style.position = "fixed";
                input2.style.top = "50%";
                input2.style.left = "50%";
                input2.style.transform = "translate(-50%, -50%)";
                input2.style.opacity = "0";
                input2.style.transition = "opacity 1s"; // Add transition to the input box
                document.body.appendChild(input2);

               
                // Fade in the text-box
                setTimeout(() => {
                  input2.style.opacity = "1";
                }, 12000); // Wait for 12 seconds before fading in the input box

                // Fade out the text and the text-box after enter key pressed
                input2.addEventListener("keydown", (event) => {
                  if (event.key === "Enter") {
                    setTimeout(() => {
                      text5.style.opacity = "0";
                      input2.style.opacity = "0";
                    }, 0);

                    // Fade in the text "That's right! I remember now! His name is rivalName!"
                    setTimeout(() => {
                      const text6 = document.createElement("div");
                      text6.textContent = "That's right! I remember now! His name is " + input2.value + "!";
                      text6.style.color = "white";
                      text6.style.position = "fixed";
                      text6.style.top = "40%";
                      text6.style.left = "50%";
                      text6.style.transform = "translate(-50%, -50%)";
                      text6.style.opacity = "0";
                      document.body.appendChild(text6);

                      // Fade in the text
                      setTimeout(() => {
                        text6.style.transition = "opacity 2s"; // Increase the time for the text to fade in
                        text6.style.opacity = "1";
                      }, 1000); // Wait for 1 second before fading in the text

                      // Fade out the text "That's right! I remember now! His name is rivalName!"
                      setTimeout(() => {
                        text6.style.transition = "opacity 2s"; // Increase the time for the text to fade out
                        text6.style.opacity = "0";
                      }, 4000); // Wait for 4 seconds before fading out the text

                      //Fade in the text
                      setTimeout(() => {
                        const text11 = document.createElement("div");
                        text11.textContent = "Talk of the Devil! Here comes " + input2.value + "!";
                        text11.style.color = "white";
                        text11.style.position = "fixed";
                        text11.style.top = "40%";
                        text11.style.left = "50%";
                        text11.style.transform = "translate(-50%, -50%)";
                        text11.style.opacity = "0";
                        document.body.appendChild(text11);

                      // Fade in the text
                      setTimeout(() => {
                        text11.style.transition = "opacity 2s"; // Increase the time for the text to fade in
                        text11.style.opacity = "1";
                      }, 1000); // Wait for 1 second before fading in the text

                      // Fade out the text "That's right! I remember now! His name is rivalName!"
                      setTimeout(() => {
                        text11.style.transition = "opacity 2s"; // Increase the time for the text to fade out
                        text11.style.opacity = "0";
                      }, 4000); // Wait for 4 seconds before fading out the text

                      // Fade in the text "rivalName: Wait, playerName! Let's check out our pokemon!"
                      setTimeout(() => {
                        const text7 = document.createElement("div");
                        text7.textContent = `${input2.value}: Wait, ${input.value}! Let's check out our pokemon!`;
                        text7.style.color = "white";
                        text7.style.position = "fixed";
                        text7.style.top = "40%";
                        text7.style.left = "50%";
                        text7.style.transform = "translate(-50%, -50%)";
                        text7.style.opacity = "0";
                        document.body.appendChild(text7);

                        // Fade in the text
                        setTimeout(() => {
                          text7.style.transition = "opacity 2s"; // Increase the time for the text to fade in
                          text7.style.opacity = "1";
                        }, 5000); // Wait for 5 seconds before fading in the text

                        // Fade out the text "rivalName: Wait, playerName! Let's check out our pokemon!"
                        setTimeout(() => {
                          text7.style.transition = "opacity 2s"; // Increase the time for the text to fade out
                          text7.style.opacity = "0";
                        }, 8000); // Wait for 8 seconds before fading out the text

                        // Fade in the text "Come on! I'll take you on!"
                        setTimeout(() => {
                          const text8 = document.createElement("div");
                          text8.textContent = `${input2.value}: Come on! I'll take you on!`;
                          text8.style.color = "white";
                          text8.style.position = "fixed";
                          text8.style.top = "40%";
                          text8.style.left = "50%";
                          text8.style.transform = "translate(-50%, -50%)";
                          text8.style.opacity = "0";
                          document.body.appendChild(text8);

                          // Fade in the text
                          setTimeout(() => {
                            text8.style.transition = "opacity 2s"; // Increase the time for the text to fade in
                            text8.style.opacity = "1";
                          }, 9000); // Wait for 9 seconds before fading in the text

                          // Fade out the text "Come on! I'll take you on!"
                          setTimeout(() => {
                            text8.style.transition = "opacity 2s"; // Increase the time for the text to fade out
                            text8.style.opacity = "0";
                          }, 12000); // Wait for 12 seconds before fading out the text

                          // Fade out the overlay
                          setTimeout(() => {
                            fadeInOverlay.style.transition = "opacity 2s"; // Increase the time for the overlay to fade out
                            fadeInOverlay.style.opacity = "0";
                              // Add event listener to remove overlay div when fade out is complete
                            fadeInOverlay.addEventListener("transitionend", () => {
                            fadeInOverlay.remove();
                            });
                          }, 14000); // Wait for 14 seconds before fading out the overlay

                        }, 9000); // Wait for 9 seconds before fading in the text "Come on! I'll take you on!"

                      }, 5000); 

                      }, 4000); // Wait for 4 seconds before fading out the text "That's right! I remember now! His name is rivalName!"

                    }, 0); // Wait for the input box to disappear before showing the text "That's right! I remember now! His name is rivalName!"

                  }
                });
              }, 14000); // Wait for 14 seconds before fading in the input box
            }, 11000); // Wait for 11 seconds before fading out the text "...Erm, what was his name now?"
          }, 8000); // Wait for 8 seconds before fading in the text "And your rival since you both were babies..."
        }, 7000); // Wait for 7 seconds before fading out the text "So your name is playerName."
      }, 4000); // Wait for 4 seconds before fading in the text "Right..."
    }
  });
}, 3000); // Wait for 3 seconds before fading out the text "Let's begin with your name. What is it?"
}, 1000); // Wait for 1 second before fading in the text "Let's begin with your name. What is it?"
}

fadeIn()




let playerName;
let rivalName;

/* Buttons */
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    playerChoice = element.target.alt;
    playerPokémon = pokémon[playerChoice];
    playerPokémonAttack = generateAttack(playerChoice);
    /* Temporary - Uncomment When Game Ready
    rivalChoice = getRivalChoice(); 
    */
    rivalPokémon = pokémon[rivalChoice];
    rivalPokémonAttack = generateAttack(rivalChoice);
    playRound(playerChoice, rivalChoice);
  }
});

/* GitHub Logo */
const githubLogo = document.querySelector("#github-logo");
githubLogo.addEventListener("click", function openGitHubProfile() {
  window.open("https://github.com/DrewRoss137", "_blank")
});



/* Choices */
const choices = ["Fire", "Grass", "Water"];

/* Pokémon */
const pokémon = {
  Fire: "CHARMANDER",
  Grass: "BULBASAUR",
  Water: "SQUIRTLE"
};

/* Pokémon Attacks */
const pokémonAttacks = {
  Fire: ["EMBER", "FLAME THROWER"],
  Grass: ["RAZOR LEAF", "VINE WHIP"],
  Water: ["BUBBLE", "HYDRO PUMP", "WATER GUN"]
};

/* Pokémon Attack Effectiveness */
const pokémonAttackEffectiveness = {
  Draw: "failed!",
  Lose: "not very effective...",
  Win: "super effective!"
};

/* Round Results */
const roundResults = ["Draw", "Lose", "Win"];

/* Pokémon Colours */
const pokémonColours = {
  "CHARMANDER": "rgb(255, 100, 100)",
  "BULBASAUR": "rgb(160, 255, 160)",
  "SQUIRTLE": "rgb(100, 100, 255)"
};

/* Pokémon Attack Colours */
const pokémonAttackColours = {
  "CHARMANDER": "rgb(255, 115, 0)",
  "BULBASAUR": "rgb(0, 255, 170)",
  "SQUIRTLE": "rgb(111, 47, 175)"
};

/* Player Colours */
const playerColours = {
  [playerName]: "rgb(0, 100, 255)",
  [rivalName]: "rgb(255, 100, 0)",
}

/**************
Scores
**************/

/* Player Score */
const playerScoreNameSpan = document.createElement("span");
playerScoreNameSpan.id = "player-score-name";
playerScoreNameSpan.textContent = playerName;

const playerScoreScoreSpan = document.createElement("span");
playerScoreScoreSpan.id = "player-score-score";

const playerScoreDiv = document.createElement("div");
playerScoreDiv.id = "player-score";
playerScoreDiv.append(playerScoreNameSpan, playerScoreScoreSpan);

/* Rival Score */
const rivalScoreNameSpan = document.createElement("span");
rivalScoreNameSpan.id = "rival-score-name";
rivalScoreNameSpan.textContent = rivalName;

const rivalScoreScoreSpan = document.createElement("span");
rivalScoreScoreSpan.id = "rival-score-score";

const rivalScoreDiv = document.createElement("div");
rivalScoreDiv.id = "rival-score";
rivalScoreDiv.append(rivalScoreNameSpan, rivalScoreScoreSpan);

/* Scores */
const scoresDiv = document.createElement("div");
scoresDiv.id = "scores";
scoresDiv.append(playerScoreDiv, rivalScoreDiv);

/**************
Round
**************/

/* Critical Hit */
const criticalHitDiv = document.createElement("div");
criticalHitDiv.id = "critical-hit";
criticalHitDiv.textContent = "A critical hit!"

/* Player Pokémon */
const playerPokémonPlayerNameSpan = document.createElement("span");
playerPokémonPlayerNameSpan.id = "player-pokémon-player-name";
playerPokémonPlayerNameSpan.textContent = `${playerName}: `;

const playerPokémonGoTextSpan = document.createElement("span");
playerPokémonGoTextSpan.id = "player-pokémon-go-text";
playerPokémonGoTextSpan.textContent = "GO! ";

const playerPokémonNameSpan = document.createElement("span");
playerPokémonNameSpan.id = "player-pokémon-name";

const playerPokémonDiv = document.createElement("div");
playerPokémonDiv.id = "player-pokémon";
playerPokémonDiv.append(playerPokémonPlayerNameSpan, playerPokémonGoTextSpan, playerPokémonNameSpan);

/* Rival Pokémon */
const rivalPokémonRivalNameSpan = document.createElement("span");
rivalPokémonRivalNameSpan.id = "rival-pokémon-rival-name";
rivalPokémonRivalNameSpan.textContent = `${rivalName}: `;

const rivalPokémonGoTextSpan = document.createElement("span");
rivalPokémonGoTextSpan.id = "rival-pokémon-go-text";
rivalPokémonGoTextSpan.textContent = "GO! ";

const rivalPokémonNameSpan = document.createElement("span");
rivalPokémonNameSpan.id = "rival-pokémon-name";

const rivalPokémonDiv = document.createElement("div");
rivalPokémonDiv.id = "rival-pokémon";
rivalPokémonDiv.append(rivalPokémonRivalNameSpan, rivalPokémonGoTextSpan, rivalPokémonNameSpan);

/* Player Pokémon Attack */
const playerPokémonAttackPlayerNameSpan = document.createElement("span");
playerPokémonAttackPlayerNameSpan.id = "player-pokémon-attack-player-name";
playerPokémonAttackPlayerNameSpan.textContent = `${playerName}'s `;

const playerPokémonAttackPokémonNameSpan = document.createElement("span");
playerPokémonAttackPokémonNameSpan.id = "player-pokémon-attack-pokémon";

const playerPokémonAttackUsedTextSpan = document.createElement("span");
playerPokémonAttackUsedTextSpan.id = "player-pokémon-attack-used-text";
playerPokémonAttackUsedTextSpan.textContent = "used ";

const playerPokémonAttackPokémonAttackSpan = document.createElement("span");
playerPokémonAttackPokémonAttackSpan.id = "player-pokémon-attack-pokémon-attack";

const playerPokémonAttackDiv = document.createElement("div");
playerPokémonAttackDiv.id = "player-pokémon-attack";
playerPokémonAttackDiv.append(playerPokémonAttackPlayerNameSpan, playerPokémonAttackPokémonNameSpan, playerPokémonAttackUsedTextSpan, playerPokémonAttackPokémonAttackSpan);

/* Player Pokémon Attack Effectiveness */
const playerPokémonAttackEffectivenessItTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessItTextSpan.id = "player-pokémon-attack-effectiveness-it-text";

const playerPokémonAttackEffectivenessTextSpan = document.createElement("span");
playerPokémonAttackEffectivenessTextSpan.id = "player-pokémon-attack-effectiveness-text";

const playerPokémonAttackEffectivenessDiv = document.createElement("div");
playerPokémonAttackEffectivenessDiv.id = "player-pokémon-attack-effectiveness";
playerPokémonAttackEffectivenessDiv.append(playerPokémonAttackEffectivenessItTextSpan, playerPokémonAttackEffectivenessTextSpan);

/* Rival Pokémon Attack */
const rivalPokémonAttackRivalNameSpan = document.createElement("span");
rivalPokémonAttackRivalNameSpan.id = "rival-pokémon-attack-rival-name";
rivalPokémonAttackRivalNameSpan.textContent = `${rivalName}'s `;

const rivalPokémonAttackPokémonNameSpan = document.createElement("span");
rivalPokémonAttackPokémonNameSpan.id = "rival-pokémon-attack-pokémon";

const rivalPokémonAttackUsedTextSpan = document.createElement("span");
rivalPokémonAttackUsedTextSpan.id = "rival-pokémon-attack-used-text";
rivalPokémonAttackUsedTextSpan.textContent = "used ";

const rivalPokémonAttackPokémonAttackSpan = document.createElement("span");
rivalPokémonAttackPokémonAttackSpan.id = "rival-pokémon-attack-pokémon-attack";

const rivalPokémonAttackDiv = document.createElement("div");
rivalPokémonAttackDiv.id = "rival-pokémon-attack";
rivalPokémonAttackDiv.append(rivalPokémonAttackRivalNameSpan, rivalPokémonAttackPokémonNameSpan, rivalPokémonAttackUsedTextSpan, rivalPokémonAttackPokémonAttackSpan);

/* Rival Pokémon Attack Effectiveness */
const rivalPokémonAttackEffectivenessItTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessItTextSpan.id = "rival-pokémon-attack-effectiveness-it-text";

const rivalPokémonAttackEffectivenessTextSpan = document.createElement("span");
rivalPokémonAttackEffectivenessTextSpan.id = "rival-pokémon-attack-effectiveness-text";

const rivalPokémonAttackEffectivenessDiv = document.createElement("div");
rivalPokémonAttackEffectivenessDiv.id = "rival-pokémon-attack-effectiveness";
rivalPokémonAttackEffectivenessDiv.append(rivalPokémonAttackEffectivenessItTextSpan, rivalPokémonAttackEffectivenessTextSpan);

/* Round Result */
const roundResultPlayerNameSpan = document.createElement("span");
roundResultPlayerNameSpan.id = "round-result-player-name";
roundResultPlayerNameSpan.textContent = `${playerName}'s `;

const roundResultPlayerPokémonSpan = document.createElement("span");
roundResultPlayerPokémonSpan.id = "round-result-player-pokémon";

const roundResultRoundResultSpan = document.createElement("span");
roundResultRoundResultSpan.id = "round-result-round-result"; 

const roundResultVersusTextSpan = document.createElement("span");
roundResultVersusTextSpan.id = "round-result-versus-text";
roundResultVersusTextSpan.textContent = " versus ";

const roundResultRivalNameSpan = document.createElement("span");
roundResultRivalNameSpan.id = "round-result-rival-name";
roundResultRivalNameSpan.textContent = `${rivalName}'s `;

const roundResultRivalPokémonSpan = document.createElement("span");
roundResultRivalPokémonSpan.id = "round-result-rival-pokémon";

const roundResultDiv = document.createElement("div");
roundResultDiv.id = "round-result";
roundResultDiv.append(roundResultPlayerNameSpan, roundResultPlayerPokémonSpan, roundResultRoundResultSpan, roundResultVersusTextSpan, roundResultRivalNameSpan, roundResultRivalPokémonSpan);

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
roundDiv.append(playerPokémonDiv, rivalPokémonDiv, playerPokémonAttackDiv, playerPokémonAttackEffectivenessDiv, rivalPokémonAttackDiv, rivalPokémonAttackEffectivenessDiv, roundResultDiv);

/**************
Post-Game
**************/

/**************
Stats
**************/

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
roundsWonDiv.append(roundsWonWonTextSpan, roundsWonColonSpan, roundsWonPlayerScoreSpan);

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
roundsLostDiv.append(roundsLostLostTextSpan, roundsLostColonSpan, roundsLostRivalScoreSpan);

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
roundsDrawnDiv.append(roundsDrawnDrawnTextSpan, roundsDrawnColonSpan, roundsDrawnRoundsDrawnSpan);

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
winPercentDiv.append(winPercentWinText, winPercentPrePercentSignSpan, winPercentColonSpan, winPercentWinPercentSpan, winPercentPostPercentSpan)

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
lossPercentDiv.append(lossPercentLossText, lossPercentPrePercentSignSpan, lossPercentColonSpan, lossPercentLossPercentSpan, lossPercentSign);

/* Total Rounds Played */
const totalRoundsPlayedPlayedTextSpan = document.createElement("span");
totalRoundsPlayedPlayedTextSpan.id = "total-rounds-played-played-text";
totalRoundsPlayedPlayedTextSpan.textContent = "PLAYED";

const totalRoundsPlayedColonSpan = document.createElement("span");
totalRoundsPlayedColonSpan.id = "total-rounds-played-colon";
totalRoundsPlayedColonSpan.textContent = ": ";

const totalRoundsPlayedTotalRoundsPlayedSpan = document.createElement("span");
totalRoundsPlayedTotalRoundsPlayedSpan.id = "total-rounds-played-total-rounds-played";

const totalRoundsPlayedDiv = document.createElement("div");
totalRoundsPlayedDiv.id = "total-rounds-played";
totalRoundsPlayedDiv.textContent = "TOTAL ROUNDS ";
totalRoundsPlayedDiv.append(totalRoundsPlayedPlayedTextSpan, totalRoundsPlayedColonSpan, totalRoundsPlayedTotalRoundsPlayedSpan);

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
totalWinPercentDiv.append(totalWinPercentWinTextSpan, totalWinPercentPrePercentSignSpan, totalWinPercentColonSpan, totalWinPercentTotalWinPercentSpan, totalWinPercentPostPercentSpan);

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
totalLossPercentTotalLossPercentSpan.id = "total-loss-percent-total-loss-percent";

const totalLossPercentPostPercentSpan = document.createElement("span");
totalLossPercentPostPercentSpan.id = "total-loss-percent-post-percent-sign";
totalLossPercentPostPercentSpan.textContent = "%";

const totalLossPercentDiv = document.createElement("div");
totalLossPercentDiv.id = "total-loss-percent";
totalLossPercentDiv.textContent = "TOTAL ";
totalLossPercentDiv.append(totalLossPercentLossTextSpan, totalLossPercentPrePercentSignSpan, totalLossPercentColonSpan, totalLossPercentTotalLossPercentSpan, totalLossPercentPostPercentSpan);

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
totalDrawPercentTotalDrawPercentSpan.id = "total-draw-percent-total-draw-percent";

const totalDrawPercentPostPercentSignSpan = document.createElement("span");
totalDrawPercentPostPercentSignSpan.id = "total-draw-percent-post-percent-sign";
totalDrawPercentPostPercentSignSpan.textContent = "%";

const totalDrawPercentDiv = document.createElement("div");
totalDrawPercentDiv.id = "total-draw-percent";
totalDrawPercentDiv.textContent = "TOTAL ";
totalDrawPercentDiv.append(totalDrawPercentDrawTextSpan, totalDrawPercentPrePercentSignSpan, totalDrawPercentColonSpan, totalDrawPercentTotalDrawPercentSpan, totalDrawPercentPostPercentSignSpan);

/* Stats */
const statsDiv = document.createElement("div");
statsDiv.id = "stats";
statsDiv.append(roundsWonDiv, roundsLostDiv, roundsDrawnDiv, winPercentDiv, lossPercentDiv, totalRoundsPlayedDiv, totalWinPercentDiv, totalLossPercentDiv, totalDrawPercentDiv);

/* Game Result */
const gameResultPlayerNameSpan = document.createElement("span");
gameResultPlayerNameSpan.id = "game-result-player-name";
gameResultPlayerNameSpan.textContent = `${playerName} `;

const gameResultResult = document.createElement("span");
gameResultResult.id = "game-result-result";

const gameResultVersusTextSpan = document.createElement("span");
gameResultVersusTextSpan.id = "game-result-versus-text";
gameResultVersusTextSpan.textContent = "versus ";

const gameResultRivalNameSpan = document.createElement("span");
gameResultRivalNameSpan.id = "game-result-rival-name";
gameResultRivalNameSpan.textContent = `${rivalName}!`;

const gameResultDiv = document.createElement("div");
gameResultDiv.id = "game-result";
gameResultDiv.append(gameResultPlayerNameSpan, gameResultResult, gameResultVersusTextSpan, gameResultRivalNameSpan);

/* Retry Button */
const retryButtonDiv = document.createElement("div");
retryButtonDiv.id = "retry-button";

const retryButtonGoAGSpan = document.createElement("span");
retryButtonGoAGSpan.id = "retry-button-go-ag-text";
retryButtonGoAGSpan.textContent = "GO AG"

const retryButtonAINSpan = document.createElement("span");
retryButtonAINSpan.id = "retry-button-ain-text";
retryButtonAINSpan.textContent = "AIN!"

const retryButtonTextSpan = document.createElement("span");
retryButtonTextSpan.id = "retry-button-text";
retryButtonTextSpan.append(retryButtonGoAGSpan, retryButtonAINSpan)

retryButtonDiv.appendChild(retryButtonTextSpan);

/* Post-Game */
const postGameDiv = document.createElement("div");
postGameDiv.id = "post-game";
postGameDiv.append(statsDiv, gameResultDiv, retryButtonDiv);

/**************
Variables
**************/

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

/**************
Functions
**************/

function generateAttack(choice) {
  return pokémonAttacks[choice][Math.floor(Math.random() * pokémonAttacks[choice].length)];
};

function getRivalChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerChoice, rivalChoice) {
  criticalHitDiv.remove();
  totalRoundsPlayed++;
  generateCriticalHit(roundResult);
  if (playerChoice === rivalChoice) {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "But it ";
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(25, 25, 64)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(25, 25, 64)";
    playerPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[0]];
    rivalPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[0]];
    roundsDrawn++;
    roundResultRoundResultSpan.style.color = "rgb(50, 50, 128)"
    roundResult = roundResults[0];
  } else if (playerChoice === "Fire" && rivalChoice === "Grass" ||
            playerChoice === "Grass" && rivalChoice === "Water" ||
            playerChoice === "Water" && rivalChoice === "Fire") {
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(25, 64, 25)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(128, 50, 50)";
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[2]];
    rivalPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[1]];
    playerScore++;
    roundResultRoundResultSpan.style.color = "rgb(40, 64, 40)"
    roundResult = roundResults[2];
  } else {
    playerPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    rivalPokémonAttackEffectivenessItTextSpan.textContent = "It's ";
    playerPokémonAttackEffectivenessTextSpan.style.color = "rgb(128, 50, 50)";
    rivalPokémonAttackEffectivenessTextSpan.style.color = "rgb(50, 128, 50)";
    playerPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[1]];
    rivalPokémonAttackEffectiveness = pokémonAttackEffectiveness[roundResults[2]];
    rivalScore++;
    roundResultRoundResultSpan.style.color = "rgb(32, 13, 13)"
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
  playerPokémonAttackPokémonNameSpan.style.color = pokémonColours[playerPokémon];
  playerPokémonAttackPokémonAttackSpan.textContent = `${playerPokémonAttack}!`;
  playerPokémonAttackPokémonAttackSpan.style.color = pokémonAttackColours[playerPokémon]
  playerPokémonAttackEffectivenessTextSpan.textContent = playerPokémonAttackEffectiveness;

  rivalPokémonAttackPokémonNameSpan.textContent = `${rivalPokémon} `;
  rivalPokémonAttackPokémonNameSpan.style.color = pokémonColours[rivalPokémon];
  rivalPokémonAttackPokémonAttackSpan.textContent = `${rivalPokémonAttack}!`;
  rivalPokémonAttackPokémonAttackSpan.style.color = pokémonAttackColours[rivalPokémon]
  rivalPokémonAttackEffectivenessTextSpan.textContent = rivalPokémonAttackEffectiveness;

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
    const expValue = Math.floor(Math.random() * 51) + 50;
    insertElement(postGameDiv, "round");
    insertElement(gameResultDiv, "stats");

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
    const attackElement = roundResult === roundResults[2]
      ? document.getElementById("player-pokémon-attack")
      : document.getElementById("rival-pokémon-attack");
    if (Math.random() <= 0.33) {
      attackElement.insertAdjacentElement("afterend", criticalHitDiv);
    }
  }
};