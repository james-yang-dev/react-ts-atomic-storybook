import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Feature from '@src/Components/organisms/feature';
import MainTemplate, { MainTemplateTheme } from './';

const stories = storiesOf('Components|Templates/Main', module);

stories.addDecorator(withKnobs);

const defaultMainTemplate = () => {
  const themeList = select('ThemeList', MainTemplateTheme, MainTemplateTheme.DEFAULT);
  const header = <div></div>;
  const article = <div></div>;
  return <MainTemplate useTheme={themeList} header={header} article={article}></MainTemplate>;
};

stories.add('default', defaultMainTemplate);
