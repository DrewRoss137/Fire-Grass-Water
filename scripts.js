const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log(`Rival Choice: ${rivalChoice}`);

function getRivalChoice() {
    let randomRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[randomRivalChoice];
};

const images = document.querySelector("img");
images.addEventListener("click", function(element) {
  if (element.target.tagName === 'IMG') {
    let playerChoice = element.target.alt;
    console.log(`Player Choice: ${playerChoice}`);
    playRound(playerChoice, rivalChoice);
    
  }
});