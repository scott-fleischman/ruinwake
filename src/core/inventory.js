export class Inventory {
  constructor(maxSlots) {
    this.maxSlots = maxSlots;
    this.stacks = new Map();
  }

  count(itemType) {
    return this.stacks.get(itemType) || 0;
  }

  add(itemType, amount) {
    this.stacks.set(itemType, this.count(itemType) + amount);
  }

  remove(itemType, amount) {
    const current = this.count(itemType);
    if (current < amount) return false;
    const remaining = current - amount;
    if (remaining === 0) {
      this.stacks.delete(itemType);
    } else {
      this.stacks.set(itemType, remaining);
    }
    return true;
  }

  getItems() {
    const items = [];
    for (const [type, count] of this.stacks) {
      items.push({ type, count });
    }
    return items;
  }
}
