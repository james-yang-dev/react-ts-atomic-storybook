import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    background: #fff;
    border-radius: 5px;
    padding: 2em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    p {
      margin-bottom: 2em;
    }
  `;
};

const DivTheme: themeOptions = {
  DEFAULT: css``,
};

type DivProps = {
  useTheme: string;
};

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: DivProps) => {
  return css`
    ${baseStyle()}
    ${DivTheme[useTheme]}
  `;
};

export const StyledDiv = styled.div<DivProps>`
  ${getAllStyle}
`;
