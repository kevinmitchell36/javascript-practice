// use setInterval to change the background color every second when pressing start button
// use clearInterval to stop the color changing effect 

const body = document.body;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
let timer;

function startTimer() {
  if (!timer) {
    timer = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
}

function stopTimer() {
  clearInterval(timer);
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
