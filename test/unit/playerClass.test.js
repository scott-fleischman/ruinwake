import { describe, it, expect } from 'vitest';
import { classes, getClass } from '../../src/core/playerClass.js';

describe('classes', () => {
  it('defines 12 classes', () => {
    expect(Object.keys(classes)).toHaveLength(12);
  });

  const expectedClasses = [
    'ranger', 'soldier', 'scholar',
    'archer', 'warden', 'gatherer',
    'miner', 'blacksmith', 'delver',
    'burglar', 'cook', 'forager',
  ];

  for (const id of expectedClasses) {
    it(`defines ${id}`, () => {
      const cls = classes[id];
      expect(cls).toBeDefined();
      expect(cls.name).toBeDefined();
      expect(typeof cls.passive).toBe('string');
      expect(typeof cls.activeAbility).toBe('string');
    });
  }

  it('getClass returns class by id', () => {
    expect(getClass('ranger').name).toBe('Ranger');
    expect(getClass('cook').name).toBe('Cook');
  });

  it('returns null for unknown class', () => {
    expect(getClass('wizard')).toBeNull();
  });
});
