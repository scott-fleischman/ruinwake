export class Inventory {
  constructor(maxSlots) {
    this.maxSlots = maxSlots;
    this.stacks = new Map();
    this._slots = new Array(maxSlots).fill(null); // type string or null
  }

  get size() {
    return this.maxSlots;
  }

  count(itemType) {
    return this.stacks.get(itemType) || 0;
  }

  add(itemType, amount) {
    const had = this.stacks.has(itemType);
    this.stacks.set(itemType, this.count(itemType) + amount);
    if (!had) {
      // Assign to first empty slot
      for (let i = 0; i < this.maxSlots; i++) {
        if (this._slots[i] === null) {
          this._slots[i] = itemType;
          break;
        }
      }
    }
  }

  remove(itemType, amount) {
    const current = this.count(itemType);
    if (current < amount) return false;
    const remaining = current - amount;
    if (remaining === 0) {
      this.stacks.delete(itemType);
      // Free the slot
      const idx = this._slots.indexOf(itemType);
      if (idx !== -1) this._slots[idx] = null;
    } else {
      this.stacks.set(itemType, remaining);
    }
    return true;
  }

  getSlot(index) {
    if (index < 0 || index >= this.maxSlots) return null;
    const type = this._slots[index];
    if (type === null) return null;
    return { type, count: this.count(type) };
  }

  moveSlot(from, to) {
    if (from < 0 || from >= this.maxSlots) return;
    if (to < 0 || to >= this.maxSlots) return;
    const tmp = this._slots[from];
    this._slots[from] = this._slots[to];
    this._slots[to] = tmp;
  }

  getItems() {
    const items = [];
    for (const [type, count] of this.stacks) {
      items.push({ type, count });
    }
    return items;
  }
}
