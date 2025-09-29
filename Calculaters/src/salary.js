function createSalaryOverview() {
  // Read inputs
  var age = Number(document.getElementById('ageInput').value || 0);
  var years = Number(document.getElementById('yearsInput').value || 0);
  var job = document.getElementById('jobInput').value || '—';
  var hoursPerDay = Number(document.getElementById('hoursInput').value || 0);
  var daysPerWeek = Number(document.getElementById('daysPerWeekInput').value || 0);
  var net = Number(document.getElementById('netSalaryInput').value || 0);
  var type = (document.getElementById('calcTypeSelect').value || 'monthly');

  // Normalize to monthly
  var hourly = 0, daily = 0, monthly = 0, yearly = 0;

  if (type == 'hourly') {
    hourly = net;
    daily = hourly * hoursPerDay;
    monthly = daily * (daysPerWeek * 4.3333); 
    yearly = monthly * 12;
  } else if (type == 'daily') {
    daily = net;
    hourly = hoursPerDay ? daily / hoursPerDay : 0;
    monthly = daily * (daysPerWeek * 4.3333);
    yearly = monthly * 12;
  } else if (type == 'monthly') {
    monthly = net;
    yearly = monthly * 12;
    daily = daysPerWeek ? monthly / (daysPerWeek * 4.3333) : 0;
    hourly = hoursPerDay ? daily / hoursPerDay : 0;
  } else { // yearly
    yearly = net;
    monthly = yearly / 12;
    daily = daysPerWeek ? monthly / (daysPerWeek * 4.3333) : 0;
    hourly = hoursPerDay ? daily / hoursPerDay : 0;
  }

  document.getElementById('jobLabel').innerHTML = job || '—';
  document.getElementById('yearsLabel').innerHTML = years;
  document.getElementById('hourlyOut').innerHTML = hourly;
  document.getElementById('dailyOut').innerHTML = daily;
  document.getElementById('monthlyOut').innerHTML = monthly;
  document.getElementById('yearlyOut').innerHTML = yearly;
  document.getElementById('totalOut').innerHTML = yearly * years;
}
    
    