let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    let total = 0;

    expenses.forEach((exp, index) => {
        total += exp.amount;

        let li = document.createElement("li");
        li.innerHTML = `
            ${exp.name} - ₹${exp.amount}
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = parseInt(document.getElementById("amount").value);

    if (!name || !amount) return;

    expenses.push({ name, amount });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    renderExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function clearAll() {
    expenses = [];
    localStorage.removeItem("expenses");
    renderExpenses();
}

renderExpenses();