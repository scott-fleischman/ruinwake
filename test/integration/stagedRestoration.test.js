import { describe, it, expect } from 'vitest';
import { RestorableSite, RESTORATION_STAGES } from '../../src/core/restoration.js';
import { Inventory } from '../../src/core/inventory.js';
import { processRestorationInput } from '../../src/core/systemWiring.js';

describe('Staged restoration integration', () => {
  function makeSite() {
    return new RestorableSite({
      id: 'test_site',
      name: 'Test Site',
      description: 'A test site',
      position: { x: 50, y: 33, z: 50 },
      requirements: [{ type: 'wood', count: 10 }, { type: 'stone', count: 5 }],
      stageRequirements: {
        cleared: [{ type: 'wood', count: 3 }],
        foundation: [{ type: 'stone', count: 3 }],
        walls: [{ type: 'wood', count: 4 }, { type: 'stone', count: 2 }],
        complete: [{ type: 'wood', count: 3 }],
      },
    });
  }

  it('processRestorationInput advances one stage per call', () => {
    const site = makeSite();
    const inv = new Inventory(20);
    inv.add('wood', 20);
    inv.add('stone', 20);

    const result = processRestorationInput(site, inv);
    expect(result.advanced).toBe(true);
    expect(site.currentStage).toBe('cleared');
    expect(result.stage).toBe('cleared');
  });

  it('advancing from ruins to cleared consumes only cleared-stage resources', () => {
    const site = makeSite();
    const inv = new Inventory(20);
    inv.add('wood', 10);
    inv.add('stone', 10);

    processRestorationInput(site, inv);
    expect(inv.count('wood')).toBe(7); // 10 - 3
    expect(inv.count('stone')).toBe(10); // unchanged
  });

  it('returns not-advanced when inventory insufficient', () => {
    const site = makeSite();
    const inv = new Inventory(20);
    inv.add('wood', 1);

    const result = processRestorationInput(site, inv);
    expect(result.advanced).toBe(false);
    expect(site.currentStage).toBe('ruins');
  });

  it('fully advancing through all stages reaches complete', () => {
    const site = makeSite();
    const inv = new Inventory(40);
    inv.add('wood', 50);
    inv.add('stone', 50);

    for (let i = 0; i < 4; i++) {
      const result = processRestorationInput(site, inv);
      expect(result.advanced).toBe(true);
    }
    expect(site.currentStage).toBe('complete');
    expect(site.restored).toBe(true);
  });

  it('returns not-advanced when already complete', () => {
    const site = makeSite();
    site.currentStage = 'complete';
    const inv = new Inventory(20);
    inv.add('wood', 50);

    const result = processRestorationInput(site, inv);
    expect(result.advanced).toBe(false);
  });
});
