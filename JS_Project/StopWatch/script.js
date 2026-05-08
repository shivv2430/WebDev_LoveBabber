let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");

let timer = null;

function stopwatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    displayTime.innerHTML = formatTime(hours, minutes, seconds, milliseconds);
}

function formatTime(h, m, s, ms) {
    let hh = h < 10 ? "0" + h : h;
    let mm = m < 10 ? "0" + m : m;
    let ss = s < 10 ? "0" + s : s;
    let mms = Math.floor(ms / 10);
    mms = mms < 10 ? "0" + mms : mms;

    return `${hh}:${mm}:${ss}<span style="font-size: 2.5rem; opacity: 0.5">.${mms}</span>`;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
    document.getElementById("startBtn").classList.add("running");
    document.getElementById("startBtn").innerHTML = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

function watchStop() {
    clearInterval(timer);
    document.getElementById("startBtn").classList.remove("running");
    document.getElementById("startBtn").innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
}

function watchReset() {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00<span style='font-size: 2.5rem; opacity: 0.5'>.00</span>";
    lapsList.innerHTML = "";
    lapCounter = 1;
    document.getElementById("startBtn").classList.remove("running");
    document.getElementById("startBtn").innerHTML = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
}

