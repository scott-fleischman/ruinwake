export function buildInstructionsText() {
  return [
    {
      title: 'Movement',
      items: [
        { key: 'WASD', desc: 'Move' },
        { key: 'Mouse', desc: 'Look' },
        { key: 'Space', desc: 'Jump' },
        { key: 'Shift', desc: 'Sprint' },
        { key: 'C', desc: 'Crouch' },
      ],
    },
    {
      title: 'Actions',
      items: [
        { key: 'LClick', desc: 'Mine / Attack' },
        { key: 'RClick', desc: 'Place block' },
        { key: 'F', desc: 'Eat food' },
        { key: 'R', desc: 'Restore site' },
        { key: 'T', desc: 'Talk to NPC' },
        { key: 'G', desc: 'Guard (hold)' },
      ],
    },
    {
      title: 'Menus',
      items: [
        { key: 'E', desc: 'Crafting' },
        { key: 'I', desc: 'Inventory' },
        { key: 'Q', desc: 'Quests' },
        { key: 'Tab', desc: 'Skills' },
        { key: 'M', desc: 'Map' },
        { key: '1-8 / Scroll', desc: 'Hotbar' },
        { key: 'V', desc: 'Camera' },
        { key: 'F5/F9', desc: 'Save/Load' },
      ],
    },
  ];
}
