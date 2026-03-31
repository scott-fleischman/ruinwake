export const ToolType = Object.freeze({
  PICKAXE: 'pickaxe',
  AXE: 'axe',
  SWORD: 'sword',
  HAMMER: 'hammer',
  DAGGER: 'dagger',
  SPEAR: 'spear',
  BOW: 'bow',
  SLING: 'sling',
});

export class Tool {
  constructor({ type, damage, durability, miningSpeed = 1.0 }) {
    this.type = type;
    this.damage = damage;
    this.durability = durability;
    this.maxDurability = durability;
    this.miningSpeed = miningSpeed;
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
