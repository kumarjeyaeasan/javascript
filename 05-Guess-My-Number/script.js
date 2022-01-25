"use strict";

let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector(".message").textContent = message);

const guessMyNumber = function () {
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
};

const resetAll = function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

document.querySelector(".check").addEventListener("click", guessMyNumber);

document.querySelector(".again").addEventListener("click", resetAll);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") guessMyNumber();
});
// document.querySelector(".check").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     guessMyNumber();
//   }
// });
