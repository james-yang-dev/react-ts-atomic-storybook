import React from 'react';
import { text, withKnobs, select } from '@storybook/addon-knobs';

import SubTitle, { SubTitleTheme } from './';

export default {
  title: 'Components|Atoms/SubTitle',
  component: SubTitle,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', SubTitleTheme, SubTitleTheme.DEFAULT);
  const subTitleText = text('subTitleText', 'subTitleText');

  return <SubTitle useTheme={themeList}>{subTitleText}</SubTitle>;
};
