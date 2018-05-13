import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import GradientButton from '../GradientButton';

describe('GradientButton', () => {
  it('should render correctly with default style', () => {
    const tree = TestRenderer.create(
      <GradientButton>test button</GradientButton>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.type).toBe('button');
    expect(tree).toHaveStyleRule('padding', '2px');
    expect(tree).toHaveStyleRule('border-radius', '20px');
    expect(tree).toHaveStyleRule('color', '#ae3560');
    expect(tree).toHaveStyleRule('font-size', '16px');
    expect(tree).toHaveStyleRule(
      'background-image',
      'linear-gradient( to right,#DA4453 0%,#89216B 100% )'
    );
  });

  it('should render correctly with disabled props', () => {
    const tree = TestRenderer.create(
      <GradientButton disabled>test button</GradientButton>
    ).toJSON();

    expect(tree).toHaveStyleRule('cursor', 'not-allowed');
    expect(tree).toHaveStyleRule('opacity', '0.65');
  });

  it('should render correctly with fancy props', () => {
    const tree = TestRenderer.create(
      <GradientButton
        gradient={['#f00b47', '#0f6bb6']}
        angle="30deg"
        padding={[10, 20]}
        borderRadius={10}
        borderWidth={3}
        color="#123456"
        fontSize={12}
      >
        test button
      </GradientButton>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule(
      'background-image',
      'linear-gradient( 30deg,#f00b47 0%,#0f6bb6 100% )'
    );
  });
});
