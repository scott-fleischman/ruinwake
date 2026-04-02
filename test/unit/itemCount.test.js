import { describe, it, expect } from 'vitest';
import { ItemType } from '../../src/core/item.js';

describe('ItemType completeness', () => {
  it('has at least 80 item types', () => {
    const count = Object.keys(ItemType).length;
    expect(count).toBeGreaterThanOrEqual(80);
  });

  it('every ItemType value is a unique non-empty string', () => {
    const values = Object.values(ItemType);
    const unique = new Set(values);
    expect(unique.size).toBe(values.length);
    for (const v of values) {
      expect(typeof v).toBe('string');
      expect(v.length).toBeGreaterThan(0);
    }
  });
});
