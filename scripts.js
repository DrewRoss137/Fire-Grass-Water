const buttons = document.querySelectorAll(".button");
const choices = ["Fire", "Grass", "Water"];

let 
let playerName;
let playerScore = 0;

let rivalName;
let rivalScore = 0;

let rivalChoice = getRivalChoice();
console.log("Rival Choice: " + rivalChoice);

function getRivalChoice() {
    let rivalChoice = choices[~~(Math.random() * choices.length)];
    return(rivalChoice);
}

buttons.forEach(button => {
    button.addEventListener("click", function getPlayerChoice() {
        const buttonImg = button.querySelector("img");
        playerChoice = buttonImg.alt;
        console.log(playerChoice)
    })
})

function getPokémonAttack() {

}

function playRound(playerChoice, rivalChoice) {

}

function getPokémonName() {

}