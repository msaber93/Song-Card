const playButton = document.getElementById("play");
const audio = document.getElementById("audio");
let isPlaying = false;

function playMusic() {
  isPlaying = true;
  playButton.classList.replace('fa-circle-play', 'fa-circle-pause');
  playButton.setAttribute('title', 'Pause');
  audio.play();
}

function pauseMusic() {
  isPlaying = false;
  playButton.classList.replace('fa-circle-pause', 'fa-circle-play');
  playButton.setAttribute('title', 'Play');
  audio.pause();
}

playButton.addEventListener("click", () => (isPlaying ? pauseMusic() : playMusic()));
