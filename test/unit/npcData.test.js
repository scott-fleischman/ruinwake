import { describe, it, expect } from 'vitest';
import { allNPCs, getNPCById } from '../../src/core/npcData.js';

describe('npcData', () => {
  it('defines at least 6 NPCs', () => {
    expect(allNPCs.length).toBeGreaterThanOrEqual(6);
  });

  it('includes a lorekeeper NPC', () => {
    const lorekeeper = allNPCs.find(n => n.factionId === 'rivendell_keepers' || n.name.includes('Lore'));
    expect(lorekeeper).toBeDefined();
  });

  it('includes a craft master NPC', () => {
    const crafter = allNPCs.find(n => n.factionId === 'dwarven_crafters' || n.name.includes('Smith'));
    expect(crafter).toBeDefined();
  });

  it('includes a ranger/scout NPC', () => {
    const ranger = allNPCs.find(n => n.factionId === 'road_wardens' || n.name.includes('Ranger'));
    expect(ranger).toBeDefined();
  });

  it('all NPCs have id, name, position, and factionId', () => {
    for (const npc of allNPCs) {
      expect(npc.id).toBeTruthy();
      expect(npc.name).toBeTruthy();
      expect(npc.position).toBeDefined();
      expect(npc.factionId).toBeTruthy();
    }
  });

  it('getNPCById returns the correct NPC', () => {
    const first = allNPCs[0];
    const found = getNPCById(first.id);
    expect(found).toBeDefined();
    expect(found.id).toBe(first.id);
  });

  it('getNPCById returns undefined for unknown id', () => {
    expect(getNPCById('nonexistent')).toBeUndefined();
  });

  it('no two NPCs share the same id', () => {
    const ids = allNPCs.map(n => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
