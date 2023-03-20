const annoDomini = document.getElementById('AD');
const calculateBtn = document.getElementById('btn');

calculateBtn.addEventListener('click', () => {
  console.log(annoDomini.value);

  if (annoDomini.value >= 622) {
    const ADtoHijri = Math.floor((annoDomini.value - 622) * (33 / 32));
    console.log(ADtoHijri);
    document.getElementById('hijri').innerHTML = `${ADtoHijri} Hijri`;
    document.getElementById('hijri').style.color = 'white';
  }
  else if (annoDomini.value === '') {
    document.getElementById('hijri').innerHTML = 'Enter any year';
    document.getElementById('hijri').style.color = 'red';
  }
  else {
    document.getElementById('hijri').innerHTML = 'Islamic New Year in 622 CE. During that year, Muhammad and his followers migrated from Mecca to Medina and established the first Muslim community (ummah), an event commemorated as the Hijrah.'
    document.getElementById('hijri').style.color = 'green';
  }
});