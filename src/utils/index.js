import { getGradientColors } from './gradients';

const getLinearGradient = (theme, cutomizedGradient) => {
  const [firstColor, ...elseColors] =
    cutomizedGradient || getGradientColors(theme);

  const str = elseColors
    .map((color, index) => `${color} ${100 / elseColors.length * (index + 1)}%`)
    .join(', ');

  return `${firstColor} 0%, ${str}`;
};

const getPadding = prop => {
  if (typeof prop === 'string' || typeof prop === 'number') {
    return `${prop}px`;
  } else if (Array.isArray(prop)) {
    return prop.map(p => `${p}px`).join(' ');
  }
};

export { getLinearGradient, getPadding };
