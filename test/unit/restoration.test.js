import { describe, it, expect } from 'vitest';
import { RestorableSite, RestorationSystem, RESTORATION_STAGES } from '../../src/core/restoration.js';
import { Inventory } from '../../src/core/inventory.js';

describe('RestorableSite', () => {
  it('creates a site with id, name, description, requirements, and restored flag', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower on the frontier road.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });
    expect(site.id).toBe('old_watchtower');
    expect(site.name).toBe('Old Watchtower');
    expect(site.description).toBe('A crumbling watchtower on the frontier road.');
    expect(site.requirements).toEqual([
      { type: 'stone', count: 10 },
      { type: 'wood', count: 5 },
    ]);
    expect(site.restored).toBe(false);
  });

  it('canRestore returns true when inventory has all required items', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 15);
    inv.add('wood', 10);

    expect(site.canRestore(inv)).toBe(true);
  });

  it('canRestore returns false when inventory is missing an item', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 15);
    // No wood at all

    expect(site.canRestore(inv)).toBe(false);
  });

  it('canRestore returns false when inventory has insufficient quantity', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 3);
    inv.add('wood', 5);

    expect(site.canRestore(inv)).toBe(false);
  });

  it('restore consumes required items and sets restored to true', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 15);
    inv.add('wood', 10);

    const result = site.restore(inv);
    expect(result).toBe(true);
    expect(site.restored).toBe(true);
    expect(inv.count('stone')).toBe(5);
    expect(inv.count('wood')).toBe(5);
  });

  it('restore fails and does not consume items when inventory is insufficient', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 3);
    inv.add('wood', 10);

    const result = site.restore(inv);
    expect(result).toBe(false);
    expect(site.restored).toBe(false);
    expect(inv.count('stone')).toBe(3);
    expect(inv.count('wood')).toBe(10);
  });

  it('has a currentStage property that starts at ruins', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
    });
    expect(site.currentStage).toBe('ruins');
  });

  it('getStage returns the current stage name', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
    });
    expect(site.getStage()).toBe('ruins');
  });

  it('restored is true only when currentStage is complete', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
    });
    expect(site.restored).toBe(false);
    site.currentStage = 'complete';
    expect(site.restored).toBe(true);
  });

  it('RESTORATION_STAGES defines the progression order', () => {
    expect(RESTORATION_STAGES).toEqual(['ruins', 'cleared', 'foundation', 'walls', 'complete']);
  });

  it('canAdvanceStage returns true when inventory has next stage requirements', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 5 }],
        walls: [{ type: 'wood', count: 5 }, { type: 'stone', count: 5 }],
        complete: [{ type: 'iron_ore', count: 2 }],
      },
    });
    const inv = new Inventory(20);
    inv.add('wood', 10);
    expect(site.canAdvanceStage(inv)).toBe(true);
  });

  it('canAdvanceStage returns false when inventory insufficient for next stage', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 5 }],
        walls: [{ type: 'wood', count: 5 }, { type: 'stone', count: 5 }],
        complete: [{ type: 'iron_ore', count: 2 }],
      },
    });
    const inv = new Inventory(20);
    inv.add('wood', 1);
    expect(site.canAdvanceStage(inv)).toBe(false);
  });

  it('advanceStage consumes resources and moves to next stage', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 5 }],
        walls: [{ type: 'wood', count: 5 }, { type: 'stone', count: 5 }],
        complete: [{ type: 'iron_ore', count: 2 }],
      },
    });
    const inv = new Inventory(20);
    inv.add('wood', 10);
    const result = site.advanceStage(inv);
    expect(result).toBe(true);
    expect(site.currentStage).toBe('cleared');
    expect(inv.count('wood')).toBe(7);
  });

  it('advanceStage fails if already at complete', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 5 }],
        walls: [{ type: 'wood', count: 5 }, { type: 'stone', count: 5 }],
        complete: [{ type: 'iron_ore', count: 2 }],
      },
    });
    site.currentStage = 'complete';
    const inv = new Inventory(20);
    inv.add('wood', 10);
    expect(site.advanceStage(inv)).toBe(false);
  });

  it('advanceStage fails without consuming if inventory insufficient', () => {
    const site = new RestorableSite({
      id: 'test',
      name: 'Test',
      description: 'Test site',
      requirements: [{ type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 5 }],
        walls: [{ type: 'wood', count: 5 }, { type: 'stone', count: 5 }],
        complete: [{ type: 'iron_ore', count: 2 }],
      },
    });
    const inv = new Inventory(20);
    inv.add('wood', 1);
    const result = site.advanceStage(inv);
    expect(result).toBe(false);
    expect(site.currentStage).toBe('ruins');
    expect(inv.count('wood')).toBe(1);
  });

  it('restore fails if site is already restored', () => {
    const site = new RestorableSite({
      id: 'old_watchtower',
      name: 'Old Watchtower',
      description: 'A crumbling watchtower.',
      requirements: [
        { type: 'stone', count: 10 },
        { type: 'wood', count: 5 },
      ],
    });

    const inv = new Inventory(20);
    inv.add('stone', 20);
    inv.add('wood', 20);

    site.restore(inv);
    expect(site.restored).toBe(true);

    // Try restoring again -- should fail and not consume more items
    const result = site.restore(inv);
    expect(result).toBe(false);
    expect(inv.count('stone')).toBe(10);
    expect(inv.count('wood')).toBe(15);
  });
});

describe('RestorationSystem', () => {
  function makeSystem() {
    const sites = [
      new RestorableSite({
        id: 'old_watchtower',
        name: 'Old Watchtower',
        description: 'A crumbling watchtower.',
        position: { x: 20, y: 33, z: 20 },
        requirements: [
          { type: 'stone', count: 10 },
          { type: 'wood', count: 5 },
        ],
      }),
      new RestorableSite({
        id: 'broken_bridge',
        name: 'Broken Bridge',
        description: 'A shattered stone bridge.',
        position: { x: 80, y: 33, z: 40 },
        requirements: [
          { type: 'stone', count: 20 },
          { type: 'iron_ore', count: 5 },
        ],
      }),
      new RestorableSite({
        id: 'ruined_shrine',
        name: 'Ruined Shrine',
        description: 'An ancient shrine overrun by corruption.',
        position: { x: 50, y: 33, z: 50 },
        requirements: [
          { type: 'relic_shard', count: 3 },
          { type: 'stone', count: 5 },
        ],
      }),
    ];
    return new RestorationSystem(sites);
  }

  it('tracks multiple sites and can get site by id', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');
    expect(tower).toBeDefined();
    expect(tower.name).toBe('Old Watchtower');

    const bridge = system.getSite('broken_bridge');
    expect(bridge).toBeDefined();
    expect(bridge.name).toBe('Broken Bridge');
  });

  it('getSite returns undefined for unknown id', () => {
    const system = makeSystem();
    expect(system.getSite('nonexistent')).toBeUndefined();
  });

  it('getCorruptionReduction returns 0 when no sites are restored', () => {
    const system = makeSystem();
    const reduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });
    expect(reduction).toBe(0);
  });

  it('restored sites reduce nearby corruption', () => {
    const system = makeSystem();

    // Restore the watchtower
    const inv = new Inventory(40);
    inv.add('stone', 50);
    inv.add('wood', 20);
    const tower = system.getSite('old_watchtower');
    tower.restore(inv);

    // Check corruption reduction near the restored site
    const reduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });
    expect(reduction).toBeGreaterThan(0);
  });

  it('corruption reduction is zero at ruins stage', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');
    expect(tower.currentStage).toBe('ruins');
    const reduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });
    expect(reduction).toBe(0);
  });

  it('partially restored site gives partial corruption reduction', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');

    // Advance to walls stage (not complete)
    tower.currentStage = 'walls';
    const partialReduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });

    // Now complete it
    tower.currentStage = 'complete';
    const fullReduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });

    expect(partialReduction).toBeGreaterThan(0);
    expect(partialReduction).toBeLessThan(fullReduction);
  });

  it('cleared stage gives less reduction than foundation', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');

    tower.currentStage = 'cleared';
    const clearedReduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });

    tower.currentStage = 'foundation';
    const foundationReduction = system.getCorruptionReduction({ x: 20, y: 33, z: 20 });

    expect(clearedReduction).toBeLessThan(foundationReduction);
  });

  it('corruption reduction is 0 far from any restored site', () => {
    const system = makeSystem();

    const inv = new Inventory(40);
    inv.add('stone', 50);
    inv.add('wood', 20);
    const tower = system.getSite('old_watchtower');
    tower.restore(inv);

    // Far away from all sites
    const reduction = system.getCorruptionReduction({ x: 500, y: 33, z: 500 });
    expect(reduction).toBe(0);
  });

  it('getSaferTravelRadius returns 0 at ruins', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');
    expect(system.getSaferTravelRadius(tower)).toBe(0);
  });

  it('getSaferTravelRadius grows with stage progression', () => {
    const system = makeSystem();
    const tower = system.getSite('old_watchtower');

    tower.currentStage = 'cleared';
    const clearedR = system.getSaferTravelRadius(tower);

    tower.currentStage = 'walls';
    const wallsR = system.getSaferTravelRadius(tower);

    tower.currentStage = 'complete';
    const completeR = system.getSaferTravelRadius(tower);

    expect(clearedR).toBeGreaterThan(0);
    expect(wallsR).toBeGreaterThan(clearedR);
    expect(completeR).toBeGreaterThan(wallsR);
    expect(completeR).toBe(30); // RESTORATION_RADIUS
  });

  it('multiple restored sites stack corruption reduction', () => {
    const system = makeSystem();

    const inv = new Inventory(40);
    inv.add('stone', 100);
    inv.add('wood', 50);
    inv.add('relic_shard', 10);

    system.getSite('old_watchtower').restore(inv);
    system.getSite('ruined_shrine').restore(inv);

    // Position between the two restored sites -- should get stacked reduction
    const reductionBoth = system.getCorruptionReduction({ x: 35, y: 33, z: 35 });
    // Compare with reduction from just one site
    const system2 = makeSystem();
    const inv2 = new Inventory(40);
    inv2.add('stone', 50);
    inv2.add('wood', 20);
    system2.getSite('old_watchtower').restore(inv2);
    const reductionOne = system2.getCorruptionReduction({ x: 35, y: 33, z: 35 });

    expect(reductionBoth).toBeGreaterThan(reductionOne);
  });
});
