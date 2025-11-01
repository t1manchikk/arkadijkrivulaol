import { Pokemon } from './pokemon.js';
import { random, logFight } from './utils.js';

let player1, player2;

function initGame() {
  player1 = new Pokemon({
    name: "Pikachu",
    hp: 120,
    maxHP: 120,
    type: "electric",
    selectors: { hpBar: '#player1-health-bar', hpText: '#player1-health' }
  });

  player2 = new Pokemon({
    name: "Charmander",
    hp: 125,
    maxHP: 125,
    type: "fire",
    selectors: { hpBar: '#player2-health-bar', hpText: '#player2-health' }
  });
}

document.getElementById('attack-btn').addEventListener('click', () => {
  player2.changeHP(random(30), logFight);
  player1.changeHP(random(25), logFight);
  if (player1.hp === 0 || player2.hp === 0) alert("⚠️ Game Over");
});

document.getElementById('heal-btn').addEventListener('click', () => {
  player1.heal(20);
});

document.getElementById('reset-btn').addEventListener('click', initGame);

initGame();