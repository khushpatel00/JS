// Store the selected index of the account type option
let selectedAccountTypeIndex = -1;

function handleAccountTypeChange() {
	const accountType = document.getElementById("accountType").value;
	if (!accountType) return;

	selectedAccountTypeIndex = accountType.selectedIndex;

	const actionGroup = document.getElementById("actionGroup");
	if (!actionGroup) return;

	// Overwrite the action group content using a template literal
	// The new select intentionally does NOT have the disabled attribute
	actionGroup.innerHTML = `
		<label for="accountAction" class="block text-sm font-medium mb-2">Action</label>
		<select id="accountAction" name="accountAction" class="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200">
			<option value="" selected disabled>Select an action</option>
			<option value="withdraw">Withdraw</option>
			<option value="deposit">Deposit</option>
			<option value="balance">Check Balance</option>
		</select>
		<p class="text-xs text-slate-500 mt-2" id="formHint">Choose an action to continue.</p>
	`;
}

