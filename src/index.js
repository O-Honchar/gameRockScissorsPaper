// 'use strict';
import './style.css';

const sum = (a, b) => a + b;
console.log(sum(3, 5));

function component() {
  const element = document.createElement('div');
  const arr = ['Hello', 'webpack', '!'];
  element.innerHTML = arr.join(' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
