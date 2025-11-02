import { Pokemon } from './pokemon.js';
import { random } from './utils.js';

let p1, p2;
function start() {
  p1 = new Pokemon('Pikachu',120);
  p2 = new Pokemon('Charmander',120);

  document.querySelector('#name1').textContent = p1.name;
  document.querySelector('#name2').textContent = p2.name;
  p1.render('#hpbar1','#hptext1');
  p2.render('#hpbar2','#hptext2');
}

document.querySelector('#attack').onclick = () => {
  if(p1.hp<=0 || p2.hp<=0) return;
  let dmg = random(20);
  p2.hit(dmg);
  p2.render('#hpbar2','#hptext2');
  if(p2.hp<=0) return;
  let dmg2 = random(15);
  p1.hit(dmg2);
  p1.render('#hpbar1','#hptext1');
};

document.querySelector('#reset').onclick = start;

start();