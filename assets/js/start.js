const start = document.querySelector('#start-guessing');
const startContainer = document.querySelector('#start-container');
const guesserContainer = document.querySelector('#guesser-container');

start.addEventListener('click', () => {
    startContainer.classList.add('container--inactive');
    guesserContainer.classList.remove('container--inactive')
    resetTimer();
})