import { getGradientColors } from './gradients';

const getLinearGradient = name => {
  const [firstColor, ...elseColors] = getGradientColors(name);
  const elseColorsLength = elseColors.length;
  let str = '';

  for (let i = 0; i < elseColorsLength; i += 1) {
    str = `${str}, ${elseColors[i]} ${100 / elseColorsLength * (i + 1)}%`;
  }

  return `${firstColor} 0% ${str}`;
};

const getPadding = prop => {
  if (typeof prop === 'string' || typeof prop === 'number') {
    return `${prop}px`;
  } else if (Array.isArray(prop)) {
    return prop.map(p => `${p}px`).join(' ');
  }
};

export { getLinearGradient, getPadding };
