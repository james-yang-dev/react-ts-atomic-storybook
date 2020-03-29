
import React from 'react'
import {StyledDiv} from './styled'

type objectOptions = {
  [key: string]: string;
};

export const DivTheme: objectOptions = {
  DEFAULT: 'DEFAULT'
}

type DivProps = {
  useTheme: string;
  children: React.ReactNode;
}

function Div ({ useTheme, children, ...rest } : DivProps) {
  return (
    <StyledDiv useTheme={useTheme} {...rest}>{children}</StyledDiv>
  );
}

Div.defaultProps = {
  children: '',
  useTheme: DivTheme.DEFAULT
}

export default Div

