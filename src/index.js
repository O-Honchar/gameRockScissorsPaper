// 'use strict';

const sum = (a, b) => a + b;
console.log(sum(3, 5));

function component() {
  const element = document.createElement('div');
  const arr = ['Hello', 'webpack'];
  element.innerHTML = arr.join(' ');
  return element;
}

document.body.appendChild(component());
