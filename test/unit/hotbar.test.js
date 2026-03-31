import { describe, it, expect } from 'vitest';
import { Hotbar } from '../../src/core/hotbar.js';

describe('Hotbar', () => {
  it('creates a hotbar with given size', () => {
    const hb = new Hotbar(8);
    expect(hb.size).toBe(8);
  });

  it('all slots start empty', () => {
    const hb = new Hotbar(8);
    for (let i = 0; i < 8; i++) {
      expect(hb.getSlot(i)).toBeNull();
    }
  });

  it('setSlot assigns item to slot', () => {
    const hb = new Hotbar(8);
    hb.setSlot(0, { type: 'iron_sword', count: 1 });
    expect(hb.getSlot(0)).toEqual({ type: 'iron_sword', count: 1 });
  });

  it('clearSlot removes item from slot', () => {
    const hb = new Hotbar(8);
    hb.setSlot(0, { type: 'iron_sword', count: 1 });
    hb.clearSlot(0);
    expect(hb.getSlot(0)).toBeNull();
  });

  it('selectedSlot starts at 0', () => {
    const hb = new Hotbar(8);
    expect(hb.selectedSlot).toBe(0);
  });

  it('selectSlot changes selected slot', () => {
    const hb = new Hotbar(8);
    hb.selectSlot(3);
    expect(hb.selectedSlot).toBe(3);
  });

  it('selectSlot wraps around when out of bounds', () => {
    const hb = new Hotbar(8);
    hb.selectSlot(9);
    expect(hb.selectedSlot).toBe(1);
  });

  it('getSelectedItem returns item in selected slot', () => {
    const hb = new Hotbar(8);
    hb.setSlot(2, { type: 'pickaxe', count: 1 });
    hb.selectSlot(2);
    expect(hb.getSelectedItem()).toEqual({ type: 'pickaxe', count: 1 });
  });

  it('getSelectedItem returns null when slot is empty', () => {
    const hb = new Hotbar(8);
    expect(hb.getSelectedItem()).toBeNull();
  });

  it('scrollNext moves to next slot', () => {
    const hb = new Hotbar(8);
    hb.scrollNext();
    expect(hb.selectedSlot).toBe(1);
  });

  it('scrollPrev moves to previous slot', () => {
    const hb = new Hotbar(8);
    hb.selectSlot(3);
    hb.scrollPrev();
    expect(hb.selectedSlot).toBe(2);
  });

  it('scrollNext wraps from last to first', () => {
    const hb = new Hotbar(8);
    hb.selectSlot(7);
    hb.scrollNext();
    expect(hb.selectedSlot).toBe(0);
  });
});
