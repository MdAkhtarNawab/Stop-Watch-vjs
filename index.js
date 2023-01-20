const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const spanMs = document.getElementById("spanMs");

let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;
let timerId;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);

function stopTimer() {
  clearInterval(timerId);
  timerDisplay.innerHTML = "00:00:00";
  hrs = 0;
  mins = 0;
  secs = 0;
}

function startTimer() {
  function start() {
    if (ms >= 99) {
      console.log(ms);
      ms = 0;
      secs += 1;
    }
    if (secs == 60) {
      secs = 0;
      mins += 1;
    }
    if (mins == 60) {
      mins = 0;
      hrs += 1;
    }
    ms = ms + 1;

    const convertedSecs = secs < 10 ? "0" + secs : secs;
    const convertedMins = mins < 10 ? "0" + mins : mins;
    const convertedHrs = hrs < 10 ? "0" + hrs : hrs;

    timerDisplay.innerHTML = `${
      convertedHrs == 0 ? " " : convertedHrs + ":"
    }${convertedMins}:${convertedSecs}:${ms < 10 ? "0" + ms : ms}`;
    //   timerDisplay.innerHTML = `${convertedHrs==0?' ':convertedHrs+':'}${convertedMins}:${convertedSecs}`;
    //   spanMs.innerText=`:${ms}`
  }

  timerId = setInterval(start, 10);
}

function pauseTimer() {
  clearInterval(timerId);
}
