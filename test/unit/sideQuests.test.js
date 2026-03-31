import { describe, it, expect } from 'vitest';
import { sideQuests, getSideQuest } from '../../src/core/sideQuestData.js';

describe('sideQuestData', () => {
  it('defines at least 10 side quests', () => {
    expect(sideQuests.length).toBeGreaterThanOrEqual(10);
  });

  it('each side quest has id, name, description, and objectives', () => {
    for (const q of sideQuests) {
      expect(q.id).toBeDefined();
      expect(typeof q.id).toBe('string');
      expect(q.name).toBeDefined();
      expect(typeof q.name).toBe('string');
      expect(q.description).toBeDefined();
      expect(typeof q.description).toBe('string');
      expect(q.objectives).toBeDefined();
      expect(q.objectives.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('all side quest ids are unique', () => {
    const ids = sideQuests.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each objective has id, description, and target', () => {
    for (const q of sideQuests) {
      for (const obj of q.objectives) {
        expect(obj.id).toBeDefined();
        expect(obj.description).toBeDefined();
        expect(obj.target).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('contains a ruin clearing quest', () => {
    const q = sideQuests.find(q => q.id.includes('ruin_clearing'));
    expect(q).toBeDefined();
    expect(q.name).toBeDefined();
  });

  it('contains an herb hunt quest', () => {
    const q = sideQuests.find(q => q.id.includes('herb_hunt'));
    expect(q).toBeDefined();
    expect(q.name).toBeDefined();
  });

  it('contains a beast hunt quest', () => {
    const q = sideQuests.find(q => q.id.includes('beast_hunt'));
    expect(q).toBeDefined();
    expect(q.name).toBeDefined();
  });

  it('contains a crafting commission quest', () => {
    const q = sideQuests.find(q => q.id.includes('crafting_commission'));
    expect(q).toBeDefined();
    expect(q.name).toBeDefined();
  });

  it('getSideQuest returns a quest by id', () => {
    const q = getSideQuest('ruin_clearing');
    expect(q).toBeDefined();
    expect(q.id).toBe('ruin_clearing');
  });
});
