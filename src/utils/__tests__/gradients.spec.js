import { getGradientColors } from '../gradients';

describe('gradients', () => {
  it("getGradientColors should return default colors if theme isn't matched", () => {
    const theme = 'Avengers';
    const colors = getGradientColors(theme);

    expect(colors).toEqual(['#fff', '#fff']);
  });

  it('getGradientColors should return correct colors if theme is matched', () => {
    const theme = 'Vanusa';
    const colors = getGradientColors(theme);

    expect(colors).toEqual(['#DA4453', '#89216B']);
  });

  it("getGradientColors should ignore theme's uppercase/lowercase", () => {
    const theme = 'vAnUsA';
    const colors = getGradientColors(theme);

    expect(colors).toEqual(['#DA4453', '#89216B']);
  });
});
