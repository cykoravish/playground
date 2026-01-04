const startGameBtn = document.getElementById("startGame");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const gameCont = document.getElementById("gameCont");
const ansSubmitBtn = document.getElementById("ansSubmit");
let score = 0;
let quesData = generateQuestion();

startGameBtn.addEventListener("click", () => {
  scoreDiv.textContent = 0;
  timerDiv.textContent = 30;
  startGameBtn.classList.add("hidden");
  gameCont.classList.remove("hidden");

  loadQuestion();

  const timerId = startTimer();
  setTimeout(() => {
    clearInterval(timerId);
    startGameBtn.classList.remove("hidden");
    gameCont.classList.add("hidden");
  }, 30000);
});

ansSubmitBtn.addEventListener("click", () => {
  let answerVal = Number(answer.value);
  if (answerVal === quesData.result()) {
    score++;
    scoreDiv.textContent = score;
    loadQuestion();
    answer.value = "";
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    score--;
    scoreDiv.textContent = score;
    Toastify({
      text: "This is a toast",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
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
  let timerId = setInterval(() => {
    timerDiv.textContent = timer--;
  }, 1000);
  return timerId;
}

function loadQuestion() {
  quesData = generateQuestion();
  question.textContent = `${quesData.num1} ${quesData.operator} ${quesData.num2} = `;
}
