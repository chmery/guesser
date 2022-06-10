const guesserContainerFrames = [
    {transform: 'translateX(10px)'},
    {transform: 'translateX(-10px)'},
    {transform: 'translateX(10px)'},
    {transform: 'translateX(-10px)'}
];

const guesserContainerDuration = {
    duration: 200,
    iterations: 1
};

const hintContainerFrames = [
    {transform: 'scale(0.8)'},
    {transform: 'scale(1)'}
];

const hintContainerDuration = {
    duration: 100,
    iterations: 1
}

const animateGuesserContainer = () => guesserContainer.animate(guesserContainerFrames, guesserContainerDuration);
const animateHintCointainer = () => hintContainer.animate(hintContainerFrames, hintContainerDuration);