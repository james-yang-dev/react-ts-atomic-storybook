import React from 'react';
import { StyledBox } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const BoxTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type BoxProps = {
  useTheme: string;
  children: React.ReactNode;
};

function Box({ useTheme, children, ...rest }: BoxProps) {
  return (
    <StyledBox useTheme={useTheme} {...rest}>
      {children}
    </StyledBox>
  );
}

Box.defaultProps = {
  children: '',
  useTheme: BoxTheme.DEFAULT,
};

export default Box;
