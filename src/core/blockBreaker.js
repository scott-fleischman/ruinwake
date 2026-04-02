import { BlockType } from './block.js';

// Break time in seconds per block type (lower = faster)
const BREAK_TIMES = {
  [BlockType.DIRT]: 0.4,
  [BlockType.GRASS]: 0.4,
  [BlockType.SAND]: 0.4,
  [BlockType.CLAY]: 0.5,
  [BlockType.GRAVEL]: 0.4,
  [BlockType.TALL_GRASS]: 0.1,
  [BlockType.LEAVES]: 0.2,
  [BlockType.MUD]: 0.4,
  [BlockType.SNOW]: 0.3,
  [BlockType.THATCH]: 0.3,
  [BlockType.REED]: 0.1,
  [BlockType.WOOD]: 0.8,
  [BlockType.BIRCH_WOOD]: 0.8,
  [BlockType.PLANKS]: 0.6,
  [BlockType.OAK_PLANKS]: 0.6,
  [BlockType.STONE]: 1.5,
  [BlockType.COBBLESTONE]: 1.2,
  [BlockType.STONE_BRICK]: 1.3,
  [BlockType.IRON_ORE]: 2.0,
  [BlockType.COPPER_ORE]: 1.8,
  [BlockType.COAL_ORE]: 1.5,
  [BlockType.GLASS]: 0.3,
  [BlockType.TORCH]: 0.1,
  [BlockType.CAMPFIRE]: 0.5,
  [BlockType.WORKBENCH]: 0.8,
  [BlockType.FORGE]: 2.0,
  [BlockType.KITCHEN]: 0.6,
  [BlockType.LOOM]: 0.5,
  [BlockType.RUNE_TABLE]: 1.5,
};

const DEFAULT_BREAK_TIME = 1.0;

export class BlockBreaker {
  constructor() {
    this._x = 0;
    this._y = 0;
    this._z = 0;
    this._blockType = 0;
    this._progress = 0;
    this._breakTime = 0;
    this._active = false;
  }

  isBreaking() {
    return this._active;
  }

  getProgress() {
    return this._progress;
  }

  getPosition() {
    return { x: this._x, y: this._y, z: this._z };
  }

  startBreak(x, y, z, blockType) {
    if (this._active && this._x === x && this._y === y && this._z === z) return;
    this._x = x;
    this._y = y;
    this._z = z;
    this._blockType = blockType;
    this._breakTime = BREAK_TIMES[blockType] || DEFAULT_BREAK_TIME;
    this._progress = 0;
    this._active = true;
  }

  tick(dt) {
    if (!this._active) return false;
    this._progress += dt / this._breakTime;
    if (this._progress >= 1) {
      this._active = false;
      this._progress = 0;
      return true; // block broken
    }
    return false;
  }

  cancel() {
    this._active = false;
    this._progress = 0;
  }
}
