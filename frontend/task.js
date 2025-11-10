let timerInterval;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");

function updateTimerDisplay() {
  timerDisplay.textContent = 
    `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
    updateTimerDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

startBtn.addEventListener("click", startTimer);

submitBtn.addEventListener("click", () => {
  stopTimer();
  alert(`Test submitted! Total time: ${timerDisplay.textContent}`);
});
