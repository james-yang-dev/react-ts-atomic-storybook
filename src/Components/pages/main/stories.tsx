import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Main from './';

export default {
  title: 'Components|Atoms/Box',
  component: Main,
  decorators: [withKnobs],
};

export const standard = () => {
  return <Main></Main>;
};
