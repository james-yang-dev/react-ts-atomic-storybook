import React from 'react';
import { text, withKnobs, select } from '@storybook/addon-knobs';

import Card, { CardTheme } from './';

export default {
  title: 'Components|Molecules/Card',
  component: Card,
  decorators: [withKnobs],
};

export const standard = () => {
  const themeList = select('ThemeList', CardTheme, CardTheme.DEFAULT);
  const title = text('title', '카드 타이틀');
  const subTitle = text('subTitle', '카드를 구현합니다.');
  const buttonText = text('buttonText', '상세 보기');
  const articleText = text('articleText', '카드의 자세항 내용을 기술합니다.');

  return (
    <Card
      useTheme={themeList}
      title={title}
      subTitle={subTitle}
      articleText={articleText}
      buttonText={buttonText}
    ></Card>
  );
};
