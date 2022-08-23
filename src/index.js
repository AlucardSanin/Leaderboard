import './style.css';
import { score } from './score.js';

const left = document.getElementById('left');
const table = document.createElement('ul');

for (let i = 0; i < 7; i += 1) {
  const list = document.createElement('li');
  list.innerHTML = `Name: ${score[i]}`;
  table.appendChild(list);
}
left.appendChild(table);
