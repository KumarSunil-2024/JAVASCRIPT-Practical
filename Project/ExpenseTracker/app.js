// Get DOM elements
const balance = document.getElementById('balance');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');

// Initialize expenses and balance
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
updateBalance();

// Add expense event listener
addExpenseButton.addEventListener('click', () => {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (description && !isNaN(amount) && amount > 0) {
    const expense = {
      id: Date.now(),
      description,
      amount
    };

    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    descriptionInput.value = '';
    amountInput.value = '';

    renderExpenses();
    updateBalance();
  } else {
    alert('Please provide valid description and amount.');
  }
});

// Render expenses list
function renderExpenses() {
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.description} - $${expense.amount.toFixed(2)}
      <span class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</span>
    `;
    expenseList.appendChild(li);
  });
}

// Update balance
function updateBalance() {
  const totalBalance = expenses.reduce((total, expense) => total + expense.amount, 0);
  balance.textContent = `$${totalBalance.toFixed(2)}`;
}

// Delete expense
function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
  updateBalance();
}

// Initial render
renderExpenses();
