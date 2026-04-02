import { describe, it, expect } from 'vitest';
import { NPC } from '../../src/core/npc.js';

function makeWorld(solidPositions) {
  const solids = new Set(solidPositions.map(p => `${p[0]},${p[1]},${p[2]}`));
  return {
    getBlock(x, y, z) {
      return solids.has(`${x},${y},${z}`) ? 2 : 0; // 2=STONE, 0=AIR
    },
  };
}

describe('NPC wall collision', () => {
  it('does not walk into a solid block', () => {
    const npc = new NPC({
      id: 'test',
      name: 'Test',
      position: { x: 5.5, y: 1, z: 5.5 },
      factionId: 'test',
      dialogueId: null,
    });
    // Force wander direction toward a wall at x=7
    npc._wanderDirX = 1;
    npc._wanderDirZ = 0;
    npc._wanderTimer = 100; // long timer so it doesn't re-randomize
    npc._wanderRadius = 50;

    // Wall at x=7 at feet and head level
    const world = makeWorld([[7, 1, 5], [7, 2, 5]]);
    const getHeight = () => 0;

    // Tick for 5 seconds — should approach wall but not pass through
    for (let i = 0; i < 500; i++) {
      npc.updateAI(0.01, getHeight, world);
    }

    // NPC should be stopped before x=7 (the wall)
    expect(npc.position.x).toBeLessThan(7);
  });

  it('can walk freely in open space', () => {
    const npc = new NPC({
      id: 'test',
      name: 'Test',
      position: { x: 5.5, y: 1, z: 5.5 },
      factionId: 'test',
      dialogueId: null,
    });
    npc._wanderDirX = 1;
    npc._wanderDirZ = 0;
    npc._wanderTimer = 100;
    npc._wanderRadius = 50;

    const world = makeWorld([]); // no walls
    const getHeight = () => 0;

    for (let i = 0; i < 500; i++) {
      npc.updateAI(0.01, getHeight, world);
    }

    // NPC should have moved well past x=7
    expect(npc.position.x).toBeGreaterThan(9);
  });

  it('updateAI accepts a world parameter for collision', () => {
    const npc = new NPC({
      id: 'test',
      name: 'Test',
      position: { x: 5.5, y: 1, z: 5.5 },
      factionId: 'test',
      dialogueId: null,
    });
    // Should not throw when world is passed
    const world = makeWorld([]);
    expect(() => npc.updateAI(0.1, () => 0, world)).not.toThrow();
  });
});
