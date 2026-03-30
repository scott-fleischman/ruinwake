import { describe, it, expect } from 'vitest';
import { Player } from '../../src/core/player.js';

describe('Player', () => {
  it('has initial position', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    expect(player.position).toEqual({ x: 0, y: 33, z: 0 });
  });

  it('has initial velocity of zero', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    expect(player.velocity).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('has yaw and pitch for look direction', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    expect(player.yaw).toBe(0);
    expect(player.pitch).toBe(0);
  });

  it('moves forward along negative Z when yaw is 0', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    const input = { forward: true, back: false, left: false, right: false };
    player.applyMovementInput(input, 1.0);
    expect(player.position.z).toBeLessThan(0);
    expect(player.position.x).toBeCloseTo(0);
  });

  it('moves backward along positive Z when yaw is 0', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    const input = { forward: false, back: true, left: false, right: false };
    player.applyMovementInput(input, 1.0);
    expect(player.position.z).toBeGreaterThan(0);
  });

  it('strafes left along negative X when yaw is 0', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    const input = { forward: false, back: false, left: true, right: false };
    player.applyMovementInput(input, 1.0);
    expect(player.position.x).toBeLessThan(0);
  });

  it('strafes right along positive X when yaw is 0', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    const input = { forward: false, back: false, left: false, right: true };
    player.applyMovementInput(input, 1.0);
    expect(player.position.x).toBeGreaterThan(0);
  });

  it('movement direction rotates with yaw', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    player.yaw = Math.PI / 2; // facing +X
    const input = { forward: true, back: false, left: false, right: false };
    player.applyMovementInput(input, 1.0);
    expect(player.position.x).toBeGreaterThan(0);
    expect(player.position.z).toBeCloseTo(0, 5);
  });

  it('does not move vertically from horizontal input', () => {
    const player = new Player({ x: 0, y: 33, z: 0 });
    const input = { forward: true, back: false, left: false, right: false };
    player.applyMovementInput(input, 1.0);
    expect(player.position.y).toBe(33);
  });
});
