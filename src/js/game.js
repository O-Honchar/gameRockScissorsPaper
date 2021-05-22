// game.js
'use strict';

import createCounter from './counter';
import {renderRound, renderFinal, cleanResults} from './rendering';

const roundsCounter = createCounter();
const userCounter = createCounter();
const machineCounter = createCounter();
const finalRound = 3;
let round = 0;
let userScore = 0;
let machineScore = 0;
let wonOrLost = '';

export const game = (userChoice, machineChoice) => {
        if (round > finalRound - 1) {
            return;
        }
        switch (true) {
            case userChoice === 'Scissors' && machineChoice === 'Paper' ||
                 userChoice === 'Paper' && machineChoice === 'Rock' ||
                 userChoice === 'Rock' && machineChoice === 'Scissors':
                    wonOrLost = 'WON'
                    round = roundsCounter();
                    userScore = userCounter();
                    renderRound(round, userChoice, machineChoice, wonOrLost);                
                    break;
            case userChoice === 'Paper' && machineChoice === 'Scissors' ||
                 userChoice === 'Rock' && machineChoice === 'Paper' ||
                 userChoice === 'Scissors' && machineChoice === 'Rock':
                    wonOrLost = 'LOST'
                    round = roundsCounter();
                    machineScore = machineCounter();
                    renderRound(round, userChoice, machineChoice, wonOrLost);                
                    break;            
            default:
                    alert(`${userChoice} vs ${machineChoice},\nDead heat. Try again!`);
        }
        if (round === finalRound && userScore > machineScore) {
            wonOrLost = 'You are the WINNER!';
            renderFinal(userScore, machineScore, wonOrLost);
        }
        if (round === finalRound && machineScore > userScore) {
            wonOrLost = 'Sorry, You lost.';
            renderFinal(userScore, machineScore, wonOrLost);
        }
}

export const reset = () => {
        round = 0;
        userScore = 0;
        machineScore = 0;
        wonOrLost = '';
        roundsCounter(0);
        userCounter(0);
        machineCounter(0);
        cleanResults();
}
