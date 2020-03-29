
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
  `;
}

const CardTheme: themeOptions = {
  DEFAULT: css`
  `
}

type CardProps = {
  useTheme: string;
}

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: CardProps) => {
  return css`
    ${baseStyle()}
    ${CardTheme[useTheme]}
  `
}

export const StyledCard = styled.div<CardProps>`
  ${getAllStyle}
`

