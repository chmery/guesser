const hintContainer = document.querySelector('.container__hint');
const hintNumber = document.querySelector('.container__hint-number');
const hintOutput = document.querySelector('.container__text-hint');
const hintBtn = document.querySelector('#get-hint');
const typeContainer = document.querySelector('.container__type');
const typeOutput = document.querySelector('#type');
const attemptOutput = document.querySelector('#attempts');
const input = document.querySelector('.container__input');
const guessBtn = document.querySelector('#guess');

// Win output variables.
const winType = document.querySelector('#modal-win-type');
const winAttempts = document.querySelector('#modal-win-attempts');
const winTime = document.querySelector('#modal-win-time');

let randomItem = Math.floor(Math.random()*words.length);
let attemptCount = 0;
let hintArray = 0;
let hintCount = hintArray + 1;

const setInitialState = () => {
    attemptCount = 0;
    hintArray = 0;
    hintCount = hintArray + 1;
    hintOutput.textContent = words[randomItem].hints[hintArray];
    hintNumber.textContent = `Hint ${hintCount}`;
    attemptOutput.textContent = attemptCount;
    input.value = "";
    hintContainer.animate(hintContainerFrames, hintContainerDuration);
};

setInitialState();

const difficultyCheck = (randomItem) => {
    const difficulty = words[randomItem].difficulty;
    const difficultyOutputFormat = difficulty[0].toUpperCase() + difficulty.substring(1);

    typeContainer.setAttribute('class', `container__type container__type--${difficulty}`);
    typeOutput.textContent = difficultyOutputFormat;
};

difficultyCheck(randomItem);

const reset = () => {
    randomItem = Math.floor(Math.random()*words.length);
    difficultyCheck(randomItem);
    setInitialState();
    resetTimer();
};

const getHint = () => {
    hintBtn.blur()
    if(hintArray < 4) {
        hintArray++;
        hintCount++;
        hintOutput.textContent = words[randomItem].hints[hintArray];
        hintNumber.textContent = `Hint ${hintCount}`;
        hintContainer.animate(hintContainerFrames, hintContainerDuration);
        if (words[randomItem].difficulty == "easy"){
            attemptCount += 6;
            attemptOutput.textContent = attemptCount;
        } else if (words[randomItem].difficulty == "medium"){
            attemptCount += 4;
            attemptOutput.textContent = attemptCount;
        } else {
            attemptCount += 2;
            attemptOutput.textContent = attemptCount;
        }
    }

    if (hintArray == 4) {
        hintArray = 4;
        showHintsLimitModal();
    }
};

const guess = () => {
    guessBtn.blur()
    if((input.value).toLowerCase() == words[randomItem].keyword){
        attemptCount++;
        winType.textContent = words[randomItem].difficulty;
        winAttempts.textContent = `${attemptCount} attempt/s`;
        if(minutes == 0) {
            winTime.textContent = `${seconds} seconds.`;
        } else {
            winTime.textContent = `${minutes} minute/s and ${seconds} seconds.`;
        }
        setTimeout(showWinModal, 10); 
    }

    if (input.value.toLowerCase() != words[randomItem].keyword){
        attemptCount++;
        attemptOutput.textContent = attemptCount;
        guesserContainer.animate(guesserContainerFrames, guesserContainerDuration);
    }

    if (input.value.toLowerCase() != words[randomItem].keyword && hintArray == 4){
        setTimeout(showLoseModal, 10);
    }
};

hintBtn.addEventListener('click', getHint);
resetBtn.addEventListener('click', reset);
guessBtn.addEventListener('click', guess);

window.addEventListener('keydown', function(event){
    if (event.key === 'Enter' && winModal.open) return;
    if (event.key === 'Enter' && hintsLimitModal.open) return;
    if (event.key === 'Enter' && loseModal.open) return;
    if (event.key === 'Enter' && infoModal.open) return;
    if (event.key === 'Enter') guess();
});

