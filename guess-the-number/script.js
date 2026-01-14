const input = document.getElementById("inp");
const submitBtn = document.getElementById("submit");

let computerGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function resetGame() {
  computerGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
}

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "left",
    close: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function playGame() {
  const rawValue = input.value.trim();

  if (!rawValue) {
    showToast("Please type something");
    return;
  }
  attempts++;
  const value = Number(rawValue);

  if (Number.isNaN(value)) {
    showToast(`${rawValue} is not a number`);
    input.value = "";
    return;
  }

  if (value < computerGuess) {
    showToast("Try a bigger number");
  } else if (value > computerGuess) {
    showToast("Try a smaller number");
  } else {
    showToast(`Correct! You guessed it right in ${attempts} attempts`);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    resetGame();
  }

  input.value = "";
}

submitBtn.addEventListener("click", playGame);
input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        playGame();
    }
})