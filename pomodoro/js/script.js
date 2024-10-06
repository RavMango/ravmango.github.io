// script.js

let timer;
let isRunning = false;
let workTime = 25 * 60; // 25 minutes in seconds
let currentTime = workTime;

// Update the timer display
function updateDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    document.getElementById('timer-display').textContent = 
        `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (currentTime > 0) {
                currentTime--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert('Time is up! Take a break!');
                resetTimer();
            }
        }, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    currentTime = workTime;
    updateDisplay();
}

// Attach event listeners to buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
