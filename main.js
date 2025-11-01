import { Pokemon } from './pokemon.js';
import { random, logFight } from './utils.js';

const player1 = new Pokemon({
  name: "Pikachu",
  hp: 120,
  maxHP: 120,
  type: "electric",
  selectors: {
    hpBar: '#player1-health-bar',
    hpText: '#player1-health',
  }
});

const player2 = new Pokemon({
  name: "Charmander",
  hp: 110,
  maxHP: 110,
  type: "fire",
  selectors: {
    hpBar: '#player2-health-bar',
    hpText: '#player2-health',
  }
});

document.getElementById('attack-btn').addEventListener('click', () => {
  player1.changeHP(random(20), logFight);
  player2.changeHP(random(20), logFight);

  if (player1.hp === 0 || player2.hp === 0) {
    alert("Game Over");
  }
});