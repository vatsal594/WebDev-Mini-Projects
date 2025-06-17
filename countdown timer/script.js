const startBtn = document.getElementById("startBtn");
const countdownDisplay = document.getElementById("countdownDisplay");
const secondsInput = document.getElementById("secondsInput");
const doneMessage = document.getElementById("doneMessage");

startBtn.addEventListener("click", () => {
  let timeLeft = parseInt(secondsInput.value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid number!");
    return;
  }

  doneMessage.textContent = "";
  countdownDisplay.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdownDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      doneMessage.textContent = "⏰ Time's up!";
    }
  }, 1000);
});
