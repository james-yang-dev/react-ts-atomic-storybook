
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Box, { BoxTheme } from './';


const stories = storiesOf('Components|Atoms/Box', module);

stories.addDecorator(withKnobs);

const defaultBox = () => {
  const themeList = select('ThemeList', BoxTheme, BoxTheme.DEFAULT);
  return (
    <Box
      useTheme={themeList}
    >
    </Box>
  )
}

stories.add('default', defaultBox);
