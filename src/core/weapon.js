export const WeaponType = Object.freeze({
  DAGGER: 'dagger',
  SWORD: 'sword',
  SPEAR: 'spear',
  AXE: 'axe',
  HAMMER: 'hammer',
  BOW: 'bow',
  SLING: 'sling',
});

export class Weapon {
  constructor({ id, name, type, damage, speed, range, durability }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.speed = speed;
    this.range = range;
    this.durability = durability;
    this.maxDurability = durability;
  }

  use() {
    this.durability = Math.max(0, this.durability - 1);
  }

  isBroken() {
    return this.durability <= 0;
  }

  repair(amount) {
    this.durability = Math.min(this.maxDurability, this.durability + amount);
  }
}

export const weapons = {
  stone_dagger: new Weapon({ id: 'stone_dagger', name: 'Stone Dagger', type: WeaponType.DAGGER, damage: 3, speed: 1.5, range: 1.5, durability: 40 }),
  stone_sword: new Weapon({ id: 'stone_sword', name: 'Stone Sword', type: WeaponType.SWORD, damage: 5, speed: 1.0, range: 2.5, durability: 60 }),
  stone_spear: new Weapon({ id: 'stone_spear', name: 'Stone Spear', type: WeaponType.SPEAR, damage: 6, speed: 0.8, range: 3.0, durability: 50 }),
  stone_axe: new Weapon({ id: 'stone_axe', name: 'Stone Axe', type: WeaponType.AXE, damage: 6, speed: 0.9, range: 2.0, durability: 70 }),
  stone_hammer: new Weapon({ id: 'stone_hammer', name: 'Stone Hammer', type: WeaponType.HAMMER, damage: 7, speed: 0.7, range: 2.0, durability: 80 }),
  short_bow: new Weapon({ id: 'short_bow', name: 'Short Bow', type: WeaponType.BOW, damage: 4, speed: 1.2, range: 20, durability: 50 }),
  sling: new Weapon({ id: 'sling', name: 'Sling', type: WeaponType.SLING, damage: 3, speed: 1.3, range: 15, durability: 30 }),
};

export function getWeapon(id) {
  const w = weapons[id];
  if (!w) return undefined;
  // Return a fresh copy so weapon state isn't shared
  return new Weapon({ id: w.id, name: w.name, type: w.type, damage: w.damage, speed: w.speed, range: w.range, durability: w.maxDurability });
}
