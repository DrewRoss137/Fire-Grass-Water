const choices = ["Fire", "Grass", "Water"];

const fireAttacks = ["Scratch", "Ember", "Flamethrower", "Slash"];

const grassAttacks = ["Tackle", "Vine Whip", "Razor Leaf"];

const waterAttacks = ["Tackle", "Tail Whip", "Bubble", "Water Gun", "Bite", "Rapid Spin", "Hydro Pump"]

let rivalChoice = getRivalChoice();
console.log(`Rival Choice: ${rivalChoice}`);

function getRivalChoice() {
    let randomRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[randomRivalChoice];
};

const images = document.querySelector("#buttons");
images.addEventListener("click", function getImgAlt(element) {
  if (element.target.tagName === "IMG") {
    let playerChoice = element.target.alt;
    console.log(`Player Choice: ${playerChoice}`);
    playRound(playerChoice, rivalChoice);
  }
});

function playRound(playerChoice, rivalChoice) {

};