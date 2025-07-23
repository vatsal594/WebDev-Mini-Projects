const userCard = document.getElementById("user-card");
const generateBtn = document.getElementById("generate");

async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    // Template string to create the user card
    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Photo">
      <h2>${user.name.first} ${user.name.last}</h2>
      <p><strong>📧 Email:</strong> ${user.email}</p>
      <p><strong>🌍 Location:</strong> ${user.location.city}, ${user.location.country}</p>
      <p><strong>⚥ Gender:</strong> ${user.gender}</p>
      <p><strong>🎂 Age:</strong> ${user.dob.age}</p>
    `;
  } catch (err) {
    userCard.innerHTML = `<p>⚠️ Failed to load user. Please try again.</p>`;
    console.error("Error fetching user:", err);
  }
}

// Load a user on initial page load
fetchUser();

// Load a new user when button is clicked
generateBtn.addEventListener("click", fetchUser);
 