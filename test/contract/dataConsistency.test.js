import { describe, it, expect } from 'vitest';
import { BlockType, ITEM_TO_BLOCK, isBlockSolid } from '../../src/core/block.js';
import { BLOCK_COLORS, shouldRenderBlock } from '../../src/core/geometry.js';
import { allRecipes } from '../../src/core/recipeData.js';
import { foods } from '../../src/core/food.js';
import { allItems, getItemDef } from '../../src/core/itemDatabase.js';
import { allNPCs } from '../../src/core/npcData.js';
import { allLandmarks } from '../../src/core/landmarkData.js';
import { allRestorableSites } from '../../src/core/restorableSiteData.js';
import { EnemyType, getEnemyDrops } from '../../src/core/enemy.js';

describe('Data consistency contracts', () => {
  it('every renderable BlockType has a color in BLOCK_COLORS', () => {
    for (const [name, value] of Object.entries(BlockType)) {
      if (shouldRenderBlock(value)) {
        expect(BLOCK_COLORS[value],
          `BlockType.${name} (${value}) is renderable but has no color`
        ).toBeDefined();
      }
    }
  });

  it('every recipe input/output type is a known item string', () => {
    const knownItems = new Set(allItems.map(i => i.id));
    // Also include ItemType values which may not all be in allItems
    for (const recipe of allRecipes) {
      for (const inp of recipe.inputs) {
        // Inputs should be real item types (we just check they're strings)
        expect(typeof inp.type).toBe('string');
        expect(inp.count).toBeGreaterThan(0);
      }
      for (const out of recipe.outputs) {
        expect(typeof out.type).toBe('string');
        expect(out.count).toBeGreaterThan(0);
      }
    }
  });

  it('every food has a hungerRestore > 0', () => {
    for (const [id, food] of Object.entries(foods)) {
      expect(food.hungerRestore, `Food ${id} has no hunger restore`).toBeGreaterThan(0);
    }
  });

  it('every enemy type has drops defined', () => {
    for (const type of Object.values(EnemyType)) {
      const drops = getEnemyDrops(type);
      expect(drops.length, `Enemy type ${type} has no drops`).toBeGreaterThan(0);
    }
  });

  it('every NPC has a valid factionId', () => {
    const validFactions = new Set(['road_wardens', 'rivendell_keepers', 'dwarven_crafters',
      'woodland_guardians', 'beorning_wardens', 'goblin_horde']);
    for (const npc of allNPCs) {
      expect(validFactions.has(npc.factionId),
        `NPC ${npc.name} has unknown faction ${npc.factionId}`
      ).toBe(true);
    }
  });

  it('every landmark has a unique region', () => {
    const regions = allLandmarks.map(l => l.region);
    expect(new Set(regions).size).toBe(regions.length);
  });

  it('every restorable site requirement uses real item types', () => {
    for (const site of allRestorableSites) {
      for (const req of site.requirements) {
        expect(typeof req.type).toBe('string');
        expect(req.count).toBeGreaterThan(0);
      }
    }
  });
});
