import { describe, it, expect } from 'vitest';
import { CreativeMode } from '../../src/core/creativeMode.js';

describe('CreativeMode', () => {
  it('starts disabled', () => {
    const cm = new CreativeMode();
    expect(cm.enabled).toBe(false);
  });

  it('toggle switches on and off', () => {
    const cm = new CreativeMode();
    cm.toggle();
    expect(cm.enabled).toBe(true);
    cm.toggle();
    expect(cm.enabled).toBe(false);
  });

  it('isInvincible returns true when enabled', () => {
    const cm = new CreativeMode();
    cm.toggle();
    expect(cm.isInvincible()).toBe(true);
  });

  it('canFly returns true when enabled', () => {
    const cm = new CreativeMode();
    cm.toggle();
    expect(cm.canFly()).toBe(true);
  });

  it('noHunger returns true when enabled', () => {
    const cm = new CreativeMode();
    cm.toggle();
    expect(cm.noHunger()).toBe(true);
  });

  it('flySpeed is faster than normal walk', () => {
    const cm = new CreativeMode();
    cm.toggle();
    expect(cm.flySpeed).toBeGreaterThan(5);
  });

  it('all features return false when disabled', () => {
    const cm = new CreativeMode();
    expect(cm.isInvincible()).toBe(false);
    expect(cm.canFly()).toBe(false);
    expect(cm.noHunger()).toBe(false);
  });
});
