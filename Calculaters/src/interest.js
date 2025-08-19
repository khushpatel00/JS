function calculateInterest() {
  var principal = Number(document.getElementById('principalInput').value || 0);
  var rate = Number(document.getElementById('rateInput').value || 0);
  var timeType = document.getElementById('timeTypeSelect').value;
  var time = Number(document.getElementById('timeInput').value || 0);

  // Convert to years if monthly
  var timeInYears = timeType == 'Monthly' ? time / 12 : time;

  // Simple interest formula: I = P * R * T
  var interest = principal * (rate / 100) * timeInYears;
  var totalAmount = principal + interest;

  // Update outputs
  document.getElementById('principalOut').innerHTML = principal;
  document.getElementById('interestOut').innerHTML = interest;
  document.getElementById('totalAmountOut').innerHTML = totalAmount;
  document.getElementById('rateOut').innerHTML = rate + '%';
}

// expose for inline onclick
window.calculateInterest = calculateInterest;
