import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import Button, { ButtonTheme, ButtonTypeList, ButtonSize } from './';

export default {
  title: 'Components|Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', ButtonTheme, ButtonTheme.DEFAULT);
  const sizeList = select('SizeList', ButtonSize, ButtonSize.LARGE);
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
      {text('buttonText', 'Atomic button')}
    </Button>
  );
};
