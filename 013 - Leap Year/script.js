const year = document.getElementById('year');
const btn = document.getElementsByTagName('button');
const status = document.getElementById('status');


function getStatus() {
  checkYear = parseInt(year.value);
  if (((checkYear % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    status.innerText = "Leap Year";
  }
  else {
    status.textContent = "Common Year";
  }
}