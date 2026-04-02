import { QuestStatus } from './quest.js';
import { isBlockSolid } from './block.js';

export class NPC {
  constructor({ id, name, position, factionId, dialogueId, dialogue = {}, trades = [] }) {
    this.id = id;
    this.name = name;
    this.position = { ...position };
    this.spawnPosition = { ...position };
    this.factionId = factionId;
    this.dialogueId = dialogueId;
    this.dialogue = dialogue;
    this.trades = trades;
    this._wanderTimer = 0;
    this._wanderDirX = 0;
    this._wanderDirZ = 0;
    this._wanderSpeed = 1.2;
    this._wanderRadius = 6;
  }

  _collidesWithWorld(x, z, world) {
    if (!world) return false;
    const bx = Math.floor(x);
    const by = Math.floor(this.position.y);
    const bz = Math.floor(z);
    return isBlockSolid(world.getBlock(bx, by, bz)) ||
           isBlockSolid(world.getBlock(bx, by + 1, bz));
  }

  updateAI(dt, getHeight, world) {
    this._wanderTimer -= dt;
    if (this._wanderTimer <= 0) {
      // Pick a new random direction or idle
      if (Math.random() < 0.4) {
        // Idle
        this._wanderDirX = 0;
        this._wanderDirZ = 0;
        this._wanderTimer = 2 + Math.random() * 3;
      } else {
        const angle = Math.random() * Math.PI * 2;
        this._wanderDirX = Math.cos(angle);
        this._wanderDirZ = Math.sin(angle);
        this._wanderTimer = 1 + Math.random() * 2;
      }
    }

    // Move in wander direction with wall collision
    if (this._wanderDirX !== 0 || this._wanderDirZ !== 0) {
      const newX = this.position.x + this._wanderDirX * this._wanderSpeed * dt;
      const newZ = this.position.z + this._wanderDirZ * this._wanderSpeed * dt;
      // Stay within wander radius of spawn
      const dx = newX - this.spawnPosition.x;
      const dz = newZ - this.spawnPosition.z;
      if (dx * dx + dz * dz > this._wanderRadius * this._wanderRadius) {
        // Turn back toward spawn
        const len = Math.sqrt(dx * dx + dz * dz);
        this._wanderDirX = -dx / len;
        this._wanderDirZ = -dz / len;
      } else {
        // Check collision on each axis independently
        if (!this._collidesWithWorld(newX, this.position.z, world)) {
          this.position.x = newX;
        } else {
          this._wanderDirX = -this._wanderDirX; // reverse on hit
        }
        if (!this._collidesWithWorld(this.position.x, newZ, world)) {
          this.position.z = newZ;
        } else {
          this._wanderDirZ = -this._wanderDirZ;
        }
      }
    }

    // Snap to terrain height
    if (getHeight) {
      this.position.y = getHeight(Math.floor(this.position.x), Math.floor(this.position.z)) + 1;
    }
  }

  hasTrades() {
    return this.trades.length > 0;
  }

  getDialogue(questSystem) {
    if (!this.dialogueId) {
      return this.dialogue.default || '';
    }

    const status = questSystem.getStatus(this.dialogueId);

    if (status === QuestStatus.COMPLETED && this.dialogue.completed) {
      return this.dialogue.completed;
    }
    if (status === QuestStatus.ACTIVE && this.dialogue.active) {
      return this.dialogue.active;
    }
    if (status === QuestStatus.AVAILABLE && this.dialogue.available) {
      return this.dialogue.available;
    }

    return this.dialogue.default || '';
  }
}

import { dist } from './math3d.js';

export class NPCSystem {
  constructor() {
    this._npcs = new Map();
  }

  addNPC(npc) {
    this._npcs.set(npc.id, npc);
  }

  getNPC(id) {
    return this._npcs.get(id);
  }

  getAllNPCs() {
    return Array.from(this._npcs.values());
  }

  findNearby(position, radius) {
    const result = [];
    for (const npc of this._npcs.values()) {
      if (dist(position, npc.position) <= radius) {
        result.push(npc);
      }
    }
    return result;
  }

  getByFaction(factionId) {
    const result = [];
    for (const npc of this._npcs.values()) {
      if (npc.factionId === factionId) {
        result.push(npc);
      }
    }
    return result;
  }
}
