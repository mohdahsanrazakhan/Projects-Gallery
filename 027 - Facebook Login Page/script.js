const isShow = document.getElementById('showPassword')
const email = document.getElementById('email')
const loginBtn = document.getElementById('login');
var pwd = document.getElementById("pwd")

email.addEventListener('focus', () => {
  email.style.borderColor = "#1877f2";
})

email.addEventListener('blur', () => {
  email.style.borderColor = "#e5e7eb";
})

pwd.addEventListener('focus', () => {
  pwd.style.borderColor = "#1877f2";
})

pwd.addEventListener('blur', () => {
  pwd.style.borderColor = "#e5e7eb";
})

function warning() {
  email.style.borderColor = "red";
  pwd.style.borderColor = "red";
}

function login() {
  emailRegX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  (email.value.match(emailRegX) && pwd.value) ? alert(`Your email/number is ${email.value}.\nThis is a facebook clone page.\nGo to ${'https://m.facebook.com/login/?refsrc=deprecated&_rdr'} for log in to facebook.\nNo data stored!`) : warning();
}
// loginBtn.disabled
function signup() {
  window.open('https://www.facebook.com/r.php?locale=en_GB&display=page')
}

function showPassword() {
  if (pwd.type === "text") {
    pwd.type = "password";
    isShow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-closed" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"></path>
    <path d="M3 15l2.5 -3.8"></path>
    <path d="M21 14.976l-2.492 -3.776"></path>
    <path d="M9 17l.5 -4"></path>
    <path d="M15 17l-.5 -4"></path>
 </svg>`
  } else {
    pwd.type = "text";
    isShow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
    </svg>`
  }
}