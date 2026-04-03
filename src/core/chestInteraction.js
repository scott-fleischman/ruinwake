// Chest interaction logic — extracted from main.js

export function getChestItems(chestStorage, x, y, z) {
  return chestStorage.getItems(x, y, z);
}

export function takeChestItem(chestStorage, x, y, z, itemType) {
  return chestStorage.takeItem(x, y, z, itemType);
}

export function buildChestItemsHTML(items, getIconFn) {
  if (items.length === 0) {
    return '<div style="color:#888">Empty</div>';
  }
  return items.map((item, i) =>
    `<div data-chest-idx="${i}" style="padding:4px 8px;cursor:pointer;border-radius:4px;color:#aed581;border:1px solid #333;margin:2px 0">${getIconFn(item.type)} ${item.type.replace(/_/g, ' ')} x${item.count}</div>`
  ).join('');
}
