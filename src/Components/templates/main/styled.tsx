import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 2em 0;
  `;
};

const MainTheme: themeOptions = {
  DEFAULT: css``,
};

type MainProps = {
  useTheme: string;
};

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: MainProps) => {
  return css`
    ${baseStyle()}
    ${MainTheme[useTheme]}
  `;
};

export const StyledHeader = styled.div`
  outline: 1px solid #eee;
  background-color: rgba(220, 220, 220, 0.6);
  min-height: 200px;
`;

export const StyledArticle = styled.div`
  outline: 1px solid #eee;
  background-color: rgba(220, 220, 220, 0.6);
  min-height: 200px;
`;

export const StyledMain = styled.div<MainProps>`
  ${getAllStyle}
`;
