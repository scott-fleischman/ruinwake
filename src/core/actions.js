import { BlockType, isBlockSolid, blockDrops, ITEM_TO_BLOCK, canMine } from './block.js';
import { getFood } from './food.js';

export function mineBlock(world, inventory, x, y, z, tool) {
  const block = world.getBlock(x, y, z);
  if (!isBlockSolid(block)) return false;
  if (!canMine(block, tool || null)) return false;
  world.setBlock(x, y, z, BlockType.AIR);
  const drops = blockDrops(block);
  for (const drop of drops) {
    inventory.add(drop.type, drop.count);
  }
  return true;
}

export function placeBlock(world, inventory, x, y, z, itemType) {
  const blockType = ITEM_TO_BLOCK[itemType];
  if (blockType === undefined) return false;
  if (isBlockSolid(world.getBlock(x, y, z))) return false;
  if (!inventory.remove(itemType, 1)) return false;
  world.setBlock(x, y, z, blockType);
  return true;
}

export function interactPlace(world, inventory, eyePos, direction, maxDist) {
  const hit = raycast(world, eyePos, direction, maxDist);
  if (!hit) return { placed: false };

  const px = hit.blockPos.x + hit.normal.x;
  const py = hit.blockPos.y + hit.normal.y;
  const pz = hit.blockPos.z + hit.normal.z;

  const items = inventory.getItems();
  const placeable = items.find(i => ITEM_TO_BLOCK[i.type] !== undefined);
  if (!placeable) return { placed: false };

  const result = placeBlock(world, inventory, px, py, pz, placeable.type);
  if (!result) return { placed: false };

  return { placed: true, pos: { x: px, y: py, z: pz } };
}

export function eatFood(survivalStats, statusEffects, foodId) {
  const food = getFood(foodId);
  if (!food) return false;
  survivalStats.eat(food.hungerRestore);
  for (const effect of food.effects) {
    statusEffects.apply({ type: effect.type, duration: effect.duration, strength: effect.strength });
  }
  return true;
}

export function raycast(world, origin, direction, maxDist) {
  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);

  const stepX = direction.x >= 0 ? 1 : -1;
  const stepY = direction.y >= 0 ? 1 : -1;
  const stepZ = direction.z >= 0 ? 1 : -1;

  const tDeltaX = direction.x !== 0 ? Math.abs(1 / direction.x) : Infinity;
  const tDeltaY = direction.y !== 0 ? Math.abs(1 / direction.y) : Infinity;
  const tDeltaZ = direction.z !== 0 ? Math.abs(1 / direction.z) : Infinity;

  let tMaxX = direction.x !== 0
    ? ((direction.x > 0 ? x + 1 - origin.x : origin.x - x) * tDeltaX)
    : Infinity;
  let tMaxY = direction.y !== 0
    ? ((direction.y > 0 ? y + 1 - origin.y : origin.y - y) * tDeltaY)
    : Infinity;
  let tMaxZ = direction.z !== 0
    ? ((direction.z > 0 ? z + 1 - origin.z : origin.z - z) * tDeltaZ)
    : Infinity;

  let t = 0;
  let normal = { x: 0, y: 0, z: 0 };

  while (t < maxDist) {
    if (isBlockSolid(world.getBlock(x, y, z))) {
      return { blockPos: { x, y, z }, normal, t };
    }

    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      t = tMaxX;
      x += stepX;
      tMaxX += tDeltaX;
      normal = { x: -stepX, y: 0, z: 0 };
    } else if (tMaxY < tMaxZ) {
      t = tMaxY;
      y += stepY;
      tMaxY += tDeltaY;
      normal = { x: 0, y: -stepY, z: 0 };
    } else {
      t = tMaxZ;
      z += stepZ;
      tMaxZ += tDeltaZ;
      normal = { x: 0, y: 0, z: -stepZ };
    }
  }

  return null;
}
