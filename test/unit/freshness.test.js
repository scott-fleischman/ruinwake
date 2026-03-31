import { describe, it, expect } from 'vitest';
import { FreshnessTracker, FreshnessBand } from '../../src/core/freshness.js';

describe('FreshnessBand', () => {
  it('defines freshness levels', () => {
    expect(FreshnessBand.FRESH).toBeDefined();
    expect(FreshnessBand.AGING).toBeDefined();
    expect(FreshnessBand.STALE).toBeDefined();
    expect(FreshnessBand.SPOILED).toBeDefined();
  });
});

describe('FreshnessTracker', () => {
  it('new items start fresh', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 60);
    expect(ft.getBand('raw_meat')).toBe(FreshnessBand.FRESH);
  });

  it('tick ages items', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 60);
    ft.tick(30);
    expect(ft.getTimeRemaining('raw_meat')).toBe(30);
  });

  it('item becomes aging at 50% time', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 100);
    ft.tick(55);
    expect(ft.getBand('raw_meat')).toBe(FreshnessBand.AGING);
  });

  it('item becomes stale at 25% time', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 100);
    ft.tick(80);
    expect(ft.getBand('raw_meat')).toBe(FreshnessBand.STALE);
  });

  it('item becomes spoiled at 0 time', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 100);
    ft.tick(100);
    expect(ft.getBand('raw_meat')).toBe(FreshnessBand.SPOILED);
  });

  it('preserved items have no freshness tracking', () => {
    const ft = new FreshnessTracker();
    // Not tracked means always fresh
    expect(ft.getBand('dried_meat')).toBe(FreshnessBand.FRESH);
  });

  it('removeItem stops tracking', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 60);
    ft.removeItem('raw_meat');
    expect(ft.getBand('raw_meat')).toBe(FreshnessBand.FRESH);
  });

  it('getEffectivenessMultiplier decreases as food ages', () => {
    const ft = new FreshnessTracker();
    ft.addItem('raw_meat', 100);
    const freshMult = ft.getEffectivenessMultiplier('raw_meat');
    ft.tick(80);
    const staleMult = ft.getEffectivenessMultiplier('raw_meat');
    expect(staleMult).toBeLessThan(freshMult);
  });
});
