import './style.css';
import MarcoPolo from './APIset.js';

const left = document.getElementById('left');
const table = document.createElement('ul');

document.getElementById('refresh').addEventListener('click', () => {
  window.location.reload();
});

document.getElementById('submit').addEventListener('click', () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  MarcoPolo.addScore(user, score);
  const form = document.querySelector('form');
  form.reset();
});

const fillplayers = (obj) => {
  for (let i = 0; i < obj.result.length; i += 1) {
    const list = document.createElement('li');
    list.innerHTML = `<span>${obj.result[i].user}:</span><span> ${obj.result[i].score}</span>`;
    table.appendChild(list);
  }
  left.appendChild(table);
};

async function getplayers() {
  const idUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4nTGw7Pv17Te8sjkTexb/scores/';
  const response = await fetch(idUrl);
  const players = await response.json();
  fillplayers(players);
}

getplayers();