import { describe, it, expect } from 'vitest';
import { compressSave, decompressSave } from '../../src/core/saveFile.js';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { BlockType } from '../../src/core/block.js';

describe('save file compression', () => {
  it('compress then decompress round-trips JSON', async () => {
    const world = new World();
    world.setBlock(5, 30, 5, BlockType.STONE);
    const player = new Player({ x: 10, y: 35, z: 20 });
    const inventory = new GridInventory(36);
    inventory.addItem('wood', 15);

    const json = serializeGameState(world, player, inventory);
    const compressed = await compressSave(json);
    const decompressed = await decompressSave(compressed);

    expect(decompressed).toBe(json);
  });

  it('compressed output is smaller than raw JSON', async () => {
    const world = new World();
    // Fill several chunks to get meaningful data
    for (let x = 0; x < 32; x++) {
      for (let z = 0; z < 32; z++) {
        for (let y = 0; y < 16; y++) {
          world.setBlock(x, y, z, BlockType.STONE);
        }
        world.setBlock(x, 16, z, BlockType.GRASS);
      }
    }
    const player = new Player({ x: 0, y: 33, z: 0 });
    const inventory = new GridInventory(36);

    const json = serializeGameState(world, player, inventory);
    const compressed = await compressSave(json);

    expect(compressed.size).toBeLessThan(json.length);
  });

  it('compressed blob is a valid gzip blob', async () => {
    const json = '{"test": true}';
    const compressed = await compressSave(json);

    expect(compressed).toBeInstanceOf(Blob);
    expect(compressed.size).toBeGreaterThan(0);

    // gzip magic number: 1f 8b
    const bytes = new Uint8Array(await compressed.arrayBuffer());
    expect(bytes[0]).toBe(0x1f);
    expect(bytes[1]).toBe(0x8b);
  });

  it('decompressSave rejects invalid data', async () => {
    const garbage = new Blob([new Uint8Array([1, 2, 3, 4])]);
    await expect(decompressSave(garbage)).rejects.toThrow();
  });
});
