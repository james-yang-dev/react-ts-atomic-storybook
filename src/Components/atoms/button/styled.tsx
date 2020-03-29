import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

const baseStyle = () => {
  return css`
    -webkit-appearance: none;
    border: 0px;
    outline: 0px;
    display: block;
    font-family: sans-serif;
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
    color: #fff;
    background: #2995c0;
    border: 1px solid #2995c0;
  `,
  ROUNDED: css`
    color: #2995c0;
    background: #fff;
    border: 1px solid #2995c0;
    transition: color 0.3s ease, background 0.3s ease;

    &:hover {
      color: #fff;
      background: #2995c0;
    }
  `,
};

const buttonSize: themeOptions = {
  SMALL: css`
    padding: 0.5em 0.6em;
  `,
  MEDIUM: css`
    padding: 1.1em 1.3em;
  `,
  LARGE: css`
    padding: 1.7em 2.4em;
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
