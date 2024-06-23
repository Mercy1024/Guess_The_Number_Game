"use strict";

const randNumberGenerator = () => {
  return Math.round(Math.random() * 20);
};

let randNumber = randNumberGenerator();

const msg = (message) => {
  document.querySelector(".message").textContent = message;
};

const checkBtn = document.querySelector(".check");
const restart = document.querySelector(".again");

let score = 20;
let Highscore = 0;

restart.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  msg("Start guessing ...");

  randNumber = randNumberGenerator();
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
});

checkBtn.addEventListener("click", () => {
  let Guess = Number(document.querySelector(".guess").value);
  if (!Guess) {
    msg("⛔ No Number!");
  } else if (Guess === randNumber) {
    msg("✨🎉Correct Number !");

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".highscore").textContent = Highscore;
    }
  } else if (Guess !== randNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      msg(Guess > randNumber ? "📈 Too High!" : "📉 Too Low !");
    } else {
      msg("💥 You lost the game");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});
