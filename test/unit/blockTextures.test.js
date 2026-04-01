import { describe, it, expect } from 'vitest';
import { generateBlockTexture, TEXTURE_SIZE } from '../../src/render/blockTextures.js';

describe('Procedural block textures', () => {
  it('TEXTURE_SIZE is at least 8', () => {
    expect(TEXTURE_SIZE).toBeGreaterThanOrEqual(8);
  });

  it('generateBlockTexture returns RGBA pixel data', () => {
    const data = generateBlockTexture('stone');
    expect(data).toBeInstanceOf(Uint8Array);
    expect(data.length).toBe(TEXTURE_SIZE * TEXTURE_SIZE * 4); // RGBA
  });

  it('stone texture has gray tones with crack-like dark pixels', () => {
    const data = generateBlockTexture('stone');
    let darkPixels = 0;
    let totalBrightness = 0;
    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      totalBrightness += brightness;
      if (brightness < 100) darkPixels++;
    }
    const avgBrightness = totalBrightness / (data.length / 4);
    // Stone should be grayish (avg brightness 100-180)
    expect(avgBrightness).toBeGreaterThan(90);
    expect(avgBrightness).toBeLessThan(190);
    // Should have some dark crack pixels
    expect(darkPixels).toBeGreaterThan(0);
  });

  it('grass_top texture is predominantly green', () => {
    const data = generateBlockTexture('grass_top');
    let greenDominant = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 1] > data[i] && data[i + 1] > data[i + 2]) greenDominant++;
    }
    expect(greenDominant).toBeGreaterThan(data.length / 4 * 0.5);
  });

  it('wood_side texture has vertical grain pattern', () => {
    const data = generateBlockTexture('wood_side');
    // Check that columns have consistent-ish colors (grain runs vertically)
    let columnConsistency = 0;
    for (let x = 0; x < TEXTURE_SIZE; x++) {
      const topIdx = (0 * TEXTURE_SIZE + x) * 4;
      const midIdx = (Math.floor(TEXTURE_SIZE / 2) * TEXTURE_SIZE + x) * 4;
      // Same column should have similar red channel (wood grain)
      if (Math.abs(data[topIdx] - data[midIdx]) < 40) columnConsistency++;
    }
    expect(columnConsistency).toBeGreaterThan(TEXTURE_SIZE * 0.4);
  });

  it('dirt texture is brown-toned with speckle', () => {
    const data = generateBlockTexture('dirt');
    let brownish = 0;
    for (let i = 0; i < data.length; i += 4) {
      // Brown = R > G > B
      if (data[i] >= data[i + 1] && data[i + 1] >= data[i + 2]) brownish++;
    }
    expect(brownish).toBeGreaterThan(data.length / 4 * 0.3);
  });

  it('different block types produce different textures', () => {
    const stone = generateBlockTexture('stone');
    const grass = generateBlockTexture('grass_top');
    let differs = 0;
    for (let i = 0; i < stone.length; i++) {
      if (stone[i] !== grass[i]) differs++;
    }
    expect(differs).toBeGreaterThan(stone.length * 0.3);
  });
});
