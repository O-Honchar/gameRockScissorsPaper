// randomizer.js
'use strict';

const randomChoice = (min, max) => {
        const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (rnd === 1) {
            return 'Scissors';
        } else if (rnd === 2) {
            return 'Paper';
        } else {
            return 'Rock';
        }
}

export default randomChoice;
