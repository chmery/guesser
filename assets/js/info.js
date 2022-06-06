const openInfo = document.querySelectorAll('#show-info');
const closeInfo = document.querySelector('.container__btn');
const info = document.querySelector('.info');

openInfo.forEach(item => {
    item.addEventListener('click', () => {
        info.showModal();
    })
})
 
closeInfo.addEventListener('click', () => {
    info.close();
})


