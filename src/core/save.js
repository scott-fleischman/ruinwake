import { World } from './world.js';
import { Player } from './player.js';
import { Inventory } from './inventory.js';
import { CHUNK_SIZE } from './chunk.js';

export function serializeGameState(world, player, inventory) {
  const chunks = {};
  for (const [key, chunk] of world.chunks) {
    chunks[key] = Array.from(chunk.blocks);
  }

  return JSON.stringify({
    player: {
      position: player.position,
      velocity: player.velocity,
      yaw: player.yaw,
      pitch: player.pitch,
      onGround: player.onGround,
    },
    inventory: inventory.getItems(),
    chunks,
  });
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

  return { world, player, inventory };
}
