import { dist } from './math3d.js';
import { BlockType } from './block.js';

const RESTORATION_RADIUS = 30;

export const RESTORATION_STAGES = ['ruins', 'cleared', 'foundation', 'walls', 'complete'];

const STAGE_CORRUPTION_WEIGHTS = {
  ruins: 0,
  cleared: 0.1,
  foundation: 0.3,
  walls: 0.6,
  complete: 1.0,
};

export const STAGE_UNLOCKS = {
  cleared: { bed: true },
  foundation: { storage: true },
  walls: { merchant: true, recipes: true },
  complete: { fastTravel: true, patrol: true, corruptionReduction: true },
};

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

  getUnlockedServices() {
    const idx = RESTORATION_STAGES.indexOf(this.currentStage);
    if (idx <= 0) return {};
    const services = {};
    for (let i = 1; i <= idx; i++) {
      const stage = RESTORATION_STAGES[i];
      const unlocks = STAGE_UNLOCKS[stage];
      if (unlocks) Object.assign(services, unlocks);
    }
    return services;
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
    // If site has staged requirements, advance through all stages at once
    if (this.stageRequirements) {
      let advanced = false;
      while (this.currentStage !== 'complete') {
        if (!this.advanceStage(inventory)) return advanced;
        advanced = true;
      }
      return advanced;
    }
    // Legacy path: flat requirements, single jump to complete
    if (!this.canRestore(inventory)) return false;
    for (const req of this.requirements) {
      inventory.remove(req.type, req.count);
    }
    this.currentStage = 'complete';
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

  getSaferTravelRadius(site) {
    const weight = STAGE_CORRUPTION_WEIGHTS[site.currentStage] || 0;
    return weight * RESTORATION_RADIUS;
  }

  getCorruptionReduction(position) {
    let total = 0;
    for (const site of this._sites) {
      const stageWeight = STAGE_CORRUPTION_WEIGHTS[site.currentStage] || 0;
      if (stageWeight === 0) continue;
      const d = dist(position, site.position);
      if (d <= RESTORATION_RADIUS) {
        total += stageWeight * (1 - (d / RESTORATION_RADIUS));
      }
    }
    return total;
  }
}

// ─── Restoration site rewards ─────────────────────────────────────────────

const SITE_NAMES = {
  starter_watchpost: 'Watch-Post',
  roadside_hall: 'Ranger Hall',
  mountain_workshop: 'Mountain Workshop',
  forest_beacon: 'Forest Beacon',
  ward_bastion: 'Ward Bastion',
};

export function getRestorationRewards(siteId) {
  const siteName = SITE_NAMES[siteId] || siteId;
  return {
    fastTravel: true,
    merchant: {
      id: `${siteId}_merchant`,
      name: `${siteName} Merchant`,
      position: null,
      factionId: null,
      dialogue: {
        default: `Welcome to the restored ${siteName}. What would you like to trade?`,
      },
    },
    message: `Site Restored! Benefits: fast travel, merchant, safe bed, storage.`,
    roofBlock: BlockType.OAK_PLANKS,
  };
}
