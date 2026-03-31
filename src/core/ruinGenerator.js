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
