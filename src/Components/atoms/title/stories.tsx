import React from 'react';
import { text, withKnobs, select } from '@storybook/addon-knobs';

import Title, { TitleTheme } from './';

export default {
  title: 'Components|Atoms/Box',
  component: Title,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', TitleTheme, TitleTheme.DEFAULT);
  const titleText = text('titleText', 'Title Text');

  return <Title useTheme={themeList}>{titleText}</Title>;
};
