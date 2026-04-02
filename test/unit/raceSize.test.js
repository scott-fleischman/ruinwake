import { describe, it, expect } from 'vitest';
import { getRacePhysicalSize } from '../../src/core/raceTraits.js';

describe('Race physical sizes', () => {
  it('hobbits are shorter than men', () => {
    const hobbit = getRacePhysicalSize('hobbit');
    const man = getRacePhysicalSize('man');
    expect(hobbit.height).toBeLessThan(man.height);
    expect(hobbit.eyeHeight).toBeLessThan(man.eyeHeight);
  });

  it('dwarves are shorter than men but taller than hobbits', () => {
    const dwarf = getRacePhysicalSize('dwarf');
    const man = getRacePhysicalSize('man');
    const hobbit = getRacePhysicalSize('hobbit');
    expect(dwarf.height).toBeLessThan(man.height);
    expect(dwarf.height).toBeGreaterThan(hobbit.height);
  });

  it('elves are tallest', () => {
    const elf = getRacePhysicalSize('elf');
    const man = getRacePhysicalSize('man');
    expect(elf.height).toBeGreaterThanOrEqual(man.height);
  });

  it('all races have positive width and height', () => {
    for (const race of ['man', 'elf', 'dwarf', 'hobbit']) {
      const size = getRacePhysicalSize(race);
      expect(size.height).toBeGreaterThan(0);
      expect(size.width).toBeGreaterThan(0);
      expect(size.eyeHeight).toBeGreaterThan(0);
      expect(size.eyeHeight).toBeLessThan(size.height);
    }
  });

  it('unknown race returns man-sized defaults', () => {
    const unknown = getRacePhysicalSize('unknown');
    const man = getRacePhysicalSize('man');
    expect(unknown).toEqual(man);
  });
});
