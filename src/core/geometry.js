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

// Richer, more atmospheric color palette inspired by Middle-earth
export const BLOCK_COLORS = {
  [BlockType.GRASS]: [0.28, 0.52, 0.22],      // lush green (Shire meadows)
  [BlockType.DIRT]: [0.45, 0.33, 0.20],        // rich earth brown
  [BlockType.STONE]: [0.50, 0.50, 0.52],       // cool gray with slight blue
  [BlockType.WOOD]: [0.40, 0.24, 0.12],        // dark oak bark
  [BlockType.LEAVES]: [0.15, 0.40, 0.10],      // deep forest green
  [BlockType.WATER]: [0.15, 0.35, 0.65],       // deep river blue
  [BlockType.SAND]: [0.82, 0.72, 0.45],        // warm golden sand
  [BlockType.CLAY]: [0.58, 0.42, 0.32],        // terracotta clay
  [BlockType.GRAVEL]: [0.52, 0.50, 0.48],      // road gravel
  [BlockType.COBBLESTONE]: [0.42, 0.42, 0.44], // aged cobblestone
  [BlockType.PLANKS]: [0.58, 0.40, 0.20],      // warm worked wood
  [BlockType.IRON_ORE]: [0.48, 0.45, 0.42],    // stone with rust specks
  [BlockType.COPPER_ORE]: [0.50, 0.38, 0.28],  // stone with green-copper veins
  [BlockType.COAL_ORE]: [0.22, 0.22, 0.24],    // dark stone with black seams
  [BlockType.GLASS]: [0.72, 0.82, 0.88],       // clear blue-white glass
  [BlockType.CAMPFIRE]: [0.45, 0.22, 0.08],    // charred wood ring
  [BlockType.WORKBENCH]: [0.52, 0.36, 0.18],   // crafted wood surface
  [BlockType.FORGE]: [0.30, 0.30, 0.32],       // dark iron forge
  [BlockType.KITCHEN]: [0.48, 0.33, 0.18],     // kitchen hearth wood
  [BlockType.LOOM]: [0.62, 0.52, 0.38],        // woven fiber frame
  [BlockType.RUNE_TABLE]: [0.25, 0.20, 0.45],  // deep elven purple
  [BlockType.TORCH]: [0.92, 0.72, 0.18],       // bright flame gold
  [BlockType.THATCH]: [0.68, 0.60, 0.32],      // dried grass thatch
  [BlockType.STONE_BRICK]: [0.48, 0.48, 0.46], // cut stone masonry
  [BlockType.IRON_BLOCK]: [0.68, 0.68, 0.72],  // polished iron
  [BlockType.COPPER_BLOCK]: [0.70, 0.42, 0.18], // warm copper
  [BlockType.SNOW]: [0.93, 0.95, 0.98],        // pristine white with blue tint
  [BlockType.ICE]: [0.65, 0.82, 0.92],         // translucent blue ice
  [BlockType.MOSSY_STONE]: [0.35, 0.45, 0.32], // ancient mossy ruins
  [BlockType.CORRUPTED_STONE]: [0.28, 0.18, 0.32], // shadow violet (Dol Guldur)
  [BlockType.DARK_STONE]: [0.18, 0.15, 0.20],  // Mordor-like dark basalt
  [BlockType.OAK_PLANKS]: [0.52, 0.36, 0.16],  // rich oak planks
  [BlockType.BIRCH_WOOD]: [0.78, 0.73, 0.62],  // pale birch bark
  [BlockType.REED]: [0.42, 0.58, 0.28],        // riverside reeds
  [BlockType.MUD]: [0.32, 0.25, 0.15],         // dark Mirkwood mud
  [BlockType.SLATE]: [0.35, 0.36, 0.40],       // blue-gray slate
  [BlockType.MARBLE]: [0.88, 0.86, 0.82],      // warm elven marble
  [BlockType.OBSIDIAN]: [0.08, 0.06, 0.12],    // volcanic glass
  [BlockType.CRYSTAL]: [0.68, 0.78, 0.92],     // glowing crystal blue
  [BlockType.TALL_GRASS]: [0.22, 0.48, 0.18],  // wild meadow grass
};

const DEFAULT_COLOR = [1, 0, 1];

// Deterministic hash-based noise for per-vertex color variation
function vertexNoise(wx, wy, wz, channel) {
  // Simple hash from world position + channel for deterministic noise
  let h = (wx * 374761 + wy * 668265 + wz * 1274613 + channel * 982451) | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  h = (h >> 16) ^ h;
  // Map to range [-0.08, +0.08] for richer texture variation
  return ((h & 0xffff) / 0xffff - 0.5) * 0.16;
}

// Three intersecting planes forming a 3D asterisk — looks like grass from all angles
const CROSSED_PLANES = [
  // Plane 1: diagonal X-Z (corner to corner)
  { verts: [[0.1, 0, 0.1], [0.1, 0.8, 0.1], [0.9, 0.8, 0.9], [0.9, 0, 0.9]] },
  // Plane 2: other diagonal X-Z
  { verts: [[0.9, 0, 0.1], [0.9, 0.8, 0.1], [0.1, 0.8, 0.9], [0.1, 0, 0.9]] },
  // Plane 3: center cross along X axis
  { verts: [[0.1, 0, 0.5], [0.1, 0.8, 0.5], [0.9, 0.8, 0.5], [0.9, 0, 0.5]] },
];

// Colors for specific faces of multi-colored blocks
const GRASS_SIDE_COLOR = [0.45, 0.33, 0.20];   // rich brown for grass sides
const WOOD_TOP_COLOR = [0.62, 0.50, 0.34];     // lighter cut-wood rings color
const WOOD_BOTTOM_COLOR = [0.35, 0.22, 0.12];  // darker bark bottom
const STONE_TOP_COLOR = [0.58, 0.58, 0.56];    // slightly lighter stone top
const SAND_WET_COLOR = [0.65, 0.55, 0.30];     // darker wet sand bottom
const MUD_TOP_COLOR = [0.38, 0.32, 0.22];      // slightly lighter mud surface
const SNOW_SIDE_COLOR = [0.85, 0.88, 0.92];    // slightly blue-gray snow sides
const COBBLE_TOP_COLOR = [0.50, 0.50, 0.48];   // cobblestone top highlight

export function shouldRenderBlock(blockType) {
  return blockType !== BlockType.AIR;
}

function getFaceColor(block, faceDir) {
  const isTop = faceDir[1] === 1;
  const isBottom = faceDir[1] === -1;

  switch (block) {
    case BlockType.GRASS:
      return isTop ? BLOCK_COLORS[BlockType.GRASS] : GRASS_SIDE_COLOR;
    case BlockType.WOOD:
      return isTop ? WOOD_TOP_COLOR : isBottom ? WOOD_BOTTOM_COLOR : BLOCK_COLORS[BlockType.WOOD];
    case BlockType.BIRCH_WOOD:
      return isTop ? [0.85, 0.80, 0.70] : BLOCK_COLORS[BlockType.BIRCH_WOOD];
    case BlockType.STONE:
      return isTop ? STONE_TOP_COLOR : BLOCK_COLORS[BlockType.STONE];
    case BlockType.COBBLESTONE:
      return isTop ? COBBLE_TOP_COLOR : BLOCK_COLORS[BlockType.COBBLESTONE];
    case BlockType.SAND:
      return isBottom ? SAND_WET_COLOR : BLOCK_COLORS[BlockType.SAND];
    case BlockType.MUD:
      return isTop ? MUD_TOP_COLOR : BLOCK_COLORS[BlockType.MUD];
    case BlockType.SNOW:
      return isTop ? BLOCK_COLORS[BlockType.SNOW] : SNOW_SIDE_COLOR;
    case BlockType.DIRT:
      // Dirt top is slightly lighter (drier)
      return isTop ? [0.52, 0.40, 0.26] : BLOCK_COLORS[BlockType.DIRT];
    case BlockType.IRON_ORE:
      // Iron ore has visible orange-brown speckles on sides
      return isTop ? [0.50, 0.48, 0.42] : BLOCK_COLORS[BlockType.IRON_ORE];
    case BlockType.COPPER_ORE:
      return isTop ? [0.50, 0.40, 0.28] : BLOCK_COLORS[BlockType.COPPER_ORE];
    default:
      return BLOCK_COLORS[block] || DEFAULT_COLOR;
  }
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

        // TALL_GRASS uses 3 crossed planes forming a 3D asterisk
        if (block === BlockType.TALL_GRASS) {
          const color = BLOCK_COLORS[block] || DEFAULT_COLOR;
          for (const plane of CROSSED_PLANES) {
            const vertStart = positions.length / 3;
            for (const v of plane.verts) {
              const vx = wx + v[0];
              const vy = wy + v[1];
              const vz = wz + v[2];
              positions.push(vx, vy, vz);
              colors.push(
                color[0] + vertexNoise(vx, vy, vz, 0),
                color[1] + vertexNoise(vx, vy, vz, 1),
                color[2] + vertexNoise(vx, vy, vz, 2)
              );
            }
            // Front face
            indices.push(
              vertStart, vertStart + 1, vertStart + 2,
              vertStart, vertStart + 2, vertStart + 3
            );
            // Back face (reversed winding for double-sided)
            indices.push(
              vertStart + 2, vertStart + 1, vertStart,
              vertStart + 3, vertStart + 2, vertStart
            );
          }
          continue;
        }

        // Water: only render top face where air is above (surface only)
        if (block === BlockType.WATER) {
          const above = world.getBlock(wx, wy + 1, wz);
          if (above !== BlockType.WATER && above !== BlockType.AIR) continue;
          if (above === BlockType.WATER) continue; // skip submerged water
          // Only render the top face
          const topFace = FACES[0]; // top face is index 0
          const vertStart = positions.length / 3;
          const color = BLOCK_COLORS[BlockType.WATER] || DEFAULT_COLOR;
          for (const v of topFace.verts) {
            const vx = wx + v[0];
            const vy = wy + v[1] - 0.2; // slightly below block top for surface effect
            const vz = wz + v[2];
            positions.push(vx, vy, vz);
            colors.push(
              color[0] + vertexNoise(vx, vy, vz, 0) * 0.5,
              color[1] + vertexNoise(vx, vy, vz, 1) * 0.5,
              color[2] + vertexNoise(vx, vy, vz, 2) * 0.5
            );
          }
          indices.push(vertStart, vertStart + 1, vertStart + 2, vertStart, vertStart + 2, vertStart + 3);
          continue;
        }

        for (const face of FACES) {
          const nx = wx + face.dir[0];
          const ny = wy + face.dir[1];
          const nz = wz + face.dir[2];

          if (isBlockSolid(world.getBlock(nx, ny, nz))) continue;

          const vertStart = positions.length / 3;
          const color = getFaceColor(block, face.dir);

          // Simple face-direction lighting (top=bright, sides=medium, bottom=dark)
          const dirLight = face.dir[1] === 1 ? 1.0
            : face.dir[1] === -1 ? 0.65
            : (face.dir[0] !== 0 ? 0.8 : 0.75);

          for (const v of face.verts) {
            const vx = wx + v[0];
            const vy = wy + v[1];
            const vz = wz + v[2];
            positions.push(vx, vy, vz);

            // Ambient occlusion: count solid neighbors at this vertex corner
            const cornerX = Math.floor(vx - 0.5 + face.dir[0] * 0.5);
            const cornerY = Math.floor(vy - 0.5 + face.dir[1] * 0.5);
            const cornerZ = Math.floor(vz - 0.5 + face.dir[2] * 0.5);
            let occluders = 0;
            for (let ox = 0; ox <= 1; ox++) {
              for (let oz = 0; oz <= 1; oz++) {
                if (isBlockSolid(world.getBlock(cornerX + ox, cornerY, cornerZ + oz))) occluders++;
              }
            }
            const ao = 1.0 - occluders * 0.07; // subtle darkening

            const light = dirLight * ao;
            colors.push(
              (color[0] + vertexNoise(vx, vy, vz, 0)) * light,
              (color[1] + vertexNoise(vx, vy, vz, 1)) * light,
              (color[2] + vertexNoise(vx, vy, vz, 2)) * light
            );
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
