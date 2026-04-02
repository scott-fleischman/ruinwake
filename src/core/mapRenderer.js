/**
 * Canvas-based map renderer for Ruinwake.
 *
 * Two zoom levels:
 *   OVERVIEW  — full world, 1 px = 2 blocks (330 × 135)
 *   DETAIL    — centred on player, 1 px = 1 block (400 × 300 viewport)
 *
 * Layers drawn (bottom→top):
 *   1. Terrain color (height-based)
 *   2. Biome tint overlay
 *   3. Fog-of-war mask (un-explored = dark)
 *   4. Building footprints
 *   5. NPC / station markers
 *   6. Quest markers
 *   7. Visited-location stamps
 *   8. Player position
 */

import { MapLayerSystem } from './mapLayers.js';
import { WORLD_MIN_X, WORLD_MAX_X, WORLD_MIN_Z, WORLD_MAX_Z } from './terrain.js';

const OVERVIEW_RES = 2;   // blocks per pixel in overview
const DETAIL_RES   = 1;   // blocks per pixel in detail

const BIOME_TINT = {
  shire:    [100, 200,  70, 40],
  plains:   [180, 200,  80, 30],
  forest:   [ 30, 130,  40, 40],
  mirkwood: [ 20,  60,  20, 50],
  mountain: [160, 160, 170, 30],
};

export const MapZoom = Object.freeze({
  OVERVIEW: 'overview',
  DETAIL:   'detail',
});

export class MapRenderer {
  /**
   * @param {MapLayerSystem} layers
   * @param {HTMLCanvasElement} canvas
   */
  constructor(layers, canvas) {
    this._layers = layers;
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');
    this._zoom = MapZoom.OVERVIEW;
    this._visitedMarkers = [];   // [{x, z, label}]

    // Pre-compute overview terrain image (cached)
    this._overviewImage = null;
    this._overviewBiome = null;
  }

  get zoom() { return this._zoom; }

  toggleZoom() {
    this._zoom = this._zoom === MapZoom.OVERVIEW ? MapZoom.DETAIL : MapZoom.OVERVIEW;
  }

  setZoom(z) { this._zoom = z; }

  addVisitedMarker(x, z, label) {
    // Avoid duplicates within 10 blocks
    const exists = this._visitedMarkers.some(m =>
      Math.abs(m.x - x) < 10 && Math.abs(m.z - z) < 10
    );
    if (!exists) this._visitedMarkers.push({ x, z, label });
  }

  // ── Main draw ──

  draw(opts) {
    const {
      playerPos,        // {x, y, z}
      fogOfWar,         // FogOfWar instance
      buildings,        // worldBuildings array
      npcs,             // NPC instances
      stations,         // worldStations array
      landmarks,        // allLandmarks array
      questMarkers,     // [{x, z, label}]
    } = opts;

    const ctx = this._ctx;
    const W = this._canvas.width;
    const H = this._canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (this._zoom === MapZoom.OVERVIEW) {
      this._drawOverview(ctx, W, H, opts);
    } else {
      this._drawDetail(ctx, W, H, opts);
    }
  }

  // ── Overview (full world) ──

  _drawOverview(ctx, W, H, opts) {
    const res = OVERVIEW_RES;
    const { playerPos, fogOfWar, buildings, landmarks, questMarkers } = opts;

    // 1. Terrain + biome (cached)
    if (!this._overviewImage) {
      this._overviewImage = this._layers.getTerrainColorMap(res);
      this._overviewBiome = this._layers.getBiomeGrid(res);
    }
    const tMap = this._overviewImage;
    const bGrid = this._overviewBiome;

    const imgData = ctx.createImageData(tMap.width, tMap.height);
    for (let i = 0; i < tMap.width * tMap.height; i++) {
      let r = tMap.data[i * 3];
      let g = tMap.data[i * 3 + 1];
      let b = tMap.data[i * 3 + 2];

      // Biome tint
      const biome = bGrid.data[i];
      const tint = BIOME_TINT[biome];
      if (tint) {
        const a = tint[3] / 100;
        r = Math.round(r * (1 - a) + tint[0] * a);
        g = Math.round(g * (1 - a) + tint[1] * a);
        b = Math.round(b * (1 - a) + tint[2] * a);
      }

      // Fog of war
      if (fogOfWar) {
        const { x, z } = this._layers.gridToWorld(i % tMap.width, Math.floor(i / tMap.width), res);
        if (!fogOfWar.isRevealed(x, z)) {
          r = Math.round(r * 0.2);
          g = Math.round(g * 0.2);
          b = Math.round(b * 0.2);
        }
      }

      imgData.data[i * 4]     = r;
      imgData.data[i * 4 + 1] = g;
      imgData.data[i * 4 + 2] = b;
      imgData.data[i * 4 + 3] = 255;
    }

    // Scale to canvas
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tMap.width;
    tmpCanvas.height = tMap.height;
    tmpCanvas.getContext('2d').putImageData(imgData, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tmpCanvas, 0, 0, W, H);

    // Scale factors for placing markers
    const sx = W / tMap.width;
    const sy = H / tMap.height;
    const toX = (wx) => ((wx - WORLD_MIN_X) / res) * sx;
    const toY = (wz) => ((wz - WORLD_MIN_Z) / res) * sy;

    // Building footprints
    if (buildings) {
      ctx.fillStyle = 'rgba(139, 90, 43, 0.6)';
      for (const b of buildings) {
        const bx = toX(b.x);
        const by = toY(b.z);
        const br = (b.radius / res) * sx;
        ctx.fillRect(bx - br, by - br, br * 2, br * 2);
      }
    }

    // Landmarks
    if (landmarks) {
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      for (const lm of landmarks) {
        const lx = toX(lm.position.x);
        const ly = toY(lm.position.z);
        // Gold diamond
        ctx.fillStyle = '#c9a84c';
        ctx.beginPath();
        ctx.moveTo(lx, ly - 5);
        ctx.lineTo(lx + 4, ly);
        ctx.lineTo(lx, ly + 5);
        ctx.lineTo(lx - 4, ly);
        ctx.closePath();
        ctx.fill();
        // Label
        ctx.fillStyle = '#c9a84c';
        ctx.fillText(lm.name, lx, ly - 8);
      }
    }

    // Quest markers
    if (questMarkers) {
      ctx.fillStyle = '#e53935';
      for (const qm of questMarkers) {
        const qx = toX(qm.x);
        const qy = toY(qm.z);
        ctx.beginPath();
        ctx.arc(qx, qy, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Visited markers
    ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
    for (const m of this._visitedMarkers) {
      const mx = toX(m.x);
      const my = toY(m.z);
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player
    const px = toX(playerPos.x);
    const py = toY(playerPos.z);
    ctx.fillStyle = '#4caf50';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Legend
    this._drawLegend(ctx, W, H);

    // Zoom hint
    ctx.fillStyle = '#888';
    ctx.font = '11px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('Z: Toggle zoom | M: Close', W - 8, H - 6);
  }

  // ── Detail (player-centred) ──

  _drawDetail(ctx, W, H, opts) {
    const res = DETAIL_RES;
    const { playerPos, fogOfWar, buildings, npcs, stations, questMarkers } = opts;

    // Viewport in world coords
    const halfW = Math.floor(W / 2);
    const halfH = Math.floor(H / 2);
    const vpMinX = Math.floor(playerPos.x) - halfW;
    const vpMinZ = Math.floor(playerPos.z) - halfH;

    // Draw terrain pixel by pixel
    const imgData = ctx.createImageData(W, H);
    for (let py = 0; py < H; py++) {
      for (let px = 0; px < W; px++) {
        const wx = vpMinX + px;
        const wz = vpMinZ + py;
        const h = this._layers._getHeight(wx, wz);
        let [r, g, b] = heightToColor(h);

        // Fog
        if (fogOfWar && !fogOfWar.isRevealed(wx, wz)) {
          r = Math.round(r * 0.15);
          g = Math.round(g * 0.15);
          b = Math.round(b * 0.15);
        }

        const idx = (py * W + px) * 4;
        imgData.data[idx]     = r;
        imgData.data[idx + 1] = g;
        imgData.data[idx + 2] = b;
        imgData.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Helper: world→screen
    const toSX = (wx) => wx - vpMinX;
    const toSY = (wz) => wz - vpMinZ;

    // Building outlines
    if (buildings) {
      ctx.strokeStyle = 'rgba(139, 90, 43, 0.8)';
      ctx.lineWidth = 1;
      for (const b of buildings) {
        const bx = toSX(b.x);
        const by = toSY(b.z);
        if (bx + b.radius < 0 || bx - b.radius > W) continue;
        if (by + b.radius < 0 || by - b.radius > H) continue;
        ctx.strokeRect(bx - b.radius, by - b.radius, b.radius * 2, b.radius * 2);
      }
    }

    // NPC dots
    if (npcs) {
      ctx.fillStyle = '#ffeb3b';
      for (const npc of npcs) {
        const nx = toSX(npc.position.x);
        const nz = toSY(npc.position.z);
        if (nx < 0 || nx > W || nz < 0 || nz > H) continue;
        ctx.beginPath();
        ctx.arc(nx, nz, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Station markers
    if (stations) {
      ctx.fillStyle = '#ff9800';
      for (const st of stations) {
        const sx = toSX(st.x);
        const sz = toSY(st.z);
        if (sx < 0 || sx > W || sz < 0 || sz > H) continue;
        ctx.fillRect(sx - 2, sz - 2, 4, 4);
      }
    }

    // Quest markers
    if (questMarkers) {
      ctx.fillStyle = '#e53935';
      for (const qm of questMarkers) {
        const qx = toSX(qm.x);
        const qy = toSY(qm.z);
        if (qx < 0 || qx > W || qy < 0 || qy > H) continue;
        ctx.beginPath();
        ctx.arc(qx, qy, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Visited markers
    ctx.fillStyle = 'rgba(100, 200, 255, 0.7)';
    for (const m of this._visitedMarkers) {
      const mx = toSX(m.x);
      const my = toSY(m.z);
      if (mx < 0 || mx > W || my < 0 || my > H) continue;
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player crosshair (centre)
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 2;
    const cx = halfW, cy = halfH;
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy); ctx.lineTo(cx + 8, cy);
    ctx.moveTo(cx, cy - 8); ctx.lineTo(cx, cy + 8);
    ctx.stroke();

    // Coord display
    ctx.fillStyle = '#aaa';
    ctx.font = '11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`x:${Math.floor(playerPos.x)} z:${Math.floor(playerPos.z)} y:${Math.floor(playerPos.y)}`, 8, H - 6);
    ctx.textAlign = 'right';
    ctx.fillText('Z: Toggle zoom | M: Close', W - 8, H - 6);
  }

  // ── Legend ──

  _drawLegend(ctx, W, H) {
    const items = [
      ['Water',     [40, 80, 160]],
      ['Lowland',   [80, 150, 60]],
      ['Highland',  [160, 150, 120]],
      ['Snow',      [220, 220, 230]],
    ];
    const lx = 8;
    let ly = H - 56;
    ctx.font = '9px monospace';
    ctx.textAlign = 'left';
    for (const [label, [r, g, b]] of items) {
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(lx, ly, 10, 10);
      ctx.fillStyle = '#aaa';
      ctx.fillText(label, lx + 14, ly + 9);
      ly += 12;
    }
  }
}

// Height to color (same logic as mapLayers but standalone for detail view)
function heightToColor(h) {
  if (h <= 26) return [40, 80, 160];
  if (h <= 32) return [80, 150, 60];
  if (h <= 40) return [130, 170, 70];
  if (h <= 55) return [160, 150, 120];
  return [220, 220, 230];
}
