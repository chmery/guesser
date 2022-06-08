const hintNumber = document.querySelector('.container__hint-number');
const hintOutput = document.querySelector('.container__text-hint');
const hintBtn = document.querySelector('#get-hint');
const typeContainer = document.querySelector('.container__type');
const typeOutput = document.querySelector('#type');
const attemptOutput = document.querySelector('#attempts');
const input = document.querySelector('.container__input');

let randomItem = Math.floor(Math.random()*passwords.length);

let attemptCount = 1;
let hintArray = 0;
let hintCount = hintArray + 1;

hintOutput.innerHTML = passwords[randomItem].hints[hintArray];
hintNumber.innerHTML = "Hint " + hintCount;

const typeChecker = (randomItem) => {
    if (passwords[randomItem].type == "easy"){
        typeContainer.setAttribute('class', 'container__type container__type--easy')
        typeOutput.innerHTML = "Easy";
    } else if (passwords[randomItem].type == "medium"){
        typeContainer.setAttribute('class', 'container__type container__type--medium')
        typeOutput.innerHTML = "Medium";
    } else {
        typeContainer.setAttribute('class', 'container__type container__type--hard')
        typeOutput.innerHTML = "Hard";
    }
}

typeChecker(randomItem);

const reset = () => {
    randomItem = Math.floor(Math.random()*passwords.length);
    typeChecker(randomItem)
    hintCount = 1;
    hintArray = 0;
    attemptCount = 1;
    hintOutput.innerHTML = passwords[randomItem].hints[hintArray];
    hintNumber.innerHTML = "Hint " + hintCount;
    attemptOutput.innerHTML = attemptCount
}

const getHint = () => {
    if(hintArray < 4) {
        hintArray++
        hintCount++
        hintOutput.innerHTML = passwords[randomItem].hints[hintArray];
        hintNumber.innerHTML = "Hint " + hintCount;
        if (passwords[randomItem].type == "easy"){
            attemptCount += 6
            attemptOutput.innerHTML = attemptCount
        } else if (passwords[randomItem].type == "medium"){
            attemptCount += 4
            attemptOutput.innerHTML = attemptCount
        } else {
            attemptCount += 2
            attemptOutput.innerHTML = attemptCount
        }
    }

    if (hintArray == 4) {
        alert("This is your last hint. You have to guess now!")
    }
}

hintBtn.addEventListener('click', getHint)
resetBtn.addEventListener('click', reset)


