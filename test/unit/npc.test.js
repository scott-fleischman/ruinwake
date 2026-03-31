import { describe, it, expect } from 'vitest';
import { NPC, NPCSystem } from '../../src/core/npc.js';
import { Quest, QuestSystem, QuestStatus } from '../../src/core/quest.js';

describe('NPC', () => {
  it('creates an NPC with position, name, factionId, and dialogueId', () => {
    const npc = new NPC({
      id: 'ranger_hal',
      name: 'Hal the Ranger',
      position: { x: 10, y: 33, z: 5 },
      factionId: 'road_wardens',
      dialogueId: 'ranger_hal_intro',
    });
    expect(npc.id).toBe('ranger_hal');
    expect(npc.name).toBe('Hal the Ranger');
    expect(npc.position).toEqual({ x: 10, y: 33, z: 5 });
    expect(npc.factionId).toBe('road_wardens');
    expect(npc.dialogueId).toBe('ranger_hal_intro');
  });

  it('getDialogue returns intro text when quest is not yet active', () => {
    const npc = new NPC({
      id: 'ranger_hal',
      name: 'Hal the Ranger',
      position: { x: 10, y: 33, z: 5 },
      factionId: 'road_wardens',
      dialogueId: 'ch1_embers',
      dialogue: {
        available: 'The wild is dangerous. Let me tell you about the ward fragments.',
        active: 'Have you found the ward fragment yet?',
        completed: 'Well done. The ward glows again.',
        default: 'Stay safe out there.',
      },
    });

    const questSystem = new QuestSystem([
      new Quest({
        id: 'ch1_embers',
        chapter: 1,
        name: 'Embers in the Wild',
        description: 'Survive and find the ward',
        objectives: [
          { id: 'survive_night', description: 'Survive the first night', target: 1 },
        ],
      }),
    ]);

    const text = npc.getDialogue(questSystem);
    expect(text).toBe('The wild is dangerous. Let me tell you about the ward fragments.');
  });

  it('getDialogue returns active text when linked quest is active', () => {
    const npc = new NPC({
      id: 'ranger_hal',
      name: 'Hal the Ranger',
      position: { x: 10, y: 33, z: 5 },
      factionId: 'road_wardens',
      dialogueId: 'ch1_embers',
      dialogue: {
        available: 'The wild is dangerous. Let me tell you about the ward fragments.',
        active: 'Have you found the ward fragment yet?',
        completed: 'Well done. The ward glows again.',
        default: 'Stay safe out there.',
      },
    });

    const questSystem = new QuestSystem([
      new Quest({
        id: 'ch1_embers',
        chapter: 1,
        name: 'Embers in the Wild',
        description: 'Survive and find the ward',
        objectives: [
          { id: 'survive_night', description: 'Survive the first night', target: 1 },
        ],
      }),
    ]);
    questSystem.activate('ch1_embers');

    const text = npc.getDialogue(questSystem);
    expect(text).toBe('Have you found the ward fragment yet?');
  });

  it('getDialogue returns completed text when linked quest is completed', () => {
    const npc = new NPC({
      id: 'ranger_hal',
      name: 'Hal the Ranger',
      position: { x: 10, y: 33, z: 5 },
      factionId: 'road_wardens',
      dialogueId: 'ch1_embers',
      dialogue: {
        available: 'The wild is dangerous. Let me tell you about the ward fragments.',
        active: 'Have you found the ward fragment yet?',
        completed: 'Well done. The ward glows again.',
        default: 'Stay safe out there.',
      },
    });

    const questSystem = new QuestSystem([
      new Quest({
        id: 'ch1_embers',
        chapter: 1,
        name: 'Embers in the Wild',
        description: 'Survive and find the ward',
        objectives: [
          { id: 'survive_night', description: 'Survive the first night', target: 1 },
        ],
      }),
    ]);
    questSystem.activate('ch1_embers');
    questSystem.advanceObjective('ch1_embers', 'survive_night', 1);

    const text = npc.getDialogue(questSystem);
    expect(text).toBe('Well done. The ward glows again.');
  });

  it('getDialogue returns default text when NPC has no linked quest', () => {
    const npc = new NPC({
      id: 'villager',
      name: 'Tired Villager',
      position: { x: 5, y: 33, z: 5 },
      factionId: 'road_wardens',
      dialogueId: null,
      dialogue: {
        default: 'Times are hard around here.',
      },
    });

    const questSystem = new QuestSystem([]);

    const text = npc.getDialogue(questSystem);
    expect(text).toBe('Times are hard around here.');
  });
});

describe('NPCSystem', () => {
  function makeNPCs() {
    return [
      new NPC({
        id: 'ranger_hal',
        name: 'Hal the Ranger',
        position: { x: 10, y: 33, z: 5 },
        factionId: 'road_wardens',
        dialogueId: 'ch1_embers',
        dialogue: { default: 'Greetings.' },
      }),
      new NPC({
        id: 'elf_scholar',
        name: 'Elara',
        position: { x: 50, y: 33, z: 50 },
        factionId: 'rivendell',
        dialogueId: 'ch2_roads',
        dialogue: { default: 'The lore is fading.' },
      }),
      new NPC({
        id: 'dwarf_smith',
        name: 'Thorin III',
        position: { x: 12, y: 33, z: 8 },
        factionId: 'dwarven_hold',
        dialogueId: 'ch1_embers',
        dialogue: { default: 'Need something forged?' },
      }),
    ];
  }

  it('can add NPCs and retrieve them', () => {
    const system = new NPCSystem();
    const npcs = makeNPCs();
    for (const npc of npcs) {
      system.addNPC(npc);
    }
    expect(system.getNPC('ranger_hal')).toBeDefined();
    expect(system.getNPC('ranger_hal').name).toBe('Hal the Ranger');
  });

  it('findNearby returns NPCs within given radius', () => {
    const system = new NPCSystem();
    const npcs = makeNPCs();
    for (const npc of npcs) {
      system.addNPC(npc);
    }

    // Player at origin-ish, radius 20 should find ranger_hal (dist ~11.2) and dwarf_smith (dist ~14.4) but not elf_scholar (dist ~70.7)
    const nearby = system.findNearby({ x: 0, y: 33, z: 0 }, 20);
    expect(nearby).toHaveLength(2);
    const ids = nearby.map(n => n.id);
    expect(ids).toContain('ranger_hal');
    expect(ids).toContain('dwarf_smith');
    expect(ids).not.toContain('elf_scholar');
  });

  it('findNearby returns empty array when no NPCs are in range', () => {
    const system = new NPCSystem();
    const npcs = makeNPCs();
    for (const npc of npcs) {
      system.addNPC(npc);
    }

    const nearby = system.findNearby({ x: 500, y: 33, z: 500 }, 5);
    expect(nearby).toHaveLength(0);
  });

  it('getByFaction returns all NPCs belonging to a faction', () => {
    const system = new NPCSystem();
    const npcs = makeNPCs();
    for (const npc of npcs) {
      system.addNPC(npc);
    }

    const wardens = system.getByFaction('road_wardens');
    expect(wardens).toHaveLength(1);
    expect(wardens[0].id).toBe('ranger_hal');

    const rivendell = system.getByFaction('rivendell');
    expect(rivendell).toHaveLength(1);
    expect(rivendell[0].id).toBe('elf_scholar');
  });

  it('getByFaction returns empty array for unknown faction', () => {
    const system = new NPCSystem();
    const npcs = makeNPCs();
    for (const npc of npcs) {
      system.addNPC(npc);
    }

    const unknown = system.getByFaction('shadow_cult');
    expect(unknown).toHaveLength(0);
  });
});
