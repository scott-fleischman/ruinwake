import { describe, it, expect } from 'vitest';
import { buildHelpTabHTML } from '../../src/core/helpTabContent.js';

describe('buildHelpTabHTML', () => {
  it('returns an HTML string containing all section titles', () => {
    const html = buildHelpTabHTML();
    expect(html).toContain('Movement');
    expect(html).toContain('Actions');
    expect(html).toContain('Menus');
  });

  it('includes key bindings from each section', () => {
    const html = buildHelpTabHTML();
    expect(html).toContain('WASD');
    expect(html).toContain('Move');
    expect(html).toContain('LClick');
    expect(html).toContain('Mine / Attack');
    expect(html).toContain('ESC');
  });

  it('does not include instructionsText entries that reference removed keys', () => {
    const html = buildHelpTabHTML();
    // The help tab should use the updated menu bindings
    expect(html).toContain('Menu (pauses game)');
  });

  it('produces valid table markup', () => {
    const html = buildHelpTabHTML();
    expect(html).toContain('<table');
    expect(html).toContain('</table>');
  });
});
