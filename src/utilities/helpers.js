import { DEFAULT_BLOCK_NUMS } from '../config';

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
  return [r, g, b];
}

export function rgbToHex({ r, g, b }) {
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  return `#${hex}`;
}

export function blendHexColors(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const blendedRgb = rgb1.map((value, index) =>
    Math.floor((value + rgb2[index]) / 2)
  );
  const blendedRgbObject = {
    r: blendedRgb[0],
    g: blendedRgb[1],
    b: blendedRgb[2],
  };
  // 返回融合后的十六进制颜色
  return rgbToHex(blendedRgbObject).toString();
}

export function createColors(colorNums = DEFAULT_BLOCK_NUMS) {
  let colors = [];
  for (let i = 0; i < colorNums; i++) {
    const color = getRandomColor();
    colors.push(color);
  }
  return colors;
}

export function copy(text) {
  return navigator.clipboard.writeText(text);
}
