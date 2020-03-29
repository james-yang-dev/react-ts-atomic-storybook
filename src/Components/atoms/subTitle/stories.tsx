import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs, select } from '@storybook/addon-knobs';

import SubTitle, { SubTitleTheme } from './';

const stories = storiesOf('Components|Atoms/SubTitle', module);

stories.addDecorator(withKnobs);

const defaultSubTitle = () => {
  const themeList = select('ThemeList', SubTitleTheme, SubTitleTheme.DEFAULT);
  const subTitleText = text('subTitleText', 'subTitleText');
  return <SubTitle useTheme={themeList}>{subTitleText}</SubTitle>;
};

stories.add('default', defaultSubTitle);
