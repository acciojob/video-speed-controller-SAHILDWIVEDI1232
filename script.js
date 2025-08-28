const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volumeSlider = player.querySelector('.player__slider[name="volume"]');
const playbackSpeedSlider = player.querySelector('.player__slider[name="playbackRate"]');
const rewindButton = player.querySelector('[data-skip="-10"]');
const forwardButton = player.querySelector('[data-skip="25"]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚'; // Change to pause icon
    } else {
        video.pause();
        toggle.textContent = '►'; // Change to play icon
    }
}

// Volume control
function updateVolume() {
    video.volume = volumeSlider.value;
}

// Playback speed control
function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

// Rewind
function rewind() {
    video.currentTime -= 10;
}

// Forward
function forward() {
    video.currentTime += 25;
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Seek video
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


toggle.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);