import { describe, it, expect } from 'vitest';
import { GridInventory } from '../../src/core/gridInventory.js';
import { CraftingSystem, Recipe } from '../../src/core/crafting.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { QuestSystem, Quest, QuestStatus } from '../../src/core/quest.js';
import { DeathSystem } from '../../src/core/deathSystem.js';
import { BlockBreaker } from '../../src/core/blockBreaker.js';
import { BlockType } from '../../src/core/block.js';

describe('Inventory never goes negative', () => {
  it('remove fails gracefully when insufficient', () => {
    const inv = new GridInventory(36);
    inv.addItem('wood', 2);
    expect(inv.removeItem('wood', 5)).toBe(false);
    expect(inv.count('wood')).toBe(2);
  });

  it('crafting does not leave negative inventory', () => {
    const inv = new GridInventory(36);
    inv.addItem('wood', 1);
    const system = new CraftingSystem([
      new Recipe('Sticks', [{ type: 'wood', count: 1 }], [{ type: 'stick', count: 4 }]),
    ]);
    system.craft('Sticks', inv);
    expect(inv.count('wood')).toBe(0);
    expect(inv.count('stick')).toBe(4);
    // Can't craft again
    expect(system.craft('Sticks', inv)).toBe(false);
    expect(inv.count('wood')).toBe(0);
  });

  it('concurrent add/remove keeps counts valid', () => {
    const inv = new GridInventory(36);
    for (let i = 0; i < 100; i++) {
      inv.addItem('wood', 3);
      inv.removeItem('wood', 2);
    }
    expect(inv.count('wood')).toBe(100);
  });
});

describe('Quest state machine consistency', () => {
  function makeQuests() {
    return new QuestSystem([
      new Quest({ id: 'q1', chapter: 1, name: 'Q1', description: 'd',
        objectives: [{ id: 'o1', description: 'o', target: 2 }] }),
      new Quest({ id: 'q2', chapter: 2, name: 'Q2', description: 'd',
        requires: ['q1'],
        objectives: [{ id: 'o2', description: 'o', target: 1 }] }),
    ]);
  }

  it('completing all objectives transitions quest to completed', () => {
    const qs = makeQuests();
    qs.activate('q1');
    qs.advanceObjective('q1', 'o1', 1);
    expect(qs.getStatus('q1')).toBe(QuestStatus.ACTIVE);
    qs.advanceObjective('q1', 'o1', 1);
    expect(qs.getStatus('q1')).toBe(QuestStatus.COMPLETED);
  });

  it('advancing past target does not break quest', () => {
    const qs = makeQuests();
    qs.activate('q1');
    qs.advanceObjective('q1', 'o1', 100);
    expect(qs.getStatus('q1')).toBe(QuestStatus.COMPLETED);
  });

  it('advancing inactive quest does nothing', () => {
    const qs = makeQuests();
    qs.advanceObjective('q1', 'o1', 1);
    expect(qs.getStatus('q1')).toBe(QuestStatus.AVAILABLE);
  });

  it('advancing nonexistent quest does not crash', () => {
    const qs = makeQuests();
    expect(() => qs.advanceObjective('fake', 'o1', 1)).not.toThrow();
  });

  it('activating already active quest returns false', () => {
    const qs = makeQuests();
    expect(qs.activate('q1')).toBe(true);
    expect(qs.activate('q1')).toBe(false);
  });
});

describe('Death state safety', () => {
  it('death system detects zero health', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(9999);
    expect(ds.isDead(stats)).toBe(true);
  });

  it('respawn restores valid health', () => {
    const ds = new DeathSystem();
    const stats = new SurvivalStats();
    stats.takeDamage(9999);
    const player = { position: { x: 100, y: 50, z: 100 } };
    ds.respawn(stats, player, { x: 0, y: 34, z: 0 });
    expect(stats.health).toBeGreaterThan(0);
    expect(stats.health).toBeLessThanOrEqual(stats.maxHealth);
  });

  it('health cannot go below 0', () => {
    const stats = new SurvivalStats();
    stats.takeDamage(99999);
    expect(stats.health).toBeGreaterThanOrEqual(0);
  });
});

describe('Block breaker safety', () => {
  it('tick on inactive breaker does not crash', () => {
    const bb = new BlockBreaker();
    expect(bb.tick(0.1)).toBe(false);
  });

  it('cancel on inactive breaker does not crash', () => {
    const bb = new BlockBreaker();
    expect(() => bb.cancel()).not.toThrow();
  });

  it('progress never exceeds 1', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT);
    for (let i = 0; i < 100; i++) bb.tick(1);
    expect(bb.getProgress()).toBeLessThanOrEqual(1);
  });
});
