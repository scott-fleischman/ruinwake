export function shouldReleaseCursor(menus) {
  return !!(menus.inventory || menus.crafting || menus.questLog ||
            menus.skillTree || menus.map || menus.settings);
}
