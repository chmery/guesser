const minutesOutput = document.querySelector('#minutes');
const secondsOutput = document.querySelector('#seconds');
const tensOutput = document.querySelector('#tens');
const resetBtn = document.querySelector('#reset');

let minutes = 0;
let seconds = 0;
let tens = 0;

const startTimer = () => {
    tens++
    if(tens <= 9) {
        tensOutput.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        tensOutput.innerHTML = tens;
    }

    if(tens > 99) {
        tens = 0;
        seconds++;
        secondsOutput.innerHTML = "0" + seconds;
        tensOutput.innerHTML = "0" + tens;
    }

    if(seconds > 9) {
        secondsOutput.innerHTML = seconds;
    }

    if(seconds >= 59) {
        seconds = 0;
        minutes++;
        minutesOutput.innerHTML = "0" + minutes;
        secondsOutput.innerHTML = "0" + seconds;
    }

    if(minutes > 9) {
        minutesOutput.innerHTML = minutes;
    }
}

let Interval = setInterval(startTimer, 10);

const resetTimer = () => {
    minutes = 0;
    seconds = 0;
    tens = 0;
    minutesOutput.innerHTML = "00";
    secondsOutput.innerHTML = "00";
    tensOutput.innerHTML = "00";
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

resetBtn.addEventListener('click', resetTimer);









