import React from 'react';
import Title from '@src/Components/atoms/title';
import Button from '@src/Components/atoms/button';
import SubTitle from '@src/Components/atoms/subTitle';
import Box from '@src/Components/atoms/box';

type objectOptions = {
  [key: string]: string;
};

export const CardTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type CardProps = {
  useTheme: string;
  children: React.ReactNode;
  title: string;
  subTitle: string;
  articleText: string;
  buttonText?: string;
};

function Card({ useTheme, children, title, subTitle, articleText, buttonText }: CardProps) {
  return (
    <Box>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <p>{articleText}</p>
      {children}
      {buttonText !== '' && <Button>{buttonText}</Button>}
    </Box>
  );
}

Card.defaultProps = {
  children: '',
  useTheme: CardTheme.DEFAULT,
  title: '',
  subTitle: '',
  articleText: '',
  buttonText: '',
};

export default Card;
