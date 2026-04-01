// Unique dialogue choices per NPC based on their role and faction
const DIALOGUES = {
  ranger_hal: {
    about: 'I patrol the borders of the Shire. Wolves have been bolder lately, and I\'ve seen strange lights in the old ruins to the east. Something is stirring.',
    need: 'There\'s a ruined watch-post at the edge of the wilds. If someone could restore it, we\'d have a proper outpost again. You\'d need wood and stone.',
    extra: { text: 'Any survival tips?', response: 'Build a shelter before nightfall — four walls and a roof. Punch grass for fiber, break dirt for materials. Stay close to camp at night.' },
  },
  old_tom: {
    about: 'Bree used to be a bustling crossroads. Now half the buildings stand empty. The East Road has fallen into disrepair and fewer travelers come each season.',
    need: 'The old ranger hall just east of here needs restoring. It would bring trade back to this area. You\'ll need wood, stone, and some iron ore.',
    extra: { text: 'What happened here?', response: 'Ancient things are waking up. The wards that kept the dark things at bay — they\'re failing one by one. That\'s why the road wardens need help.' },
  },
  elara_lorekeeper: {
    about: 'Rivendell endures, though diminished. I study the old records — maps of a ward network that once protected these lands. The Elven-craft that built them is nearly forgotten.',
    need: 'I need someone to search the archives here for records of the ward network. The knowledge is scattered, but vital if we\'re to understand what\'s awakening.',
    extra: { text: 'Tell me about the relics', response: 'The relics are fragments of ancient technology — Elven, Dwarven, Numenorean. They can heal, ward, reveal. But near corruption, they become unstable. Use them wisely.' },
  },
  thorin_smith: {
    about: 'This was a great dwarven workshop once. The forge has gone cold, the bellows rotted. But the stone is strong and the veins of ore still run deep in these mountains.',
    need: 'Help me rebuild this workshop. I need stone, iron ore, and copper ore. With a working forge, I can craft the tools we need to push into the deeper delves.',
    extra: { text: 'What lurks in the mountains?', response: 'Goblins mostly, and worse things deeper down. There\'s a corrupted guardian blocking the lower passages. It was once a protector, now twisted by dark power.' },
  },
  galawen_warden: {
    about: 'Mirkwood grows darker. The ancient beacon that held corruption at bay has gone out. Without it, the spiders multiply and the forest sickens.',
    need: 'The forest beacon must be restored. I need someone brave enough to gather wood, fiber, and relic shards to reignite it. The spiders guard the approach.',
    extra: { text: 'Is the corruption spreading?', response: 'Yes. From the south — from Dol Guldur. An old evil stirs there. The beacon, once lit, will slow its advance through the forest.' },
  },
  beorn_jr: {
    about: 'I am Grimbeorn, son of Beorn. I guard the passage between the mountains and the forest. The wild creatures grow restless — something dark disturbs them.',
    need: 'I ask nothing for myself. But the land needs wardens. If you can clear the threats that trouble the vale, the Beornings will remember it.',
    extra: { text: 'What is the Anduin Vale like?', response: 'Rich land, good water, tall grass. Bears, eagles, and honest folk. But the shadow from Mirkwood creeps closer each season. We hold the line as we can.' },
  },
  sage_miriel: {
    about: 'I have watched ages pass. What stirs now in Dol Guldur is not the old Dark Lord — but an echo, a shadow left in the machinery of the ancient ward network.',
    need: 'The ward bastion is the key. Restore it, and the network can be turned against the shadow. But it requires great resources and courage to reach.',
    extra: { text: 'Can the shadow be defeated?', response: 'Not destroyed — contained. The ward network was built for this. Restore the bastions, stabilize the relics, and the shadow sleeps again. That is our best hope.' },
  },
};

export function getNPCDialogueChoices(npcId, npcName) {
  const d = DIALOGUES[npcId];
  if (!d) {
    return [
      { text: 'Tell me about this place', response: `${npcName}: I don't have much to say, traveler. Safe journeys.` },
      { text: 'Farewell', response: null },
    ];
  }
  const choices = [];
  choices.push({ text: 'Tell me about this place', response: `${npcName}: ${d.about}` });
  choices.push({ text: 'What do you need?', response: `${npcName}: ${d.need}` });
  if (d.extra) {
    choices.push({ text: d.extra.text, response: `${npcName}: ${d.extra.response}` });
  }
  choices.push({ text: 'Farewell', response: null });
  return choices;
}
