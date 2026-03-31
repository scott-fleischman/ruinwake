export const EquipSlot = Object.freeze({
  MAIN_HAND: 'main_hand',
  OFF_HAND: 'off_hand',
  HEAD: 'head',
  CHEST: 'chest',
  LEGS: 'legs',
  FEET: 'feet',
  ACCESSORY: 'accessory',
});

const ALL_SLOTS = Object.values(EquipSlot);

export class Equipment {
  constructor() {
    this._slots = new Map();
    for (const slot of ALL_SLOTS) {
      this._slots.set(slot, null);
    }
  }

  get(slot) {
    return this._slots.get(slot) || null;
  }

  equip(item) {
    const prev = this._slots.get(item.slot) || null;
    this._slots.set(item.slot, item);
    return prev;
  }

  unequip(slot) {
    const item = this._slots.get(slot) || null;
    this._slots.set(slot, null);
    return item;
  }

  getTotalArmor() {
    let total = 0;
    for (const item of this._slots.values()) {
      if (item && item.armor) total += item.armor;
    }
    return total;
  }

  getEquippedItems() {
    const items = [];
    for (const item of this._slots.values()) {
      if (item) items.push(item);
    }
    return items;
  }
}
