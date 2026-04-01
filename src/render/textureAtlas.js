// Builds a texture atlas from procedural block textures for Three.js
import * as THREE from 'three';
import { generateBlockTexture, TEXTURE_SIZE, getTextureIds } from './blockTextures.js';
import { BlockType } from '../core/block.js';

// Map block types to texture IDs (some blocks use the same texture for all faces)
const BLOCK_FACE_TEXTURES = {
  [BlockType.GRASS]: { top: 'grass_top', side: 'grass_side', bottom: 'dirt' },
  [BlockType.DIRT]: { all: 'dirt' },
  [BlockType.STONE]: { all: 'stone' },
  [BlockType.WOOD]: { top: 'wood_top', side: 'wood_side', bottom: 'wood_top' },
  [BlockType.LEAVES]: { all: 'leaves' },
  [BlockType.SAND]: { all: 'sand' },
  [BlockType.COBBLESTONE]: { all: 'cobblestone' },
  [BlockType.IRON_ORE]: { all: 'iron_ore' },
  [BlockType.COPPER_ORE]: { all: 'copper_ore' },
  [BlockType.COAL_ORE]: { all: 'coal_ore' },
  [BlockType.WATER]: { all: 'water' },
  [BlockType.MUD]: { all: 'mud' },
  [BlockType.SNOW]: { all: 'snow' },
};

const ATLAS_COLS = 8;

export function buildTextureAtlas() {
  const ids = getTextureIds();
  const rows = Math.ceil(ids.length / ATLAS_COLS);
  const atlasW = ATLAS_COLS * TEXTURE_SIZE;
  const atlasH = rows * TEXTURE_SIZE;
  const atlasData = new Uint8Array(atlasW * atlasH * 4);

  const uvMap = {}; // textureId -> { u0, v0, u1, v1 }

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const col = i % ATLAS_COLS;
    const row = Math.floor(i / ATLAS_COLS);
    const texData = generateBlockTexture(id);

    // Copy texture into atlas
    for (let ty = 0; ty < TEXTURE_SIZE; ty++) {
      for (let tx = 0; tx < TEXTURE_SIZE; tx++) {
        const srcIdx = (ty * TEXTURE_SIZE + tx) * 4;
        const dstX = col * TEXTURE_SIZE + tx;
        const dstY = row * TEXTURE_SIZE + ty;
        const dstIdx = (dstY * atlasW + dstX) * 4;
        atlasData[dstIdx] = texData[srcIdx];
        atlasData[dstIdx + 1] = texData[srcIdx + 1];
        atlasData[dstIdx + 2] = texData[srcIdx + 2];
        atlasData[dstIdx + 3] = texData[srcIdx + 3];
      }
    }

    uvMap[id] = {
      u0: col / ATLAS_COLS,
      v0: 1 - (row + 1) / rows,
      u1: (col + 1) / ATLAS_COLS,
      v1: 1 - row / rows,
    };
  }

  const texture = new THREE.DataTexture(atlasData, atlasW, atlasH, THREE.RGBAFormat);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.needsUpdate = true;

  return { texture, uvMap, ids };
}

export function getBlockUVs(blockType, faceDir, uvMap) {
  const mapping = BLOCK_FACE_TEXTURES[blockType];
  if (!mapping) return null; // use vertex colors instead

  let texId;
  if (mapping.all) {
    texId = mapping.all;
  } else if (faceDir[1] === 1) {
    texId = mapping.top;
  } else if (faceDir[1] === -1) {
    texId = mapping.bottom;
  } else {
    texId = mapping.side;
  }

  return uvMap[texId] || null;
}
