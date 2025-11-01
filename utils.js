export const random = (num) => Math.floor(Math.random() * num + 1);

export function logFight(name, prev, now, dmg) {
  console.log(`${name}: -${dmg} HP (${prev} → ${now})`);
}