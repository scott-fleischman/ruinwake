# Middle-earth Voxel Survival RPG

A single-player, first-person voxel survival RPG set in a far-future Middle-earth. Inspired by Minecraft's editable voxel world, Vintage Story's grounded survival, and Breath of the Wild's open exploration with a persistent main quest.

You choose a race (Man, Elf, Dwarf, Hobbit) and class (3 per race), then journey east along The Hobbit corridor — from the gentle Shire through Bree, the Trollshaws, Rivendell, the Misty Mountains, Mirkwood, and finally to Erebor — surviving, crafting, restoring ancient ruins, and confronting a newly awakened dark power at Dol Guldur.

## What's in the game

- **4 races, 12 classes** with distinct stats, starter gear, and passives
- **8-chapter main quest** following The Hobbit's travel corridor
- **27 side quests** across 6 factions with reputation tracking
- **600x270 block world** with 5 biomes, 41 block types, rivers, and water
- **15 enemy types** from wolves to wraiths with block collision and terrain following
- **84 items**, 30+ recipes, 7 crafting stations (hand, workbench, forge, campfire, kitchen, loom, rune table)
- **6 skill trees** (54 nodes) with race/class starting unlocks
- **5 restorable ruins** with visible structures and material requirements
- **7 NPCs** with unique lore-rich dialogue and quest acceptance
- **Magic system** with 7 relic abilities (Ward Light, Heal Wound, Calm Fear...)
- **Survival**: hunger, stamina, temperature, corruption, fear, shelter quality, food freshness, injuries
- **Day/night cycle** with weather, night danger escalation, and corruption zones
- **Death and respawn**, creative mode (F4), save/load (F5/F9)
- **100% completion tracker** with 13 categories and a jump-to-state debug menu

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
| **RClick** | Place selected block |
| **Scroll / 1-8** | Select hotbar slot |
| **E** | Crafting |
| **I** | Inventory (click slots to move items) |
| **Q** | Quest log |
| **Tab** | Skill trees |
| **M** | World map |
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
npm test             # run all 1168+ tests
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

- **`src/core/`** — 96 headless gameplay modules (no rendering deps)
- **`src/render/`** — Three.js adapters
- **`src/worker/`** — Web Worker for background terrain generation
- **`test/`** — 7 test layers across 131 files

See also: [AGENTS.md](AGENTS.md) (dev rules), [TESTING.md](TESTING.md) (test conventions), [PLANS.md](PLANS.md) (roadmap), [CHEAT_SHEET.md](CHEAT_SHEET.md) (walkthrough), [spec.md](spec.md) (full spec)
