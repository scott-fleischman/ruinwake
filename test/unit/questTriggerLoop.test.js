import { describe, it, expect } from 'vitest';
import { processWorldTriggers, checkFirstNightSurvival } from '../../src/core/questTriggerLoop.js';

describe('Quest trigger loop', () => {
  describe('processWorldTriggers', () => {
    it('advances objectives for fired reach_location triggers', () => {
      const advanced = [];
      const activated = [];
      const ctx = {
        firedTriggers: [
          { questId: 'ch2', objectiveId: 'ch2_reach', type: 'reach_location' },
        ],
        questSystem: {
          activate: (id) => activated.push(id),
          advanceObjective: (qid, oid, count) => advanced.push({ qid, oid, count }),
        },
        experienceSystem: { addExperience: () => {} },
        xpExploration: 30,
      };
      processWorldTriggers(ctx);
      expect(activated).toEqual(['ch2']);
      expect(advanced).toEqual([{ qid: 'ch2', oid: 'ch2_reach', count: 1 }]);
    });

    it('does not advance objectives for non-location trigger types', () => {
      const advanced = [];
      const ctx = {
        firedTriggers: [
          { questId: 'ch3', objectiveId: 'ch3_kill', type: 'kill_enemy' },
        ],
        questSystem: {
          activate: () => {},
          advanceObjective: (qid, oid, count) => advanced.push({ qid, oid, count }),
        },
        experienceSystem: { addExperience: () => {} },
        xpExploration: 30,
      };
      processWorldTriggers(ctx);
      expect(advanced).toEqual([]);
    });
  });

  describe('checkFirstNightSurvival', () => {
    it('returns true and fires quest objective on first day >= 2', () => {
      const advanced = [];
      const ctx = {
        day: 2,
        survivedFirstNight: false,
        questSystem: {
          advanceObjective: (qid, oid, count) => advanced.push({ qid, oid, count }),
        },
        experienceSystem: { addExperience: () => {} },
        progress: { surviveNight: () => {} },
        xpFirstNight: 50,
      };
      const result = checkFirstNightSurvival(ctx);
      expect(result).toBe(true);
      expect(advanced.length).toBe(1);
      expect(advanced[0].qid).toBe('ch1_embers');
    });

    it('returns false if already survived', () => {
      const ctx = {
        day: 2,
        survivedFirstNight: true,
        questSystem: { advanceObjective: () => {} },
        experienceSystem: { addExperience: () => {} },
        progress: { surviveNight: () => {} },
        xpFirstNight: 50,
      };
      expect(checkFirstNightSurvival(ctx)).toBe(false);
    });

    it('returns false on day 1', () => {
      const ctx = {
        day: 1,
        survivedFirstNight: false,
        questSystem: { advanceObjective: () => {} },
        experienceSystem: { addExperience: () => {} },
        progress: { surviveNight: () => {} },
        xpFirstNight: 50,
      };
      expect(checkFirstNightSurvival(ctx)).toBe(false);
    });
  });
});
