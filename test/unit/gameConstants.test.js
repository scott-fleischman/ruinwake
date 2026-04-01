import { describe, it, expect } from 'vitest';
import { GAME_CONSTANTS } from '../../src/core/gameConstants.js';

describe('Game constants centralized config', () => {
  it('has physics constants', () => {
    expect(GAME_CONSTANTS.PHYSICS.JUMP_VELOCITY).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.PHYSICS.GRAVITY).toBeLessThan(0);
    expect(GAME_CONSTANTS.PHYSICS.PLAYER_WIDTH).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.PHYSICS.PLAYER_HEIGHT).toBeGreaterThan(0);
  });

  it('has camera constants', () => {
    expect(GAME_CONSTANTS.CAMERA.FOV).toBeGreaterThan(50);
    expect(GAME_CONSTANTS.CAMERA.FOV).toBeLessThan(120);
    expect(GAME_CONSTANTS.CAMERA.NEAR).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.CAMERA.FAR).toBeGreaterThan(GAME_CONSTANTS.CAMERA.NEAR);
    expect(GAME_CONSTANTS.CAMERA.MOUSE_SENSITIVITY).toBeGreaterThan(0);
  });

  it('has world constants', () => {
    expect(GAME_CONSTANTS.WORLD.BOUNDARY_EXTENT).toBeGreaterThan(100);
    expect(GAME_CONSTANTS.WORLD.WATER_LEVEL).toBeGreaterThan(0);
  });

  it('has chunk streaming constants', () => {
    expect(GAME_CONSTANTS.CHUNKS.LOAD_DISTANCE).toBeGreaterThan(2);
    expect(GAME_CONSTANTS.CHUNKS.MAX_PER_FRAME).toBeGreaterThan(0);
  });

  it('has combat constants', () => {
    expect(GAME_CONSTANTS.COMBAT.MELEE_RANGE).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.COMBAT.FIST_DAMAGE).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.COMBAT.XP_PER_KILL).toBeGreaterThan(0);
  });

  it('has survival constants', () => {
    expect(GAME_CONSTANTS.SURVIVAL.GAME_TIME_SCALE).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.SURVIVAL.SPRINT_MULTIPLIER).toBeGreaterThan(1);
  });

  it('has fog constants', () => {
    expect(GAME_CONSTANTS.FOG.WIDTH).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.FOG.HEIGHT).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.FOG.CELL_SIZE).toBeGreaterThan(0);
    expect(GAME_CONSTANTS.FOG.BASE_FAR).toBeGreaterThan(0);
  });

  it('has corruption zone constants', () => {
    expect(GAME_CONSTANTS.CORRUPTION.CENTER_X).toBeDefined();
    expect(GAME_CONSTANTS.CORRUPTION.CENTER_Z).toBeDefined();
    expect(GAME_CONSTANTS.CORRUPTION.RADIUS).toBeGreaterThan(0);
  });

  it('has sky/lighting color constants', () => {
    expect(GAME_CONSTANTS.COLORS.SKY_DAY).toBeDefined();
    expect(GAME_CONSTANTS.COLORS.SKY_NIGHT).toBeDefined();
    expect(GAME_CONSTANTS.COLORS.SKY_DUSK).toBeDefined();
    expect(GAME_CONSTANTS.COLORS.SKY_DAWN).toBeDefined();
  });

  it('all values are frozen (immutable)', () => {
    expect(() => { GAME_CONSTANTS.PHYSICS.GRAVITY = 0; }).toThrow();
  });
});
