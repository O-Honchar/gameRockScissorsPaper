// rendering.js
'use strict';

const results = document.querySelector('#results');

export const renderRound = (round, userChoice, machineChoice, wonOrLost) => results.insertAdjacentHTML('beforeend', 
    `
    <p>Round ${round}, ${userChoice} vs ${machineChoice}, You’ve ${wonOrLost}!</p>
    `
);

export const renderFinal = (userScore, machineScore, wonOrLost) => results.insertAdjacentHTML('beforeend', 
    `
    <p>${userScore} vs ${machineScore}, ${wonOrLost}</p>
    `
);

export const cleanResults = () => {
    while(results.firstChild) {
        results.removeChild(results.firstChild);
    }
};
