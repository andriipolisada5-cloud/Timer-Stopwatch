
let timerSeconds = 5 * 60;
let timerInterval = null;
let timerRunning = false;

const timerDisplay = document.getElementById("timerDisplay");

function updateTimerDisplay() {
    let minutes = Math.floor(timerSeconds / 60);
    let seconds = timerSeconds % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

document.getElementById("startTimer").addEventListener("click", function () {

    if (timerRunning) return;

    let minutesInput = document.getElementById("minutes").value;
    let secondsInput = document.getElementById("seconds").value;

    if (!timerInterval && (minutesInput || secondsInput)) {
        timerSeconds =
            Number(minutesInput || 0) * 60 +
            Number(secondsInput || 0);

        updateTimerDisplay();
    }

    if (timerSeconds <= 0) return;

    timerRunning = true;

    timerInterval = setInterval(function () {

        timerSeconds--;

        updateTimerDisplay();

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerRunning = false;

            alert("Time's up!");
        }

    }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", function () {

    clearInterval(timerInterval);
    timerInterval = null;
    timerRunning = false;
});

document.getElementById("resetTimer").addEventListener("click", function () {

    clearInterval(timerInterval);

    timerInterval = null;
    timerRunning = false;

    timerSeconds = 5 * 60;

    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    updateTimerDisplay();
});



let stopwatchSeconds = 0;
let stopwatchInterval = null;
let stopwatchRunning = false;

const stopwatchDisplay =
    document.getElementById("stopwatchDisplay");

function updateStopwatchDisplay() {

    let hours = Math.floor(stopwatchSeconds / 3600);

    let minutes =
        Math.floor((stopwatchSeconds % 3600) / 60);

    let seconds = stopwatchSeconds % 60;

    stopwatchDisplay.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

document.getElementById("startStopwatch")
    .addEventListener("click", function () {

        if (stopwatchRunning) return;

        stopwatchRunning = true;

        stopwatchInterval = setInterval(function () {

            stopwatchSeconds++;

            updateStopwatchDisplay();

        }, 1000);
    });

document.getElementById("pauseStopwatch")
    .addEventListener("click", function () {

        clearInterval(stopwatchInterval);

        stopwatchInterval = null;
        stopwatchRunning = false;
    });

document.getElementById("resetStopwatch")
    .addEventListener("click", function () {

        clearInterval(stopwatchInterval);

        stopwatchInterval = null;
        stopwatchRunning = false;

        stopwatchSeconds = 0;

        updateStopwatchDisplay();
    });



const timerTab = document.getElementById("timerTab");
const stopwatchTab = document.getElementById("stopwatchTab");

const timerSection = document.getElementById("timerSection");
const stopwatchSection =
    document.getElementById("stopwatchSection");

timerTab.addEventListener("click", function () {

    timerTab.classList.add("active");
    stopwatchTab.classList.remove("active");

    timerSection.classList.remove("hidden");
    stopwatchSection.classList.add("hidden");
});

stopwatchTab.addEventListener("click", function () {

    stopwatchTab.classList.add("active");
    timerTab.classList.remove("active");

    stopwatchSection.classList.remove("hidden");
    timerSection.classList.add("hidden");
});