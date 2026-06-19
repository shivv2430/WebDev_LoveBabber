function checkArmstrong() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num === "") {
        result.innerHTML = "Please enter a number!";
        result.className = "error";
        return;
    }

    let digits = num.length;
    let sum = 0;

    for (let digit of num) {
        sum += Math.pow(Number(digit), digits);
    }

    if (sum == Number(num)) {
        result.innerHTML = num + " is an Armstrong Number ✅";
        result.className = "success";
    } else {
        result.innerHTML = num + " is NOT an Armstrong Number ❌";
        result.className = "error";
    }
}