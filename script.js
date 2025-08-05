
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});


const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');

let isPlaying = false;
let currentProgress = 0;


playButton.addEventListener('click', () => {
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
  isPlaying = true;
  startProgressBar();
});

pauseButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  playButton.style.display = 'block';
  isPlaying = false;
  stopProgressBar();
});

function startProgressBar() {
  currentProgress = progressBar.value || 0;
  progressInterval = setInterval(() => {
    if (currentProgress >= 100) {
      stopProgressBar();
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
      return;
    }
    currentProgress++;
    progressBar.value = currentProgress;
    updateTimeDisplay(currentProgress);
  }, 2000); 
}

function stopProgressBar() {
  clearInterval(progressInterval);
}

function updateTimeDisplay(progress) {
  const totalSeconds = 213;
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;
  currentTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

progressBar.addEventListener('input', (e) => {
  currentProgress = parseInt(e.target.value);
  updateTimeDisplay(currentProgress);
});
