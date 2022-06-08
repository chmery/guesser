const infoBtn = document.querySelectorAll('#show-info');
const infoModal = document.querySelector('#modal-info');
const hintsLimitModal = document.querySelector('#modal-hints-limit');
const winModal = document.querySelector('#modal-win');
const loseModal = document.querySelector('#modal-lose');

const closeInfoModal = document.querySelector('#close-modal-info');
const closeHintsLimitModal = document.querySelector('#close-modal-hints-limit');
const closeWinModal = document.querySelector('#close-modal-win');
const closeLoseModal = document.querySelector('#close-modal-lose');

const closeModalThenReset = (btn, modal) => {
    btn.addEventListener('click', () => {
        modal.close();
        reset();
    })
}

const closeModal = (btn, modal) => {
    btn.addEventListener('click', () => {
        modal.close();
    })
}

infoBtn.forEach(item => {
    item.addEventListener('click', () => {
        infoModal.showModal();
    })
})

closeInfoModal.addEventListener('click', () => {
    infoModal.close();
})

const showHintsLimitModal = () => {
    hintsLimitModal.showModal();
    closeModal(closeHintsLimitModal, hintsLimitModal)
}

const showWinModal = () => {
    winModal.showModal();
    closeModalThenReset(closeWinModal, winModal);
}

const showLoseModal = () => {
    loseModal.showModal();
    closeModalThenReset(closeLoseModal, loseModal)
}
 

