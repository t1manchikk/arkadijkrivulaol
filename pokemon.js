export class Pokemon {
  constructor(name, max){
    this.name=name; this.maxHP=max; this.hp=max;
  }
  hit(d){ this.hp=Math.max(0,this.hp-d); }
  render(barSel,textSel){
    const bar=document.querySelector(barSel);
    const txt=document.querySelector(textSel);
    bar.style.width = (this.hp/this.maxHP*100)+'%';
    bar.style.background = this.hp< this.maxHP*0.3 ? 'red':'green';
    txt.textContent = this.hp + ' / ' + this.maxHP;
  }
}