import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs, select } from '@storybook/addon-knobs';

import Title, { TitleTheme } from './';

const stories = storiesOf('Components|Atoms/Title', module);

stories.addDecorator(withKnobs);

const defaultTitle = () => {
  const themeList = select('ThemeList', TitleTheme, TitleTheme.DEFAULT);
  const titleText = text('titleText', 'Title Text');
  return <Title useTheme={themeList}>{titleText}</Title>;
};

stories.add('default', defaultTitle);
