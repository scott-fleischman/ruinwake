import { describe, it, expect } from 'vitest';
import { buildHotbarHTML, buildSiteHintHTML, buildStatusEffectsHTML } from '../../src/ui/hudRenderer.js';

describe('HUD renderer', () => {
  describe('buildHotbarHTML', () => {
    it('renders 8 slots with selection highlight', () => {
      const hotbar = {
        getSlot: (i) => i === 0 ? { type: 'wood', count: 5 } : null,
        selectedSlot: 0,
      };
      const html = buildHotbarHTML(hotbar, () => '🪵');
      expect(html).toContain('selected');
      expect(html).toContain('wood');
      expect(html).toContain('5');
    });

    it('renders empty slots without item info', () => {
      const hotbar = {
        getSlot: () => null,
        selectedSlot: 0,
      };
      const html = buildHotbarHTML(hotbar, () => '');
      expect(html).not.toContain('undefined');
      // Should have 8 slot divs
      const slotCount = (html.match(/class="slot/g) || []).length;
      expect(slotCount).toBe(8);
    });
  });

  describe('buildSiteHintHTML', () => {
    it('returns hint for nearby unrestored site', () => {
      const sites = [
        { restored: false, name: 'Watch-Post', requirements: [{ type: 'wood', count: 5 }], position: { x: 10, y: 33, z: 10 } },
      ];
      const html = buildSiteHintHTML(sites, { x: 10, y: 33, z: 10 }, 10);
      expect(html).toContain('Watch-Post');
      expect(html).toContain('[R]');
    });

    it('returns empty string when no site is nearby', () => {
      const sites = [
        { restored: false, name: 'Watch-Post', requirements: [{ type: 'wood', count: 5 }], position: { x: 1000, y: 33, z: 1000 } },
      ];
      const html = buildSiteHintHTML(sites, { x: 10, y: 33, z: 10 }, 10);
      expect(html).toBe('');
    });

    it('returns empty for already restored sites', () => {
      const sites = [
        { restored: true, name: 'Watch-Post', requirements: [{ type: 'wood', count: 5 }], position: { x: 10, y: 33, z: 10 } },
      ];
      const html = buildSiteHintHTML(sites, { x: 10, y: 33, z: 10 }, 10);
      expect(html).toBe('');
    });
  });

  describe('buildStatusEffectsHTML', () => {
    it('returns formatted effects line', () => {
      const effects = [
        { type: 'speed_boost', remaining: 5.5 },
        { type: 'iron_skin', remaining: 3.2 },
      ];
      const html = buildStatusEffectsHTML(effects);
      expect(html).toContain('speed boost');
      expect(html).toContain('6s');
      expect(html).toContain('iron skin');
      expect(html).toContain('4s');
    });

    it('returns empty string when no effects', () => {
      expect(buildStatusEffectsHTML([])).toBe('');
    });
  });
});
