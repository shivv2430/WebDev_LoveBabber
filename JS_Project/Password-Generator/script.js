const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length-slider");
const lengthVal = document.getElementById("length-val");
const strengthBar = document.getElementById("strength-bar");
const toastContainer = document.getElementById("toast-container");

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generate_password");
const copyBtn = document.getElementById("copyPassword");

const chars = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

function generatePassword() {
    let charset = "";
    if (uppercaseCheck.checked) charset += chars.uppercase;
    if (lowercaseCheck.checked) charset += chars.lowercase;
    if (numbersCheck.checked) charset += chars.numbers;
    if (symbolsCheck.checked) charset += chars.symbols;

    if (charset === "") {
        passwordBox.value = "";
        updateStrength(0);
        return;
    }

    let password = "";
    const length = lengthSlider.value;

    // Ensure at least one of each selected type is included
    if (uppercaseCheck.checked) password += chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)];
    if (lowercaseCheck.checked) password += chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)];
    if (numbersCheck.checked) password += chars.numbers[Math.floor(Math.random() * chars.numbers.length)];
    if (symbolsCheck.checked) password += chars.symbols[Math.floor(Math.random() * chars.symbols.length)];

    while (password.length < length) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
    calculateStrength(password);
}

function calculateStrength(password) {
    let score = 0;
    if (password.length > 8) score++;
    if (password.length > 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    updateStrength(score);
}

function updateStrength(score) {
    strengthBar.className = "strength-bar";
    if (score === 0) {
        strengthBar.style.width = "0%";
    } else if (score <= 2) {
        strengthBar.classList.add("weak");
    } else if (score <= 4) {
        strengthBar.classList.add("medium");
    } else {
        strengthBar.classList.add("strong");
    }
}

function copyPassword() {
    if (passwordBox.value === "") return;

    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value).then(() => {
        showToast("Password copied to clipboard!", "fa-solid fa-copy");
    });
}

function showToast(message, icon) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Event Listeners
lengthSlider.addEventListener("input", () => {
    lengthVal.textContent = lengthSlider.value;
    generatePassword();
});

[uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck].forEach(el => {
    el.addEventListener("change", generatePassword);
});

generateBtn.addEventListener("click", () => {
    generatePassword();
    showToast("New password generated!", "fa-solid fa-wand-magic-sparkles");
});

copyBtn.addEventListener("click", copyPassword);

// Initialize
generatePassword();