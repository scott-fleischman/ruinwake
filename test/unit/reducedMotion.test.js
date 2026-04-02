import { describe, it, expect } from 'vitest';
import { Settings } from '../../src/core/settings.js';

describe('Reduced motion accessibility option', () => {
  it('defaults to false', () => {
    const settings = new Settings();
    expect(settings.reducedMotion).toBe(false);
  });

  it('can be toggled on', () => {
    const settings = new Settings();
    settings.toggleReducedMotion();
    expect(settings.reducedMotion).toBe(true);
  });

  it('can be toggled off again', () => {
    const settings = new Settings();
    settings.toggleReducedMotion();
    settings.toggleReducedMotion();
    expect(settings.reducedMotion).toBe(false);
  });
});
