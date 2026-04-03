import { dist } from './math3d.js';

const RESTORATION_RADIUS = 30;

export const RESTORATION_STAGES = ['ruins', 'cleared', 'foundation', 'walls', 'complete'];

export class RestorableSite {
  constructor({ id, name, description, position, requirements, stageRequirements }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.position = position || { x: 0, y: 0, z: 0 };
    this.requirements = requirements;
    this.stageRequirements = stageRequirements || null;
    this.currentStage = 'ruins';
  }

  get restored() {
    return this.currentStage === 'complete';
  }

  set restored(val) {
    if (val) this.currentStage = 'complete';
    else if (this.currentStage === 'complete') this.currentStage = 'ruins';
  }

  getStage() {
    return this.currentStage;
  }

  _nextStage() {
    const idx = RESTORATION_STAGES.indexOf(this.currentStage);
    if (idx < 0 || idx >= RESTORATION_STAGES.length - 1) return null;
    return RESTORATION_STAGES[idx + 1];
  }

  canAdvanceStage(inventory) {
    const next = this._nextStage();
    if (!next) return false;
    const reqs = this.stageRequirements && this.stageRequirements[next];
    if (!reqs) return false;
    for (const req of reqs) {
      if (inventory.count(req.type) < req.count) return false;
    }
    return true;
  }

  advanceStage(inventory) {
    const next = this._nextStage();
    if (!next) return false;
    if (!this.canAdvanceStage(inventory)) return false;
    const reqs = this.stageRequirements[next];
    for (const req of reqs) {
      inventory.remove(req.type, req.count);
    }
    this.currentStage = next;
    return true;
  }

  canRestore(inventory) {
    for (const req of this.requirements) {
      if (inventory.count(req.type) < req.count) {
        return false;
      }
    }
    return true;
  }

  restore(inventory) {
    if (this.restored) return false;
    if (!this.canRestore(inventory)) return false;

    for (const req of this.requirements) {
      inventory.remove(req.type, req.count);
    }
    this.restored = true;
    return true;
  }
}

export class RestorationSystem {
  constructor(sites) {
    this._sites = sites;
  }

  getSite(id) {
    return this._sites.find(s => s.id === id);
  }

  getCorruptionReduction(position) {
    let total = 0;
    for (const site of this._sites) {
      if (!site.restored) continue;
      const d = dist(position, site.position);
      if (d <= RESTORATION_RADIUS) {
        total += 1 - (d / RESTORATION_RADIUS);
      }
    }
    return total;
  }
}
