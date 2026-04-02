import { BlockType } from './block.js';

const SIZES = {
  small: { radius: 3, height: 4, wallBlock: BlockType.COBBLESTONE },
  medium: { radius: 5, height: 5, wallBlock: BlockType.STONE_BRICK },
  large: { radius: 7, height: 6, wallBlock: BlockType.STONE_BRICK },
};

export function placeRuin(world, position, size = 'small') {
  const cfg = SIZES[size] || SIZES.small;
  const { radius, height, wallBlock } = cfg;
  const bx = Math.floor(position.x);
  const by = Math.floor(position.y);
  const bz = Math.floor(position.z);

  // Floor
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      world.setBlock(bx + dx, by - 1, bz + dz, BlockType.COBBLESTONE);
    }
  }

  // Walls (perimeter) with gaps for doorway
  for (let dy = 0; dy < height; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const onEdge = Math.abs(dx) === radius || Math.abs(dz) === radius;
        if (!onEdge) continue;

        // Leave doorway on +x side (2 wide, 3 tall)
        if (dx === radius && Math.abs(dz) <= 1 && dy < 3) continue;

        // Place wall blocks with some gaps for "ruin" feel
        if (dy < height - 1 || (dx + dz) % 3 !== 0) {
          world.setBlock(bx + dx, by + dy, bz + dz, wallBlock);
        }
      }
    }
  }

  // Corner pillars go full height
  const corners = [[-radius, -radius], [-radius, radius], [radius, -radius], [radius, radius]];
  for (const [cx, cz] of corners) {
    for (let dy = 0; dy < height; dy++) {
      world.setBlock(bx + cx, by + dy, bz + cz, BlockType.STONE);
    }
  }

  // Partial roof (ruin feel — only corners have roof)
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      if (Math.abs(dx) >= radius - 1 || Math.abs(dz) >= radius - 1) {
        world.setBlock(bx + dx, by + height, bz + dz, wallBlock);
      }
    }
  }
}

/**
 * Place a proper building with four walls, door, full roof, and a bed inside.
 * Used for NPC homes and restored sites.
 */
export function placeBuilding(world, position, opts = {}) {
  const wallBlock = opts.wallBlock || BlockType.OAK_PLANKS;
  const roofBlock = opts.roofBlock || BlockType.PLANKS;
  const floorBlock = opts.floorBlock || BlockType.COBBLESTONE;
  const radius = opts.radius || 4;
  const height = opts.height || 4;
  const placeBed = opts.bed !== false;
  const placeChest = opts.chest || false;

  const bx = Math.floor(position.x);
  const by = Math.floor(position.y);
  const bz = Math.floor(position.z);

  // Clear interior first
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dy = 0; dy <= height + 1; dy++) {
        world.setBlock(bx + dx, by + dy, bz + dz, BlockType.AIR);
      }
    }
  }

  // Floor
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      world.setBlock(bx + dx, by - 1, bz + dz, floorBlock);
    }
  }

  // Four walls with a door on +x side
  for (let dy = 0; dy < height; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const onEdge = Math.abs(dx) === radius || Math.abs(dz) === radius;
        if (!onEdge) continue;

        // Doorway on +x side, center column (dz=0), 2 blocks tall
        if (dx === radius && dz === 0 && dy < 2) {
          world.setBlock(bx + dx, by + dy, bz + dz, BlockType.DOOR);
          continue;
        }
        // Above door is wall, flanking is wall
        world.setBlock(bx + dx, by + dy, bz + dz, wallBlock);
      }
    }
  }

  // Full roof
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dz = -radius; dz <= radius; dz++) {
      world.setBlock(bx + dx, by + height, bz + dz, roofBlock);
    }
  }

  // Torch inside
  world.setBlock(bx, by + 2, bz - radius + 1, BlockType.TORCH);

  // Bed in corner
  if (placeBed) {
    world.setBlock(bx - radius + 1, by, bz - radius + 1, BlockType.BED);
  }

  // Chest if requested
  if (placeChest) {
    world.setBlock(bx - radius + 1, by, bz + radius - 1, BlockType.CHEST);
  }
}

/**
 * Place a fully restored version of a ruin site.
 * Has complete walls, roof, torches, and decorative elements.
 */
export function placeRestoredSite(world, position, size = 'small') {
  const configs = {
    small: { radius: 4, height: 4, wallBlock: BlockType.STONE_BRICK, roofBlock: BlockType.OAK_PLANKS },
    medium: { radius: 6, height: 5, wallBlock: BlockType.STONE_BRICK, roofBlock: BlockType.OAK_PLANKS },
    large: { radius: 8, height: 6, wallBlock: BlockType.STONE_BRICK, roofBlock: BlockType.PLANKS },
  };
  const cfg = configs[size] || configs.small;

  placeBuilding(world, position, {
    wallBlock: cfg.wallBlock,
    roofBlock: cfg.roofBlock,
    floorBlock: BlockType.STONE_BRICK,
    radius: cfg.radius,
    height: cfg.height,
    bed: true,
    chest: true,
  });

  const bx = Math.floor(position.x);
  const by = Math.floor(position.y);
  const bz = Math.floor(position.z);

  // Add torches on walls
  world.setBlock(bx + cfg.radius - 1, by + 2, bz, BlockType.TORCH);
  world.setBlock(bx - cfg.radius + 1, by + 2, bz, BlockType.TORCH);
  world.setBlock(bx, by + 2, bz + cfg.radius - 1, BlockType.TORCH);

  // Add a workbench inside
  world.setBlock(bx + cfg.radius - 2, by, bz - cfg.radius + 1, BlockType.WORKBENCH);
}
