export const QuestStatus = Object.freeze({
  LOCKED: 'locked',
  AVAILABLE: 'available',
  ACTIVE: 'active',
  COMPLETED: 'completed',
});

export class QuestObjective {
  constructor({ id, description, target }) {
    this.id = id;
    this.description = description;
    this.target = target;
    this.progress = 0;
  }

  advance(amount) {
    this.progress = Math.min(this.progress + amount, this.target);
  }

  isComplete() {
    return this.progress >= this.target;
  }
}

export class Quest {
  constructor({ id, chapter, name, description, objectives, requires = [] }) {
    this.id = id;
    this.chapter = chapter;
    this.name = name;
    this.description = description;
    this.requires = requires;
    this.objectives = objectives.map(o => o instanceof QuestObjective ? o : new QuestObjective(o));
  }

  advanceObjective(objectiveId, amount) {
    const obj = this.objectives.find(o => o.id === objectiveId);
    if (obj) obj.advance(amount);
  }

  isComplete() {
    return this.objectives.every(o => o.isComplete());
  }
}

export class QuestSystem {
  constructor(quests) {
    this.quests = quests;
    this._status = new Map();
    for (const q of quests) {
      const hasUnmetReqs = q.requires.length > 0;
      this._status.set(q.id, hasUnmetReqs ? QuestStatus.LOCKED : QuestStatus.AVAILABLE);
    }
  }

  getQuest(questId) {
    return this.quests.find(q => q.id === questId);
  }

  getStatus(questId) {
    return this._status.get(questId) || QuestStatus.LOCKED;
  }

  activate(questId) {
    if (this.getStatus(questId) !== QuestStatus.AVAILABLE) return false;
    this._status.set(questId, QuestStatus.ACTIVE);
    return true;
  }

  advanceObjective(questId, objectiveId, amount) {
    if (this.getStatus(questId) !== QuestStatus.ACTIVE) return;
    const quest = this.getQuest(questId);
    if (!quest) return;
    quest.advanceObjective(objectiveId, amount);
    if (quest.isComplete()) {
      this._status.set(questId, QuestStatus.COMPLETED);
      this._unlockDependents(questId);
    }
  }

  _unlockDependents(completedId) {
    for (const q of this.quests) {
      if (this._status.get(q.id) !== QuestStatus.LOCKED) continue;
      const allMet = q.requires.every(r => this._status.get(r) === QuestStatus.COMPLETED);
      if (allMet) this._status.set(q.id, QuestStatus.AVAILABLE);
    }
  }

  getActiveQuests() {
    return this.quests.filter(q => this._status.get(q.id) === QuestStatus.ACTIVE);
  }

  serialize() {
    const statuses = {};
    for (const [id, s] of this._status) statuses[id] = s;
    const objectives = {};
    for (const q of this.quests) {
      objectives[q.id] = q.objectives.map(o => ({ id: o.id, progress: o.progress }));
    }
    return { statuses, objectives };
  }

  deserialize(data) {
    for (const [id, s] of Object.entries(data.statuses)) {
      this._status.set(id, s);
    }
    for (const [qid, objs] of Object.entries(data.objectives)) {
      const quest = this.getQuest(qid);
      if (!quest) continue;
      for (const saved of objs) {
        const obj = quest.objectives.find(o => o.id === saved.id);
        if (obj) obj.progress = saved.progress;
      }
    }
  }
}
