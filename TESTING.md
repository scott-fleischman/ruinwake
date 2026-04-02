# Testing

## Test framework
- **Vitest** for all test layers.
- Run all tests: `npm test`
- Run in watch mode: `npm run test:watch`

## Test layers

### 1. Unit tests
Tests for rules, calculations, and state transitions in the gameplay core.
Location: `test/unit/`

### 2. Contract tests
Tests for boundaries between gameplay core and adapters (rendering, input, persistence).
Location: `test/contract/`

### 3. Headless integration tests
Full gameplay loops exercised without any renderer or browser.
Location: `test/integration/`

### 4. Property/fuzz tests
Invariant and edge-case tests using randomized inputs.
Location: `test/property/`

### 5. Mission and quest solvability tests
Verify all quests are completable and no soft-locks exist.
Location: `test/solvability/`

### 6. Spatial tests
Collision, reachability, spawn validity, checkpoint validity, voxel completeness, stuck-state prevention.
Location: `test/spatial/`

### 7. Rendering tests
Scene assembly, asset loading, geometry smoke checks, semantic UI visibility.
Location: `test/rendering/`

## Local verification gate
Before stopping work, all tests in layers 1-3 must pass:
```
npm test
```
