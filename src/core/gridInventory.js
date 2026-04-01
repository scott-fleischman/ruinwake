export class GridInventory {
  constructor(size) {
    this.size = size;
    this._slots = new Array(size).fill(null);
  }

  getSlot(index) {
    return this._slots[index] || null;
  }

  // Find first slot containing this item type, or -1
  _findSlot(type) {
    for (let i = 0; i < this.size; i++) {
      if (this._slots[i] && this._slots[i].type === type) return i;
    }
    return -1;
  }

  // Find first empty slot, or -1
  _findEmpty() {
    for (let i = 0; i < this.size; i++) {
      if (!this._slots[i]) return i;
    }
    return -1;
  }

  addItem(type, count) {
    // Try to stack with existing
    const existing = this._findSlot(type);
    if (existing >= 0) {
      this._slots[existing].count += count;
      return true;
    }
    // Use empty slot
    const empty = this._findEmpty();
    if (empty < 0) return false;
    this._slots[empty] = { type, count };
    return true;
  }

  removeItem(type, count) {
    const idx = this._findSlot(type);
    if (idx < 0) return false;
    if (this._slots[idx].count < count) return false;
    this._slots[idx].count -= count;
    if (this._slots[idx].count <= 0) {
      this._slots[idx] = null;
    }
    return true;
  }

  moveSlot(fromIdx, toIdx) {
    const temp = this._slots[toIdx];
    this._slots[toIdx] = this._slots[fromIdx];
    this._slots[fromIdx] = temp;
  }

  count(type) {
    let total = 0;
    for (const slot of this._slots) {
      if (slot && slot.type === type) total += slot.count;
    }
    return total;
  }

  getItems() {
    return this._slots.filter(s => s !== null).map(s => ({ ...s }));
  }

  // Compatibility: add/remove work like the old Inventory
  add(type, count) { return this.addItem(type, count); }
  remove(type, count) { return this.removeItem(type, count); }
}
