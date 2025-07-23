const image = document.getElementById("dog-img");
const button = document.getElementById("Btn");

async function GetImage() {
  try {
    const api = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await api.json();
    image.src = data.message;
  } catch (err) {
    console.log("Error", err);
  }
}

GetImage();

button.addEventListener("click", GetImage);
