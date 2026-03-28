let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
    const list = document.getElementById("list");
    const balance = document.getElementById("balance");

    list.innerHTML = "";

    let total = 0;

    transactions.forEach((t, index) => {
        total += t.amount;

        let li = document.createElement("li");
        li.innerHTML = `${t.desc} : ₹${t.amount} 
        <button onclick="deleteTransaction(${index})">❌</button>`;

        list.appendChild(li);
    });

    balance.textContent = total;

    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateChart();
}

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (!desc || isNaN(amount)) return;

    transactions.push({ desc, amount });

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

// 📊 Chart
let chart;

function updateChart() {
    let income = transactions.filter(t => t.amount > 0)
        .reduce((a, b) => a + b.amount, 0);

    let expense = transactions.filter(t => t.amount < 0)
        .reduce((a, b) => a + b.amount, 0);

    const ctx = document.getElementById("chart");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                label: "Money",
                data: [income, Math.abs(expense)]
            }]
        }
    });
}

updateUI();