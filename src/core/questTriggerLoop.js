// Quest trigger loop logic — extracted from main.js

export function processWorldTriggers(ctx) {
  const { firedTriggers, questSystem, experienceSystem, xpExploration } = ctx;
  for (const trigger of firedTriggers) {
    questSystem.activate(trigger.questId);
    if (trigger.type === 'reach_location' || trigger.type === 'explore_area') {
      questSystem.advanceObjective(trigger.questId, trigger.objectiveId, 1);
      experienceSystem.addExperience(xpExploration, 'exploration');
    }
  }
}

export function checkFirstNightSurvival(ctx) {
  const { day, survivedFirstNight, questSystem, experienceSystem, progress, xpFirstNight } = ctx;
  if (survivedFirstNight || day < 2) return false;
  questSystem.advanceObjective('ch1_embers', 'ch1_survive', 1);
  experienceSystem.addExperience(xpFirstNight, 'quest');
  progress.surviveNight();
  return true;
}
