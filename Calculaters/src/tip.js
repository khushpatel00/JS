function calculateTip() {
  var bill = Number(document.getElementById('billAmountInput').value || 0);
  var tipPercent = Number(document.getElementById('tipPercentInput').value || 0);
  var people = Number(document.getElementById('peopleInput').value || 1);

  if (people <= 0) people = 1;

  var totalTip = bill * (tipPercent / 100);
  var grandTotal = bill + totalTip;
  var tipPerPerson = totalTip / people;
  var totalPerPerson = grandTotal / people;

  document.getElementById('tipPerPersonOut').innerHTML = tipPerPerson;
  document.getElementById('totalTipOut').innerHTML = totalTip;
  document.getElementById('totalPerPersonOut').innerHTML = totalPerPerson;
  document.getElementById('grandTotalOut').innerHTML = grandTotal;
}

// expose for inline onclick
window.calculateTip = calculateTip;