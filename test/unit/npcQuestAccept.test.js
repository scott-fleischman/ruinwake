import { describe, it, expect } from 'vitest';
import { canAcceptQuestFromNPC, acceptQuestFromNPC } from '../../src/core/npcQuestAccept.js';
import { QuestSystem, Quest, QuestStatus } from '../../src/core/quest.js';
import { NPC } from '../../src/core/npc.js';

describe('NPC quest acceptance', () => {
  function makeSystem() {
    return new QuestSystem([
      new Quest({ id: 'q1', chapter: 1, name: 'Test', description: 'desc', objectives: [{ id: 'o1', description: 'do', target: 1 }] }),
      new Quest({ id: 'q2', chapter: 2, name: 'Test2', description: 'desc2', objectives: [{ id: 'o2', description: 'do2', target: 1 }], requires: ['q1'] }),
    ]);
  }

  it('canAcceptQuestFromNPC returns true when NPC has an available quest', () => {
    const qs = makeSystem();
    const npc = new NPC({ id: 'n1', name: 'N', position: { x: 0, y: 0, z: 0 }, factionId: 'test', dialogueId: 'q1', dialogue: {} });
    expect(canAcceptQuestFromNPC(npc, qs)).toBe(true);
  });

  it('canAcceptQuestFromNPC returns false when quest is already active', () => {
    const qs = makeSystem();
    qs.activate('q1');
    const npc = new NPC({ id: 'n1', name: 'N', position: { x: 0, y: 0, z: 0 }, factionId: 'test', dialogueId: 'q1', dialogue: {} });
    expect(canAcceptQuestFromNPC(npc, qs)).toBe(false);
  });

  it('acceptQuestFromNPC activates the quest', () => {
    const qs = makeSystem();
    const npc = new NPC({ id: 'n1', name: 'N', position: { x: 0, y: 0, z: 0 }, factionId: 'test', dialogueId: 'q1', dialogue: {} });
    const result = acceptQuestFromNPC(npc, qs);
    expect(result).toBe(true);
    expect(qs.getStatus('q1')).toBe(QuestStatus.ACTIVE);
  });

  it('returns false when NPC has no dialogueId', () => {
    const qs = makeSystem();
    const npc = new NPC({ id: 'n1', name: 'N', position: { x: 0, y: 0, z: 0 }, factionId: 'test', dialogueId: null, dialogue: {} });
    expect(canAcceptQuestFromNPC(npc, qs)).toBe(false);
  });
});
