import React from 'react';
import { StyledMain, StyledHeader, StyledArticle } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const MainTemplateTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type MainTemplateProps = {
  useTheme: string;
  children: React.ReactNode;
  header: React.ReactNode;
  article: React.ReactNode;
};

function MainTemplate({ useTheme, children, header, article, ...rest }: MainTemplateProps) {
  return (
    <StyledMain useTheme={useTheme} {...rest}>
      <StyledHeader>{header}</StyledHeader>
      <StyledArticle>{article}</StyledArticle>
    </StyledMain>
  );
}

MainTemplate.defaultProps = {
  children: '',
  useTheme: MainTemplateTheme.DEFAULT,
  header: '',
  article: '',
};

export default MainTemplate;
