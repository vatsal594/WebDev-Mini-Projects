function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  // Add 0 in front of single digits
  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  document.getElementById("clock").innerText = `${hours}:${mins}:${secs}`;
  document.getElementById("date").innerText = now.toDateString();
}

setInterval(showTime, 1000);
showTime(); 
