function calculateProfitLoss() {
  var buyPrice = Number(document.getElementById('buyPriceInput').value || 0);
  var sellPrice = Number(document.getElementById('sellPriceInput').value || 0);

  var difference = sellPrice - buyPrice;
  var resultStatus = document.getElementById('resultStatus');
  var resultAmount = document.getElementById('resultAmount');

  if (difference > 0) {
    // Profit
    resultStatus.innerHTML = 'PROFIT';
    resultStatus.className = 'text-green-400';
    resultAmount.innerHTML = '$' + difference;
    resultAmount.className = 'text-green-400';
  } else if (difference < 0) {
    // Loss
    resultStatus.innerHTML = 'LOSS';
    resultStatus.className = 'text-red-400';
    resultAmount.innerHTML = '$' + Math.abs(difference);
    resultAmount.className = 'text-red-400';
  } else {
    // No profit, no loss
    resultStatus.innerHTML = 'NO PROFIT NO LOSS';
    resultStatus.className = 'text-neutral-300';
    resultAmount.innerHTML = '$0';
    resultAmount.className = 'text-neutral-300';
  }
}

// expose for inline onclick
window.calculateProfitLoss = calculateProfitLoss;
