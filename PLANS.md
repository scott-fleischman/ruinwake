# Plans

## Done: Vertical Slice 1 — Walk around a block world
## Done: Vertical Slice 2 — Mine, place, survival, day/night, crafting
## Done: Vertical Slice 3 — Race/class selection and new game flow
## Done: Vertical Slice 4 — Combat and enemies (15 types, heavy/guard/parry)
## Done: Vertical Slice 5 — Crafting stations and restoration (E key, 5 sites)
## Done: Vertical Slice 6 — Main quest (8 chapters, NPC dialogue, quest log)
## Done: Vertical Slice 7 — Landmark regions (10 landmarks, biome terrain)

## Current: Vertical Slice 8 — Full systems integration

Goal: Wire all headless systems into the playable game loop so every
spec feature is accessible to the player.

### Completed this pass
- Fog inversion bug fixed (proportional near/far)
- World boundary clamping (no falling off edge)
- Crafting menu (E key) with recipe list
- Food eating (F key) from inventory
- Quest log (Q key) with objectives
- NPC interaction (T key) with dialogue
- Site restoration (R key) with material requirements
- Hotbar selection (1-8 / scrollwheel)
- Visual hotbar bar at bottom
- Inventory screen (I key)
- Save/Load (F5/F9)
- HUD state extracted to headless builder
- Active quest name and compass in HUD
- Skill tree screen (Tab key, 6 trees)
- World map (M key, 10 landmarks)
- 15 enemy variants (from 7)
- 27 side quests (from 12)
- Biome-aware terrain (mountains tall, forests have trees)
- 84-item database

### Remaining for completion
- Status effects visible in HUD
- Fix recipe outputs (several produce wrong items)
- Tutorial/onboarding hints
- Settings menu (camera sensitivity, FOV)
- Accessibility options
- More integration tests and solvability tests
- Performance optimization pass
