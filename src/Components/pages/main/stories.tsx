import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Main from './';

export default {
  title: 'Pages|Main',
  component: Main,
  decorators: [withKnobs],
};

export const standard = () => {
  return <Main></Main>;
};
