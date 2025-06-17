const rollBtn = document.getElementById("rollBtn");
const diceFace = document.getElementById("diceFace");
const diceNumber = document.getElementById("diceNumber");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", () => {
  let roll = Math.floor(Math.random() * diceFaces.length);
  diceFace.textContent = diceFaces[roll];
  diceNumber.textContent = [roll + 1];
});
