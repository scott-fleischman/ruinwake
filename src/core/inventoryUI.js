export function formatInventoryDisplay(inventory) {
  const items = inventory.getItems();
  items.sort((a, b) => b.count - a.count);
  return items;
}
