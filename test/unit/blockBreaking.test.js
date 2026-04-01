import { describe, it, expect } from 'vitest';
import { BlockBreaker } from '../../src/core/blockBreaker.js';
import { BlockType } from '../../src/core/block.js';

describe('BlockBreaker', () => {
  it('starts with no active break', () => {
    const bb = new BlockBreaker();
    expect(bb.isBreaking()).toBe(false);
  });

  it('startBreak begins breaking at a position', () => {
    const bb = new BlockBreaker();
    bb.startBreak(5, 10, 3, BlockType.DIRT);
    expect(bb.isBreaking()).toBe(true);
    expect(bb.getProgress()).toBe(0);
  });

  it('tick advances break progress', () => {
    const bb = new BlockBreaker();
    bb.startBreak(5, 10, 3, BlockType.DIRT);
    bb.tick(0.2);
    expect(bb.getProgress()).toBeGreaterThan(0);
  });

  it('dirt breaks faster than stone', () => {
    const bb1 = new BlockBreaker();
    bb1.startBreak(0, 0, 0, BlockType.DIRT);
    bb1.tick(0.3);

    const bb2 = new BlockBreaker();
    bb2.startBreak(0, 0, 0, BlockType.STONE);
    bb2.tick(0.3);

    expect(bb1.getProgress()).toBeGreaterThan(bb2.getProgress());
  });

  it('returns true from tick when block is fully broken', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT);
    // Dirt is fast — should break within 0.5 seconds
    let broken = false;
    for (let i = 0; i < 20; i++) {
      if (bb.tick(0.1)) { broken = true; break; }
    }
    expect(broken).toBe(true);
  });

  it('cancel resets state', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.STONE);
    bb.tick(0.1);
    bb.cancel();
    expect(bb.isBreaking()).toBe(false);
    expect(bb.getProgress()).toBe(0);
  });

  it('starting a different block resets progress', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.STONE);
    bb.tick(0.3);
    bb.startBreak(1, 0, 0, BlockType.DIRT);
    expect(bb.getProgress()).toBe(0);
  });
});
