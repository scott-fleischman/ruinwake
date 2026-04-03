// HUD rendering functions — extracted from main.js

export function buildHotbarHTML(hotbar, getIconFn) {
  let html = '';
  for (let i = 0; i < 8; i++) {
    const item = hotbar.getSlot(i);
    const sel = i === hotbar.selectedSlot ? ' selected' : '';
    const icon = item ? getIconFn(item.type) : '';
    const itemName = item ? item.type.replace(/_/g, ' ') : '';
    const itemCount = item ? item.count : '';
    html += `<div class="slot${sel}"><span class="num">${i + 1}</span><div style="font-size:18px">${icon}</div><span class="item-name">${itemName}</span><span class="item-count">${itemCount}</span></div>`;
  }
  return html;
}

export function buildSiteHintHTML(sites, playerPos, hintRange) {
  for (const site of sites) {
    if (site.restored) continue;
    const dx = playerPos.x - site.position.x;
    const dy = playerPos.y - site.position.y;
    const dz = playerPos.z - site.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist <= hintRange) {
      const reqs = site.requirements.map(r => `${r.count} ${r.type.replace(/_/g, ' ')}`).join(', ');
      return `<div style="color:#aed581;margin-top:4px">[R] Restore ${site.name} (needs: ${reqs})</div>`;
    }
  }
  return '';
}

export function buildStatusEffectsHTML(effects) {
  if (effects.length === 0) return '';
  return `<div style="margin-top:2px;font-size:11px;color:#aed581">${effects.map(e => `${e.type.replace(/_/g, ' ')} ${Math.ceil(e.remaining)}s`).join(' | ')}</div>`;
}
