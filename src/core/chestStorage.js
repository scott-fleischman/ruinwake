/**
 * Per-position chest item storage.
 * Each chest in the world has its own inventory keyed by (x,y,z).
 */
export class ChestStorage {
  constructor() {
    this._chests = new Map();
  }

  _key(x, y, z) {
    return `${x},${y},${z}`;
  }

  _getOrCreate(x, y, z) {
    const key = this._key(x, y, z);
    if (!this._chests.has(key)) {
      this._chests.set(key, []);
    }
    return this._chests.get(key);
  }

  addItem(x, y, z, type, count) {
    const items = this._getOrCreate(x, y, z);
    const existing = items.find(i => i.type === type);
    if (existing) {
      existing.count += count;
    } else {
      items.push({ type, count });
    }
  }

  getItems(x, y, z) {
    const key = this._key(x, y, z);
    return this._chests.get(key) || [];
  }

  takeItem(x, y, z, type) {
    const key = this._key(x, y, z);
    const items = this._chests.get(key);
    if (!items) return null;
    const idx = items.findIndex(i => i.type === type);
    if (idx === -1) return null;
    const taken = items.splice(idx, 1)[0];
    return taken;
  }
}
