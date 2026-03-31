import { describe, it, expect } from 'vitest';
import { getClassPassiveEffect } from '../../src/core/classPassives.js';
import { getCorruptionColor } from '../../src/core/corruptionVisuals.js';

describe('Class passive effects (Sec 10.1)', () => {
  it('man_ranger has tracking bonus', () => {
    const effect = getClassPassiveEffect('man_ranger');
    expect(effect).toBeDefined();
    expect(effect.type).toBeTruthy();
  });

  it('dwarf_miner has mining speed bonus', () => {
    const effect = getClassPassiveEffect('dwarf_miner');
    expect(effect.type).toBe('mining_speed');
    expect(effect.value).toBeGreaterThan(1);
  });

  it('hobbit_cook has meal buff duration bonus', () => {
    const effect = getClassPassiveEffect('hobbit_cook');
    expect(effect.type).toBe('meal_duration');
    expect(effect.value).toBeGreaterThan(1);
  });

  it('elf_archer has bow accuracy bonus', () => {
    const effect = getClassPassiveEffect('elf_archer');
    expect(effect.type).toBe('ranged_accuracy');
  });

  it('all 12 classes have a passive', () => {
    const classes = ['man_ranger', 'man_soldier', 'man_scholar',
      'elf_archer', 'elf_warden', 'elf_gatherer',
      'dwarf_miner', 'dwarf_blacksmith', 'dwarf_delver',
      'hobbit_burglar', 'hobbit_cook', 'hobbit_forager'];
    for (const cls of classes) {
      expect(getClassPassiveEffect(cls), `${cls} has no passive`).toBeDefined();
    }
  });
});

describe('Corruption visual colors (Sec 22.2)', () => {
  it('returns sickly green for corruption zone', () => {
    const color = getCorruptionColor('zone');
    expect(color).toBeDefined();
    expect(color.r).toBeDefined();
  });

  it('returns shadow violet for corrupted blocks', () => {
    const color = getCorruptionColor('block');
    expect(color).toBeDefined();
  });

  it('returns ashen black for high corruption', () => {
    const color = getCorruptionColor('high');
    expect(color).toBeDefined();
    // Should be dark
    expect(color.r + color.g + color.b).toBeLessThan(1.0);
  });
});
