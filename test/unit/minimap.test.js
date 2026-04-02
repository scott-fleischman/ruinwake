import { describe, it, expect } from 'vitest';
import { MinimapState } from '../../src/core/minimapState.js';

describe('MinimapState', () => {
  it('starts hidden by default', () => {
    const minimap = new MinimapState();
    expect(minimap.visible).toBe(false);
  });

  it('toggles visibility', () => {
    const minimap = new MinimapState();
    minimap.toggle();
    expect(minimap.visible).toBe(true);
    minimap.toggle();
    expect(minimap.visible).toBe(false);
  });

  it('hides when full menu map tab is active', () => {
    const minimap = new MinimapState();
    minimap.toggle(); // visible
    expect(minimap.shouldRender(true)).toBe(false);
  });

  it('shows when visible and menu map tab is not active', () => {
    const minimap = new MinimapState();
    minimap.toggle(); // visible
    expect(minimap.shouldRender(false)).toBe(true);
  });

  it('does not show when hidden regardless of menu state', () => {
    const minimap = new MinimapState();
    expect(minimap.shouldRender(false)).toBe(false);
    expect(minimap.shouldRender(true)).toBe(false);
  });
});
