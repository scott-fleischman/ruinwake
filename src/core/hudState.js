export function buildHUDState(opts = {}) {
  const {
    survivalStats,
    questSystem,
    compass,
    playerYaw = 0,
    fearSystem,
    experienceSystem,
    statusEffects,
  } = opts;

  const state = {};

  if (survivalStats) {
    state.health = Math.ceil(survivalStats.health);
    state.maxHealth = survivalStats.maxHealth;
    state.stamina = Math.ceil(survivalStats.stamina);
    state.hunger = Math.ceil(survivalStats.hunger);
    state.focus = Math.ceil(survivalStats.focus);
    state.tempLabel = survivalStats.temperature < -0.5 ? 'Cold'
      : survivalStats.temperature > 0.5 ? 'Hot' : 'Mild';
  }

  if (questSystem) {
    const active = questSystem.getActiveQuests();
    state.activeQuestName = active.length > 0 ? active[0].name : null;
  } else {
    state.activeQuestName = null;
  }

  if (compass) {
    state.compassCardinal = compass.getCardinal(playerYaw);
  }

  if (fearSystem) {
    state.fearLevel = Math.round(fearSystem.level);
  } else {
    state.fearLevel = 0;
  }

  if (experienceSystem) {
    state.level = experienceSystem.level;
  } else {
    state.level = 1;
  }

  if (statusEffects) {
    state.statusEffects = statusEffects.getActive().map(e => ({
      type: e.type,
      remaining: e.remaining,
      strength: e.strength,
    }));
  } else {
    state.statusEffects = [];
  }

  return state;
}
