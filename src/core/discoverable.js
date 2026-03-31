import { dist } from './math3d.js';

export const DiscoverableType = Object.freeze({
  CACHE: 'cache',
  RUIN: 'ruin',
  RELIC_FRAGMENT: 'relic_fragment',
  ROADSTONE: 'roadstone',
  RECIPE_TABLET: 'recipe_tablet',
  LORE_BOOK: 'lore_book',
  INSCRIPTION: 'inscription',
});

export class Discoverable {
  constructor({ id, type, position, reward = [] }) {
    this.id = id;
    this.type = type;
    this.position = { ...position };
    this.reward = reward;
    this.discovered = false;
  }

  discover() {
    if (this.discovered) return false;
    this.discovered = true;
    return true;
  }
}

export class DiscoverySystem {
  constructor(discoverables) {
    this._items = discoverables;
  }

  get(id) {
    return this._items.find(d => d.id === id);
  }

  findNearby(position, radius) {
    return this._items.filter(d =>
      !d.discovered && dist(position, d.position) <= radius
    );
  }

  getDiscoveredCount() {
    return this._items.filter(d => d.discovered).length;
  }

  getTotalCount() {
    return this._items.length;
  }
}
