import { describe, it, expect } from 'vitest';
import { findNearestInteractableNPC } from '../../src/core/npcInteraction.js';
import { NPC, NPCSystem } from '../../src/core/npc.js';

describe('findNearestInteractableNPC', () => {
  function makeSystem() {
    const system = new NPCSystem();
    system.addNPC(new NPC({
      id: 'npc1',
      name: 'Guard',
      position: { x: 5, y: 33, z: 5 },
      factionId: 'test',
      dialogue: { default: 'Hello!' },
    }));
    system.addNPC(new NPC({
      id: 'npc2',
      name: 'Merchant',
      position: { x: 50, y: 33, z: 50 },
      factionId: 'test',
      dialogue: { default: 'Buy something?' },
    }));
    return system;
  }

  it('returns nearest NPC within interact range', () => {
    const system = makeSystem();
    const result = findNearestInteractableNPC(system, { x: 6, y: 33, z: 5 }, 5);
    expect(result).toBeDefined();
    expect(result.id).toBe('npc1');
  });

  it('returns null when no NPC in range', () => {
    const system = makeSystem();
    const result = findNearestInteractableNPC(system, { x: 100, y: 33, z: 100 }, 5);
    expect(result).toBeNull();
  });

  it('returns the closer NPC when multiple are in range', () => {
    const system = new NPCSystem();
    system.addNPC(new NPC({
      id: 'far',
      name: 'Far',
      position: { x: 8, y: 33, z: 0 },
      factionId: 'test',
      dialogue: { default: 'Far' },
    }));
    system.addNPC(new NPC({
      id: 'near',
      name: 'Near',
      position: { x: 2, y: 33, z: 0 },
      factionId: 'test',
      dialogue: { default: 'Near' },
    }));
    const result = findNearestInteractableNPC(system, { x: 0, y: 33, z: 0 }, 10);
    expect(result.id).toBe('near');
  });
});
