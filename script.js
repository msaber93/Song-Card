const icon = document.getElementById("icon");
const audio = document.getElementById("audio");

function playMusic() {
  audio.play();
}

icon.addEventListener("click", playMusic);
