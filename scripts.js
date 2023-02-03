const choices = ["Fire", "Grass", "Water"];

let rivalChoice = getRivalChoice();
console.log(rivalChoice);

let imgAlt = getImgAlt();

function getRivalChoice() {
    let randomRivalChoice = Math.floor(Math.random() * choices.length);
    return choices[randomRivalChoice];
  }

function getImgAlt() {
    document.querySelectorAll("img").forEach(image => {
      image.addEventListener("click", () => {
        console.log(image.alt);
        return(image.alt)
      });
    });
  }