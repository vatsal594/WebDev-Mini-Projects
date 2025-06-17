function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

window.playGame = function (playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById(
    "player-choice"
  ).textContent = `Your Choice: ${playerChoice}`;
  document.getElementById(
    "computer-choice"
  ).textContent = `Computer's Choice: ${computerChoice}`;
  document.getElementById("winner").textContent = `Result: ${result}`;
};
