const choices = ["Fire", "Grass", "Water"];
const buttons = document.querySelectorAll(".button");

let playerChoice;
playerChoice = getPlayerChoice();
let rivalChoice;
rivalChoice = getRivalChoice();
console.log(rivalChoice);

function getPlayerChoice() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerChoice = img.alt;
        console.log(playerChoice);
    })
})
}

function getRivalChoice() {
    const rivalChoice = choices[~~(Math.random() * choices.length)];
    return(rivalChoice);
}





