import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    font-size: 4em;
    font-weight: lighter;
    letter-spacing: 3px;
    line-height: 1;
    margin-top: 0;
    color: #dadada;

    &:after {
      content: '';
      display: block;
      width: 1em;
      border-bottom: 2px solid #2995c0;
      margin-top: -0.5em;
      margin-left: -1.1em;
    }
  `;
};

const TitleTheme: themeOptions = {
  DEFAULT: css``,
};

type TitleProps = {
  useTheme: string;
};

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: TitleProps) => {
  return css`
    ${baseStyle()}
    ${TitleTheme[useTheme]}
  `;
};

export const StyledTitle = styled.h1<TitleProps>`
  ${getAllStyle}
`;
