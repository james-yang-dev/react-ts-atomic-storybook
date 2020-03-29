import React from 'react';
import MainTemplate from '@src/Components/templates/main';
import Feature from '@src/Components/organisms/feature';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  const imageUrl = `https://user-images.githubusercontent.com/52027534/77844150-e6f95600-71de-11ea-9509-832542ff1aca.jpg`;
  const fetureComponent = <Feature imageUrl={imageUrl}></Feature>;
  return <MainTemplate header={fetureComponent}>{children}</MainTemplate>;
}

Main.defaultProps = {
  children: '',
};

export default Main;
