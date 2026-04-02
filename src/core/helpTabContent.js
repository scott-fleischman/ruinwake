import { buildInstructionsText } from './instructionsText.js';

export function buildHelpTabHTML() {
  const sections = buildInstructionsText();
  let html = '<table style="text-align:left;font-size:13px;line-height:1.6;width:100%;border-collapse:collapse">';
  for (const section of sections) {
    html += `<tr><td colspan="2" style="color:#c9a84c;padding:8px 0 2px;font-weight:bold">${section.title}</td></tr>`;
    for (const item of section.items) {
      html += `<tr><td style="color:#aed581;width:100px;padding:2px 8px">${item.key}</td><td>${item.desc}</td></tr>`;
    }
  }
  html += '</table>';
  return html;
}
