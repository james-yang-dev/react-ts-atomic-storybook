import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = (imageUrl: string) => {
  return css`
    background-image: url('${imageUrl}');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2em 15% 2em 50vw;
  `;
};

const FeatureTheme: themeOptions = {
  DEFAULT: css``,
};

type FeatureProps = {
  useTheme: string;
  imageUrl: string;
};

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme, imageUrl }: FeatureProps) => {
  return css`
    ${baseStyle(imageUrl)}
    ${FeatureTheme[useTheme]}
  `;
};

export const StyledFeature = styled.div<FeatureProps>`
  ${getAllStyle}
`;
