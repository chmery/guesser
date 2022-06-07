const hintNumber = document.querySelector('.container__hint-number');
const hintOutput = document.querySelector('.container__text-hint');
const hintBtn = document.querySelector('#get-hint');
const typeContainer = document.querySelector('.container__type');
const typeOutput = document.querySelector('#type');
const input = document.querySelector('.container__input');

const randomItem = Math.floor(Math.random()*passwords.length);

let hintArray = 0;
hintOutput.innerHTML = passwords[randomItem].hints[hintArray];

let hintCount = hintArray + 1;
hintNumber.innerHTML = "Hint " + hintCount;

let typeChecker = (randomItem) => {
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

    console.log('test')
}

typeChecker(randomItem);

const hints = () => {
    if(input.value == passwords[randomItem].keyword){
        alert("Good answer")
    }
    
    if (input.value != passwords[randomItem].keyword){
        hintArray++
        hintCount++
        hintOutput.innerHTML = passwords[randomItem].hints[hintArray];
        hintNumber.innerHTML = "Hint " + hintCount;
    } 

    if (input.value != passwords[randomItem].keyword && hintArray >= 5) {
        alert("Hint limit")
        resetHints()
        resetTimer()
    }
}

const resetHints = () => {
    const randomItem = Math.floor(Math.random()*passwords.length);
    typeChecker(randomItem)
    hintCount = 1;
    hintArray = 0;
    hintOutput.innerHTML = passwords[randomItem].hints[hintArray];
    hintNumber.innerHTML = "Hint " + hintCount;
}

hintBtn.addEventListener('click', hints)
resetBtn.addEventListener('click', resetHints)
