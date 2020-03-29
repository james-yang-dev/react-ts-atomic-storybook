import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Feature, { FeatureTheme } from './';

const stories = storiesOf('Components|Organisms/Feature', module);

stories.addDecorator(withKnobs);

const defaultFeature = () => {
  const themeList = select('ThemeList', FeatureTheme, FeatureTheme.DEFAULT);
  const imageUrl = `https://user-images.githubusercontent.com/52027534/77844150-e6f95600-71de-11ea-9509-832542ff1aca.jpg`;
  return <Feature useTheme={themeList} imageUrl={imageUrl}></Feature>;
};

stories.add('default', defaultFeature);
