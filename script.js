document.getElementById("yes").addEventListener("click", function () {
  document.getElementById("question").textContent = "Yay! ❤️";
  document.getElementById("gif").src = "miffyCelebration.gif";
});

document.getElementById("no").addEventListener("mouseover", function () {
  let button = this;
  button.style.position = "absolute";
  button.style.left = Math.random() * window.innerWidth + "px";
  button.style.top = Math.random() * window.innerHeight + "px";
});
