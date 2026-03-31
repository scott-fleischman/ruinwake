import { BlockType, isBlockSolid } from './block.js';
import { CHUNK_SIZE } from './chunk.js';

// Each face: direction normal, and 4 vertices in CCW order when viewed from outside
export const FACES = [
  { dir: [0, 1, 0], verts: [[0,1,1],[1,1,1],[1,1,0],[0,1,0]] },   // top (+Y)
  { dir: [0, -1, 0], verts: [[0,0,0],[1,0,0],[1,0,1],[0,0,1]] },   // bottom (-Y)
  { dir: [1, 0, 0], verts: [[1,0,0],[1,1,0],[1,1,1],[1,0,1]] },    // right (+X)
  { dir: [-1, 0, 0], verts: [[0,0,1],[0,1,1],[0,1,0],[0,0,0]] },   // left (-X)
  { dir: [0, 0, 1], verts: [[1,0,1],[1,1,1],[0,1,1],[0,0,1]] },    // front (+Z)
  { dir: [0, 0, -1], verts: [[0,0,0],[0,1,0],[1,1,0],[1,0,0]] },   // back (-Z)
];

export const BLOCK_COLORS = {
  [BlockType.GRASS]: [0.29, 0.56, 0.25],
  [BlockType.DIRT]: [0.48, 0.36, 0.23],
  [BlockType.STONE]: [0.53, 0.53, 0.53],
  [BlockType.WOOD]: [0.42, 0.26, 0.15],
  [BlockType.LEAVES]: [0.18, 0.43, 0.12],
  [BlockType.WATER]: [0.20, 0.40, 0.70],
  [BlockType.SAND]: [0.83, 0.73, 0.42],
  [BlockType.CLAY]: [0.62, 0.45, 0.35],
  [BlockType.GRAVEL]: [0.55, 0.52, 0.50],
  [BlockType.COBBLESTONE]: [0.45, 0.45, 0.45],
  [BlockType.PLANKS]: [0.60, 0.42, 0.22],
  [BlockType.IRON_ORE]: [0.55, 0.50, 0.45],
  [BlockType.COPPER_ORE]: [0.55, 0.42, 0.30],
  [BlockType.COAL_ORE]: [0.25, 0.25, 0.25],
  [BlockType.GLASS]: [0.75, 0.85, 0.90],
  [BlockType.CAMPFIRE]: [0.40, 0.20, 0.10],
  [BlockType.WORKBENCH]: [0.55, 0.38, 0.20],
  [BlockType.FORGE]: [0.35, 0.35, 0.35],
  [BlockType.KITCHEN]: [0.50, 0.35, 0.20],
  [BlockType.LOOM]: [0.65, 0.55, 0.40],
  [BlockType.RUNE_TABLE]: [0.30, 0.25, 0.50],
  [BlockType.TORCH]: [0.90, 0.70, 0.20],
  [BlockType.THATCH]: [0.70, 0.62, 0.35],
  [BlockType.STONE_BRICK]: [0.50, 0.50, 0.48],
  [BlockType.IRON_BLOCK]: [0.70, 0.70, 0.72],
  [BlockType.COPPER_BLOCK]: [0.72, 0.45, 0.20],
  [BlockType.SNOW]: [0.95, 0.95, 0.97],
  [BlockType.ICE]: [0.70, 0.85, 0.95],
  [BlockType.MOSSY_STONE]: [0.38, 0.48, 0.35],
  [BlockType.CORRUPTED_STONE]: [0.30, 0.20, 0.35],
  [BlockType.DARK_STONE]: [0.20, 0.18, 0.22],
  [BlockType.OAK_PLANKS]: [0.55, 0.38, 0.18],
  [BlockType.BIRCH_WOOD]: [0.80, 0.75, 0.65],
  [BlockType.REED]: [0.45, 0.60, 0.30],
  [BlockType.MUD]: [0.35, 0.28, 0.18],
  [BlockType.SLATE]: [0.38, 0.38, 0.42],
  [BlockType.MARBLE]: [0.90, 0.88, 0.85],
  [BlockType.OBSIDIAN]: [0.10, 0.08, 0.15],
  [BlockType.CRYSTAL]: [0.70, 0.80, 0.95],
  [BlockType.TALL_GRASS]: [0.25, 0.52, 0.20],
};

const DEFAULT_COLOR = [1, 0, 1];

export function shouldRenderBlock(blockType) {
  return blockType !== BlockType.AIR;
}

export function buildChunkGeometry(chunk, cx, cy, cz, world) {
  const positions = [];
  const colors = [];
  const indices = [];

  for (let x = 0; x < CHUNK_SIZE; x++) {
    for (let y = 0; y < CHUNK_SIZE; y++) {
      for (let z = 0; z < CHUNK_SIZE; z++) {
        const block = chunk.getBlock(x, y, z);
        if (!shouldRenderBlock(block)) continue;

        const wx = cx * CHUNK_SIZE + x;
        const wy = cy * CHUNK_SIZE + y;
        const wz = cz * CHUNK_SIZE + z;

        const color = BLOCK_COLORS[block] || DEFAULT_COLOR;

        for (const face of FACES) {
          const nx = wx + face.dir[0];
          const ny = wy + face.dir[1];
          const nz = wz + face.dir[2];

          if (isBlockSolid(world.getBlock(nx, ny, nz))) continue;

          const vertStart = positions.length / 3;

          for (const v of face.verts) {
            positions.push(wx + v[0], wy + v[1], wz + v[2]);
            colors.push(color[0], color[1], color[2]);
          }

          indices.push(
            vertStart, vertStart + 1, vertStart + 2,
            vertStart, vertStart + 2, vertStart + 3
          );
        }
      }
    }
  }

  if (positions.length === 0) return null;

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    indices,
    vertexCount: positions.length / 3,
  };
}
