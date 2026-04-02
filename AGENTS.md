# AI working rules for this game repository

## Core development loop
- Use strict TDD for all production code.
- Every behavior change must follow one short loop:
  1. Red: write exactly one new failing test for one new behavior, edge case, or bug, then commit that red update.
  2. Green: implement the smallest possible code change that makes that test pass, then commit that green update.
  3. Refactor: immediately improve structure without changing behavior, then commit that refactor update.
- Do not batch multiple unrelated behaviors into one TDD cycle.
- Do not skip the refactor step just because the test is green.
- Keep red, green, and refactor updates as separate commits.
- Prefer many tiny TDD-step commits over large speculative rewrites.
- Non-code changes (documentation, configuration, build files) must also be committed immediately — do not batch them.

## Toolchain rule
- Use Node through `nvm` for all work in this repository.
- Before running any `node`, `npm`, or other Node-based command, run `source ~/.nvm/nvm.sh && nvm use 22.18.0`.
- Do not rely on the system `node` binary for implementation, scripts, or test execution.

## Architecture rules
- Gameplay must be testable without rendering.
- The gameplay core must be deterministic, headless, and runnable without a browser, GPU, engine scene, or frame loop.
- Rendering, audio, input, networking, persistence, and platform APIs are adapters around the gameplay core.
- No gameplay rule may depend directly on renderer state.
- Prefer pure functions and explicit state transitions.
- All randomness must be injectable and deterministic.
- All time must be explicit and simulated through clocks/ticks, never wall clock.
- Avoid hidden globals and hidden mutable state.

## Required test layers
1. Unit tests for rules, calculations, and state transitions.
2. Contract tests for boundaries between gameplay core and adapters.
3. Headless integration tests for full gameplay loops.
4. Property/fuzz tests for invariants and edge cases.
5. Mission and quest solvability tests.
6. Spatial tests for collision, reachability, spawn validity, checkpoint validity, voxel/world completeness, and stuck-state prevention.
7. Rendering tests for scene assembly, asset loading, geometry smoke checks, semantic UI visibility, deterministic visual baselines, and target-specific runtime errors.

See `TESTING.md` for the operational definition of each test layer, required local verification gates, and command conventions.

## Non-negotiable quality rules
- Every mission-critical mechanic must be testable in the headless layer.
- Every bug fix should begin with a reproducing failing test when feasible.
- Important gameplay scenarios must support deterministic replay.
- Open-world and voxel changes must include automated sweeps for:
  - unreachable objectives
  - trapped states
  - sealed volumes
  - invalid spawn points
  - invalid checkpoints
  - collision dead ends
  - impossible traversal gaps
- Web/HTML targets must fail validation on:
  - console.error
  - unhandled promise rejections
  - unexpected console.log / console.warn in production paths
- Render-validation scenarios must start from deterministic replays, saves, or explicit state fixtures with camera, clock, and lighting inputs defined up front.
- Prefer semantic DOM or scene assertions for visible state and HUD correctness; use screenshots as regression evidence for presentation, not as the sole proof of gameplay correctness.
- Voxel, occlusion, chunk-boundary, and visibility changes must pair render/runtime checks with spatial, contract, or scene-debug assertions. Screenshots alone do not prove that geometry is correct.
- The rendering pass is not the primary proof that gameplay works. It is a presentation validation layer.

## Refactoring standard
After every green step, refactor toward:
- less duplication
- lower coupling
- smaller interfaces
- clearer ownership
- better names
- dependency inversion at boundaries
- fewer side effects
- easier headless testing
- more deterministic behavior

## Planning rule
For any non-trivial feature, refactor, or subsystem change:
- read and follow `PLANS.md`
- create or update the relevant plan section before implementation
- break the work into small red-green-refactor slices

## Documentation rule
Every commit that changes gameplay, controls, architecture, or test infrastructure must also update the relevant docs. The live documentation files are:

| File | What to update |
|------|---------------|
| **README.md** | Feature list, control table, architecture summary, dev commands |
| **CHEAT_SHEET.md** | Controls, walkthrough coordinates, NPC/enemy/crafting/discoverable tables |
| **PLANS.md** | Roadmap status, completed features, current vertical slice items |
| **TESTING.md** | Only when adding new test layers or changing test conventions |

Specifically, update docs when a commit adds or changes:
- Key bindings or controls
- Block types, enemies, items, or recipes
- NPCs, quests, or landmarks
- Crafting stations or skill trees
- New test layers
- Architecture changes
- New gameplay systems

Do not update docs for pure refactors or internal test changes with no user-visible effect.

## Completion checklist
Before stopping work, verify:
- new or updated tests exist
- relevant test suites pass
- gameplay logic remains headless-testable
- no accidental console logging or debug prints remain
- randomness and time are injectable
- architectural docs/plans are updated if the design changed
- README.md, CHEAT_SHEET.md, and PLANS.md reflect any gameplay or control changes

## Decision rule
When several designs are possible, choose the one that improves:
- headless testability
- determinism
- modularity
- replayability
- solvability verification
- reduced coupling to rendering or engine APIs
