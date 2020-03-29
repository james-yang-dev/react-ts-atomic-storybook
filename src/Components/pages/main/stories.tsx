import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Main from './';

const stories = storiesOf('Pages/Main', module);

stories.addDecorator(withKnobs);

const defaultMain = () => {
  return <Main></Main>;
};

stories.add('default', defaultMain);
