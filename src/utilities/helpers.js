export function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
export function sortColorsByRgb(hexColors) {
  const rgbColors = hexColors.map(hexToRgb);
  rgbColors.sort((a, b) => {
    if (a.r !== b.r) return a.r - b.r;
    if (a.g !== b.g) return a.g - b.g;
    return a.b - b.b;
  });
  return rgbColors.map(rgbToHex);
}
export function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

export function rgbToHex({ r, g, b }) {
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  return `#${hex}`;
}
