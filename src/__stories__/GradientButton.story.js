import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs, text, array } from '@storybook/addon-knobs/react';

import GradientButton from '../';

storiesOf('GradientButton', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addDecorator(
    backgrounds([
      { name: 'white', value: '#fff' },
      { name: 'gray', value: '#e0e0e0', default: true },
    ])
  )
  .add('Default', () => (
    <GradientButton
      onClick={action('clicked')}
      content={text('content', 'BUTTON')}
    />
  ))
  .add('with Customize Padding', () => (
    <GradientButton
      padding={array('padding', [15, 30])}
      onClick={action('clicked')}
      content="BUTTON"
    />
  ));
