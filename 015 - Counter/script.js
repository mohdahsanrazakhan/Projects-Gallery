const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const counterNumber = document.getElementById('counter');
var counter = 0;

function checkColor() {
  if (counter < 0) {
    counterNumber.style.color = "#ff0000";
  }
  else if (counter > 0) {
    counterNumber.style.color = "green";
  }
  else {
    counterNumber.style.color = "black";
  }
}

decreaseBtn.addEventListener('click', () => {
  counter--;
  counterNumber.textContent = counter;
  checkColor()
})

increaseBtn.addEventListener('click', () => {
  counter++
  counterNumber.textContent = counter;
  checkColor()
})

resetBtn.addEventListener('click', () => {
  counter = 0;
  counterNumber.textContent = counter;
  checkColor()
})