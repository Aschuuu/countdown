const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const grad = '17 June 2021 09:00:00';

function countdown() {
    const gradDate = new Date(grad);
    const currentDate = new Date();
    const totalSeconds = (gradDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    if (Math.floor(totalSeconds) == 0) {
        clearInterval(interval);
    };
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Initial call
countdown();

var interval = setInterval(countdown, 1000);

