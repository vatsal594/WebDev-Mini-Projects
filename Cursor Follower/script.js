const follower = document.querySelector(".follower");

document.addEventListener("mousemove", (e) => {
  follower.style.left = `${e.clientX}px`;
  follower.style.top = `${e.clientY}px`;
});
