import { describe, it, expect } from 'vitest';
import { QuestSystem, QuestStatus } from '../../src/core/quest.js';
import { mainQuests } from '../../src/core/questData.js';

describe('Main quest chain solvability', () => {
  it('all 8 chapters exist', () => {
    expect(mainQuests.length).toBe(8);
  });

  it('chapter 1 starts available (no prerequisites)', () => {
    const qs = new QuestSystem(mainQuests);
    expect(qs.getStatus('ch1_embers')).toBe(QuestStatus.AVAILABLE);
  });

  it('completing chapter 1 unlocks chapter 2', () => {
    const qs = new QuestSystem(mainQuests);
    qs.activate('ch1_embers');
    qs.advanceObjective('ch1_embers', 'ch1_survive', 1);
    qs.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    qs.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
    expect(qs.getStatus('ch1_embers')).toBe(QuestStatus.COMPLETED);
    expect(qs.getStatus('ch2_roads')).toBe(QuestStatus.AVAILABLE);
  });

  it('full main quest chain is solvable from start to end', () => {
    const qs = new QuestSystem(mainQuests);

    // Chapter 1
    qs.activate('ch1_embers');
    qs.advanceObjective('ch1_embers', 'ch1_survive', 1);
    qs.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    qs.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
    expect(qs.getStatus('ch1_embers')).toBe(QuestStatus.COMPLETED);

    // Chapter 2
    qs.activate('ch2_roads');
    qs.advanceObjective('ch2_roads', 'ch2_restore', 1);
    qs.advanceObjective('ch2_roads', 'ch2_meet_npc', 1);
    qs.advanceObjective('ch2_roads', 'ch2_corruption', 3);
    expect(qs.getStatus('ch2_roads')).toBe(QuestStatus.COMPLETED);

    // Chapter 3
    qs.activate('ch3_records');
    qs.advanceObjective('ch3_records', 'ch3_reach_rivendell', 1);
    qs.advanceObjective('ch3_records', 'ch3_learn_wards', 1);
    qs.advanceObjective('ch3_records', 'ch3_obtain_relic', 1);
    expect(qs.getStatus('ch3_records')).toBe(QuestStatus.COMPLETED);

    // Chapter 4
    qs.activate('ch4_mountains');
    qs.advanceObjective('ch4_mountains', 'ch4_enter_delve', 1);
    qs.advanceObjective('ch4_mountains', 'ch4_stabilize', 1);
    qs.advanceObjective('ch4_mountains', 'ch4_defeat_boss', 1);
    expect(qs.getStatus('ch4_mountains')).toBe(QuestStatus.COMPLETED);

    // Chapter 5
    qs.activate('ch5_darkwood');
    qs.advanceObjective('ch5_darkwood', 'ch5_enter_mirkwood', 1);
    qs.advanceObjective('ch5_darkwood', 'ch5_clear_spiders', 3);
    qs.advanceObjective('ch5_darkwood', 'ch5_restore_beacon', 1);
    expect(qs.getStatus('ch5_darkwood')).toBe(QuestStatus.COMPLETED);

    // Chapter 6
    qs.activate('ch6_forge');
    qs.advanceObjective('ch6_forge', 'ch6_reach_forge', 1);
    qs.advanceObjective('ch6_forge', 'ch6_unlock_crafting', 1);
    qs.advanceObjective('ch6_forge', 'ch6_discover_source', 1);
    expect(qs.getStatus('ch6_forge')).toBe(QuestStatus.COMPLETED);

    // Chapter 7
    qs.activate('ch7_shadow');
    qs.advanceObjective('ch7_shadow', 'ch7_assault', 1);
    qs.advanceObjective('ch7_shadow', 'ch7_disable_link', 1);
    qs.advanceObjective('ch7_shadow', 'ch7_defeat_champion', 1);
    expect(qs.getStatus('ch7_shadow')).toBe(QuestStatus.COMPLETED);

    // Chapter 8 (epilogue)
    qs.activate('ch8_after');
    qs.advanceObjective('ch8_after', 'ch8_celebrate', 1);
    qs.advanceObjective('ch8_after', 'ch8_explore', 1);
    expect(qs.getStatus('ch8_after')).toBe(QuestStatus.COMPLETED);
  });

  it('chapters cannot be activated out of order', () => {
    const qs = new QuestSystem(mainQuests);
    expect(qs.activate('ch2_roads')).toBe(false);
    expect(qs.activate('ch7_shadow')).toBe(false);
  });

  it('no soft-lock: skipping chapter objectives does not block later chapters', () => {
    const qs = new QuestSystem(mainQuests);
    qs.activate('ch1_embers');
    // Complete objectives in non-standard order
    qs.advanceObjective('ch1_embers', 'ch1_activate_ward', 1);
    qs.advanceObjective('ch1_embers', 'ch1_survive', 1);
    qs.advanceObjective('ch1_embers', 'ch1_reach_outpost', 1);
    // Should still complete and unlock ch2
    expect(qs.getStatus('ch1_embers')).toBe(QuestStatus.COMPLETED);
    expect(qs.getStatus('ch2_roads')).toBe(QuestStatus.AVAILABLE);
  });
});
