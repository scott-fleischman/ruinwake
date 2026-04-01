// Centralized game constants — all magic numbers in one place.
// Every gameplay-affecting number should live here, not scattered in code.

function deepFreeze(obj) {
  Object.freeze(obj);
  for (const val of Object.values(obj)) {
    if (val && typeof val === 'object') deepFreeze(val);
  }
  return obj;
}

export const GAME_CONSTANTS = deepFreeze({

  // --- Physics ---
  PHYSICS: {
    GRAVITY: -20.0,
    JUMP_VELOCITY: 8.0,
    PLAYER_WIDTH: 0.6,
    PLAYER_HEIGHT: 1.8,
    VOID_FLOOR_Y: 0,
  },

  // --- Camera ---
  CAMERA: {
    FOV: 75,
    NEAR: 0.1,
    FAR: 80,
    MOUSE_SENSITIVITY: 0.002,
    MAX_PITCH: Math.PI / 2 - 0.01,
    THIRD_PERSON_DISTANCE: 5,
    THIRD_PERSON_EYE_HEIGHT: 2.0,
    FIRST_PERSON_EYE_HEIGHT: 1.6,
  },

  // --- World ---
  WORLD: {
    BOUNDARY_EXTENT: 560,
    WATER_LEVEL: 26,
    SURFACE_Y: 32,
  },

  // --- Chunk streaming ---
  CHUNKS: {
    LOAD_DISTANCE: 5,      // 1 beyond render distance — buffer ring for neighbor data
    UNLOAD_DISTANCE: 8,
    MAX_PER_FRAME: 8,
    RENDER_DISTANCE: 4,    // only mesh/display these — buffer ring is data-only
    SIZE: 16,
  },

  // --- Combat ---
  COMBAT: {
    MELEE_RANGE: 3.0,
    MELEE_CONE: 0.7,
    RANGED_CONE: 0.95,
    FIST_DAMAGE: 2,
    NORMAL_COOLDOWN: 0.5,
    HEAVY_COOLDOWN: 1.2,
    XP_PER_KILL: 25,
    FACTION_REP_PER_KILL: 10,
  },

  // --- Survival ---
  SURVIVAL: {
    GAME_TIME_SCALE: 4,
    SPRINT_MULTIPLIER: 1.6,
    WATER_SLOWDOWN: 0.5,
    HUNGER_DRAIN_RATE: 0.1, // per game second
  },

  // --- Fog of war ---
  FOG: {
    WIDTH: 700,
    HEIGHT: 300,
    CELL_SIZE: 10,
    BASE_FAR: 56,       // hides outermost render ring (4th ring at 48-64 blocks)
    BASE_NEAR_RATIO: 0.5,
    MIN_NEAR: 1,
    REVEAL_RADIUS: 20,
  },

  // --- Enemy spawning ---
  SPAWNING: {
    MAX_ENEMIES: 8,
    MIN_SPAWN_DIST: 15,
    MAX_SPAWN_DIST: 35,
    SPAWN_INTERVAL: 10, // game seconds
  },

  // --- Corruption ---
  CORRUPTION: {
    CENTER_X: 420,
    CENTER_Z: 90,
    RADIUS: 100,
    FOG_THRESHOLD: 0.1,
  },

  // --- Restoration ---
  RESTORATION: {
    INTERACT_RANGE: 8,
    HINT_RANGE: 10,
    XP_REWARD: 100,
    FACTION_REP_REWARD: 50,
  },

  // --- NPC ---
  NPC: {
    INTERACT_RANGE: 5,
  },

  // --- Map UI ---
  MAP: {
    CANVAS_WIDTH: 460,
    CANVAS_HEIGHT: 320,
    WORLD_MIN_X: -100,
    WORLD_MAX_X: 560,
    WORLD_MIN_Z: -120,
    WORLD_MAX_Z: 150,
  },

  // --- Colors (hex for Three.js) ---
  COLORS: {
    SKY_DAY: 0x87ceeb,
    SKY_DAWN: 0xffb366,
    SKY_DUSK: 0xff7744,
    SKY_NIGHT: 0x0a0a2a,
    AMBIENT_LIGHT: 0xffffff,
    DIR_LIGHT: 0xfff4e0,
  },

  // --- Lighting levels per phase ---
  LIGHTING: {
    AMBIENT: { dawn: 0.5, day: 0.6, dusk: 0.35, night: 0.1 },
    DIRECTIONAL: { dawn: 0.6, day: 0.8, dusk: 0.4, night: 0.05 },
  },

  // --- Side quest auto-activation ---
  QUESTS: {
    AUTO_ACTIVATE_SIDE_COUNT: 3,
    XP_FIRST_NIGHT: 50,
    XP_EXPLORATION: 30,
    XP_DISCOVERY: 20,
    XP_RESTORATION: 100,
  },

  // --- Creative mode ---
  CREATIVE: {
    FLY_SPEED: 15,
  },

  // --- Dialogue ---
  DIALOGUE: {
    DISPLAY_DURATION: 5,
    SHORT_DURATION: 3,
    SAVE_FEEDBACK_DURATION: 2,
  },
});
