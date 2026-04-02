# Ruinwake - Middle-earth Voxel RPG

## Build & Test

```bash
npm run dev          # Start dev server
npm test             # Run all tests (vitest)
npm run build        # Production build to dist/
```

## Deploy to GitHub Pages

**Automatic:** A Claude Code hook (`.claude/settings.json` PostToolUse) runs
`.claude/scripts/deploy-gh-pages.sh` after every `git commit` on main. It
builds, copies dist/ to the gh-pages branch, commits, and switches back to main.

**Manual:** If needed, deploy manually:

```bash
npm run build && \
  git checkout gh-pages && \
  git rm -rf assets index.html 2>/dev/null; \
  cp -r dist/* . && \
  git add index.html assets/ && \
  git commit -m "deploy: $(git log main -1 --format='%h %s')" && \
  git checkout main
```

## Test Organization

- `test/unit/` — Unit tests for game logic, data, recipes, etc.
- `test/rendering/` — Visual regression tests + screenshot generation
- `test/integration/` — End-to-end gameplay flows
- `test/contract/` — Data consistency checks

## Key Directories

- `src/core/` — Game logic (world, blocks, enemies, NPCs, quests, terrain gen)
- `src/render/` — THREE.js renderers (world, enemies, NPCs, UI)
- `test/rendering/screenshots/` — Generated screenshot output (timestamped dirs)

## Commit Discipline

- Commit at each red/green/refactor step (TDD). Never batch multiple steps.
