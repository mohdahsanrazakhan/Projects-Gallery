let daysLeftBox = document.getElementById('days-left');
let hoursLeftBox = document.getElementById('hours-left');
let minutesLeftBox = document.getElementById('minutes-left');
let secondsLeftBox = document.getElementById('seconds-left');
let comingNewYear = document.getElementById('new-year');

function countDown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let currentYear = todayDate.getFullYear();
  let newYear = new Date(currentYear + 1, 0, 1, 0o0, 0o0);
  let cNewYear = newYear.getFullYear();
  let newTime = newYear.getTime();
  let remainingTime = newTime - todayTime;
  let aMin = 60 * 1000;
  let aHr = 60 * aMin;
  let aDay = 24 * aHr;

  let addingZero = (number) => (number < 10 ? `0${number}` : number);

  let daysLeft = Math.floor(remainingTime / aDay);
  let hoursLeft = Math.floor((remainingTime % aDay) / aHr);
  let minutesLeft = Math.floor((remainingTime % aHr) / aMin);
  let secondsLeft = Math.floor((remainingTime % aMin) / 1000);

  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  comingNewYear.style.color = randomColor;
  comingNewYear.onmouseover = () => {
    comingNewYear.style.color = "#f2f2f2";
  }
  comingNewYear.textContent = cNewYear;
  daysLeftBox.textContent = addingZero(daysLeft);
  hoursLeftBox.textContent = addingZero(hoursLeft);
  minutesLeftBox.textContent = addingZero(minutesLeft);
  secondsLeftBox.textContent = addingZero(secondsLeft);
}

let tickTock = setInterval(countDown, 1000);
countDown();