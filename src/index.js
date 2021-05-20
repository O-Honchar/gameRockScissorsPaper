// 'use strict';

const sum = (a, b) => a + b;

function component() {
  const element = document.createElement('div');
  const arr = ['Hello', 'webpack'];
  element.innerHTML = arr.join(' ');
  return element;
}

document.body.appendChild(component());
