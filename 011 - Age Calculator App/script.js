var today = new Date();

function getDay() {
  var currentDate = Number(today.getDate());
  const day = Number(document.getElementById('day').value);

  var ageInDate = currentDate - day;
  document.getElementById('days').innerHTML = ageInDate;
}
function getMonth() {
  var currentMonth = Number(today.getMonth() + 1);
  const month = Number(document.getElementById('month').value);
  var ageInMonth = currentMonth - month;
  document.getElementById('months').innerHTML = Math.abs(ageInMonth);
}
function getYear() {
  var currentYear = Number(today.getFullYear());
  const year = Number(document.getElementById('year').value);
  var ageInYear = currentYear - year;
  document.getElementById('years').innerHTML = ageInYear;
}

