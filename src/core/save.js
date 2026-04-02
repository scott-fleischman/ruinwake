import { World } from './world.js';
import { Player } from './player.js';
import { GridInventory } from './gridInventory.js';
import { SurvivalStats } from './survival.js';

export function serializeGameState(world, player, inventory, extra = {}) {
  // Only save chunks that have data (skip empty)
  const chunks = {};
  for (const [key, chunk] of world.chunks) {
    let hasData = false;
    for (let i = 0; i < chunk.blocks.length; i++) {
      if (chunk.blocks[i] !== 0) { hasData = true; break; }
    }
    if (hasData) {
      chunks[key] = Array.from(chunk.blocks);
    }
  }

  // Save inventory as slot array to preserve grid positions
  const invSlots = [];
  const invSize = inventory.size || 36;
  for (let i = 0; i < invSize; i++) {
    invSlots.push(inventory.getSlot ? inventory.getSlot(i) : null);
  }

  const state = {
    version: 2,
    player: {
      position: { ...player.position },
      velocity: { ...player.velocity },
      yaw: player.yaw,
      pitch: player.pitch,
      onGround: player.onGround,
    },
    inventory: invSlots,
    inventorySize: invSize,
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

  if (extra.fastTravel) {
    state.fastTravel = extra.fastTravel.serialize();
  }

  if (extra.fogOfWar) {
    state.fogOfWar = extra.fogOfWar.serialize();
  }

  if (extra.loreJournal) {
    state.loreJournal = extra.loreJournal.serialize();
  }

  if (extra.skillTree) {
    state.skillTree = extra.skillTree.serialize();
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

  const invSize = data.inventorySize || 36;
  const inventory = new GridInventory(invSize);
  if (Array.isArray(data.inventory)) {
    for (const item of data.inventory) {
      if (item && item.type && item.count > 0) {
        inventory.addItem(item.type, item.count);
      }
    }
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

  if (data.fastTravel) {
    result.fastTravelData = data.fastTravel;
  }

  if (data.fogOfWar) {
    result.fogOfWarData = data.fogOfWar;
  }

  if (data.loreJournal) {
    result.loreJournalData = data.loreJournal;
  }

  if (data.skillTree) {
    result.skillTreeData = data.skillTree;
  }

  return result;
}
