# Middle-earth Voxel Survival RPG

A single-player, first-person voxel survival RPG set in a far-future Middle-earth. Choose a race and class, survive in a harsh world, explore ruined landmarks from The Hobbit corridor, restore ancient settlements, and uncover a rising dark power.

## Quick Start

```bash
nvm use 22.18.0
npm install
npm run dev
```

Open `http://localhost:5173` in a browser.

## Running Tests

```bash
npm test                    # run all 1168+ tests
npx vitest run              # same, explicit
npx vitest run --watch      # watch mode
```

### Test Layers

| Layer | Location | Description |
|-------|----------|-------------|
| Unit | `test/unit/` | Rules, calculations, state transitions |
| Contract | `test/contract/` | Boundaries between core and adapters |
| Integration | `test/integration/` | Full gameplay loops, headless |
| Property | `test/property/` | Invariant/fuzz tests with random inputs |
| Solvability | `test/solvability/` | Quest chain completability |
| Spatial | `test/spatial/` | Spawn validity, NPC placement |
| Rendering | `test/rendering/` | Screenshot generation |

## Screenshot Generation

Generate headless screenshots for graphics review:

```bash
npx vitest run test/rendering/screenshots.test.js
```

Screenshots are saved to `test/rendering/screenshots/<timestamp>/`:
- `block_palette.ppm` — All block types in a grid
- `block_stone.ppm`, `block_grass.ppm`, `block_wood.ppm` — Individual blocks
- `biome_shire.ppm` — Shire terrain (green rolling hills)
- `biome_mountain.ppm` — Misty Mountains terrain (stone peaks)
- `biome_mirkwood.ppm` — Mirkwood terrain (dark dense forest)

PPM files can be viewed with ImageMagick (`display`), macOS Preview, GIMP, or converted: `convert screenshot.ppm screenshot.png`

Each run creates a timestamped directory so historical screenshots are preserved for comparison.

## Game Controls

| Key | Action |
|-----|--------|
| WASD | Move |
| Mouse | Look |
| Space | Jump (fly up in Creative) |
| Shift | Sprint (fly down in Creative) |
| C | Crouch (reduces enemy detection) |
| LClick (hold) | Mine block / Attack |
| RClick | Place selected block |
| F | Eat food |
| R | Restore nearby site |
| T | Talk to NPC |
| G (hold) | Guard (50% damage reduction) |
| X | Use relic ability |
| H | Throw item |
| E | Crafting menu |
| I | Inventory (grid, click to move items) |
| Q | Quest log |
| Tab | Skill trees |
| M | World map |
| P | Settings |
| V | Camera toggle (1st/3rd person) |
| 1-8 / Scroll | Hotbar slot |
| F4 | Creative mode (fly, invincible) |
| F5 | Save game |
| F9 | Load game |
| ` | Completion tracker |

## Architecture

- **Headless-first**: All gameplay logic in `src/core/` with no rendering dependencies
- **Rendering adapters**: `src/render/` wraps Three.js, separate from game logic
- **Strict TDD**: Red/green/refactor with separate commits
- **Deterministic**: All randomness seeded, all time explicit
- **Chunked streaming**: Terrain generates on-demand via Web Worker as player explores

See `AGENTS.md` for development rules, `TESTING.md` for test conventions, `PLANS.md` for roadmap, and `CHEAT_SHEET.md` for a full walkthrough.

## Project Structure

```
src/
  core/           # 96 headless gameplay modules
  render/         # Three.js rendering adapters
  worker/         # Web Worker for background terrain generation
  main.js         # Game loop and UI wiring
  input.js        # Input handler
test/
  unit/           # ~95 unit test files
  integration/    # Headless gameplay loop tests
  contract/       # Data consistency tests
  property/       # Fuzz/invariant tests
  solvability/    # Quest chain tests
  spatial/        # Spawn/NPC placement tests
  rendering/      # Screenshot generation tests
```
