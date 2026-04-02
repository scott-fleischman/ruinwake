import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';

function makeConfig(raceId, classId) {
  return { raceId, classId, difficulty: 'normal' };
}

describe('Race/class identity wiring', () => {
  describe('starting relic', () => {
    it('man_scholar receives ward_light relic', () => {
      const state = createGameState(makeConfig('man', 'scholar'));
      const relic = state.relicSystem.getEquippedRelic();
      expect(relic).not.toBeNull();
      expect(relic.id).toBe('ward_light');
    });

    it('elf_warden receives ward_light relic', () => {
      const state = createGameState(makeConfig('elf', 'warden'));
      const relic = state.relicSystem.getEquippedRelic();
      expect(relic).not.toBeNull();
      expect(relic.id).toBe('ward_light');
    });

    it('man_ranger does NOT receive a starting relic', () => {
      const state = createGameState(makeConfig('man', 'ranger'));
      const relic = state.relicSystem.getEquippedRelic();
      expect(relic).toBeNull();
    });
  });

  describe('class passive', () => {
    it('man_ranger receives tracking passive', () => {
      const state = createGameState(makeConfig('man', 'ranger'));
      expect(state.classPassive).not.toBeNull();
      expect(state.classPassive.type).toBe('tracking');
    });

    it('dwarf_miner receives mining_speed passive', () => {
      const state = createGameState(makeConfig('dwarf', 'miner'));
      expect(state.classPassive).not.toBeNull();
      expect(state.classPassive.type).toBe('mining_speed');
    });

    it('hobbit_burglar receives crouch_stealth passive', () => {
      const state = createGameState(makeConfig('hobbit', 'burglar'));
      expect(state.classPassive).not.toBeNull();
      expect(state.classPassive.type).toBe('crouch_stealth');
    });
  });
});
