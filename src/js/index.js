// index.js
'use strict';

// import './../scss/main.scss';

import mChoice from './randomizer';
import {game, reset} from './game';

const buttons = document.querySelector('#buttons');
const uChoice = event => event.target.dataset.choice;
const minRound = 1;
const maxRound = 3;

function buttonsHandler(event) {
    let userChoice = uChoice(event);
    let machineChoice = mChoice(minRound, maxRound);
    if (userChoice === 'Reset') {
        reset();
    } else {
        game(userChoice, machineChoice);
    }
}

buttons.addEventListener('click', buttonsHandler);
