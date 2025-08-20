let currentBalance = 0;
let selectedAccountType = "";

function handleAccountTypeChange() {
	const accountTypeSelect = document.getElementById("accountType");
	if (!accountTypeSelect) return;

	selectedAccountType = accountTypeSelect.value;
	if (!selectedAccountType) return;

	switch (selectedAccountType) {
		case "savings":
			currentBalance = 0;
			break;
		case "current":
			currentBalance = 10000;
			break;
		default:
			currentBalance = 0;
	}

	const actionGroup = document.getElementById("actionGroup");
	if (!actionGroup) return;

	actionGroup.innerHTML = `
		<label for="amount" class="block text-sm font-medium mb-2">Amount</label>
		<div class="flex flex-wrap items-center gap-2">
			<input type="number" id="amount" min="1" placeholder="Enter amount" class="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200" />
			<button type="button" id="depositBtn" onclick="deposit()" class="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200">Deposit</button>
			<button type="button" id="withdrawBtn" onclick="withdraw()" class="inline-flex items-center rounded-lg bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200">Withdraw</button>
			<button type="button" id="balanceBtn" onclick="checkBalance()" class="inline-flex items-center rounded-lg bg-slate-700 px-4 py-2 text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300">Check Balance</button>
		</div>
		<p class="text-xs text-slate-500 mt-2" id="formHint">Enter an amount, then choose an action. Balance is only shown when requested.</p>
		<div id="balanceContainer" class="mt-4 hidden">
			<p id="balanceText" class="text-lg font-medium text-slate-700"></p>
			<p id="balanceWarning" class="text-xs text-rose-600 mt-1"></p>
		</div>
	`;
}


function deposit() {
	const amountInput = document.getElementById("amount");
	if (!amountInput) return;
	const amount = Number(amountInput.value);

	if (amount > 0) {
		currentBalance += amount;
		amountInput.value = "";
	} else {
		alert("Enter valid amount to deposit!");
	}
}

function withdraw() {
	const amountInput = document.getElementById("amount");
	if (!amountInput) return;
	const amount = Number(amountInput.value);

	if (amount >= 0 && amount <= currentBalance) {
		currentBalance -= amount;
		amountInput.value = "";
	} else {
		alert("Insufficient balance or invalid amount!");
	}
}

function checkBalance() {
	const container = document.getElementById("balanceContainer");
	const textEl = document.getElementById("balanceText");
	const warnEl = document.getElementById("balanceWarning");

	textEl.innerHTML = "Current Balance: <span class=\"font-semibold\">" + currentBalance + "</span>";
	warnEl.textContent = "";
	textEl.classList.remove("text-rose-600");
	textEl.classList.add("text-slate-700");

	if (selectedAccountType === "current" && currentBalance < 10000) {
		textEl.classList.remove("text-slate-700");
		textEl.classList.add("text-rose-600");
		warnEl.textContent = "the current account balance shouldn't be less than 10,000";
	}

	container.classList.remove("hidden");
}
