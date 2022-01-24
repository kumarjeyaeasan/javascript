"use strict";

let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector(".message").textContent = message);

function guessMyNumber() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number 😉");
  } else if (guess === number) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score >= highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess != number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too big!" : "Too Small!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🙈 You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}

function resetAll() {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".check").addEventListener("click", function () {
  guessMyNumber();
});

document.querySelector(".again").addEventListener("click", function () {
  resetAll();
});

// document.querySelector(".check").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     guessMyNumber();
//   }
// });
