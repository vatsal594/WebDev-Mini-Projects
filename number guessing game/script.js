let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

checkBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⛔ Enter a number between 1 and 100!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = "green";
    checkBtn.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
    message.style.color = "orange";
  } else {
    message.textContent = "📈 Too high!";
    message.style.color = "orange";
  }
});

restartBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "";
  attemptsDisplay.textContent = "Attempts: 0";
  checkBtn.disabled = false;
});
