let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let result = document.getElementById("result");

    if (guess === secretNumber) {
        result.innerText = "🎉 Correct! You guessed it!";
    }
    else if (Math.abs(guess - secretNumber) <= 10) {
        result.innerText = "🔥 Hot!";
    }
    else {
        result.innerText = "❄️ Cold!";
    }
}