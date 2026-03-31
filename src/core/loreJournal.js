export const LoreCategory = Object.freeze({
  HISTORY: 'history',
  INSCRIPTION: 'inscription',
  SONG: 'song',
  MAP_NOTE: 'map_note',
  RELIC_VISION: 'relic_vision',
});

export class LoreEntry {
  constructor({ id, title, text, category }) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.category = category;
  }
}

export class LoreJournal {
  constructor() {
    this._entries = new Map();
  }

  addEntry(entry) {
    if (this._entries.has(entry.id)) return false;
    this._entries.set(entry.id, entry);
    return true;
  }

  hasEntry(id) {
    return this._entries.has(id);
  }

  getEntries() {
    return Array.from(this._entries.values());
  }

  getByCategory(category) {
    return this.getEntries().filter(e => e.category === category);
  }

  serialize() {
    return this.getEntries().map(e => ({
      id: e.id,
      title: e.title,
      text: e.text,
      category: e.category,
    }));
  }

  deserialize(data) {
    for (const d of data) {
      this.addEntry(new LoreEntry(d));
    }
  }
}
