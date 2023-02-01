const choices = ["Fire", "Grass", "Water"];
const rivalChoice = choices[~~(Math.random() * choices.length)];
console.log(rivalChoice);

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerChoice = img.alt.toLowerCase();
        console.log(playerChoice);
    })
})