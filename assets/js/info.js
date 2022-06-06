const infoText = document.querySelector('#show-info');
const closeBtn = document.querySelector('.container__btn');
const info = document.querySelector('.info');

infoText.addEventListener('click', () => {
    info.showModal();
})

closeBtn.addEventListener('click', () => {
    info.close();
})


