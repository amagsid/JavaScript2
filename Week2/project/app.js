//after a number of trials, I'm still struggling to get the clock working properly.
//I communicated about this with the HYF team and I'll keep working on it till it's complete.

const arrowDown = document.getElementById('minute-down')
 const arrowUp = document.getElementById('minute-up')
 const chosenMinutes = document.getElementById('chosen-minutes')
 const timerDisplay = document.getElementById('timer-display')
 const playBtn = document.getElementById('play')
 const pauseBtn = document.getElementById('pause')
 let number = 0;
 let minutes = parseInt(chosenMinutes.innerHTML)
 let seconds = Math.floor(minutes / 60)


 //a function that updates the timer input from the picker

 function updateTime(){
   let minutes = parseInt(chosenMinutes.innerHTML)
   let seconds = Math.floor(minutes / 60)
   timerDisplay.innerText = ` ${minutes}:${seconds} `
 }

//increase and decrease arrows 

//increase button function
function increaseMinute(){
  chosenMinutes.innerHTML =  number += 1 
    updateTime()
    }

//decrease button function
function decreaseMinute(){
  if (number === 0) {
    chosenMinutes.innerHTML = `can't let you go back in time`
  } else {
    chosenMinutes.innerText = number -= 1
  }
  updateTime() 
}

//Timer function
 function timerInit () {
   minutes = parseInt(chosenMinutes.innerHTML);
  var seconds = Math.floor(minutes / 60);
  setInterval(function() {
    timerDisplay.innerHTML = minutes + " : " + seconds;
    seconds--;

//numbers here were essentially a place holder
    if (sec == 00) {
      minutes --;
      seconds = 60;
      if (minutes == 0) {
        minute = 5;
      }
    }
  }, 1000);
}

//event listeners
arrowUp.addEventListener('click', increaseMinute)
arrowDown.addEventListener('click', decreaseMinute)
playBtn.addEventListener('click', timerInit)
//pauseBtn.addEventListener('click', pauseTimer)