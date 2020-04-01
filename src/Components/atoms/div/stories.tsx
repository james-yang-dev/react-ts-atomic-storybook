import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Div, { DivTheme } from './';

export default {
  title: 'Components|Atoms/Div',
  component: Div,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', DivTheme, DivTheme.DEFAULT);

  return <Div useTheme={themeList}></Div>;
};
