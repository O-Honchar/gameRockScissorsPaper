// counter.js
'use strict';

const createCounter = () => {
        let privateCounter = 0;
        const increment = (reset = 1) => {
            privateCounter = (privateCounter + 1) * reset;
            return privateCounter;
        }
        return increment;
}

export default createCounter;
