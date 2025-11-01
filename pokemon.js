export class Pokemon {
  constructor({name, hp, maxHP, type, selectors}) {
    this.name = name;
    this.hp = hp;
    this.maxHP = maxHP;
    this.type = type;

    this.elProgressbar = document.querySelector(selectors.hpBar);
    this.elHealth = document.querySelector(selectors.hpText);
    this.renderHP();
  }

  renderHP() {
    this.elProgressbar.style.width = (this.hp / this.maxHP) * 100 + '%';
    this.elHealth.innerText = `${this.name}: ${this.hp} / ${this.maxHP}`;
  }

  changeHP(damage, logCallback) {
    const prevHP = this.hp;
    this.hp = Math.max(this.hp - damage, 0);
    if (logCallback) logCallback(this.name, prevHP, this.hp, damage);
    this.renderHP();
  }

  heal(amount) {
    this.hp = Math.min(this.hp + amount, this.maxHP);
    this.renderHP();
  }
}