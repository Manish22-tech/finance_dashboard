let balance = 0;
let income = 0;
let expense = 0;

function addTransaction() {
  const desc = document.getElementById('desc').value;
  const amount = parseInt(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!desc || !amount) {
    alert('Please fill all fields');
    return;
  }

  if (type === 'income') {
    income += amount;
    balance += amount;
  } else {
    expense += amount;
    balance -= amount;
  }

  document.getElementById('balance').innerText = '₹' + balance;
  document.getElementById('income').innerText = '₹' + income;
  document.getElementById('expense').innerText = '₹' + expense;

  const row = `<tr>
    <td>${desc}</td>
    <td>₹${amount}</td>
    <td>${type}</td>
  </tr>`;

  document.getElementById('tableData').innerHTML += row;

  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
}
