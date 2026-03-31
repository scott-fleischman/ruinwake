import { describe, it, expect } from 'vitest';
import { buildInstructionsText } from '../../src/core/instructionsText.js';

describe('Instructions text', () => {
  it('returns an array of control sections', () => {
    const sections = buildInstructionsText();
    expect(Array.isArray(sections)).toBe(true);
    expect(sections.length).toBeGreaterThan(0);
  });

  it('each section has a title and items', () => {
    const sections = buildInstructionsText();
    for (const section of sections) {
      expect(section.title).toBeTruthy();
      expect(Array.isArray(section.items)).toBe(true);
      expect(section.items.length).toBeGreaterThan(0);
    }
  });

  it('each item has a key and description', () => {
    const sections = buildInstructionsText();
    for (const section of sections) {
      for (const item of section.items) {
        expect(item.key).toBeTruthy();
        expect(item.desc).toBeTruthy();
      }
    }
  });

  it('total item count is reasonable (not too many for one screen)', () => {
    const sections = buildInstructionsText();
    const totalItems = sections.reduce((s, sec) => s + sec.items.length, 0);
    // Should be concise enough to fit on a laptop screen
    expect(totalItems).toBeLessThanOrEqual(20);
  });
});
