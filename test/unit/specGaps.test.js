import { describe, it, expect } from 'vitest';
import { getDifficultyModifiers, Difficulty } from '../../src/core/difficulty.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { FactionSystem } from '../../src/core/faction.js';
import { allFactions } from '../../src/core/factionData.js';
import { SkillTreeSystem } from '../../src/core/skillTree.js';
import { skillTrees } from '../../src/core/skillTreeData.js';
import { MapScreen } from '../../src/core/mapScreen.js';
import { FogOfWar } from '../../src/core/fogOfWar.js';
import { allLandmarks } from '../../src/core/landmarkData.js';
import { QuestWorldTriggers } from '../../src/core/questWorldTriggers.js';
import { createGameConfig } from '../../src/core/gameConfig.js';

// --- New modules under test ---
import { applyDifficultyToHungerDt, applyDifficultyToEnemyDamage } from '../../src/core/difficultyApply.js';
import { getRaceStartingReputation } from '../../src/core/raceReputation.js';
import { getStartingSkillUnlocks } from '../../src/core/startingSkills.js';
import { getQuestMarkers } from '../../src/core/questMarkers.js';

// =============================================================================
// Gap 1: Difficulty modifiers applied to hunger drain and enemy damage (Sec 23)
// =============================================================================
describe('Gap 1 — Difficulty modifiers applied in game loop', () => {
  it('applyDifficultyToHungerDt multiplies gameDt by hungerDrainMultiplier', () => {
    const mods = getDifficultyModifiers(Difficulty.HARSH);
    const gameDt = 1.0;
    const adjustedDt = applyDifficultyToHungerDt(gameDt, mods);
    expect(adjustedDt).toBeCloseTo(1.5); // HARSH hungerDrainMultiplier = 1.5
  });

  it('story mode halves hunger drain dt', () => {
    const mods = getDifficultyModifiers(Difficulty.STORY);
    const adjustedDt = applyDifficultyToHungerDt(2.0, mods);
    expect(adjustedDt).toBeCloseTo(1.0); // 2.0 * 0.5
  });

  it('standard mode leaves hunger dt unchanged', () => {
    const mods = getDifficultyModifiers(Difficulty.STANDARD);
    const adjustedDt = applyDifficultyToHungerDt(3.0, mods);
    expect(adjustedDt).toBeCloseTo(3.0);
  });

  it('applyDifficultyToEnemyDamage multiplies enemy damage by enemyDamageMultiplier', () => {
    const mods = getDifficultyModifiers(Difficulty.HARSH);
    const dmg = applyDifficultyToEnemyDamage(10, mods);
    expect(dmg).toBeCloseTo(14); // 10 * 1.4
  });

  it('story mode reduces enemy damage', () => {
    const mods = getDifficultyModifiers(Difficulty.STORY);
    const dmg = applyDifficultyToEnemyDamage(10, mods);
    expect(dmg).toBeCloseTo(6); // 10 * 0.6
  });

  it('config stores difficulty field', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: 'harsh',
    });
    expect(config.difficulty).toBe('harsh');
  });
});

// =============================================================================
// Gap 2: Race starting reputation (Sec 9.1, 19.3)
// =============================================================================
describe('Gap 2 — Race starting reputation', () => {
  it('Man gets +15 road_wardens', () => {
    const rep = getRaceStartingReputation('man');
    expect(rep.road_wardens).toBe(15);
  });

  it('Elf gets +20 rivendell_keepers and +15 woodland_guardians', () => {
    const rep = getRaceStartingReputation('elf');
    expect(rep.rivendell_keepers).toBe(20);
    expect(rep.woodland_guardians).toBe(15);
  });

  it('Dwarf gets +25 dwarven_crafters', () => {
    const rep = getRaceStartingReputation('dwarf');
    expect(rep.dwarven_crafters).toBe(25);
  });

  it('Hobbit gets +15 road_wardens and +10 beorning_wardens', () => {
    const rep = getRaceStartingReputation('hobbit');
    expect(rep.road_wardens).toBe(15);
    expect(rep.beorning_wardens).toBe(10);
  });

  it('applying race reputation to FactionSystem changes rep values', () => {
    const fs = new FactionSystem(allFactions);
    const rep = getRaceStartingReputation('elf');
    fs.applyRaceModifiers('elf', rep);
    expect(fs.getReputation('rivendell_keepers')).toBe(20);
    expect(fs.getReputation('woodland_guardians')).toBe(15);
    expect(fs.getReputation('road_wardens')).toBe(0); // elf has no road_wardens bonus
  });
});

// =============================================================================
// Gap 3: Skill tree starting unlocks per race/class (Sec 11.3)
// =============================================================================
describe('Gap 3 — Skill tree starting unlocks', () => {
  it('man ranger starts with surv_forager', () => {
    const unlocks = getStartingSkillUnlocks('man', 'ranger');
    expect(unlocks).toContain('surv_forager');
  });

  it('man soldier starts with cmb_parry', () => {
    const unlocks = getStartingSkillUnlocks('man', 'soldier');
    expect(unlocks).toContain('cmb_parry');
  });

  it('dwarf miner starts with crf_yield', () => {
    const unlocks = getStartingSkillUnlocks('dwarf', 'miner');
    expect(unlocks).toContain('crf_yield');
  });

  it('elf archer starts with cmb_quick_draw', () => {
    const unlocks = getStartingSkillUnlocks('elf', 'archer');
    expect(unlocks).toContain('cmb_quick_draw');
  });

  it('hobbit burglar starts with surv_hardy', () => {
    const unlocks = getStartingSkillUnlocks('hobbit', 'burglar');
    expect(unlocks).toContain('surv_hardy');
  });

  it('all 12 race/class combos have 1-2 starting unlocks', () => {
    const combos = [
      ['man', 'ranger'], ['man', 'soldier'], ['man', 'scholar'],
      ['elf', 'archer'], ['elf', 'warden'], ['elf', 'gatherer'],
      ['dwarf', 'miner'], ['dwarf', 'blacksmith'], ['dwarf', 'delver'],
      ['hobbit', 'burglar'], ['hobbit', 'cook'], ['hobbit', 'forager'],
    ];
    for (const [race, cls] of combos) {
      const unlocks = getStartingSkillUnlocks(race, cls);
      expect(unlocks.length, `${race} ${cls}`).toBeGreaterThanOrEqual(1);
      expect(unlocks.length, `${race} ${cls}`).toBeLessThanOrEqual(2);
    }
  });

  it('starting unlocks are free (cost 0 from skill points)', () => {
    const sys = new SkillTreeSystem(skillTrees);
    const unlocks = getStartingSkillUnlocks('man', 'ranger');
    // Force-unlock starting nodes (the system should allow this via grantStartingUnlock)
    for (const nodeId of unlocks) {
      sys.grantStartingUnlock(nodeId);
    }
    expect(sys.isUnlocked('surv_forager')).toBe(true);
    expect(sys.skillPoints).toBe(0); // no points spent
  });
});

// =============================================================================
// Gap 4: Quest objective markers on the map (Sec 8.3, 14.3)
// =============================================================================
describe('Gap 4 — Quest objective markers on map', () => {
  it('getQuestMarkers returns active quest triggers as markers', () => {
    const triggers = new QuestWorldTriggers();
    const activeQuestIds = ['ch2_roads'];
    const markers = getQuestMarkers(triggers, activeQuestIds);
    expect(markers.length).toBeGreaterThan(0);
    const first = markers[0];
    expect(first.questId).toBe('ch2_roads');
    expect(first.x).toBeDefined();
    expect(first.z).toBeDefined();
    expect(first.objectiveId).toBeDefined();
  });

  it('only returns markers for active quests', () => {
    const triggers = new QuestWorldTriggers();
    const markers = getQuestMarkers(triggers, ['ch3_records']);
    expect(markers.every(m => m.questId === 'ch3_records')).toBe(true);
    // Should NOT include ch2_roads markers
    expect(markers.some(m => m.questId === 'ch2_roads')).toBe(false);
  });

  it('returns empty array when no quests are active', () => {
    const triggers = new QuestWorldTriggers();
    const markers = getQuestMarkers(triggers, []);
    expect(markers).toEqual([]);
  });

  it('markers include position and label text', () => {
    const triggers = new QuestWorldTriggers();
    const markers = getQuestMarkers(triggers, ['ch2_roads']);
    for (const m of markers) {
      expect(typeof m.x).toBe('number');
      expect(typeof m.z).toBe('number');
      expect(typeof m.label).toBe('string');
      expect(m.label.length).toBeGreaterThan(0);
    }
  });
});

// =============================================================================
// Gap 5: World name and character name in config (Sec 8.1)
// =============================================================================
describe('Gap 5 — World/character name in config', () => {
  it('createGameConfig accepts and stores worldName', () => {
    const config = createGameConfig({
      raceId: 'man',
      classId: 'ranger',
      difficulty: 'standard',
      worldName: 'Arda',
    });
    expect(config.worldName).toBe('Arda');
  });

  it('createGameConfig accepts and stores characterName', () => {
    const config = createGameConfig({
      raceId: 'elf',
      classId: 'archer',
      difficulty: 'standard',
      characterName: 'Legolas',
    });
    expect(config.characterName).toBe('Legolas');
  });

  it('defaults to empty strings when names not provided', () => {
    const config = createGameConfig({
      raceId: 'dwarf',
      classId: 'miner',
      difficulty: 'harsh',
    });
    expect(config.worldName).toBe('');
    expect(config.characterName).toBe('');
  });
});
