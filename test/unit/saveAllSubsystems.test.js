import { describe, it, expect } from 'vitest';
import { serializeGameState, deserializeGameState } from '../../src/core/save.js';
import { World } from '../../src/core/world.js';
import { Player } from '../../src/core/player.js';
import { GridInventory } from '../../src/core/gridInventory.js';
import { SurvivalStats } from '../../src/core/survival.js';
import { BlockType } from '../../src/core/block.js';
import { Quest, QuestSystem } from '../../src/core/quest.js';
import { Faction, FactionSystem } from '../../src/core/faction.js';
import { FastTravelSystem } from '../../src/core/fastTravel.js';
import { FogOfWar } from '../../src/core/fogOfWar.js';
import { LoreJournal, LoreEntry, LoreCategory } from '../../src/core/loreJournal.js';
import { SkillTreeSystem, SkillTree, SkillNode } from '../../src/core/skillTree.js';

function makeBaseState() {
  const world = new World();
  world.setBlock(5, 30, 5, BlockType.STONE);
  const player = new Player({ x: 10, y: 35, z: 20 });
  player.yaw = 1.5;
  player.pitch = -0.3;
  const inventory = new GridInventory(36);
  inventory.addItem('wood', 15);
  const survivalStats = new SurvivalStats();
  survivalStats.takeDamage(20);
  survivalStats.hunger = 60;
  return { world, player, inventory, survivalStats };
}

describe('save/load all subsystems', () => {
  it('round-trips fastTravel waypoints', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();
    const fastTravel = new FastTravelSystem();
    fastTravel.unlockWaypoint({ id: 'bree', name: 'Bree', position: { x: 100, y: 30, z: 50 } });
    fastTravel.unlockWaypoint({ id: 'rivendell', name: 'Rivendell', position: { x: 300, y: 40, z: -20 } });

    const json = serializeGameState(world, player, inventory, { survivalStats, fastTravel });
    const loaded = deserializeGameState(json);

    expect(loaded.fastTravelData).toBeDefined();
    const ft = new FastTravelSystem();
    ft.deserialize(loaded.fastTravelData);
    expect(ft.isUnlocked('bree')).toBe(true);
    expect(ft.isUnlocked('rivendell')).toBe(true);
    expect(ft.travel('bree')).toEqual({ x: 100, y: 30, z: 50 });
  });

  it('round-trips fogOfWar state', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();
    const fogOfWar = new FogOfWar({ width: 512, height: 512, cellSize: 16 });
    fogOfWar.reveal(100, 100, 32);
    fogOfWar.addLandmark({ id: 'tower1', name: 'Watchtower', x: 100, z: 100 });

    const json = serializeGameState(world, player, inventory, { survivalStats, fogOfWar });
    const loaded = deserializeGameState(json);

    expect(loaded.fogOfWarData).toBeDefined();
    const fow = new FogOfWar({ width: 512, height: 512, cellSize: 16 });
    fow.deserialize(loaded.fogOfWarData);
    expect(fow.isRevealed(100, 100)).toBe(true);
    expect(fow.isRevealed(0, 0)).toBe(false);
    expect(fow.getLandmarks()).toHaveLength(1);
    expect(fow.getLandmarks()[0].name).toBe('Watchtower');
  });

  it('round-trips loreJournal entries', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();
    const loreJournal = new LoreJournal();
    loreJournal.addEntry(new LoreEntry({
      id: 'lore1', title: 'Ancient Inscription', text: 'The dwarves delved too deep.', category: LoreCategory.INSCRIPTION,
    }));
    loreJournal.addEntry(new LoreEntry({
      id: 'lore2', title: 'Old Song', text: 'Far over the misty mountains cold.', category: LoreCategory.SONG,
    }));

    const json = serializeGameState(world, player, inventory, { survivalStats, loreJournal });
    const loaded = deserializeGameState(json);

    expect(loaded.loreJournalData).toBeDefined();
    const lj = new LoreJournal();
    lj.deserialize(loaded.loreJournalData);
    expect(lj.hasEntry('lore1')).toBe(true);
    expect(lj.hasEntry('lore2')).toBe(true);
    expect(lj.getByCategory(LoreCategory.INSCRIPTION)).toHaveLength(1);
    expect(lj.getEntries()[0].text).toBe('The dwarves delved too deep.');
  });

  it('round-trips skillTree progress', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();
    const trees = [new SkillTree({
      id: 'combat', name: 'Combat', nodes: [
        { id: 'slash', name: 'Slash', description: 'Basic attack', cost: 1, requires: [] },
        { id: 'heavy', name: 'Heavy Strike', description: 'Strong attack', cost: 2, requires: ['slash'] },
      ],
    })];
    const skillTree = new SkillTreeSystem(trees);
    skillTree.addPoints(5);
    skillTree.unlock('slash');

    const json = serializeGameState(world, player, inventory, { survivalStats, skillTree });
    const loaded = deserializeGameState(json);

    expect(loaded.skillTreeData).toBeDefined();
    const st = new SkillTreeSystem(trees);
    st.deserialize(loaded.skillTreeData);
    expect(st.isUnlocked('slash')).toBe(true);
    expect(st.isUnlocked('heavy')).toBe(false);
    expect(st.skillPoints).toBe(4); // 5 - 1 spent on slash
  });

  it('round-trips factions alongside other subsystems', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();
    const factionDefs = [
      new Faction({ id: 'road_wardens', name: 'Road Wardens', description: 'Patrol the roads' }),
      new Faction({ id: 'elves', name: 'Elves of Rivendell', description: 'Ancient elves' }),
    ];
    const factions = new FactionSystem(factionDefs);
    factions.addReputation('road_wardens', 500);
    factions.addReputation('elves', -200);

    const json = serializeGameState(world, player, inventory, { survivalStats, factions });
    const loaded = deserializeGameState(json);

    expect(loaded.factionData).toBeDefined();
    const f = new FactionSystem(factionDefs);
    f.deserialize(loaded.factionData);
    expect(f.getReputation('road_wardens')).toBe(500);
    expect(f.getReputation('elves')).toBe(-200);
  });

  it('round-trips ALL subsystems together in one save', () => {
    const { world, player, inventory, survivalStats } = makeBaseState();

    const questDefs = [new Quest({ id: 'q1', chapter: 1, name: 'Quest', description: 'A quest',
      objectives: [{ id: 'o1', description: 'Do thing', target: 3 }] })];
    const quests = new QuestSystem(questDefs);
    quests.activate('q1');
    quests.advanceObjective('q1', 'o1', 2);

    const factionDefs = [new Faction({ id: 'wardens', name: 'Wardens', description: 'Guards' })];
    const factions = new FactionSystem(factionDefs);
    factions.addReputation('wardens', 300);

    const fastTravel = new FastTravelSystem();
    fastTravel.unlockWaypoint({ id: 'wp1', name: 'Home', position: { x: 0, y: 30, z: 0 } });

    const fogOfWar = new FogOfWar({ width: 256, height: 256, cellSize: 16 });
    fogOfWar.reveal(50, 50, 20);

    const loreJournal = new LoreJournal();
    loreJournal.addEntry(new LoreEntry({ id: 'l1', title: 'Note', text: 'Hello', category: LoreCategory.HISTORY }));

    const trees = [new SkillTree({ id: 't1', name: 'T', nodes: [
      { id: 'n1', name: 'N', description: 'd', cost: 1, requires: [] },
    ] })];
    const skillTree = new SkillTreeSystem(trees);
    skillTree.addPoints(3);
    skillTree.unlock('n1');

    const json = serializeGameState(world, player, inventory, {
      survivalStats, quests, factions, fastTravel, fogOfWar, loreJournal, skillTree,
    });
    const loaded = deserializeGameState(json);

    // All subsystem data should be present
    expect(loaded.questData).toBeDefined();
    expect(loaded.factionData).toBeDefined();
    expect(loaded.fastTravelData).toBeDefined();
    expect(loaded.fogOfWarData).toBeDefined();
    expect(loaded.loreJournalData).toBeDefined();
    expect(loaded.skillTreeData).toBeDefined();
    expect(loaded.survivalStats).toBeDefined();
    expect(loaded.world).toBeDefined();
    expect(loaded.player).toBeDefined();
    expect(loaded.inventory).toBeDefined();
  });
});
