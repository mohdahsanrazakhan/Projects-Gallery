const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.querySelector('.random-advice-btn');

function randomeAdvice() {
  fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data => {
    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
    adviceText.innerHTML = `"${data.slip.advice}"`;
  }).catch(error => alert('ERROR'));
}

adviceBtn.addEventListener('click', randomeAdvice);