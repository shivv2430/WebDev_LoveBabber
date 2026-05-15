const userInput = document.getElementById("date");
const yearsDisplay = document.getElementById("years");
const monthsDisplay = document.getElementById("months");
const daysDisplay = document.getElementById("days");
const resultText = document.getElementById("full-result-text");
const resultCards = document.querySelectorAll(".result-card");

// Set max date to today
userInput.max = new Date().toISOString().split("T")[0];

function animateValue(element, start, end, duration) {
    if (isNaN(end)) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function calculateAge() {
    if (!userInput.value) {
        resultText.innerText = "Please select a valid date first.";
        return;
    }

    let birthDate = new Date(userInput.value);
    let today = new Date();

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Update UI with animations
    animateValue(yearsDisplay, 0, y3, 1000);
    animateValue(monthsDisplay, 0, m3, 1000);
    animateValue(daysDisplay, 0, d3, 1000);

    // Add active class to cards
    resultCards.forEach(card => {
        card.classList.add("active");
        setTimeout(() => card.classList.remove("active"), 1000);
    });

    resultText.innerHTML = `You are precisely <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Open picker on click for better UX
userInput.addEventListener("click", () => {
    try {
        userInput.showPicker();
    } catch (e) {
        console.log("Picker not supported on this browser");
    }
});