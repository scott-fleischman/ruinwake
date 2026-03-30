---
name: game-tdd
description: Use for gameplay, systems, quests, physics, AI, world logic, voxel/spatial logic, rendering validation, performance validation, and refactors in this repository. Enforces short red-green-refactor loops, headless simulation-first design, deterministic testing, and automated solvability checks.
---

# Game TDD skill

When this skill is active, follow this sequence:

1. Identify the smallest valuable behavior slice.
2. Choose the lowest-cost test layer that can prove it.
3. Write exactly one failing test.
4. Commit the red step as its own commit.
5. Implement the minimum code change needed to pass.
6. Commit the green step as its own commit.
7. Refactor immediately after green.
8. Commit the refactor step as its own commit.
9. Re-run the relevant suites.
10. Report what changed in terms of:
   - test added
   - minimal implementation
   - refactor performed
   - suites run
   - remaining risk

## Core rules
- Prefer headless tests over visual/manual checks.
- Keep gameplay logic independent of rendering.
- Inject randomness and time.
- Prefer pure logic and explicit state transitions.
- Keep red, green, and refactor updates as separate commits.
- Add regression tests for bugs.
- Add deterministic replay coverage for important scenarios.

Use the test-layer definitions and local verification standards in `TESTING.md`.

## Spatial / open-world rules
For any world, pathing, collision, or voxel change:
- test reachability
- test no-stuck conditions
- test safe spawn/checkpoint positions
- test enclosure/completeness where relevant
- test traversal against intended movement capabilities

## Mission / progression rules
For any quest or progression change:
- verify critical-path solvability
- verify no soft-lock states
- verify transitions between objectives
- verify recovery from save/checkpoint states

## Human-capacity rules
For timing-sensitive gameplay:
- verify reaction windows are human-feasible
- verify input cadence is human-feasible
- avoid frame-perfect requirements unless explicitly intended and documented
- encode budgets in tests where possible

## Rendering rules
Use rendering tests to validate presentation and runtime health, not as the first proof that gameplay works.
Check:
- asset loading
- scene assembly
- missing materials/geometry smoke
- runtime errors
- platform-specific logging violations

## Web rules
For browser targets:
- treat console.error as failure
- treat unhandled promise rejections as failure
- treat unexpected production console.log / console.warn as failure

## Refactoring goals
After every green step, look for:
- duplicated logic
- oversized modules
- leaky abstractions
- hidden state
- mixed responsibilities
- opportunities to invert dependencies and isolate adapters
