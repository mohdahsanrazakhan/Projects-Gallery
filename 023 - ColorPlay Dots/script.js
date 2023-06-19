const dots = document.getElementsByClassName('dots');

const randomRgbaString = (alpha) => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = alpha;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('mouseover', () => {
    dots[i].style.backgroundColor = randomRgbaString(1);
    setInterval(removeColor = () => {
      dots[i].style.backgroundColor = "#fff";
    }, 7000);
  });
}