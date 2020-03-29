
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Div, { DivTheme } from './';


const stories = storiesOf('Components|Atoms/Div', module);

stories.addDecorator(withKnobs);

const defaultDiv = () => {
  const themeList = select('ThemeList', DivTheme, DivTheme.DEFAULT);
  return (
    <Div
      useTheme={themeList}
    >
    </Div>
  )
}

stories.add('default', defaultDiv);
