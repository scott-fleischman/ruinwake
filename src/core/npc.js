import { QuestStatus } from './quest.js';

export class NPC {
  constructor({ id, name, position, factionId, dialogueId, dialogue = {} }) {
    this.id = id;
    this.name = name;
    this.position = { ...position };
    this.factionId = factionId;
    this.dialogueId = dialogueId;
    this.dialogue = dialogue;
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

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

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
