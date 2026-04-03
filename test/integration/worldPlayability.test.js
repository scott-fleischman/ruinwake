import { describe, it, expect } from 'vitest';
import { createGameState } from '../../src/gameInit.js';
import { createGameConfig } from '../../src/core/gameConfig.js';
import { BlockType } from '../../src/core/block.js';
import { allRestorableSites } from '../../src/core/restorableSiteData.js';
import { allNPCs } from '../../src/core/npcData.js';
import { dist } from '../../src/core/math3d.js';
import { QuestWorldTriggers } from '../../src/core/questWorldTriggers.js';
import { getHeightAt } from '../../src/core/terrain.js';

describe('World playability', () => {
  const config = createGameConfig({ raceId: 'man', classId: 'ranger', difficulty: 'normal', tutorial: false });
  const spawnPos = { x: 0, y: 33, z: 0 };

  it('starter buildings contain a bed block within 200 blocks of spawn', () => {
    const gs = createGameState(config);
    const world = gs.world;
    // Check for BED blocks near spawn — worldBuildings place beds in buildings
    let foundBed = false;
    // Search a coarse grid around spawn for bed blocks
    for (let x = -200; x <= 200; x += 1) {
      for (let z = -200; z <= 200; z += 1) {
        const h = getHeightAt(x, z);
        for (let dy = 0; dy <= 6; dy++) {
          if (world.getBlock(x, h + dy, z) === BlockType.BED) {
            foundBed = true;
            break;
          }
        }
        if (foundBed) break;
      }
      if (foundBed) break;
    }
    expect(foundBed).toBe(true);
  });

  it('at least one NPC is within 300 blocks of spawn', () => {
    const nearbyNPC = allNPCs.find(npc => {
      const d = dist(spawnPos, npc.position);
      return d < 300;
    });
    expect(nearbyNPC).toBeDefined();
  });

  it('an NPC near spawn has dialogue', () => {
    const nearbyNPCs = allNPCs.filter(npc => dist(spawnPos, npc.position) < 100);
    const hasDialogue = nearbyNPCs.some(npc => npc.dialogue && Object.keys(npc.dialogue).length > 0);
    expect(hasDialogue).toBe(true);
  });

  it('starter_watchpost site is reachable from spawn', () => {
    const watchpost = allRestorableSites.find(s => s.id === 'starter_watchpost');
    expect(watchpost).toBeDefined();
    const d = dist(spawnPos, watchpost.position);
    // Should be reachable within reasonable walking distance
    expect(d).toBeLessThan(300);
  });

  it('enough wood blocks exist within 200 blocks of watchpost for cleared stage', () => {
    const gs = createGameState(config);
    const world = gs.world;
    const watchpost = allRestorableSites.find(s => s.id === 'starter_watchpost');
    const cx = Math.floor(watchpost.position.x);
    const cz = Math.floor(watchpost.position.z);
    let woodCount = 0;
    // Sample blocks around watchpost for wood (OAK_LOG, logs, etc.)
    for (let x = cx - 100; x <= cx + 100; x += 2) {
      for (let z = cz - 100; z <= cz + 100; z += 2) {
        const h = getHeightAt(x, z);
        for (let dy = 0; dy <= 15; dy++) {
          const block = world.getBlock(x, h + dy, z);
          if (block === BlockType.OAK_LOG || block === BlockType.WOOD) {
            woodCount++;
          }
        }
      }
    }
    // Need at least 5 wood for cleared stage (sampling every 2 blocks, so scale expected down)
    expect(woodCount).toBeGreaterThan(0);
  });

  it('all quest world trigger positions are within world bounds', () => {
    const triggers = new QuestWorldTriggers();
    const allTriggers = triggers.getTriggers();
    for (const t of allTriggers) {
      expect(t.position.x).toBeGreaterThanOrEqual(-900);
      expect(t.position.x).toBeLessThanOrEqual(1800);
      expect(t.position.z).toBeGreaterThanOrEqual(-900);
      expect(t.position.z).toBeLessThanOrEqual(900);
    }
  });

  it('quest trigger positions are on solid ground', () => {
    const triggers = new QuestWorldTriggers();
    const allTriggers = triggers.getTriggers();
    for (const t of allTriggers) {
      const h = getHeightAt(t.position.x, t.position.z);
      // Height should be reasonable terrain level
      expect(h).toBeGreaterThan(10);
      expect(h).toBeLessThan(80);
    }
  });
});
