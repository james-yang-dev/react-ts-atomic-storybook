import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import MainTemplate, { MainTemplateTheme } from './';

export default {
  title: 'Components|Templates/Main',
  component: MainTemplate,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', MainTemplateTheme, MainTemplateTheme.DEFAULT);
  const header = <div></div>;
  const article = <div></div>;

  return <MainTemplate useTheme={themeList} header={header} article={article}></MainTemplate>;
};
