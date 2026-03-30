import { describe, it, expect } from 'vitest';
import { SkillTree, SkillNode, SkillTreeSystem } from '../../src/core/skillTree.js';

describe('SkillNode', () => {
  it('creates a node with id, name, description, and cost', () => {
    const node = new SkillNode({ id: 'surv_1', name: 'Hardy', description: 'Slower hunger drain', cost: 1 });
    expect(node.id).toBe('surv_1');
    expect(node.name).toBe('Hardy');
    expect(node.cost).toBe(1);
  });

  it('can have prerequisite node ids', () => {
    const node = new SkillNode({ id: 'surv_2', name: 'Iron Stomach', description: 'Better food efficiency', cost: 2, requires: ['surv_1'] });
    expect(node.requires).toEqual(['surv_1']);
  });
});

describe('SkillTree', () => {
  it('creates a tree with an id, name, and nodes', () => {
    const tree = new SkillTree({
      id: 'survival',
      name: 'Survival',
      nodes: [
        { id: 'surv_1', name: 'Hardy', description: 'Slower hunger drain', cost: 1 },
        { id: 'surv_2', name: 'Iron Stomach', description: 'Better food efficiency', cost: 2, requires: ['surv_1'] },
      ],
    });
    expect(tree.id).toBe('survival');
    expect(tree.nodes).toHaveLength(2);
  });

  it('getNode returns node by id', () => {
    const tree = new SkillTree({
      id: 'combat',
      name: 'Combat',
      nodes: [{ id: 'cmb_1', name: 'Parry', description: 'Timed parry window', cost: 1 }],
    });
    expect(tree.getNode('cmb_1').name).toBe('Parry');
    expect(tree.getNode('missing')).toBeUndefined();
  });
});

describe('SkillTreeSystem', () => {
  function makeSystem() {
    const trees = [
      new SkillTree({
        id: 'survival',
        name: 'Survival',
        nodes: [
          { id: 'surv_1', name: 'Hardy', description: 'Slower hunger drain', cost: 1 },
          { id: 'surv_2', name: 'Iron Stomach', description: 'Better food efficiency', cost: 2, requires: ['surv_1'] },
          { id: 'surv_3', name: 'Warmth', description: 'Better camp warmth', cost: 1 },
        ],
      }),
      new SkillTree({
        id: 'combat',
        name: 'Combat',
        nodes: [
          { id: 'cmb_1', name: 'Parry', description: 'Timed parry window', cost: 1 },
        ],
      }),
    ];
    return new SkillTreeSystem(trees);
  }

  it('starts with zero skill points and no unlocks', () => {
    const sys = makeSystem();
    expect(sys.skillPoints).toBe(0);
    expect(sys.getUnlocked()).toEqual([]);
  });

  it('addPoints increases available skill points', () => {
    const sys = makeSystem();
    sys.addPoints(3);
    expect(sys.skillPoints).toBe(3);
  });

  it('unlock a root node costs points', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    const ok = sys.unlock('surv_1');
    expect(ok).toBe(true);
    expect(sys.skillPoints).toBe(4);
    expect(sys.isUnlocked('surv_1')).toBe(true);
  });

  it('cannot unlock without enough points', () => {
    const sys = makeSystem();
    const ok = sys.unlock('surv_1');
    expect(ok).toBe(false);
    expect(sys.isUnlocked('surv_1')).toBe(false);
  });

  it('cannot unlock a node whose prereqs are not met', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    const ok = sys.unlock('surv_2');
    expect(ok).toBe(false);
  });

  it('can unlock a node after prereqs are met', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    sys.unlock('surv_1');
    const ok = sys.unlock('surv_2');
    expect(ok).toBe(true);
    expect(sys.skillPoints).toBe(2); // 5 - 1 - 2
  });

  it('cannot unlock the same node twice', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    sys.unlock('surv_1');
    const ok = sys.unlock('surv_1');
    expect(ok).toBe(false);
    expect(sys.skillPoints).toBe(4);
  });

  it('getAvailable returns nodes that can be unlocked', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    const avail = sys.getAvailable();
    const ids = avail.map(n => n.id);
    expect(ids).toContain('surv_1');
    expect(ids).toContain('surv_3');
    expect(ids).toContain('cmb_1');
    expect(ids).not.toContain('surv_2'); // requires surv_1
  });

  it('getUnlocked returns all unlocked node ids', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    sys.unlock('surv_1');
    sys.unlock('cmb_1');
    expect(sys.getUnlocked().sort()).toEqual(['cmb_1', 'surv_1']);
  });

  it('serializes and deserializes state', () => {
    const sys = makeSystem();
    sys.addPoints(5);
    sys.unlock('surv_1');
    const data = sys.serialize();

    const sys2 = makeSystem();
    sys2.deserialize(data);
    expect(sys2.skillPoints).toBe(4);
    expect(sys2.isUnlocked('surv_1')).toBe(true);
  });
});
