const startGameBtn = document.getElementById("startGame");
const score = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const gameCont = document.getElementById("gameCont");

startGameBtn.addEventListener("click", () => {
  startGameBtn.classList.add("hidden");
  gameCont.classList.remove("hidden");
});

function generateQuestion() {
  let operator = "+-"[Math.floor(Math.random() * 2)];
  let num1, num2;
  if (operator === "-") {
    num1 = 1 + Math.floor(Math.random() * 100);
    num2 = 1 + Math.floor(Math.random() * num1);
  } else {
    num1 = 1 + Math.floor(Math.random() * 50);
    num2 = 1 + Math.floor(Math.random() * 49);
  }

  return {
    num1,
    num2,
    result() {
      return operator === "+" ? num1 + num2 : num1 - num2;
    },
  };
}

function startTimer() {
  let timer = 0;
  let timerId = setInterval(() => {
    timerDiv.textContent = timer++;
  }, 1000);
  return timerId;
}
const id = startTimer();

setTimeout(() => {
  clearInterval(id);
}, 5000);
