let time = 1500; // 25 minutes
let timerInterval = null;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isRunning) return; // prevent multiple timers

    isRunning = true;

    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
            isRunning = false;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 1500; // reset to 25 min
    updateDisplay();
    isRunning = false;
}

// Initial display
updateDisplay();