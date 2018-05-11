import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import backgrounds from '@storybook/addon-backgrounds';

import GradientButton from '../';

storiesOf('GradientButton', module)
  .addDecorator(centered)
  .addDecorator(
    backgrounds([
      { name: 'white', value: '#fff', default: true },
      { name: 'gray', value: '#e0e0e0' },
    ])
  )
  .add('default', () => (
    <GradientButton onClick={action('clicked')} content="BUTTON" />
  ));
