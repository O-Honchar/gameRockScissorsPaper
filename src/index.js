// 'use strict';
import printMe from './scripts/print.js';
import './main.scss';

asdasdasd;

const sum = (a, b) => a + b;
console.log(sum(3, 5));

function component() {
  const element = document.createElement('div');
  const arr = ['Hello', 'webpack', '!'];
  element.innerHTML = arr.join(' ');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
