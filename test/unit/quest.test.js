import { describe, it, expect } from 'vitest';
import { Quest, QuestObjective, QuestSystem, QuestStatus } from '../../src/core/quest.js';

describe('QuestStatus', () => {
  it('defines standard statuses', () => {
    expect(QuestStatus.LOCKED).toBe('locked');
    expect(QuestStatus.AVAILABLE).toBe('available');
    expect(QuestStatus.ACTIVE).toBe('active');
    expect(QuestStatus.COMPLETED).toBe('completed');
  });
});

describe('QuestObjective', () => {
  it('creates an objective with id, description, and target', () => {
    const obj = new QuestObjective({ id: 'reach_outpost', description: 'Reach the ruined outpost', target: 1 });
    expect(obj.id).toBe('reach_outpost');
    expect(obj.target).toBe(1);
    expect(obj.progress).toBe(0);
  });

  it('advance increments progress up to target', () => {
    const obj = new QuestObjective({ id: 'gather_wood', description: 'Gather 5 wood', target: 5 });
    obj.advance(3);
    expect(obj.progress).toBe(3);
    expect(obj.isComplete()).toBe(false);
    obj.advance(3);
    expect(obj.progress).toBe(5);
    expect(obj.isComplete()).toBe(true);
  });
});

describe('Quest', () => {
  it('creates a quest with id, chapter, name, and objectives', () => {
    const q = new Quest({
      id: 'ch1_embers',
      chapter: 1,
      name: 'Embers in the Wild',
      description: 'Survive and find the first ward fragment',
      objectives: [
        { id: 'survive_night', description: 'Survive the first night', target: 1 },
        { id: 'reach_outpost', description: 'Reach the ruined outpost', target: 1 },
        { id: 'activate_ward', description: 'Activate the ward fragment', target: 1 },
      ],
    });
    expect(q.id).toBe('ch1_embers');
    expect(q.chapter).toBe(1);
    expect(q.objectives).toHaveLength(3);
  });

  it('isComplete returns true when all objectives are done', () => {
    const q = new Quest({
      id: 'test',
      chapter: 1,
      name: 'Test',
      description: 'Test quest',
      objectives: [
        { id: 'obj1', description: 'Do thing', target: 1 },
      ],
    });
    expect(q.isComplete()).toBe(false);
    q.advanceObjective('obj1', 1);
    expect(q.isComplete()).toBe(true);
  });
});

describe('QuestSystem', () => {
  function makeSystem() {
    const quests = [
      new Quest({
        id: 'ch1_embers',
        chapter: 1,
        name: 'Embers in the Wild',
        description: 'Survive and find the ward',
        objectives: [
          { id: 'survive_night', description: 'Survive the first night', target: 1 },
          { id: 'activate_ward', description: 'Activate the ward fragment', target: 1 },
        ],
      }),
      new Quest({
        id: 'ch2_roads',
        chapter: 2,
        name: 'Broken Roads',
        description: 'Restore a settlement',
        requires: ['ch1_embers'],
        objectives: [
          { id: 'restore_settlement', description: 'Restore the settlement', target: 1 },
          { id: 'meet_npc', description: 'Meet the lore NPC', target: 1 },
        ],
      }),
    ];
    return new QuestSystem(quests);
  }

  it('first quest starts available, second is locked', () => {
    const sys = makeSystem();
    expect(sys.getStatus('ch1_embers')).toBe(QuestStatus.AVAILABLE);
    expect(sys.getStatus('ch2_roads')).toBe(QuestStatus.LOCKED);
  });

  it('activate makes a quest active', () => {
    const sys = makeSystem();
    const ok = sys.activate('ch1_embers');
    expect(ok).toBe(true);
    expect(sys.getStatus('ch1_embers')).toBe(QuestStatus.ACTIVE);
  });

  it('cannot activate a locked quest', () => {
    const sys = makeSystem();
    const ok = sys.activate('ch2_roads');
    expect(ok).toBe(false);
  });

  it('advancing objectives works on active quest', () => {
    const sys = makeSystem();
    sys.activate('ch1_embers');
    sys.advanceObjective('ch1_embers', 'survive_night', 1);
    const q = sys.getQuest('ch1_embers');
    expect(q.objectives[0].progress).toBe(1);
  });

  it('completing all objectives marks quest as completed', () => {
    const sys = makeSystem();
    sys.activate('ch1_embers');
    sys.advanceObjective('ch1_embers', 'survive_night', 1);
    sys.advanceObjective('ch1_embers', 'activate_ward', 1);
    expect(sys.getStatus('ch1_embers')).toBe(QuestStatus.COMPLETED);
  });

  it('completing quest unlocks dependent quest', () => {
    const sys = makeSystem();
    sys.activate('ch1_embers');
    sys.advanceObjective('ch1_embers', 'survive_night', 1);
    sys.advanceObjective('ch1_embers', 'activate_ward', 1);
    expect(sys.getStatus('ch2_roads')).toBe(QuestStatus.AVAILABLE);
  });

  it('getActiveQuests returns only active quests', () => {
    const sys = makeSystem();
    sys.activate('ch1_embers');
    expect(sys.getActiveQuests()).toHaveLength(1);
    expect(sys.getActiveQuests()[0].id).toBe('ch1_embers');
  });

  it('serialize and deserialize preserves state', () => {
    const sys = makeSystem();
    sys.activate('ch1_embers');
    sys.advanceObjective('ch1_embers', 'survive_night', 1);
    const data = sys.serialize();

    const sys2 = makeSystem();
    sys2.deserialize(data);
    expect(sys2.getStatus('ch1_embers')).toBe(QuestStatus.ACTIVE);
    const q = sys2.getQuest('ch1_embers');
    expect(q.objectives[0].progress).toBe(1);
  });
});
