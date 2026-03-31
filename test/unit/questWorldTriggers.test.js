import { describe, it, expect } from 'vitest';
import { QuestWorldTriggers } from '../../src/core/questWorldTriggers.js';

describe('QuestWorldTriggers', () => {
  it('creates triggers mapping quest objectives to world positions', () => {
    const triggers = new QuestWorldTriggers();
    expect(triggers.getTriggers().length).toBeGreaterThan(0);
  });

  it('each trigger has questId, objectiveId, position, and radius', () => {
    const triggers = new QuestWorldTriggers();
    for (const t of triggers.getTriggers()) {
      expect(t.questId).toBeTruthy();
      expect(t.objectiveId).toBeTruthy();
      expect(t.position).toBeDefined();
      expect(t.radius).toBeGreaterThan(0);
    }
  });

  it('checkTriggers returns triggered objectives when player is near', () => {
    const triggers = new QuestWorldTriggers();
    const allTriggers = triggers.getTriggers();
    // Place player at the first trigger's position
    const first = allTriggers[0];
    const fired = triggers.checkTriggers({ x: first.position.x, y: first.position.y, z: first.position.z });
    expect(fired.length).toBeGreaterThan(0);
    expect(fired[0].questId).toBe(first.questId);
    expect(fired[0].objectiveId).toBe(first.objectiveId);
  });

  it('checkTriggers returns empty when player is far from all triggers', () => {
    const triggers = new QuestWorldTriggers();
    const fired = triggers.checkTriggers({ x: -999, y: 33, z: -999 });
    expect(fired.length).toBe(0);
  });

  it('covers all 8 main quest chapters', () => {
    const triggers = new QuestWorldTriggers();
    const chapters = new Set(triggers.getTriggers().map(t => t.questId));
    expect(chapters.has('ch2_roads')).toBe(true);
    expect(chapters.has('ch3_records')).toBe(true);
    expect(chapters.has('ch4_mountains')).toBe(true);
    expect(chapters.has('ch5_darkwood')).toBe(true);
    expect(chapters.has('ch6_forge')).toBe(true);
    expect(chapters.has('ch7_shadow')).toBe(true);
    expect(chapters.has('ch8_after')).toBe(true);
  });

  it('trigger positions are within expanded world bounds', () => {
    const triggers = new QuestWorldTriggers();
    for (const t of triggers.getTriggers()) {
      expect(t.position.x).toBeGreaterThanOrEqual(-300);
      expect(t.position.x).toBeLessThanOrEqual(600);
      expect(t.position.z).toBeGreaterThanOrEqual(-300);
      expect(t.position.z).toBeLessThanOrEqual(300);
    }
  });
});
