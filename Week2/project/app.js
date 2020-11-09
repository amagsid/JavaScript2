// grabbing HTML elements
const arrowDown = document.getElementById('minute-down');
const arrowUp = document.getElementById('minute-up');
const sessionLengthIndicator = document.getElementById('session-length');
//buttons and timer minuite choice
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

// timer screen
const minutesIndicator = document.getElementById('minutes');
const secondsIndicator = document.getElementById('seconds');

let sessionLength = 1; // minutes
const intervalLength = 1; // seconds
let sessionIsOn = false;

// object returned by setInterval()
let interval = false;

// time object
const time = new Date();

//arrow up button function
function increaseMinute() {
  if (!sessionIsOn) {
    sessionLength++;
    sessionLengthIndicator.innerHTML = sessionLength;
    reset();
  }
}


////arrow down button function
function decreaseMinute() {
  if (!sessionIsOn && sessionLength > 0) {
    sessionLength--;
    sessionLengthIndicator.innerHTML = sessionLength;
    reset();
  }
}

function reset() {
  time.setMinutes(sessionLength);
  time.setSeconds(0);
  sessionIsOn = false;
  showTime();
}

function countdown() {
  if (time.getMinutes() === 0 && time.getSeconds() === 0) {
    stop();
    displayAlert();
  } else {
    time.setSeconds(time.getSeconds() - intervalLength);
    showTime();
  }
}
function showTime() {
  minutesIndicator.innerHTML = showTwoDigits(time.getMinutes());
  secondsIndicator.innerHTML = showTwoDigits(time.getSeconds());
}
function showTwoDigits(number) {
  return ('0' + number).slice(-2);
}
function displayAlert() {
  console.log("Time's up!");
}


function play() {
  if (!interval && sessionLength > 0) {
    interval = setInterval(countdown, 1000 * intervalLength);
    sessionIsOn = true;
  }
}
function stop() {
  if (interval || sessionIsOn) {
    clearInterval(interval);
    interval = false;
    reset();
  }
}
function pause() {
  if (interval) {
    clearInterval(interval);
    interval = false;
  }
}

//event listeners
window.addEventListener('DOMContentLoaded', reset);
arrowUp.addEventListener('click', increaseMinute);
arrowDown.addEventListener('click', decreaseMinute);

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);
