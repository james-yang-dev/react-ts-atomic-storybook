
import React from 'react'
import {StyledTitle} from './styled'

type objectOptions = {
  [key: string]: string;
};

export const TitleTheme: objectOptions = {
  DEFAULT: 'DEFAULT'
}

type TitleProps = {
  useTheme: string;
  children: React.ReactNode;
}

function Title ({ useTheme, children, ...rest } : TitleProps) {
  return (
    <StyledTitle useTheme={useTheme} {...rest}>{children}</StyledTitle>
  );
}

Title.defaultProps = {
  children: '',
  useTheme: TitleTheme.DEFAULT
}

export default Title

