# Plans

## Current: Vertical Slice 1 — Walk around a block world

Goal: Player can spawn into a voxel world, move around, see blocks rendered in 3D.

### TDD cycles
1. Block type enum — air, dirt, stone, grass
2. Chunk stores blocks in 16x16x16 grid
3. World manages chunks, get/set block across boundaries
4. Terrain generator creates ground layers
5. Player with position
6. Player movement (tick-based, explicit dt)
7. Gravity and collision with blocks
8. Rendering adapter: Three.js block meshes + camera
9. Input adapter: WASD + mouse look
10. Save/load world state

## Upcoming: Vertical Slice 2 — Mine and place blocks
## Upcoming: Vertical Slice 3 — Survival starter loop
## Upcoming: Vertical Slice 4 — Race/class selection and new game flow
## Upcoming: Vertical Slice 5 — Combat and enemies
