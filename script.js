const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const audio = document.getElementById("audio");

function playMusic(e) {
  audio.play();
  pauseButton.hidden = false;
  playButton.hidden = true;
}
function pauseMusic(e) {
  audio.pause();
  pauseButton.hidden = true;
  playButton.hidden = false;
}

playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
