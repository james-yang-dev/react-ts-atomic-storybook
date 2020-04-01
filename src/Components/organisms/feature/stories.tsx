import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Feature, { FeatureTheme } from './';

export default {
  title: 'Components|Organisms/Feature',
  component: Feature,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', FeatureTheme, FeatureTheme.DEFAULT);
  const imageUrl = `https://user-images.githubusercontent.com/52027534/77844150-e6f95600-71de-11ea-9509-832542ff1aca.jpg`;

  return <Feature useTheme={themeList} imageUrl={imageUrl}></Feature>;
};
