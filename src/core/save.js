import { World } from './world.js';
import { Player } from './player.js';
import { Inventory } from './inventory.js';
import { SurvivalStats } from './survival.js';

export function serializeGameState(world, player, inventory, extra = {}) {
  const chunks = {};
  for (const [key, chunk] of world.chunks) {
    chunks[key] = Array.from(chunk.blocks);
  }

  const state = {
    player: {
      position: player.position,
      velocity: player.velocity,
      yaw: player.yaw,
      pitch: player.pitch,
      onGround: player.onGround,
    },
    inventory: inventory.getItems(),
    chunks,
  };

  if (extra.survivalStats) {
    const s = extra.survivalStats;
    state.survivalStats = {
      health: s.health,
      maxHealth: s.maxHealth,
      stamina: s.stamina,
      hunger: s.hunger,
      focus: s.focus,
      corruption: s.corruption,
      temperature: s.temperature,
    };
  }

  if (extra.quests) {
    state.quests = extra.quests.serialize();
  }

  if (extra.factions) {
    state.factions = extra.factions.serialize();
  }

  return JSON.stringify(state);
}

export function deserializeGameState(json) {
  const data = JSON.parse(json);

  const world = new World();
  for (const [key, blocks] of Object.entries(data.chunks)) {
    const chunk = world._getOrCreateChunk(
      ...key.split(',').map(Number)
    );
    chunk.blocks.set(blocks);
  }

  const player = new Player(data.player.position);
  player.velocity = data.player.velocity;
  player.yaw = data.player.yaw;
  player.pitch = data.player.pitch;
  player.onGround = data.player.onGround;

  const inventory = new Inventory(36);
  for (const item of data.inventory) {
    inventory.add(item.type, item.count);
  }

  const result = { world, player, inventory };

  if (data.survivalStats) {
    const stats = new SurvivalStats();
    Object.assign(stats, data.survivalStats);
    result.survivalStats = stats;
  }

  if (data.quests) {
    result.questData = data.quests;
  }

  if (data.factions) {
    result.factionData = data.factions;
  }

  return result;
}
