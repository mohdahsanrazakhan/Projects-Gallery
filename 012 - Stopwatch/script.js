let [milliSec, sec, min, hrs] = [0, 0, 0, 0];
let showTimer = document.querySelector('.timerDisplay');
let number = null;

// Start button 
document.getElementById('start').addEventListener('click', () => {
    if (number !== null) {
        clearInterval(number);
    }
    number = setInterval(displayTimer, 10);
});

// Pause button
document.getElementById('pause').addEventListener('click', () => {
    clearInterval(number);
});

// Reset button
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(number);
    [milliSec, sec, min, hrs] = [0, 0, 0, 0];
    showTimer.innerHTML = '00 : 00 : 00';
    let element = document.getElementsByClassName('history');
    while (element.length > 0) {
        element[0].removeChild(element[0].lastElementChild);
    }
});

// Flag button 
let timerHistory;
document.getElementById('flag').addEventListener('click', () => {
    timerHistory = document.createElement('p');
    timerHistory.textContent = showTimer.textContent;
    document.getElementsByClassName('history')[0].appendChild(timerHistory);
});

function displayTimer() {
    milliSec += 10;
    if (milliSec === 1000) {
        milliSec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hrs++;
            }
        }
    }

    let h = hrs < 10 ? '0' + hrs : hrs;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    let ms = milliSec < 10 ? '00' + milliSec : milliSec < 100 ? '0' + milliSec : milliSec;

    showTimer.innerHTML = `${h} : ${m} : ${s}`;
}

