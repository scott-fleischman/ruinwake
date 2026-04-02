import { describe, it, expect } from 'vitest';
import { NPC } from '../../src/core/npc.js';

function makeSeededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function makeNPC() {
  return new NPC({
    id: 'test_npc',
    name: 'Test',
    position: { x: 10, y: 65, z: 10 },
    factionId: 'road_wardens',
    dialogueId: null,
  });
}

describe('NPC AI determinism', () => {
  it('produces identical positions given the same seeded RNG', () => {
    const npc1 = makeNPC();
    const npc2 = makeNPC();

    const rng1 = makeSeededRng(42);
    const rng2 = makeSeededRng(42);

    for (let i = 0; i < 20; i++) {
      npc1.updateAI(0.5, null, null, rng1);
      npc2.updateAI(0.5, null, null, rng2);
    }

    expect(npc1.position.x).toBe(npc2.position.x);
    expect(npc1.position.z).toBe(npc2.position.z);
  });

  it('produces different positions given different seeds', () => {
    const npc1 = makeNPC();
    const npc2 = makeNPC();

    const rng1 = makeSeededRng(42);
    const rng2 = makeSeededRng(99);

    for (let i = 0; i < 20; i++) {
      npc1.updateAI(0.5, null, null, rng1);
      npc2.updateAI(0.5, null, null, rng2);
    }

    const same = npc1.position.x === npc2.position.x && npc1.position.z === npc2.position.z;
    expect(same).toBe(false);
  });
});
