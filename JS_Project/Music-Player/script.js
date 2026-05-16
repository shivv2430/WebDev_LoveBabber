const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const songImg = document.getElementById("songImg");
const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");

// Format time utility function
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
    durationTimeEl.textContent = formatTime(song.duration);
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        songImg.classList.remove("playing");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        songImg.classList.add("playing");
    }
}

// Ensure the image rotation state is correct if audio is auto-played or ended
song.onplay = () => songImg.classList.add("playing");
song.onpause = () => songImg.classList.remove("playing");
song.onended = () => {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    songImg.classList.remove("playing");
    progress.value = 0;
    currentTimeEl.textContent = "0:00";
}

setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
        currentTimeEl.textContent = formatTime(song.currentTime);
    }
}, 500);

progress.oninput = function() {
    song.currentTime = progress.value;
    currentTimeEl.textContent = formatTime(song.currentTime);
}

progress.onchange = function() {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    songImg.classList.add("playing");
}
