import { describe, it, expect } from 'vitest';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { RestorableSite } from '../../src/core/restoration.js';

describe('Save/load restoration stages', () => {
  function makeMinimalState() {
    const world = new World();
    const player = new Player({ x: 0, y: 32, z: 0 });
    const inventory = new GridInventory(36);
    return { world, player, inventory };
  }

  function makeSites() {
    return [
      new RestorableSite({
        id: 'site_a',
        name: 'Site A',
        description: 'Test',
        position: { x: 10, y: 33, z: 10 },
        requirements: [{ type: 'wood', count: 5 }],
        stageRequirements: {
          cleared: [{ type: 'wood', count: 2 }],
          foundation: [{ type: 'wood', count: 1 }],
          walls: [{ type: 'wood', count: 1 }],
          complete: [{ type: 'wood', count: 1 }],
        },
      }),
      new RestorableSite({
        id: 'site_b',
        name: 'Site B',
        description: 'Test',
        position: { x: 50, y: 33, z: 50 },
        requirements: [{ type: 'stone', count: 5 }],
        stageRequirements: {
          cleared: [{ type: 'stone', count: 2 }],
          foundation: [{ type: 'stone', count: 1 }],
          walls: [{ type: 'stone', count: 1 }],
          complete: [{ type: 'stone', count: 1 }],
        },
      }),
    ];
  }

  it('serialized state includes restoration site stages', () => {
    const { world, player, inventory } = makeMinimalState();
    const sites = makeSites();
    sites[0].currentStage = 'walls';
    sites[1].currentStage = 'foundation';

    const json = serializeGameState(world, player, inventory, {
      restorationSites: sites,
    });
    const data = JSON.parse(json);
    expect(data.restorationSites).toEqual({
      site_a: 'walls',
      site_b: 'foundation',
    });
  });

  it('deserialized state returns restoration site stages', () => {
    const { world, player, inventory } = makeMinimalState();
    const sites = makeSites();
    sites[0].currentStage = 'walls';

    const json = serializeGameState(world, player, inventory, {
      restorationSites: sites,
    });
    const loaded = deserializeGameState(json);
    expect(loaded.restorationSiteData).toEqual({
      site_a: 'walls',
      site_b: 'ruins',
    });
  });

  it('a site saved at walls loads back at walls', () => {
    const { world, player, inventory } = makeMinimalState();
    const sites = makeSites();
    sites[0].currentStage = 'walls';

    const json = serializeGameState(world, player, inventory, {
      restorationSites: sites,
    });
    const loaded = deserializeGameState(json);

    // Apply loaded data to fresh sites
    const freshSites = makeSites();
    for (const site of freshSites) {
      if (loaded.restorationSiteData[site.id]) {
        site.currentStage = loaded.restorationSiteData[site.id];
      }
    }
    expect(freshSites[0].currentStage).toBe('walls');
    expect(freshSites[1].currentStage).toBe('ruins');
  });
});
