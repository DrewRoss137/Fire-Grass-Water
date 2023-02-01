const buttons = document.querySelectorAll(".button");
const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log("Rival Choice: " + rivalChoice);

function getRivalChoice() {
    let rivalChoice = choices[~~(Math.random() * choices.length)];
    return(rivalChoice);
}

buttons.forEach(button => {
    button.addEventListener("click", function getPlayerChoice() {
        const img = button.querySelector("img");
        playerChoice = img.alt;
        console.log(playerChoice)
    })
})