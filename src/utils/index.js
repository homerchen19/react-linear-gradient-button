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
    if (prop.length > 4) {
      console.warn(
        'Warning: padding property should have maximum four values.'
      );
    }

    return prop
      .slice(0, 4)
      .map(p => `${p}px`)
      .join(' ');
  }

  console.error(
    'Warning: Type of padding property should be either "String", "Number" or "Array"'
  );
};

export { getLinearGradient, getPadding };
