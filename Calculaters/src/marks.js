function calculateMarks() {
  var maths = Number(document.getElementById('mathsInput').value || 0);
  var science = Number(document.getElementById('scienceInput').value || 0);
  var english = Number(document.getElementById('englishInput').value || 0);

  var total = maths + science + english;
  var totalPercent = (total / 300) * 100;

  // Subject percentages
  var mathsPercent = (maths / 100) * 100;
  var sciencePercent = (science / 100) * 100;
  var englishPercent = (english / 100) * 100;

  // Update UI
  document.getElementById('mathsMarksOut').innerHTML = maths;
  document.getElementById('scienceMarksOut').innerHTML = science;
  document.getElementById('englishMarksOut').innerHTML = english;

  document.getElementById('mathsPercentOut').innerHTML = mathsPercent;
  document.getElementById('sciencePercentOut').innerHTML = sciencePercent;
  document.getElementById('englishPercentOut').innerHTML = englishPercent;

  document.getElementById('totalMarksOut').innerHTML = total;
  document.getElementById('totalPercentOut').innerHTML = totalPercent + '%';
}


