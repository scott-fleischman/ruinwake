// Procedural pixel-art texture generator for block faces.
// Each texture is a small NxN RGBA pixel array.
// These get combined into a texture atlas for Three.js DataTexture.

export const TEXTURE_SIZE = 16;

// Deterministic hash for pixel variation
function pixHash(x, y, seed) {
  let h = (x * 374761 + y * 668265 + seed * 982451) | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
  return ((h >> 16) ^ h) & 0xff;
}

function setPixel(data, x, y, r, g, b, a = 255) {
  const i = (y * TEXTURE_SIZE + x) * 4;
  data[i] = Math.max(0, Math.min(255, r));
  data[i + 1] = Math.max(0, Math.min(255, g));
  data[i + 2] = Math.max(0, Math.min(255, b));
  data[i + 3] = a;
}

function fillBase(data, r, g, b) {
  for (let y = 0; y < TEXTURE_SIZE; y++) {
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const noise = (pixHash(x, y, 0) - 128) * 0.08;
      setPixel(data, x, y, r + noise * 255, g + noise * 255, b + noise * 255);
    }
  }
}

const GENERATORS = {
  stone: (data) => {
    // Gray base with darker crack lines
    fillBase(data, 128, 128, 133);
    // Horizontal cracks
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const y1 = 4 + (pixHash(x, 0, 1) % 3) - 1;
      const y2 = 11 + (pixHash(x, 0, 2) % 3) - 1;
      if (y1 >= 0 && y1 < TEXTURE_SIZE) setPixel(data, x, y1, 80, 80, 85);
      if (y2 >= 0 && y2 < TEXTURE_SIZE) setPixel(data, x, y2, 85, 83, 88);
    }
    // Random darker speckles
    for (let i = 0; i < 12; i++) {
      const x = pixHash(i, 0, 3) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 4) % TEXTURE_SIZE;
      setPixel(data, x, y, 95, 95, 100);
    }
  },

  grass_top: (data) => {
    // Green base with varied grass blades
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 10);
        const g = 100 + (n % 60);
        const r = 45 + (n % 30);
        const b = 25 + (n % 20);
        setPixel(data, x, y, r, g, b);
      }
    }
    // Bright grass blade highlights
    for (let i = 0; i < 20; i++) {
      const x = pixHash(i, 0, 11) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 12) % TEXTURE_SIZE;
      setPixel(data, x, y, 70, 170, 50);
    }
  },

  grass_side: (data) => {
    // Top strip green, rest brown (dirt with grass edge)
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 20);
        if (y < 3 + (n % 2)) {
          // Green grass top fringe
          setPixel(data, x, y, 55 + (n % 20), 120 + (n % 40), 40 + (n % 15));
        } else {
          // Brown dirt below
          setPixel(data, x, y, 115 + (n % 20), 85 + (n % 15), 50 + (n % 15));
        }
      }
    }
  },

  dirt: (data) => {
    // Brown with darker pebble speckles
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 30);
        const r = 110 + (n % 25);
        const g = 80 + (n % 20);
        const b = 50 + (n % 15);
        setPixel(data, x, y, r, g, b);
      }
    }
    // Darker pebbles
    for (let i = 0; i < 8; i++) {
      const x = pixHash(i, 0, 31) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 32) % TEXTURE_SIZE;
      setPixel(data, x, y, 85, 65, 40);
    }
  },

  wood_side: (data) => {
    // Brown with vertical grain lines
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const grain = Math.abs(((x * 3 + pixHash(x, 0, 41)) % 7) - 3);
        const n = pixHash(x, y, 40);
        const r = 95 + grain * 8 + (n % 10);
        const g = 58 + grain * 5 + (n % 8);
        const b = 30 + grain * 3 + (n % 6);
        setPixel(data, x, y, r, g, b);
      }
    }
    // Knot holes
    for (let i = 0; i < 2; i++) {
      const cx = 3 + pixHash(i, 0, 42) % (TEXTURE_SIZE - 6);
      const cy = 3 + pixHash(i, 0, 43) % (TEXTURE_SIZE - 6);
      setPixel(data, cx, cy, 65, 38, 20);
      setPixel(data, cx + 1, cy, 70, 42, 22);
    }
  },

  wood_top: (data) => {
    // Concentric ring pattern (tree rings when cut)
    const cx = TEXTURE_SIZE / 2;
    const cy = TEXTURE_SIZE / 2;
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        const ring = Math.floor(dist * 1.5) % 3;
        const n = pixHash(x, y, 50);
        const base = ring === 0 ? 140 : ring === 1 ? 125 : 130;
        setPixel(data, x, y, base + (n % 12), base - 20 + (n % 10), base - 45 + (n % 8));
      }
    }
  },

  sand: (data) => {
    // Warm golden with grain variation
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 60);
        setPixel(data, x, y, 195 + (n % 20), 170 + (n % 20), 100 + (n % 25));
      }
    }
  },

  leaves: (data) => {
    // Dense leaf pattern with gaps (some transparent for depth)
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 70);
        if (n % 5 === 0) {
          // Dark gap between leaves
          setPixel(data, x, y, 20, 40, 12);
        } else {
          setPixel(data, x, y, 30 + (n % 25), 90 + (n % 40), 20 + (n % 15));
        }
      }
    }
  },

  water: (data) => {
    // Blue with ripple highlights
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const wave = Math.sin((x + y * 0.5) * 0.8) * 15;
        const n = pixHash(x, y, 80);
        setPixel(data, x, y,
          40 + wave + (n % 10),
          90 + wave + (n % 15),
          165 + wave + (n % 10),
          200); // semi-transparent
      }
    }
  },

  cobblestone: (data) => {
    // Irregular stone pattern
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 90);
        // Mortar lines between cobbles
        const isMortar = (x % 5 === 0) || (y % 4 === 0 && x % 3 < 2);
        if (isMortar) {
          setPixel(data, x, y, 85, 85, 80);
        } else {
          setPixel(data, x, y, 110 + (n % 20), 110 + (n % 18), 108 + (n % 16));
        }
      }
    }
  },

  iron_ore: (data) => {
    // Stone base with rust-orange speckles
    fillBase(data, 120, 118, 112);
    for (let i = 0; i < 18; i++) {
      const x = pixHash(i, 0, 101) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 102) % TEXTURE_SIZE;
      setPixel(data, x, y, 170, 110, 70);
    }
  },

  coal_ore: (data) => {
    // Stone base with black coal patches
    fillBase(data, 115, 115, 118);
    for (let i = 0; i < 15; i++) {
      const x = pixHash(i, 0, 111) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 112) % TEXTURE_SIZE;
      setPixel(data, x, y, 25, 25, 28);
      if (x + 1 < TEXTURE_SIZE) setPixel(data, x + 1, y, 30, 30, 33);
    }
  },

  copper_ore: (data) => {
    // Stone base with teal-green copper veins
    fillBase(data, 118, 115, 110);
    for (let i = 0; i < 14; i++) {
      const x = pixHash(i, 0, 121) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 122) % TEXTURE_SIZE;
      setPixel(data, x, y, 70, 140, 110);
    }
  },

  mud: (data) => {
    // Dark brown with wet sheen spots
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 130);
        setPixel(data, x, y, 80 + (n % 15), 62 + (n % 12), 38 + (n % 10));
      }
    }
    for (let i = 0; i < 6; i++) {
      const x = pixHash(i, 0, 131) % TEXTURE_SIZE;
      const y = pixHash(i, 0, 132) % TEXTURE_SIZE;
      setPixel(data, x, y, 95, 80, 55);
    }
  },

  snow: (data) => {
    // Near-white with subtle blue shadows
    for (let y = 0; y < TEXTURE_SIZE; y++) {
      for (let x = 0; x < TEXTURE_SIZE; x++) {
        const n = pixHash(x, y, 140);
        setPixel(data, x, y, 235 + (n % 8), 238 + (n % 6), 242 + (n % 5));
      }
    }
  },
};

export function generateBlockTexture(blockId) {
  const data = new Uint8Array(TEXTURE_SIZE * TEXTURE_SIZE * 4);
  // Fill with opaque magenta (missing texture indicator)
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255; data[i + 1] = 0; data[i + 2] = 255; data[i + 3] = 255;
  }
  const gen = GENERATORS[blockId];
  if (gen) gen(data);
  return data;
}

// Get all available texture IDs
export function getTextureIds() {
  return Object.keys(GENERATORS);
}
