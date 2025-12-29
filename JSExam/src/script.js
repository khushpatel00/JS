let tabledata = document.querySelector('#tabledata')
let actionInput = document.querySelector('#selectentry')
let nameInput = document.querySelector('#nameinput')
let amountInput = document.querySelector('#amountinput')
let errormsg = document.querySelector('#errormsg')
let totalexpense = document.querySelector('#totalexpense')
let totalincome = document.querySelector('#totalincome')
let balance = document.querySelector('#balance')
let totalExpenseamount = 0;
let totalIncomeamount = 0;



document.querySelector('#addData').addEventListener('click', () => {
    if (nameInput.value == '' || nameInput.value == undefined) {
        errormsg.innerHTML = 'Please Enter Name !!'
        return;
    }
    else if (amountInput.value == '' || amountInput.value == undefined) {
        errormsg.innerHTML = 'Please Enter Amount !!'
        return;
    }

    expense = localStorage.getItem('expenseHistory') ? JSON.parse(localStorage.getItem('expenseHistory')) : []
    let obj = {
        name: nameInput.value,
        amount: amountInput.value,
        action: actionInput.value,
    }
    expense.push(obj);
    localStorage.setItem('expenseHistory', JSON.stringify(expense));
    showData();
})

function showData() {
    expense = localStorage.getItem('expenseHistory') ? JSON.parse(localStorage.getItem('expenseHistory')) : []
    tabledata.innerHTML = ''
    totalExpenseamount = 0
    totalIncomeamount = 0
    for (const [index, singlehistory] of expense.entries()) {
        tabledata.innerHTML += `
        <tr>
        <td class="px-5">${index}</td>
        <td class="px-5">${singlehistory.name}</td>
        <td class="px-5">${singlehistory.amount}</td>
        <td class="px-5">${singlehistory.action}</td>
        <td class="px-5 text-center ><span class="text-red-600" onclick="deleteData(${index})">x</span></td>
        </tr>`
        if(singlehistory.action == 'Expense'){
            totalExpenseamount += parseInt(singlehistory.amount); 
        }
        if(singlehistory.action == 'Income'){
            totalIncomeamount += parseInt(singlehistory.amount); 
        }
    }
    totalexpense.innerHTML = totalExpenseamount
    totalincome.innerHTML = totalIncomeamount
    balance.innerHTML = totalIncomeamount - totalExpenseamount;
    if(balance.innerHTML < 0) balance.classList.add('text-red-600')
        else balance.classList = ''
    nameInput.value = ''
    amountInput.value = ''
}
function deleteData(id) {
    console.log('deleting..')
    expense = localStorage.getItem('expenseHistory') ? JSON.parse(localStorage.getItem('expenseHistory')) : []
    expense.splice(id, 1);
    localStorage.setItem('expenseHistory', JSON.stringify(expense));
    showData();
}
showData();