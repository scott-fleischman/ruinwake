export class SkillNode {
  constructor({ id, name, description, cost, requires = [] }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.requires = requires;
  }
}

export class SkillTree {
  constructor({ id, name, nodes }) {
    this.id = id;
    this.name = name;
    this.nodes = nodes.map(n => n instanceof SkillNode ? n : new SkillNode(n));
    this._nodeMap = new Map(this.nodes.map(n => [n.id, n]));
  }

  getNode(id) {
    return this._nodeMap.get(id);
  }
}

export class SkillTreeSystem {
  constructor(trees) {
    this.trees = trees;
    this.skillPoints = 0;
    this._unlocked = new Set();
    this._allNodes = new Map();
    for (const tree of trees) {
      for (const node of tree.nodes) {
        this._allNodes.set(node.id, node);
      }
    }
  }

  addPoints(n) {
    this.skillPoints += n;
  }

  isUnlocked(nodeId) {
    return this._unlocked.has(nodeId);
  }

  unlock(nodeId) {
    if (this._unlocked.has(nodeId)) return false;
    const node = this._allNodes.get(nodeId);
    if (!node) return false;
    if (this.skillPoints < node.cost) return false;
    for (const req of node.requires) {
      if (!this._unlocked.has(req)) return false;
    }
    this.skillPoints -= node.cost;
    this._unlocked.add(nodeId);
    return true;
  }

  getAvailable() {
    const result = [];
    for (const [id, node] of this._allNodes) {
      if (this._unlocked.has(id)) continue;
      if (this.skillPoints < node.cost) continue;
      const prereqsMet = node.requires.every(r => this._unlocked.has(r));
      if (prereqsMet) result.push(node);
    }
    return result;
  }

  /**
   * Grant a starting unlock for free (no skill point cost, no prerequisite check).
   * Used for race/class starting skills (Sec 11.3).
   */
  grantStartingUnlock(nodeId) {
    if (this._unlocked.has(nodeId)) return false;
    const node = this._allNodes.get(nodeId);
    if (!node) return false;
    this._unlocked.add(nodeId);
    return true;
  }

  getUnlocked() {
    return [...this._unlocked];
  }

  serialize() {
    return {
      skillPoints: this.skillPoints,
      unlocked: [...this._unlocked],
    };
  }

  deserialize(data) {
    this.skillPoints = data.skillPoints;
    this._unlocked = new Set(data.unlocked);
  }
}
