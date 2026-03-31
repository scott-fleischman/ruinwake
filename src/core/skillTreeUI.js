export class SkillTreeUI {
  constructor(skillTreeSystem) {
    this._system = skillTreeSystem;
    this.isOpen = false;
    this.currentTreeIndex = 0;
    this.selectedNodeIndex = 0;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.currentTreeIndex = 0;
      this.selectedNodeIndex = 0;
    }
  }

  getCurrentTree() {
    return this._system.trees[this.currentTreeIndex];
  }

  nextTree() {
    this.currentTreeIndex = (this.currentTreeIndex + 1) % this._system.trees.length;
    this.selectedNodeIndex = 0;
  }

  prevTree() {
    this.currentTreeIndex = (this.currentTreeIndex - 1 + this._system.trees.length) % this._system.trees.length;
    this.selectedNodeIndex = 0;
  }

  getNodes() {
    const tree = this.getCurrentTree();
    return tree.nodes.map(node => ({
      id: node.id,
      name: node.name,
      description: node.description,
      cost: node.cost,
      requires: node.requires,
      unlocked: this._system.isUnlocked(node.id),
      available: !this._system.isUnlocked(node.id) &&
        this._system.skillPoints >= node.cost &&
        node.requires.every(r => this._system.isUnlocked(r)),
    }));
  }

  unlockSelected() {
    const nodes = this.getNodes();
    if (this.selectedNodeIndex >= nodes.length) return false;
    return this._system.unlock(nodes[this.selectedNodeIndex].id);
  }

  getSkillPoints() {
    return this._system.skillPoints;
  }
}
