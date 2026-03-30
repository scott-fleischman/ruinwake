import { describe, it, expect } from 'vitest';
import { mainQuests, getMainQuest } from '../../src/core/questData.js';

describe('mainQuests data', () => {
  it('defines 8 main quest chapters', () => {
    expect(mainQuests).toHaveLength(8);
  });

  it('chapters are numbered 1-8', () => {
    const chapters = mainQuests.map(q => q.chapter);
    expect(chapters).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('each quest has objectives', () => {
    for (const q of mainQuests) {
      expect(q.objectives.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('chapter 1 has no prerequisites', () => {
    expect(mainQuests[0].requires).toEqual([]);
  });

  it('each subsequent chapter requires the previous', () => {
    for (let i = 1; i < mainQuests.length; i++) {
      expect(mainQuests[i].requires).toContain(mainQuests[i - 1].id);
    }
  });

  it('getMainQuest returns by id', () => {
    const q = getMainQuest('ch1_embers');
    expect(q.name).toBe('Embers in the Wild');
  });

  it('all quest ids are unique', () => {
    const ids = mainQuests.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
