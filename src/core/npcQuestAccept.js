import { QuestStatus } from './quest.js';

export function canAcceptQuestFromNPC(npc, questSystem) {
  if (!npc.dialogueId) return false;
  return questSystem.getStatus(npc.dialogueId) === QuestStatus.AVAILABLE;
}

export function acceptQuestFromNPC(npc, questSystem) {
  if (!canAcceptQuestFromNPC(npc, questSystem)) return false;
  return questSystem.activate(npc.dialogueId);
}
