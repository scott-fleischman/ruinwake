/**
 * Extract quest objective markers from world triggers for active quests.
 * Returns an array of { questId, objectiveId, x, z, label } for rendering on the map.
 */
export function getQuestMarkers(questWorldTriggers, activeQuestIds) {
  if (!activeQuestIds || activeQuestIds.length === 0) return [];

  const activeSet = new Set(activeQuestIds);
  const triggers = questWorldTriggers.getTriggers();
  const markers = [];

  for (const t of triggers) {
    if (!activeSet.has(t.questId)) continue;
    markers.push({
      questId: t.questId,
      objectiveId: t.objectiveId,
      x: t.position.x,
      z: t.position.z,
      label: t.objectiveId.replace(/_/g, ' '),
    });
  }

  return markers;
}
