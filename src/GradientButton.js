import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, fontSize, borderRadius } from 'styled-system';
import { prop, ifProp } from 'styled-tools';

import { getLinearGradient, getPadding, filterProps } from './utils';

const GradientBackground = styled.button`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: ${prop('borderWidth')}px;
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
  borderWidth: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
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
  disabled: PropTypes.bool.isRequired,
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

const GradientButton = ({ children, ...props }) => (
  <GradientBackground
    {...filterProps({
      props,
      allowedProps: Object.keys(GradientBackground.propTypes),
      options: {
        withDOMProps: true,
        mapProps: {
          background: ({ value }) => ({ key: 'bg', value }),
        },
      },
    })}
  >
    <Inner
      {...filterProps({
        props,
        allowedProps: Object.keys(Inner.propTypes),
        options: {
          mapProps: {
            background: ({ value }) => ({ key: 'bg', value }),
            borderRadius: ({ key }) => ({
              key,
              value: props.borderRadius - (props.borderWidth + 1),
            }),
          },
        },
      })}
    >
      {children}
    </Inner>
  </GradientBackground>
);

GradientButton.propTypes = {
  angle: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
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
  borderWidth: 2,
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
