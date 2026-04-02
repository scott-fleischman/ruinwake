# Middle-earth Voxel Survival RPG

A single-player, first-person voxel survival RPG set in a far-future Middle-earth. Inspired by Minecraft's editable voxel world, Vintage Story's grounded survival, and Breath of the Wild's open exploration with a persistent main quest.

You choose a race (Man, Elf, Dwarf, Hobbit) and class (3 per race), then journey east along The Hobbit corridor — from the gentle Shire through Bree, the Trollshaws, Rivendell, the Misty Mountains, Mirkwood, and finally to Erebor — surviving, crafting, restoring ancient ruins, and confronting a newly awakened dark power at Dol Guldur.

## What's in the game

- **Multiple races and classes** with distinct stats, starter gear, and passives
- **Multi-chapter main quest** following The Hobbit's travel corridor
- **Side quests** across multiple factions with reputation tracking
- **Large voxel world** with multiple biomes, block types, rivers, and water
- **Many enemy types** from wolves to wraiths with block collision and terrain following
- **Crafting system** with recipes across multiple stations (hand, workbench, forge, campfire, kitchen, loom, rune table)
- **Skill trees** with race/class starting unlocks
- **Restorable ruins** with visible structures and material requirements
- **NPCs** with unique lore-rich dialogue and quest acceptance
- **Magic system** with relic abilities (Ward Light, Heal Wound, Calm Fear...)
- **Survival**: hunger, stamina, temperature, corruption, fear, shelter quality, food freshness, injuries
- **Day/night cycle** with weather, night danger escalation, and corruption zones
- **2D map system** with overview and detail zoom, exploration markers, fog of war
- **Terrain difficulty** with slope-based movement penalties and impassable cliffs
- **Death and respawn**, creative mode (F4), save/load (F5/F9)
- **100% completion tracker** with jump-to-state debug menu

## How to play

See **[CHEAT_SHEET.md](CHEAT_SHEET.md)** for a full walkthrough with coordinates.

### Controls

| Key | Action |
|-----|--------|
| **WASD** | Move |
| **Mouse** | Look |
| **Space** | Jump |
| **Shift** | Sprint |
| **LClick** (hold) | Mine block / Attack |
| **RClick** | Use / interact (toggle doors, place block) |
| **Scroll / 1-8** | Select hotbar slot |
| **E** | Crafting |
| **I** | Inventory (click slots to move items) |
| **Q** | Quest log |
| **Tab** | Skill trees |
| **M** | World map |
| **Z** | Toggle map zoom (overview / detail) |
| **T** | Talk to NPC |
| **F** | Eat food |
| **R** | Restore nearby ruin |
| **X** | Use relic ability |
| **G** (hold) | Guard |
| **C** | Crouch (stealth) |
| **V** | Camera toggle |
| **P** | Settings |
| **F4** | Creative mode |
| **F5 / F9** | Save / Load |
| **Esc** | Close any open menu |
| **`** | Completion tracker |

### Getting started

1. Pick a race and class (Hobbit Forager is easiest, Man Soldier for combat)
2. Punch grass for fiber, break dirt/wood by hand
3. Craft sticks (E key), then a workbench (4 planks + 4 sticks)
4. Place the workbench, stand near it, open crafting (E) to see station recipes
5. Craft a stone pickaxe to mine stone and ore
6. Build a shelter before night (4 walls + roof)
7. Talk to Hal the Ranger nearby (T key) to start the main quest
8. Head east toward Bree, then Rivendell, then the mountains...

## Development

```bash
nvm use 22.18.0
npm install
npm run dev          # start dev server at localhost:5173
npm test             # run all tests
```

### Key commands

| Command | What it does |
|---------|-------------|
| `npm test` | Run all tests (unit, integration, solvability, spatial, property, contract, rendering) |
| `npx vitest run test/rendering/screenshots.test.js` | Generate headless screenshots for graphics review |
| `npx vitest run --watch` | Watch mode for TDD |
| `npx vitest run test/unit/` | Run only unit tests |

### Screenshot generation

```bash
npx vitest run test/rendering/screenshots.test.js
```

Generates PPM screenshots in `test/rendering/screenshots/<timestamp>/`:
- Block palette, individual blocks (stone, grass, wood)
- Biome terrain views (Shire, Mountains, Mirkwood)

View with: ImageMagick (`display`), macOS Preview, GIMP, or `convert file.ppm file.png`

### Architecture

- **`src/core/`** — Headless gameplay modules (no rendering deps)
- **`src/render/`** — Three.js adapters
- **`src/worker/`** — Web Worker for background terrain generation
- **`test/`** — 7 test layers (unit, contract, integration, property, solvability, spatial, rendering)

See also: [AGENTS.md](AGENTS.md) (dev rules), [TESTING.md](TESTING.md) (test conventions), [PLANS.md](PLANS.md) (roadmap), [CHEAT_SHEET.md](CHEAT_SHEET.md) (walkthrough), [spec.md](spec.md) (full spec)
