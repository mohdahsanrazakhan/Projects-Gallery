let copyHexcode = document.querySelector('.container');
let randomColor = document.querySelectorAll('.box');
let hex = document.querySelectorAll('p');
let copyRight = document.querySelector('.copyright');

for (let i = 0; i < randomColor.length; i++) {
    let color = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
    randomColor[i].style.backgroundColor = color;
    hex[i].textContent = color.toUpperCase()
}

function copyHex1() {
    navigator.clipboard.writeText(hex[0].textContent);
}

function copyHex2() {
    navigator.clipboard.writeText(hex[1].textContent);
}

function copyHex3() {
    navigator.clipboard.writeText(hex[2].textContent);
}

function copyHex4() {
    navigator.clipboard.writeText(hex[3].textContent);
}

function copyHex5() {
    navigator.clipboard.writeText(hex[4].textContent);
}

function copyHex6() {
    navigator.clipboard.writeText(hex[5].textContent);
}

function copyHex7() {
    navigator.clipboard.writeText(hex[6].textContent);
}

function copyHex8() {
    navigator.clipboard.writeText(hex[7].textContent);
}

function copyHex9() {
    navigator.clipboard.writeText(hex[8].textContent);
}

function copyHex10() {
    navigator.clipboard.writeText(hex[9].textContent);
}

function refreshPage() {
    location.reload();
}

let now = new Date();
year = now.getFullYear();
// U+24B8
copyRight.innerHTML = `© ${year} All Rights Reserved, Random Code Generator`;