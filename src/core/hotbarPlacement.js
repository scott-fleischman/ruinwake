export function selectPlaceableItem(hotbarItems, selectedSlot, inventory) {
  const slot = hotbarItems[selectedSlot];
  if (!slot) return null;
  if (inventory.count(slot.type) <= 0) return null;
  return slot.type;
}
