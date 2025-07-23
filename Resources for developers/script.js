function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!");
    button.textContent = "✅";
    setTimeout(() => (button.textContent = "📋"), 1500);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".resource-card");
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const themeBtn = document.getElementById("toggle-theme");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
