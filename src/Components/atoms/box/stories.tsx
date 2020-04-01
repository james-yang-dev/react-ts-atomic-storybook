import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Box, { BoxTheme } from './';

export default {
  title: 'Components|Atoms/Box',
  component: Box,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', BoxTheme, BoxTheme.DEFAULT);

  return <Box useTheme={themeList}></Box>;
};
