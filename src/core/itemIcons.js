const ICONS = {
  // Resources
  wood: '\u{1FAB5}',      // wood
  stone: '\u{1FAA8}',     // rock
  fiber: '\u{1F331}',     // seedling
  stick: '\u{1F4CF}',     // straight ruler (stick-like)
  clay: '\u{1F9F1}',      // brick
  iron_ore: '\u26CF',     // pick (ore)
  copper_ore: '\u26CF',
  coal: '\u{26AB}',       // black circle
  leather: '\u{1F9F4}',   // lotion (hide)
  rope: '\u{1FA22}',      // knot
  relic_shard: '\u2728',   // sparkles
  lore_fragment: '\u{1F4DC}', // scroll
  sand: '\u{1F3D6}',      // beach
  flint: '\u{1F48E}',     // gem

  // Tools
  pickaxe: '\u26CF',      // pick
  axe: '\u{1FA93}',       // axe
  hammer: '\u{1F528}',    // hammer
  iron_pickaxe: '\u26CF',
  copper_pickaxe: '\u26CF',
  stone_pickaxe: '\u26CF',
  stone_axe: '\u{1FA93}',
  iron_axe: '\u{1FA93}',
  lantern: '\u{1F3EE}',   // lantern
  torch: '\u{1F525}',     // fire

  // Weapons
  dagger: '\u{1F5E1}',    // dagger
  iron_sword: '\u2694',    // crossed swords
  iron_hammer: '\u{1F528}',
  spear: '\u{1F531}',     // trident
  short_bow: '\u{1F3F9}', // bow
  refined_bow: '\u{1F3F9}',
  sling: '\u{1F4AB}',     // dizzy (projectile)
  arrow: '\u{27A1}',      // arrow

  // Armor
  leather_armor: '\u{1F6E1}', // shield
  iron_helm: '\u{1FA96}',     // military helmet
  iron_chest: '\u{1F6E1}',
  shield: '\u{1F6E1}',
  cloak: '\u{1F9E5}',         // coat

  // Food
  bread: '\u{1F35E}',     // bread
  raw_meat: '\u{1F356}',  // meat on bone
  cooked_meat: '\u{1F357}', // poultry leg
  berries: '\u{1FAD0}',   // blueberries
  mushroom: '\u{1F344}',  // mushroom
  lembas: '\u{1F35E}',
  stew: '\u{1F372}',      // pot of food
  trail_rations: '\u{1F96A}', // sandwich
  fish: '\u{1F41F}',      // fish
  apple: '\u{1F34E}',     // apple
  honey: '\u{1F36F}',     // honey

  // Relics
  ward_light_stone: '\u{1F31F}', // glowing star
  healing_crystal: '\u{1F48E}',
  ward_token: '\u{1F31F}',

  // Consumables
  bandage: '\u{1FA79}',   // adhesive bandage
  bedroll: '\u{1F6CF}',   // bed
  herb_pouch: '\u{1F33F}', // herb
  firestarter: '\u{1F525}',

  // Lore
  lore_scroll: '\u{1F4DC}',
  map_fragment: '\u{1F5FA}', // world map
  song_fragment: '\u{1F3B6}', // notes

  // Blocks
  dirt: '\u{1F7EB}',      // brown square
  cobblestone: '\u{2B1C}', // white square
  planks: '\u{1F7E8}',    // yellow square
  oak_planks: '\u{1F7E7}', // orange square
  glass: '\u{1F535}',     // blue circle
  dark_stone: '\u{2B1B}', // black square
  marble: '\u{26AA}',     // white circle
  thatch: '\u{1F7E1}',    // yellow circle
  stone_brick: '\u{1F532}', // black square button
};

const DEFAULT_ICON = '\u{1F4E6}'; // package

export function getItemIcon(itemId) {
  return ICONS[itemId] || DEFAULT_ICON;
}
