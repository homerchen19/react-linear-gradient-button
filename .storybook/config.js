import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}

  * {
    font-family: 'Oswald', Arial, sans-serif;
  }

  button {
    padding: 0;
  }
`;

const req = require.context('../src', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
