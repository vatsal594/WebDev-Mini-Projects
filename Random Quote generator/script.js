const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "In the middle of every difficulty lies opportunity.",
  "The only impossible journey is the one you never begin.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
];

let quote = document.getElementById("quote");
let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomIndex];
});
