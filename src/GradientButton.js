import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, fontSize, borderRadius } from 'styled-system';

import { getLinearGradient, getPadding } from './utils';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: ${props => props.borderWith}px;
  border: 0;
  outline: 0;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => getLinearGradient(props.theme, props.gradient)}
  );
  cursor: pointer;

  ${borderRadius};
  ${color};
  ${fontSize};

  text-decoration: none;
`;

GradientBackground.propTypes = {
  borderWith: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  gradient: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string.isRequired,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
};

GradientBackground.defaultProps = {
  color: '#ae3560',
  fontSize: 16,
};

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: ${props => getPadding(props.padding)};
  outline: 0;
  transition: ${({ transition }) =>
    `${transition.property} ${transition.duration}s ${
      transition.timingFunction
    } ${transition.delay}s`};

  &:hover {
    background: transparent;
    color: #fff;
  }

  ${borderRadius};
  ${color};
`;

Inner.propTypes = {
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  transition: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  ...borderRadius.propTypes,
};

const GradientButton = ({
  background: _bg,
  borderRadius: _borderRadius,
  borderWith,
  content,
  direction,
  gradient,
  padding,
  theme,
  transition,
  ...props
}) => (
  <GradientBackground
    borderRadius={_borderRadius}
    borderWith={borderWith}
    direction={direction}
    gradient={gradient}
    theme={theme}
    {...props}
  >
    <Inner
      bg={_bg}
      borderRadius={_borderRadius - (borderWith + 1)}
      padding={padding}
      transition={transition}
    >
      {content}
    </Inner>
  </GradientBackground>
);

GradientButton.propTypes = {
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWith: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  direction: PropTypes.string,
  gradient: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  theme: PropTypes.string,
  transition: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  ...color.propTypes,
  ...fontSize.propTypes,
};

GradientButton.defaultProps = {
  background: '#fff',
  borderRadius: 20,
  borderWith: 2,
  direction: 'right',
  gradient: null,
  padding: 10,
  theme: 'Vanusa',
  transition: {
    property: 'all',
    duration: 0.2,
    timingFunction: 'ease-in-out',
    delay: 0,
  },
};

export default GradientButton;
