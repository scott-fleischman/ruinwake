import { describe, it, expect } from 'vitest';
import { SkillTreeUI } from '../../src/core/skillTreeUI.js';
import { SkillTreeSystem } from '../../src/core/skillTree.js';
import { skillTrees } from '../../src/core/skillTreeData.js';

describe('SkillTreeUI', () => {
  function makeUI() {
    const system = new SkillTreeSystem(skillTrees);
    system.addPoints(5);
    return new SkillTreeUI(system);
  }

  it('starts closed', () => {
    const ui = makeUI();
    expect(ui.isOpen).toBe(false);
  });

  it('toggle opens when closed', () => {
    const ui = makeUI();
    ui.toggle();
    expect(ui.isOpen).toBe(true);
  });

  it('starts on first tree', () => {
    const ui = makeUI();
    ui.toggle();
    expect(ui.currentTreeIndex).toBe(0);
    expect(ui.getCurrentTree().id).toBe('survival');
  });

  it('nextTree cycles to next tree', () => {
    const ui = makeUI();
    ui.toggle();
    ui.nextTree();
    expect(ui.getCurrentTree().id).toBe('combat');
  });

  it('prevTree cycles to previous tree', () => {
    const ui = makeUI();
    ui.toggle();
    ui.nextTree();
    ui.prevTree();
    expect(ui.getCurrentTree().id).toBe('survival');
  });

  it('nextTree wraps around', () => {
    const ui = makeUI();
    ui.toggle();
    for (let i = 0; i < 6; i++) ui.nextTree();
    expect(ui.getCurrentTree().id).toBe('survival');
  });

  it('getNodes returns nodes for current tree with unlock status', () => {
    const ui = makeUI();
    ui.toggle();
    const nodes = ui.getNodes();
    expect(nodes.length).toBeGreaterThan(0);
    expect(nodes[0]).toHaveProperty('id');
    expect(nodes[0]).toHaveProperty('name');
    expect(nodes[0]).toHaveProperty('unlocked');
    expect(nodes[0]).toHaveProperty('available');
  });

  it('unlockSelected unlocks node when available', () => {
    const ui = makeUI();
    ui.toggle();
    ui.selectedNodeIndex = 0;
    const result = ui.unlockSelected();
    expect(result).toBe(true);
  });

  it('getSkillPoints returns current skill points', () => {
    const ui = makeUI();
    expect(ui.getSkillPoints()).toBe(5);
  });
});
