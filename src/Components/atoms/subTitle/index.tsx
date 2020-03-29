
import React from 'react'
import {StyledSubTitle} from './styled'

type objectOptions = {
  [key: string]: string;
};

export const SubTitleTheme: objectOptions = {
  DEFAULT: 'DEFAULT'
}

type SubTitleProps = {
  useTheme: string;
  children: React.ReactNode;
}

function SubTitle ({ useTheme, children, ...rest } : SubTitleProps) {
  return (
    <StyledSubTitle useTheme={useTheme} {...rest}>{children}</StyledSubTitle>
  );
}

SubTitle.defaultProps = {
  children: '',
  useTheme: SubTitleTheme.DEFAULT
}

export default SubTitle

