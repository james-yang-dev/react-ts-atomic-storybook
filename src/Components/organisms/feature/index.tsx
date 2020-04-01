import React from 'react';
import Card from '@src/Components/molecules/card';
import { StyledFeature } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const FeatureTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
};

type FeatureProps = {
  useTheme: string;
  children: React.ReactNode;
  imageUrl: string;
};

function Feature({ useTheme, children, imageUrl }: FeatureProps) {
  return (
    <StyledFeature useTheme={useTheme} imageUrl={imageUrl}>
      <Card title="Organisms" subTitle="카드의 표시 방식" buttonText="learn more">
        <p>유기체의 본문</p>
      </Card>
      {children}
    </StyledFeature>
  );
}

Feature.defaultProps = {
  children: '',
  useTheme: FeatureTheme.DEFAULT,
  imageUrl: '',
};

export default Feature;
