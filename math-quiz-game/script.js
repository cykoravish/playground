const startGameBtn = document.getElementById("startGame");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const gameCont = document.getElementById("gameCont");
const ansSubmitBtn = document.getElementById("ansSubmit");
let score = 0;
let quesData = generateQuestion();
let isGameActive = false;

startGameBtn.addEventListener("click", () => {
  isGameActive = true;

  score = 0;
  scoreDiv.textContent = score;

  startGameBtn.classList.add("hidden");
  gameCont.classList.remove("hidden");

  loadQuestion();
  startTimer();
});

ansSubmitBtn.addEventListener("click", submitAnswer);

answer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitAnswer();
  }
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
    operator,
    result() {
      return this.operator === "+"
        ? this.num1 + this.num2
        : this.num1 - this.num2;
    },
  };
}

function startTimer() {
  let timer = 30;
  timerDiv.textContent = timer;

  const timerId = setInterval(() => {
    timer--;
    timerDiv.textContent = timer;

    if (timer === 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);

  return timerId;
}

function loadQuestion() {
  quesData = generateQuestion();
  question.textContent = `${quesData.num1} ${quesData.operator} ${quesData.num2} = `;
}

function endGame() {
  isGameActive = false;
  gameCont.classList.add("hidden");
  startGameBtn.classList.remove("hidden");
  answer.value = "";
}

function submitAnswer() {
  if (!isGameActive) return;

  const answerVal = Number(answer.value);

  if (answerVal === quesData.result()) {
    score++;
    Toastify({ text: "Correct ✅", duration: 1500 }).showToast();
  } else {
    score = Math.max(0, score - 1);
    Toastify({ text: "Wrong ❌", duration: 1500 }).showToast();
  }

  scoreDiv.textContent = score;
  answer.value = "";
  loadQuestion();
}
