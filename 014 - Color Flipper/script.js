const htmlBgColor = document.querySelector('html');
const color = document.getElementById('color');
const rgbColor = document.getElementById('rgbColor');
const simpleColor = document.getElementById('simpleColor');
const btn = document.getElementById('btn');
const rgbBtn = document.getElementById('rgbBtn');
const logo = document.getElementById('logo');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener('click', () => {
  let getColor = getRandomColor();
  color.textContent = getColor;
  color.style.color = getColor;
  logo.style.color = getColor;
  htmlBgColor.style.backgroundColor = getColor;
})

var hex = getRandomColor();

//create full hex
const fullHex = (hex) => {
  let r = hex.slice(1, 2);
  let g = hex.slice(2, 3);
  let b = hex.slice(3, 4);

  r = parseInt(r + r, 16);
  g = parseInt(g + g, 16);
  b = parseInt(b + b, 16);

  // return {r, g, b} 
  return { r, g, b };
}

//convert hex to rgb
const hex2rgb = (hex) => {
  if (hex.length === 4) {
    return fullHex(hex);
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // return {r, g, b} 
  return { r, g, b };
}

rgbBtn.addEventListener('click', () => {

})