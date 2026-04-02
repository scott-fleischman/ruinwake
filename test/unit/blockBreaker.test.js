import { describe, it, expect } from 'vitest';
import { BlockBreaker } from '../../src/core/blockBreaker.js';
import { BlockType } from '../../src/core/block.js';

describe('BlockBreaker', () => {
  it('starts inactive', () => {
    const bb = new BlockBreaker();
    expect(bb.isBreaking()).toBe(false);
    expect(bb.getProgress()).toBe(0);
  });

  it('becomes active on startBreak', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT);
    expect(bb.isBreaking()).toBe(true);
  });

  it('progress increases on tick', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT); // 0.4s break time
    bb.tick(0.1);
    expect(bb.getProgress()).toBeCloseTo(0.25, 1); // 0.1/0.4 = 0.25
  });

  it('returns true when block fully broken', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT); // 0.4s
    expect(bb.tick(0.5)).toBe(true); // 0.5 > 0.4 → broken
    expect(bb.isBreaking()).toBe(false);
  });

  it('returns false while still breaking', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.STONE); // 1.5s
    expect(bb.tick(0.1)).toBe(false);
    expect(bb.isBreaking()).toBe(true);
  });

  it('stone takes longer than dirt', () => {
    const bbDirt = new BlockBreaker();
    bbDirt.startBreak(0, 0, 0, BlockType.DIRT); // 0.4s
    bbDirt.tick(0.5);
    expect(bbDirt.isBreaking()).toBe(false); // broken

    const bbStone = new BlockBreaker();
    bbStone.startBreak(0, 0, 0, BlockType.STONE); // 1.5s
    bbStone.tick(0.5);
    expect(bbStone.isBreaking()).toBe(true); // still going
  });

  it('cancel resets progress and deactivates', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.WOOD);
    bb.tick(0.3);
    bb.cancel();
    expect(bb.isBreaking()).toBe(false);
    expect(bb.getProgress()).toBe(0);
  });

  it('switching to new block resets progress', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, BlockType.DIRT);
    bb.tick(0.2);
    const oldProgress = bb.getProgress();
    expect(oldProgress).toBeGreaterThan(0);

    bb.startBreak(1, 0, 0, BlockType.DIRT); // different position
    expect(bb.getProgress()).toBe(0);
  });

  it('holding on same block does not reset progress', () => {
    const bb = new BlockBreaker();
    bb.startBreak(5, 3, 5, BlockType.DIRT);
    bb.tick(0.1);
    const progress = bb.getProgress();

    bb.startBreak(5, 3, 5, BlockType.DIRT); // same position
    expect(bb.getProgress()).toBe(progress); // not reset
  });

  it('tick does nothing when inactive', () => {
    const bb = new BlockBreaker();
    expect(bb.tick(1.0)).toBe(false);
  });

  it('uses default break time for unknown block types', () => {
    const bb = new BlockBreaker();
    bb.startBreak(0, 0, 0, 255); // unknown type
    bb.tick(1.0); // default is 1.0s, so should complete
    expect(bb.isBreaking()).toBe(false);
  });
});
