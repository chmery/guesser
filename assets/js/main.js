const hintNumber = document.querySelector('.container__hint-number');
const hintOutput = document.querySelector('.container__text-hint');
const hintBtn = document.querySelector('#get-hint');
const typeContainer = document.querySelector('.container__type');
const typeOutput = document.querySelector('#type');
const attemptOutput = document.querySelector('#attempts');
const input = document.querySelector('.container__input');
const guessBtn = document.querySelector('#guess');
const hintContainer = document.querySelector('.container__hint');

// Win output variables
const winType = document.querySelector('#modal-win-type');
const winTries = document.querySelector('#modal-win-tries');
const winTime = document.querySelector('#modal-win-time');


let randomItem = Math.floor(Math.random()*words.length);

let attemptCount = 0;
let hintArray = 0;
let hintCount = hintArray + 1;

hintOutput.innerHTML = words[randomItem].hints[hintArray];
hintNumber.innerHTML = "Hint " + hintCount;
attemptOutput.innerHTML = attemptCount;

const typeChecker = (randomItem) => {
    if (words[randomItem].type == "easy"){
        typeContainer.setAttribute('class', 'container__type container__type--easy')
        typeOutput.innerHTML = "Easy";
    } else if (words[randomItem].type == "medium"){
        typeContainer.setAttribute('class', 'container__type container__type--medium')
        typeOutput.innerHTML = "Medium";
    } else {
        typeContainer.setAttribute('class', 'container__type container__type--hard')
        typeOutput.innerHTML = "Hard";
    }
}

typeChecker(randomItem);

const reset = () => {
    randomItem = Math.floor(Math.random()*words.length);
    typeChecker(randomItem)
    resetTimer()
    input.value = "";
    attemptCount = 0;
    hintArray = 0;
    hintCount = 1;
    hintContainer.animate(hintContainerFrames, hintContainerDuration)
    hintOutput.innerHTML = words[randomItem].hints[hintArray];
    hintNumber.innerHTML = "Hint " + hintCount;
    attemptOutput.innerHTML = attemptCount;
}

const getHint = () => {
    hintBtn.blur()
    if(hintArray < 4) {
        hintArray++
        hintCount++
        hintOutput.innerHTML = words[randomItem].hints[hintArray];
        hintNumber.innerHTML = "Hint " + hintCount;
        hintContainer.animate(hintContainerFrames, hintContainerDuration)
        if (words[randomItem].type == "easy"){
            attemptCount += 6
            attemptOutput.innerHTML = attemptCount
        } else if (words[randomItem].type == "medium"){
            attemptCount += 4
            attemptOutput.innerHTML = attemptCount
        } else {
            attemptCount += 2
            attemptOutput.innerHTML = attemptCount
        }
    }

    if (hintArray == 4) {
        hintArray = 4;
        showHintsLimitModal();
    }
}

const guess = () => {
    guessBtn.blur()
    if(input.value.toLowerCase() == words[randomItem].keyword){
        attemptCount++
        winType.innerHTML = words[randomItem].type
        winTries.innerHTML = attemptCount + " tries"
        if(minutes == 0) {
            winTime.innerHTML = seconds + " seconds."
        } else {
            winTime.innerHTML = minutes + " minute/s and " + seconds + " seconds."
        }
        showWinModal()
    }

    if (input.value.toLowerCase() != words[randomItem].keyword){
        attemptCount++
        attemptOutput.innerHTML = attemptCount;
        guesserContainer.animate(guesserContainerFrames, guesserContainerDuration);
    }

    if (input.value.toLowerCase() != words[randomItem].keyword && hintArray == 4){
        showLoseModal()
    }
}

hintBtn.addEventListener('click', getHint)
resetBtn.addEventListener('click', reset)
guessBtn.addEventListener('click', guess)
window.addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        guess()
    }
})

