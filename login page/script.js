document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !nameRegex.test(username)) {
    alert("Please enter a valid name (letters only).");
    return;
  }

  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!password || password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  alert(`Welcome, ${username}! You have logged in successfully.`);
  this.reset();
});
