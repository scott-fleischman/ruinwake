import { describe, it, expect } from 'vitest';
import { CraftingStation, StationType, getCraftableRecipes } from '../../src/core/craftingStation.js';
import { Inventory } from '../../src/core/inventory.js';

describe('StationType', () => {
  it('defines all spec station types', () => {
    expect(StationType.HAND).toBeDefined();
    expect(StationType.CAMPFIRE).toBeDefined();
    expect(StationType.WORKBENCH).toBeDefined();
    expect(StationType.FORGE).toBeDefined();
    expect(StationType.LOOM).toBeDefined();
    expect(StationType.KITCHEN).toBeDefined();
    expect(StationType.RUNE_TABLE).toBeDefined();
  });
});

describe('CraftingStation', () => {
  it('creates a station with type and position', () => {
    const station = new CraftingStation({
      type: StationType.WORKBENCH,
      position: { x: 10, y: 33, z: 5 },
    });
    expect(station.type).toBe(StationType.WORKBENCH);
    expect(station.position).toEqual({ x: 10, y: 33, z: 5 });
  });

  it('craft produces output and consumes inputs when inventory has materials', () => {
    const station = new CraftingStation({ type: StationType.WORKBENCH });
    const inv = new Inventory(20);
    inv.add('wood', 4);

    const recipe = {
      id: 'oak_planks',
      station: StationType.WORKBENCH,
      inputs: [{ type: 'wood', count: 4 }],
      outputs: [{ type: 'oak_planks', count: 4 }],
    };

    const result = station.craft(recipe, inv);
    expect(result).toBe(true);
    expect(inv.count('wood')).toBe(0);
    expect(inv.count('oak_planks')).toBe(4);
  });

  it('craft fails when inventory lacks materials', () => {
    const station = new CraftingStation({ type: StationType.WORKBENCH });
    const inv = new Inventory(20);
    inv.add('wood', 2);

    const recipe = {
      id: 'oak_planks',
      station: StationType.WORKBENCH,
      inputs: [{ type: 'wood', count: 4 }],
      outputs: [{ type: 'oak_planks', count: 4 }],
    };

    const result = station.craft(recipe, inv);
    expect(result).toBe(false);
    expect(inv.count('wood')).toBe(2);
  });

  it('craft fails when recipe station type does not match', () => {
    const station = new CraftingStation({ type: StationType.CAMPFIRE });
    const inv = new Inventory(20);
    inv.add('wood', 4);

    const recipe = {
      id: 'oak_planks',
      station: StationType.WORKBENCH,
      inputs: [{ type: 'wood', count: 4 }],
      outputs: [{ type: 'oak_planks', count: 4 }],
    };

    const result = station.craft(recipe, inv);
    expect(result).toBe(false);
  });
});

describe('getCraftableRecipes', () => {
  it('returns recipes matching station type that inventory can satisfy', () => {
    const recipes = [
      {
        id: 'oak_planks',
        station: StationType.WORKBENCH,
        inputs: [{ type: 'wood', count: 4 }],
        outputs: [{ type: 'oak_planks', count: 4 }],
      },
      {
        id: 'iron_sword',
        station: StationType.FORGE,
        inputs: [{ type: 'iron_ore', count: 3 }],
        outputs: [{ type: 'iron_sword', count: 1 }],
      },
      {
        id: 'stick',
        station: StationType.HAND,
        inputs: [{ type: 'wood', count: 1 }],
        outputs: [{ type: 'stick', count: 2 }],
      },
    ];

    const inv = new Inventory(20);
    inv.add('wood', 5);

    const available = getCraftableRecipes(recipes, StationType.WORKBENCH, inv);
    expect(available).toHaveLength(1);
    expect(available[0].id).toBe('oak_planks');
  });

  it('returns empty when no recipes match', () => {
    const recipes = [
      {
        id: 'iron_sword',
        station: StationType.FORGE,
        inputs: [{ type: 'iron_ore', count: 3 }],
        outputs: [{ type: 'iron_sword', count: 1 }],
      },
    ];

    const inv = new Inventory(20);
    const available = getCraftableRecipes(recipes, StationType.WORKBENCH, inv);
    expect(available).toHaveLength(0);
  });
});
