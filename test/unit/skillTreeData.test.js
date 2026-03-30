import { describe, it, expect } from 'vitest';
import { skillTrees, getSkillTree } from '../../src/core/skillTreeData.js';

describe('skillTrees data', () => {
  it('defines 6 skill trees', () => {
    expect(skillTrees).toHaveLength(6);
  });

  it('has all spec tree ids', () => {
    const ids = skillTrees.map(t => t.id);
    expect(ids).toContain('survival');
    expect(ids).toContain('combat');
    expect(ids).toContain('craft');
    expect(ids).toContain('exploration');
    expect(ids).toContain('fellowship');
    expect(ids).toContain('attunement');
  });

  it('each tree has 8-12 nodes', () => {
    for (const tree of skillTrees) {
      expect(tree.nodes.length).toBeGreaterThanOrEqual(8);
      expect(tree.nodes.length).toBeLessThanOrEqual(12);
    }
  });

  it('all node ids are unique across all trees', () => {
    const allIds = skillTrees.flatMap(t => t.nodes.map(n => n.id));
    const unique = new Set(allIds);
    expect(unique.size).toBe(allIds.length);
  });

  it('all prerequisites reference valid node ids', () => {
    const allIds = new Set(skillTrees.flatMap(t => t.nodes.map(n => n.id)));
    for (const tree of skillTrees) {
      for (const node of tree.nodes) {
        for (const req of node.requires || []) {
          expect(allIds.has(req)).toBe(true);
        }
      }
    }
  });

  it('getSkillTree returns by id', () => {
    const t = getSkillTree('combat');
    expect(t.name).toBe('Combat');
  });
});
