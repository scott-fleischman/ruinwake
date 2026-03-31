import { describe, it, expect } from 'vitest';
import { sideQuests, getSideQuest } from '../../src/core/sideQuestData.js';

describe('moreSideQuests', () => {
  it('allSideQuests has at least 25 entries', () => {
    expect(sideQuests.length).toBeGreaterThanOrEqual(25);
  });

  it('all side quests have id, name, description, objectives', () => {
    for (const q of sideQuests) {
      expect(q.id).toBeDefined();
      expect(typeof q.id).toBe('string');
      expect(q.name).toBeDefined();
      expect(typeof q.name).toBe('string');
      expect(q.description).toBeDefined();
      expect(typeof q.description).toBe('string');
      expect(q.objectives).toBeDefined();
      expect(Array.isArray(q.objectives)).toBe(true);
      expect(q.objectives.length).toBeGreaterThanOrEqual(1);
      for (const obj of q.objectives) {
        expect(obj.id).toBeDefined();
        expect(typeof obj.id).toBe('string');
        expect(obj.description).toBeDefined();
        expect(typeof obj.description).toBe('string');
        expect(obj.target).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('all side quest ids are unique', () => {
    const ids = sideQuests.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('each new quest has factionId and reward', () => {
    const newQuestIds = [
      'herb_gathering_mirkwood',
      'goblin_camp_clear',
      'dwarven_relic_hunt',
      'road_repair_bree',
      'spider_nest_clear',
      'wolf_den_clear',
      'beacon_light_chain',
      'lore_collection_rivendell',
      'smith_commission_iron',
      'cook_feast_hobbit',
      'scout_mountain_pass',
      'map_fragment_hunt',
      'ruin_survey_trollshaws',
      'mushroom_foraging',
      'guard_duty_outpost',
    ];
    for (const id of newQuestIds) {
      const q = getSideQuest(id);
      expect(q, `quest ${id} should exist`).toBeDefined();
      expect(typeof q.factionId).toBe('string');
      expect(q.reward).toBeDefined();
      expect(typeof q.reward).toBe('object');
    }
  });

  it('contains herb_gathering_mirkwood quest (gathering type)', () => {
    const q = getSideQuest('herb_gathering_mirkwood');
    expect(q).toBeDefined();
    expect(q.name).toBe('Herbs of Mirkwood');
    expect(q.factionId).toBe('woodland_guardians');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains goblin_camp_clear quest (combat type)', () => {
    const q = getSideQuest('goblin_camp_clear');
    expect(q).toBeDefined();
    expect(q.name).toBe('Goblin Camp Assault');
    expect(q.factionId).toBe('road_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains dwarven_relic_hunt quest (exploration type)', () => {
    const q = getSideQuest('dwarven_relic_hunt');
    expect(q).toBeDefined();
    expect(q.name).toBe('Relics of the Dwarven Halls');
    expect(q.factionId).toBe('dwarven_crafters');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains road_repair_bree quest (crafting type)', () => {
    const q = getSideQuest('road_repair_bree');
    expect(q).toBeDefined();
    expect(q.name).toBe('Mend the Bree Road');
    expect(q.factionId).toBe('road_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains spider_nest_clear quest (combat type)', () => {
    const q = getSideQuest('spider_nest_clear');
    expect(q).toBeDefined();
    expect(q.name).toBe('Purge the Spider Nest');
    expect(q.factionId).toBe('woodland_guardians');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains wolf_den_clear quest (combat type)', () => {
    const q = getSideQuest('wolf_den_clear');
    expect(q).toBeDefined();
    expect(q.name).toBe('Clear the Wolf Den');
    expect(q.factionId).toBe('beorning_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains beacon_light_chain quest (exploration type)', () => {
    const q = getSideQuest('beacon_light_chain');
    expect(q).toBeDefined();
    expect(q.name).toBe('Light the Beacon Chain');
    expect(q.factionId).toBe('road_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains lore_collection_rivendell quest (exploration type)', () => {
    const q = getSideQuest('lore_collection_rivendell');
    expect(q).toBeDefined();
    expect(q.name).toBe('Lost Lore of Rivendell');
    expect(q.factionId).toBe('rivendell_keepers');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains smith_commission_iron quest (crafting type)', () => {
    const q = getSideQuest('smith_commission_iron');
    expect(q).toBeDefined();
    expect(q.name).toBe('Iron Commission for the Smiths');
    expect(q.factionId).toBe('dwarven_crafters');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains cook_feast_hobbit quest (gathering type)', () => {
    const q = getSideQuest('cook_feast_hobbit');
    expect(q).toBeDefined();
    expect(q.name).toBe('Feast Preparations');
    expect(q.factionId).toBe('road_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(2);
  });

  it('contains scout_mountain_pass quest (escort-style type)', () => {
    const q = getSideQuest('scout_mountain_pass');
    expect(q).toBeDefined();
    expect(q.name).toBe('Scout the Mountain Pass');
    expect(q.factionId).toBe('beorning_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains map_fragment_hunt quest (exploration type)', () => {
    const q = getSideQuest('map_fragment_hunt');
    expect(q).toBeDefined();
    expect(q.name).toBe('The Cartographer\'s Request');
    expect(q.factionId).toBe('rivendell_keepers');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains ruin_survey_trollshaws quest (exploration type)', () => {
    const q = getSideQuest('ruin_survey_trollshaws');
    expect(q).toBeDefined();
    expect(q.name).toBe('Survey the Trollshaws Ruins');
    expect(q.factionId).toBe('rivendell_keepers');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains mushroom_foraging quest (gathering type)', () => {
    const q = getSideQuest('mushroom_foraging');
    expect(q).toBeDefined();
    expect(q.name).toBe('Foraging in the Shire Woods');
    expect(q.factionId).toBe('woodland_guardians');
    expect(q.objectives.length).toBeGreaterThanOrEqual(1);
  });

  it('contains guard_duty_outpost quest (escort-style type)', () => {
    const q = getSideQuest('guard_duty_outpost');
    expect(q).toBeDefined();
    expect(q.name).toBe('Guard Duty at the Outpost');
    expect(q.factionId).toBe('road_wardens');
    expect(q.objectives.length).toBeGreaterThanOrEqual(2);
  });
});
