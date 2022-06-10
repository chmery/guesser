const hintContainer = document.querySelector('.container__hint');
const hintNumber = document.querySelector('.container__hint-number');
const hintOutput = document.querySelector('.container__text-hint');
const hintBtn = document.querySelector('#get-hint');
const typeContainer = document.querySelector('.container__difficulty');
const typeOutput = document.querySelector('#difficulty');
const attemptOutput = document.querySelector('#attempts');
const input = document.querySelector('.container__input');
const drawWordBtn = document.querySelector('#draw-word');
const guessedOutput = document.querySelector('#guessed');
const wordsLeftOutput = document.querySelector('#modal-guessed-left');
const guessBtn = document.querySelector('#guess');

const winAttemptsOutput = document.querySelector('#modal-win-attempts');
const winTimeOutput = document.querySelector('#modal-win-time');

let randomItem = Math.floor(Math.random()*words.length);
let guessed = 0;
let attemptCount = 0;
let hintArray = 0;
let hintCount = hintArray + 1;

const setInitialState = () => {
    guessed = 0;
    attemptCount = 0;
    hintArray = 0;
    hintCount = hintArray + 1;
    hintOutput.textContent = words[randomItem].hints[hintArray];
    hintNumber.textContent = `Hint ${hintCount}`;
    attemptOutput.textContent = attemptCount;
    guessedOutput.textContent = `${guessed} / ${words.length}`;
    input.value = "";
};

setInitialState();

const setGuessedToTrue = (randomItem) => {
    words[randomItem].guessed = true;
};

const setNewHint = (randomItem) => {
    hintArray = 0;
    hintCount = hintArray + 1;
    hintOutput.textContent = words[randomItem].hints[hintArray];
    hintNumber.textContent = `Hint ${hintCount}`;
    input.value = ""; 
};

const setDifficulty = (randomItem) => {
    const difficulty = words[randomItem].difficulty;
    const difficultyOutputFormat = difficulty[0].toUpperCase() + difficulty.substring(1);
    typeContainer.setAttribute('class', `container__difficulty container__difficulty--${difficulty}`);
    typeOutput.textContent = difficultyOutputFormat;
};

setDifficulty(randomItem);

const drawWord = () => {
    randomItem = Math.floor(Math.random()*words.length);
    while(words[randomItem].guessed == true){
        randomItem = Math.floor(Math.random()*words.length);
    };
    setNewHint(randomItem);
    setDifficulty(randomItem);
    animateHintCointainer();
};

const reset = () => {
    randomItem = Math.floor(Math.random()*words.length);
    setDifficulty(randomItem);
    animateHintCointainer();
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
        animateHintCointainer();
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
    guessBtn.blur();
    if((input.value).toLowerCase() == words[randomItem].keyword){
        attemptCount++;
        guessed++;
        setGuessedToTrue(randomItem);
        attemptOutput.textContent = attemptCount;
        wordsLeftOutput.textContent = words.length - guessed;
        guessedOutput.textContent = `${guessed} / ${words.length}`;
        if (winModal.open == false && guessed < words.length) {
            setTimeout(showGuessedModal, 10);
        }
    }

    if (guessed == words.length) {
        winAttemptsOutput.textContent = `${attemptCount} attempt/s`;
        if(minutes == 0) {
            winTimeOutput.textContent = `${seconds} seconds.`;
        } else {
            winTimeOutput.textContent = `${minutes} minute/s and ${seconds} seconds.`;
        }
        setTimeout(showWinModal, 10); 
    }

    if (input.value.toLowerCase() != words[randomItem].keyword){
        attemptCount++;
        attemptOutput.textContent = attemptCount;
        animateGuesserContainer();
    }

    if (input.value.toLowerCase() != words[randomItem].keyword && hintArray == 4){
        setTimeout(showLoseModal, 10);
    }
};

hintBtn.addEventListener('click', getHint);
drawWordBtn.addEventListener('click', drawWord);
guessBtn.addEventListener('click', guess);

window.addEventListener('keydown', function(event){
    if (event.key === 'Enter' && winModal.open) return;
    if (event.key === 'Enter' && hintsLimitModal.open) return;
    if (event.key === 'Enter' && loseModal.open) return;
    if (event.key === 'Enter' && infoModal.open) return;
    if (event.key === 'Enter' && guessedModal.open) return;
    if (event.key === 'Enter') guess();
});
