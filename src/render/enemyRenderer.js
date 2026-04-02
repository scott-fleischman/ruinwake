import * as THREE from 'three';
import { EnemyType } from '../core/enemy.js';

// Richer, more distinct enemy colors
const ENEMY_COLORS = {
  [EnemyType.WOLF]: 0x6a6a6a,
  [EnemyType.GOBLIN]: 0x4a7a3a,
  [EnemyType.SPIDER]: 0x2a1a0a,
  [EnemyType.TROLL]: 0x7a6a5a,
  [EnemyType.WIGHT]: 0x6644aa,
  [EnemyType.GUARDIAN]: 0xbb8844,
  [EnemyType.CONSTRUCT]: 0x5555aa,
  [EnemyType.ORC]: 0x5a6a3a,
  [EnemyType.GIANT_SPIDER]: 0x1a0a00,
  [EnemyType.SHADOW]: 0x0a0a1a,
  [EnemyType.BARROW_WIGHT]: 0x5533aa,
  [EnemyType.GOBLIN_ARCHER]: 0x3a5a2a,
  [EnemyType.CORRUPTED_BEAR]: 0x8a5522,
  [EnemyType.DARK_CONSTRUCT]: 0x2a2a55,
  [EnemyType.WRAITH]: 0x1a0044,
};

const ENEMY_SCALES = {
  [EnemyType.WOLF]: { w: 0.8, h: 0.7, d: 1.2 },
  [EnemyType.GOBLIN]: { w: 0.6, h: 1.2, d: 0.6 },
  [EnemyType.SPIDER]: { w: 1.0, h: 0.4, d: 1.0 },
  [EnemyType.TROLL]: { w: 1.2, h: 2.5, d: 1.2 },
  [EnemyType.WIGHT]: { w: 0.6, h: 1.8, d: 0.6 },
  [EnemyType.GUARDIAN]: { w: 1.4, h: 3.0, d: 1.4 },
  [EnemyType.CONSTRUCT]: { w: 1.0, h: 2.0, d: 1.0 },
  [EnemyType.ORC]: { w: 0.8, h: 1.6, d: 0.8 },
  [EnemyType.GIANT_SPIDER]: { w: 1.4, h: 0.6, d: 1.4 },
  [EnemyType.SHADOW]: { w: 0.5, h: 1.4, d: 0.5 },
  [EnemyType.BARROW_WIGHT]: { w: 0.7, h: 2.0, d: 0.7 },
  [EnemyType.GOBLIN_ARCHER]: { w: 0.6, h: 1.2, d: 0.6 },
  [EnemyType.CORRUPTED_BEAR]: { w: 1.4, h: 1.2, d: 1.8 },
  [EnemyType.DARK_CONSTRUCT]: { w: 1.2, h: 2.4, d: 1.2 },
  [EnemyType.WRAITH]: { w: 0.6, h: 2.0, d: 0.6 },
};

export const BEAST_TYPES = new Set([
  EnemyType.WOLF,
  EnemyType.SPIDER,
  EnemyType.GIANT_SPIDER,
  EnemyType.CORRUPTED_BEAR,
]);

function sc(color, factor) {
  const r = Math.min(255, ((color >> 16) & 0xff) * factor) | 0;
  const g = Math.min(255, ((color >> 8) & 0xff) * factor) | 0;
  const b = Math.min(255, (color & 0xff) * factor) | 0;
  return (r << 16) | (g << 8) | b;
}

function p(name, w, h, d, oY, color, oX, oZ) {
  const part = { name, w, h, d, offsetY: oY, color };
  if (oX) part.offsetX = oX;
  if (oZ) part.offsetZ = oZ;
  return part;
}

function wolfParts(c) {
  return [
    p('body', 0.4, 0.32, 0.7, 0.48, c),
    p('chest', 0.44, 0.28, 0.2, 0.5, sc(c, 1.05), 0, -0.22),
    p('head', 0.3, 0.26, 0.28, 0.58, sc(c, 1.08), 0, -0.48),
    p('snout', 0.16, 0.12, 0.2, 0.5, sc(c, 0.88), 0, -0.68),
    p('nose', 0.06, 0.06, 0.04, 0.52, 0x100e0e, 0, -0.78),
    p('ear', 0.07, 0.14, 0.06, 0.74, sc(c, 0.8), -0.1, -0.42),
    p('ear', 0.07, 0.14, 0.06, 0.74, sc(c, 0.8), 0.1, -0.42),
    p('tail', 0.08, 0.1, 0.3, 0.6, sc(c, 0.9), 0, 0.48),
    p('tail_tip', 0.06, 0.08, 0.14, 0.68, sc(c, 0.85), 0, 0.62),
    p('leg', 0.09, 0.32, 0.09, 0.16, sc(c, 0.82), -0.14, -0.22),
    p('leg', 0.09, 0.32, 0.09, 0.16, sc(c, 0.82), 0.14, -0.22),
    p('leg', 0.1, 0.32, 0.1, 0.16, sc(c, 0.82), -0.14, 0.22),
    p('leg', 0.1, 0.32, 0.1, 0.16, sc(c, 0.82), 0.14, 0.22),
    p('paw', 0.11, 0.06, 0.12, 0.03, sc(c, 0.7), -0.14, -0.22),
    p('paw', 0.11, 0.06, 0.12, 0.03, sc(c, 0.7), 0.14, -0.22),
    p('paw', 0.11, 0.06, 0.12, 0.03, sc(c, 0.7), -0.14, 0.22),
    p('paw', 0.11, 0.06, 0.12, 0.03, sc(c, 0.7), 0.14, 0.22),
  ];
}

function spiderParts(c, s) {
  const parts = [
    p('cephalothorax', 0.4 * s, 0.22 * s, 0.32 * s, 0.3 * s, sc(c, 1.1), 0, -0.12 * s),
    p('abdomen', 0.5 * s, 0.3 * s, 0.48 * s, 0.35 * s, c, 0, 0.28 * s),
    p('stripe', 0.12 * s, 0.12 * s, 0.4 * s, 0.42 * s, sc(c, 0.6), 0, 0.28 * s),
    p('eye', 0.05 * s, 0.04 * s, 0.04 * s, 0.38 * s, 0x990808, -0.06 * s, -0.28 * s),
    p('eye', 0.05 * s, 0.04 * s, 0.04 * s, 0.38 * s, 0x990808, 0.06 * s, -0.28 * s),
    p('fang', 0.05 * s, 0.1 * s, 0.12 * s, 0.22 * s, sc(c, 0.7), -0.08 * s, -0.32 * s),
    p('fang', 0.05 * s, 0.1 * s, 0.12 * s, 0.22 * s, sc(c, 0.7), 0.08 * s, -0.32 * s),
  ];
  const legZs = [-0.2, -0.06, 0.08, 0.22];
  const legXs = [0.32, 0.38, 0.38, 0.32];
  const legHs = [0.28, 0.3, 0.3, 0.26];
  for (let i = 0; i < 4; i++) {
    for (const sx of [-1, 1]) {
      parts.push(p('leg', 0.04 * s, legHs[i] * s, 0.04 * s, legHs[i] * 0.5 * s, sc(c, 0.75), sx * legXs[i] * s, legZs[i] * s));
      parts.push(p('foot', 0.06 * s, 0.04 * s, 0.06 * s, 0.02 * s, sc(c, 0.6), sx * (legXs[i] + 0.02) * s, legZs[i] * s));
    }
  }
  return parts;
}

function bearParts(c) {
  return [
    p('body', 0.9, 0.58, 1.2, 0.72, c),
    p('hump', 0.65, 0.2, 0.45, 1.08, sc(c, 1.06), 0, -0.15),
    p('head', 0.45, 0.38, 0.42, 0.92, sc(c, 1.08), 0, -0.7),
    p('snout', 0.22, 0.16, 0.22, 0.82, sc(c, 0.9), 0, -0.98),
    p('nose', 0.08, 0.06, 0.04, 0.85, 0x0e0808, 0, -1.08),
    p('ear', 0.1, 0.1, 0.08, 1.14, sc(c, 0.85), -0.16, -0.64),
    p('ear', 0.1, 0.1, 0.08, 1.14, sc(c, 0.85), 0.16, -0.64),
    p('leg', 0.18, 0.44, 0.18, 0.22, sc(c, 0.82), -0.28, -0.35),
    p('leg', 0.18, 0.44, 0.18, 0.22, sc(c, 0.82), 0.28, -0.35),
    p('leg', 0.2, 0.44, 0.2, 0.22, sc(c, 0.82), -0.3, 0.35),
    p('leg', 0.2, 0.44, 0.2, 0.22, sc(c, 0.82), 0.3, 0.35),
    p('claw', 0.2, 0.06, 0.1, 0.03, sc(c, 0.6), -0.28, -0.48),
    p('claw', 0.2, 0.06, 0.1, 0.03, sc(c, 0.6), 0.28, -0.48),
    p('tail', 0.1, 0.1, 0.12, 0.88, sc(c, 0.9), 0, 0.62),
  ];
}

function goblinParts(c, isArcher) {
  const parts = [
    p('leg', 0.14, 0.28, 0.14, 0.14, sc(c, 0.75), -0.1),
    p('leg', 0.14, 0.28, 0.14, 0.14, sc(c, 0.75), 0.1),
    p('foot', 0.18, 0.06, 0.2, 0.03, sc(c, 0.6), -0.1, -0.04),
    p('foot', 0.18, 0.06, 0.2, 0.03, sc(c, 0.6), 0.1, -0.04),
    p('body', 0.42, 0.42, 0.3, 0.48, c, 0, 0.02),
    p('loincloth', 0.3, 0.08, 0.2, 0.3, 0x5a4830, 0, -0.02),
    p('head', 0.32, 0.28, 0.28, 0.82, sc(c, 1.1), 0, -0.02),
    p('ear', 0.14, 0.08, 0.06, 0.86, sc(c, 0.85), -0.22),
    p('ear', 0.14, 0.08, 0.06, 0.86, sc(c, 0.85), 0.22),
    p('eye', 0.05, 0.04, 0.04, 0.86, 0x998c1a, -0.08, -0.14),
    p('eye', 0.05, 0.04, 0.04, 0.86, 0x998c1a, 0.08, -0.14),
    p('nose', 0.06, 0.08, 0.08, 0.78, sc(c, 0.9), 0, -0.16),
    p('arm', 0.1, 0.42, 0.1, 0.48, sc(c, 0.88), -0.28),
    p('arm', 0.1, 0.42, 0.1, 0.48, sc(c, 0.88), 0.28),
  ];
  if (isArcher) {
    parts.push(p('bow', 0.04, 0.45, 0.04, 0.5, 0x664720, -0.35));
    parts.push(p('quiver', 0.1, 0.3, 0.06, 0.65, 0x593f1e, 0.08, 0.16));
  } else {
    parts.push(p('sword', 0.04, 0.35, 0.04, 0.48, 0x666050, 0.32));
  }
  return parts;
}

function orcParts(c) {
  return [
    p('boot', 0.24, 0.12, 0.3, 0.06, 0x332e1e, -0.14, 0.02),
    p('boot', 0.24, 0.12, 0.3, 0.06, 0x332e1e, 0.14, 0.02),
    p('leg', 0.2, 0.38, 0.2, 0.3, sc(c, 0.75), -0.14),
    p('leg', 0.2, 0.38, 0.2, 0.3, sc(c, 0.75), 0.14),
    p('body', 0.55, 0.58, 0.38, 0.72, c),
    p('armor', 0.4, 0.3, 0.06, 0.78, 0x4c4638, 0, -0.16),
    p('pauldron', 0.18, 0.14, 0.22, 1.02, 0x4c4638, -0.34),
    p('pauldron', 0.18, 0.14, 0.22, 1.02, 0x4c4638, 0.34),
    p('spike', 0.06, 0.1, 0.06, 1.14, 0x5a5240, -0.34),
    p('spike', 0.06, 0.1, 0.06, 1.14, 0x5a5240, 0.34),
    p('head', 0.35, 0.3, 0.32, 1.18, sc(c, 1.05)),
    p('jaw', 0.28, 0.1, 0.12, 1.0, sc(c, 0.9), 0, -0.14),
    p('tusk', 0.04, 0.08, 0.04, 1.02, 0xdad2b2, -0.1, -0.18),
    p('tusk', 0.04, 0.08, 0.04, 1.02, 0xdad2b2, 0.1, -0.18),
    p('arm', 0.16, 0.52, 0.16, 0.7, sc(c, 0.88), -0.38),
    p('arm', 0.16, 0.52, 0.16, 0.7, sc(c, 0.88), 0.38),
    p('axe_handle', 0.04, 0.65, 0.04, 0.65, 0x5a4c34, 0.5),
    p('axe_head', 0.18, 0.14, 0.04, 1.02, 0x70706c, 0.5, -0.06),
  ];
}

function trollParts(c) {
  return [
    p('foot', 0.36, 0.14, 0.42, 0.07, sc(c, 0.7), -0.22, 0.04),
    p('foot', 0.36, 0.14, 0.42, 0.07, sc(c, 0.7), 0.22, 0.04),
    p('leg', 0.28, 0.58, 0.32, 0.42, sc(c, 0.82), -0.22),
    p('leg', 0.28, 0.58, 0.32, 0.42, sc(c, 0.82), 0.22),
    p('body', 0.9, 1.05, 0.72, 1.2, c),
    p('belly', 0.7, 0.5, 0.2, 1.0, sc(c, 1.05), 0, -0.2),
    p('shoulders', 1.1, 0.22, 0.78, 1.82, sc(c, 0.92), 0, 0.04),
    p('head', 0.42, 0.32, 0.38, 2.08, sc(c, 1.1), 0, -0.04),
    p('brow', 0.38, 0.06, 0.08, 2.18, sc(c, 0.85), 0, -0.18),
    p('jaw', 0.34, 0.1, 0.14, 1.88, sc(c, 0.9), 0, -0.14),
    p('arm', 0.22, 1.1, 0.22, 1.1, sc(c, 0.88), -0.62),
    p('arm', 0.22, 1.1, 0.22, 1.1, sc(c, 0.88), 0.62),
    p('fist', 0.28, 0.24, 0.22, 0.42, sc(c, 0.78), -0.62),
    p('fist', 0.28, 0.24, 0.22, 0.42, sc(c, 0.78), 0.62),
    p('club', 0.12, 0.85, 0.12, 0.8, 0x5a4830, 0.72),
    p('club_head', 0.2, 0.25, 0.2, 1.3, 0x4c3e28, 0.72),
  ];
}

function wightParts(c, s) {
  return [
    p('skirt', 0.5 * s, 0.56 * s, 0.4 * s, 0.28 * s, sc(c, 0.75)),
    p('hem', 0.56 * s, 0.1 * s, 0.44 * s, 0.05 * s, sc(c, 0.65)),
    p('body', 0.42 * s, 0.65 * s, 0.32 * s, 0.75 * s, sc(c, 0.85)),
    p('cloak', 0.48 * s, 0.9 * s, 0.06 * s, 0.6 * s, sc(c, 0.7), 0, 0.08 * s),
    p('hood', 0.38 * s, 0.32 * s, 0.34 * s, 1.25 * s, sc(c, 0.72), 0, 0.02 * s),
    p('face', 0.2 * s, 0.15 * s, 0.06 * s, 1.2 * s, sc(c, 0.3), 0, -0.12 * s),
    p('eye', 0.04 * s, 0.03 * s, 0.03 * s, 1.22 * s, 0x8099cc, -0.05 * s, -0.16 * s),
    p('eye', 0.04 * s, 0.03 * s, 0.03 * s, 1.22 * s, 0x8099cc, 0.05 * s, -0.16 * s),
    p('arm', 0.1 * s, 0.55 * s, 0.1 * s, 0.7 * s, sc(c, 0.9), -0.3 * s),
    p('arm', 0.1 * s, 0.55 * s, 0.1 * s, 0.7 * s, sc(c, 0.9), 0.3 * s),
    p('hand', 0.08 * s, 0.1 * s, 0.04 * s, 0.35 * s, 0xa6998c, -0.3 * s),
    p('hand', 0.08 * s, 0.1 * s, 0.04 * s, 0.35 * s, 0xa6998c, 0.3 * s),
  ];
}

function wraithParts(c) {
  const parts = wightParts(c, 1.15);
  parts.push(p('crown', 0.36, 0.06, 0.36, 1.62, 0x403830));
  parts.push(p('crown_spike', 0.04, 0.1, 0.04, 1.7, 0x403830, -0.12));
  parts.push(p('crown_spike', 0.04, 0.1, 0.04, 1.7, 0x403830, 0.12));
  parts.push(p('crown_spike', 0.04, 0.1, 0.04, 1.7, 0x403830, 0, -0.12));
  parts.push(p('blade', 0.04, 0.6, 0.04, 0.5, 0x5a5a6c, 0.38));
  parts.push(p('guard', 0.1, 0.04, 0.04, 0.82, 0x4c4c58, 0.38));
  return parts;
}

function guardianParts(c) {
  return [
    p('foot', 0.4, 0.16, 0.46, 0.08, sc(c, 0.7), -0.25, 0.02),
    p('foot', 0.4, 0.16, 0.46, 0.08, sc(c, 0.7), 0.25, 0.02),
    p('leg', 0.32, 0.7, 0.32, 0.5, sc(c, 0.82), -0.25),
    p('leg', 0.32, 0.7, 0.32, 0.5, sc(c, 0.82), 0.25),
    p('body', 1.0, 1.3, 0.8, 1.35, c),
    p('emblem', 0.3, 0.3, 0.06, 1.5, sc(c, 1.2), 0, -0.38),
    p('shoulders', 1.25, 0.22, 0.9, 2.1, sc(c, 0.88)),
    p('head', 0.48, 0.42, 0.44, 2.48, sc(c, 1.1)),
    p('visor', 0.4, 0.12, 0.08, 2.42, sc(c, 0.6), 0, -0.22),
    p('crest', 0.06, 0.16, 0.3, 2.78, sc(c, 1.15)),
    p('arm', 0.26, 1.1, 0.26, 1.35, sc(c, 0.88), -0.68),
    p('arm', 0.26, 1.1, 0.26, 1.35, sc(c, 0.88), 0.68),
    p('fist', 0.3, 0.26, 0.24, 0.68, sc(c, 0.75), -0.68),
    p('fist', 0.3, 0.26, 0.24, 0.68, sc(c, 0.75), 0.68),
    p('shield', 0.06, 0.7, 0.5, 1.4, sc(c, 0.8), -0.88),
    p('boss', 0.06, 0.15, 0.15, 1.4, sc(c, 1.3), -0.92),
  ];
}

function constructParts(c, s) {
  return [
    p('foot', 0.28 * s, 0.12 * s, 0.32 * s, 0.06 * s, sc(c, 0.7), -0.18 * s, 0.02),
    p('foot', 0.28 * s, 0.12 * s, 0.32 * s, 0.06 * s, sc(c, 0.7), 0.18 * s, 0.02),
    p('leg', 0.22 * s, 0.52 * s, 0.24 * s, 0.38 * s, sc(c, 0.82), -0.18 * s),
    p('leg', 0.22 * s, 0.52 * s, 0.24 * s, 0.38 * s, sc(c, 0.82), 0.18 * s),
    p('body', 0.7 * s, 0.8 * s, 0.6 * s, 0.95 * s, c),
    p('plate', 0.5 * s, 0.4 * s, 0.06 * s, 1.05 * s, sc(c, 1.15), 0, -0.28 * s),
    p('core', 0.12 * s, 0.12 * s, 0.04 * s, 1.0 * s, 0x8099d9, 0, -0.32 * s),
    p('head', 0.36 * s, 0.3 * s, 0.32 * s, 1.52 * s, sc(c, 1.05)),
    p('visor', 0.3 * s, 0.08 * s, 0.06 * s, 1.48 * s, 0x4c5880, 0, -0.15 * s),
    p('arm', 0.18 * s, 0.7 * s, 0.18 * s, 0.9 * s, sc(c, 0.88), -0.44 * s),
    p('arm', 0.18 * s, 0.7 * s, 0.18 * s, 0.9 * s, sc(c, 0.88), 0.44 * s),
    p('gauntlet', 0.22 * s, 0.2 * s, 0.2 * s, 0.45 * s, sc(c, 0.75), -0.44 * s),
    p('gauntlet', 0.22 * s, 0.2 * s, 0.2 * s, 0.45 * s, sc(c, 0.75), 0.44 * s),
  ];
}

function shadowParts(c) {
  return [
    p('base', 0.4, 0.4, 0.35, 0.2, c),
    p('mid', 0.35, 0.35, 0.3, 0.5, sc(c, 1.1)),
    p('upper', 0.28, 0.28, 0.25, 0.75, sc(c, 1.2)),
    p('head', 0.22, 0.2, 0.22, 0.98, sc(c, 1.3)),
    p('eye', 0.04, 0.03, 0.03, 1.0, 0x33284c, -0.05, -0.1),
    p('eye', 0.04, 0.03, 0.03, 1.0, 0x33284c, 0.05, -0.1),
    p('wisp', 0.06, 0.3, 0.04, 0.6, sc(c, 0.8), -0.25),
    p('wisp', 0.06, 0.3, 0.04, 0.6, sc(c, 0.8), 0.25),
    p('wisp', 0.04, 0.25, 0.06, 0.5, sc(c, 0.8), 0, -0.2),
    p('wisp', 0.04, 0.2, 0.06, 0.5, sc(c, 0.8), 0, 0.2),
  ];
}

/**
 * Build a type-specific multi-part model description for an enemy.
 * Returns { parts: [{ name, w, h, d, offsetY, offsetX?, offsetZ?, color }] }
 */
export function buildEnemyModel(enemyType) {
  const c = ENEMY_COLORS[enemyType] || 0xff0000;
  switch (enemyType) {
    case EnemyType.WOLF: return { parts: wolfParts(c) };
    case EnemyType.SPIDER: return { parts: spiderParts(c, 1.0) };
    case EnemyType.GIANT_SPIDER: return { parts: spiderParts(c, 1.4) };
    case EnemyType.CORRUPTED_BEAR: return { parts: bearParts(c) };
    case EnemyType.GOBLIN: return { parts: goblinParts(c, false) };
    case EnemyType.GOBLIN_ARCHER: return { parts: goblinParts(c, true) };
    case EnemyType.ORC: return { parts: orcParts(c) };
    case EnemyType.TROLL: return { parts: trollParts(c) };
    case EnemyType.WIGHT: return { parts: wightParts(c, 1.0) };
    case EnemyType.BARROW_WIGHT: return { parts: wightParts(c, 1.15) };
    case EnemyType.WRAITH: return { parts: wraithParts(c) };
    case EnemyType.GUARDIAN: return { parts: guardianParts(c) };
    case EnemyType.CONSTRUCT: return { parts: constructParts(c, 1.0) };
    case EnemyType.DARK_CONSTRUCT: return { parts: constructParts(c, 1.2) };
    case EnemyType.SHADOW: return { parts: shadowParts(c) };
    default: return { parts: goblinParts(c, false) };
  }
}

function createEnemyGroup(enemyType) {
  const model = buildEnemyModel(enemyType);
  const group = new THREE.Group();

  for (const part of model.parts) {
    const geo = new THREE.BoxGeometry(part.w, part.h, part.d);
    const mat = new THREE.MeshLambertMaterial({ color: part.color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = part.offsetY;
    if (part.offsetX) mesh.position.x = part.offsetX;
    if (part.offsetZ) mesh.position.z = part.offsetZ;
    mesh.userData.partName = part.name;
    group.add(mesh);
  }

  return group;
}

export class EnemyRenderer {
  constructor(scene) {
    this.scene = scene;
    this.meshMap = new Map();
  }

  sync(enemies, camera) {
    const alive = new Set();

    for (const enemy of enemies) {
      alive.add(enemy);

      if (enemy.isDead()) {
        if (this.meshMap.has(enemy)) {
          this.scene.remove(this.meshMap.get(enemy));
          this.meshMap.delete(enemy);
        }
        continue;
      }

      let group = this.meshMap.get(enemy);
      if (!group) {
        group = createEnemyGroup(enemy.type);
        this.scene.add(group);
        this.meshMap.set(enemy, group);
      }

      group.position.set(enemy.position.x, enemy.position.y, enemy.position.z);

      if (camera) {
        const dx = camera.position.x - enemy.position.x;
        const dz = camera.position.z - enemy.position.z;
        group.rotation.y = Math.atan2(dx, dz);
      }
    }

    for (const [enemy, group] of this.meshMap) {
      if (!alive.has(enemy)) {
        this.scene.remove(group);
        this.meshMap.delete(enemy);
      }
    }
  }
}
