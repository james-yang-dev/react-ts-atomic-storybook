import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

const baseStyle = () => {
  return css`
    -webkit-appearance: none;
    border: 0px;
    outline: 0px;
    display: block;
    cursor: pointer;
    position: relative;
    font-weight: 600;
  `;
};

type themeOptions = {
  [key: string]: SerializedStyles;
};

const buttonTheme: themeOptions = {
  DEFAULT: css`
    background: yellow;
    border: 1px solid black;
  `,
  ROUNDED: css`
    background: skyblue;
    border-radius: 10px;
  `,
};

const buttonSize: themeOptions = {
  SMALL: css`
    font-size: 10px;
  `,
  MEDIUM: css`
    font-size: 12px;
  `,
  LARGE: css`
    font-size: 14px;
  `,
};

type ButtonProps = {
  useTheme: string;
  size: string;
};

// all style을 호출하며 필요한 내용들을 전부 로딩 한다.
const getAllStyle = ({ useTheme, size }: ButtonProps) => {
  return css`
    ${baseStyle()}
    ${buttonTheme[useTheme]}
    ${buttonSize[size]}
    `;
};

// 외부로 노출되는 스타일 객체
export const StyledButton = styled.button<ButtonProps>`
  ${getAllStyle}
`;
