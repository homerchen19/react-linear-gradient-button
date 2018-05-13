import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, fontSize, borderRadius } from 'styled-system';
import { prop, ifProp } from 'styled-tools';

import { getLinearGradient, getPadding } from './utils';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: ${props => props.borderWith}px;
  border: 0;
  outline: 0;
  background-image: linear-gradient(
    ${ifProp(
      ({ angle }) => angle.includes('deg'),
      prop('angle'),
      props => `to ${prop('angle')(props)}`
    )},
    ${props => getLinearGradient(props.theme, props.gradient)}
  );
  cursor: pointer;

  ${ifProp(
    'disabled',
    css`
      cursor: not-allowed;
      opacity: 0.65;
    `
  )};

  ${borderRadius};
  ${color};
  ${fontSize};

  text-decoration: none;
`;

GradientBackground.propTypes = {
  angle: PropTypes.string.isRequired,
  borderWith: PropTypes.number.isRequired,
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

  ${ifProp(
    { disabled: false },
    css`
      transition: ${prop('transition.property')} ${prop('transition.duration')}s
        ${prop('transition.timingFunction')} ${prop('transition.delay')}s;

      &:hover {
        background: transparent;
        color: #fff;
      }
    `
  )};

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
  angle,
  background: _bg,
  borderRadius: _borderRadius,
  borderWith,
  content,
  disabled,
  gradient,
  padding,
  theme,
  transition,
  ...props
}) => (
  <GradientBackground
    borderRadius={_borderRadius}
    borderWith={borderWith}
    angle={angle}
    disabled={disabled}
    gradient={gradient}
    theme={theme}
    {...props}
  >
    <Inner
      bg={_bg}
      borderRadius={_borderRadius - (borderWith + 1)}
      disabled={disabled}
      padding={padding}
      transition={transition}
    >
      {content}
    </Inner>
  </GradientBackground>
);

GradientButton.propTypes = {
  angle: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWith: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  disabled: PropTypes.bool,
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
  angle: 'right',
  background: '#fff',
  borderRadius: 20,
  borderWith: 2,
  disabled: false,
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
