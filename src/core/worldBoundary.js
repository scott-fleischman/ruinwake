export function clampToWorldBounds(pos, extent) {
  const max = extent - 1;
  pos.x = Math.max(-max, Math.min(max, pos.x));
  pos.z = Math.max(-max, Math.min(max, pos.z));
  pos.y = Math.max(0, pos.y);
}
