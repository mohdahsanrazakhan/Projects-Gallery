let textField = document.getElementById('text-field');
let btn = document.getElementById('btn');
let date = document.getElementById('current-date');
let todoList = document.getElementById('todo');
let division;
let now = new Date();
let currDay = now.getDate();
let currMonth = now.getMonth() + 1;
let currYear = now.getFullYear();


date.innerHTML = `${("0" + currMonth).slice(-2)}-${("0" + currDay).slice(-2)}-${currYear}`;

function addList() {
    let box = document.createElement('INPUT');
    let list = document.createElement('li');
    division = document.createElement('div');
    box.setAttribute('type', 'checkbox');
    division.classList.add('single-line');
    box.classList.add('check');
    list.innerHTML = textField.value;
    division.appendChild(box);
    division.appendChild(list);
    todoList.appendChild(division);
    textField.value = '';
}

function reset() {
    todoList.innerHTML = '';
}