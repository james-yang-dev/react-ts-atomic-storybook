import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    font-size: 1.5em;
    color: #000;
    list-style: 1;

    &:after {
      content: '';
      display: inline-block;
      width: 1em;
      border-bottom: 2px solid #2995c0;
      margin-top: 0.2em;
      margin-left: 0.5em;
    }
  `;
};

const SubTitleTheme: themeOptions = {
  DEFAULT: css``,
};

type SubTitleProps = {
  useTheme: string;
};

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: SubTitleProps) => {
  return css`
    ${baseStyle()}
    ${SubTitleTheme[useTheme]}
  `;
};

export const StyledSubTitle = styled.h2<SubTitleProps>`
  ${getAllStyle}
`;
