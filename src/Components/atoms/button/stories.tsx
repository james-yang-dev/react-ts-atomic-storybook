import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Button, { ButtonTheme, ButtonTypeList, ButtonSize } from './';

const stories = storiesOf('Components|Atoms/Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const themeList = select('ThemeList', ButtonTheme, ButtonTheme.ROUNDED);
  const sizeList = select('SizeList', ButtonSize, ButtonSize.SMALL);
  const typeList = select('TypeList', ButtonTypeList, ButtonTypeList.BUTTON);
  const disabled = boolean('disabled', false);
  return (
    <Button
      size={sizeList}
      useTheme={themeList}
      onClick={action('clicked')}
      type={typeList}
      disabled={disabled}
    >
      {text('buttonText', 'Test Button')}
    </Button>
  );
});
