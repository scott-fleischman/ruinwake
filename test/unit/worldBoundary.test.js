import { describe, it, expect } from 'vitest';
import { clampToWorldBounds } from '../../src/core/worldBoundary.js';

describe('clampToWorldBounds', () => {
  it('does not change position inside bounds', () => {
    const pos = { x: 10, y: 33, z: 10 };
    clampToWorldBounds(pos, 64);
    expect(pos.x).toBe(10);
    expect(pos.z).toBe(10);
  });

  it('clamps x when past positive boundary', () => {
    const pos = { x: 70, y: 33, z: 0 };
    clampToWorldBounds(pos, 64);
    expect(pos.x).toBeLessThanOrEqual(63);
  });

  it('clamps x when past negative boundary', () => {
    const pos = { x: -70, y: 33, z: 0 };
    clampToWorldBounds(pos, 64);
    expect(pos.x).toBeGreaterThanOrEqual(-63);
  });

  it('clamps z when past positive boundary', () => {
    const pos = { x: 0, y: 33, z: 70 };
    clampToWorldBounds(pos, 64);
    expect(pos.z).toBeLessThanOrEqual(63);
  });

  it('clamps z when past negative boundary', () => {
    const pos = { x: 0, y: 33, z: -70 };
    clampToWorldBounds(pos, 64);
    expect(pos.z).toBeGreaterThanOrEqual(-63);
  });

  it('clamps y to prevent falling into void', () => {
    const pos = { x: 0, y: -10, z: 0 };
    clampToWorldBounds(pos, 64);
    expect(pos.y).toBeGreaterThanOrEqual(0);
  });

  it('does not clamp y at normal heights', () => {
    const pos = { x: 0, y: 33, z: 0 };
    clampToWorldBounds(pos, 64);
    expect(pos.y).toBe(33);
  });
});
