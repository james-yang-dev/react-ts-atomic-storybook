// create - template
const createBaseComp = componentName => {
  const StyledComponent = `Styled${componentName}`; // ex StyledDiv

  return `
import React from 'react'
import {${StyledComponent}} from './styled'

type objectOptions = {
  [key: string]: string;
};

export const ${componentName}Theme: objectOptions = {
  DEFAULT: 'DEFAULT'
}

type ${componentName}Props = {
  useTheme: string;
  children: React.ReactNode;
}

function ${componentName} ({ useTheme, children, ...rest } : ${componentName}Props) {
  return (
    <${StyledComponent} useTheme={useTheme} {...rest}>{children}</${StyledComponent}>
  );
}

${componentName}.defaultProps = {
  children: '',
  useTheme: ${componentName}Theme.DEFAULT
}

export default ${componentName}

`;
};
const createStyledComp = componentName => {
  const StyledComponent = `Styled${componentName}`; // ex StyledButton
  const componentProps = `${componentName}Props`; // ex ButtonProps
  const componentTheme = `${componentName}Theme`; // ex ButtonProps

  return `
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css\`
  \`;
}

const ${componentTheme}: themeOptions = {
  DEFAULT: css\`
  \`
}

type ${componentProps} = {
  useTheme: string;
}

// 조합형 테마를 모두 불러오는 함수
const getAllStyle = ({ useTheme }: ${componentProps}) => {
  return css\`
    \${baseStyle()}
    \${${componentTheme}[useTheme]}
  \`
}

export const ${StyledComponent} = styled.???<${componentProps}>\`
  \${getAllStyle}
\`

`;
};
const createMD = (atomicName, componentName) => {
  return `
  # ${componentName}

  #### *${componentName} 컴포넌트는 ?*
  
  * 스타일드 컴포넌트를 반환하는 일종의 랩퍼 컴포넌트로 설계되었습니다.
  * 반드시 기본 프로퍼티가 설정되어야 합니다.
  
  ***
  
  ## Directory Structure
  
  #### *Components - ${atomicName} - ${componentName}*
  
\`\`\`
.
├── index.tsx          - for exporting ${componentName} Component
├── stories.tsx  - for storybook
└── styled.tsx   - for theming & styling
├── ${componentName}.md          - for notice
\`\`\`

  ***
  
  ## Default Properties
  
  #### *컴포넌트의 프로퍼티는 ${componentName}.defaultProps 에 정의 되어야 합니다.*
  
  | key | value |
  | --- | --- |
  \${defaultProps}
  
  ***
  
  
  ## Theme
  
  #### *Atomic*
  
  \${themeTypes}
  
`;
};
const createStories = (atomicName, componentName) => {
  const componentTheme = `${componentName}Theme`; // ex ${ButtonTheme}

  return `
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs, select, boolean } from '@storybook/addon-knobs';

import ${componentName}, { ${componentTheme} } from './';


const stories = storiesOf('Components|${atomicName}/${componentName}', module);

stories.addDecorator(withKnobs);

const default${componentName} = () => {
  const themeList = select('ThemeList', ${componentTheme}, ${componentTheme}.DEFAULT);
  return (
    <${componentName}
      useTheme={themeList}
    >
    </${componentName}>
  )
}

stories.add('default', default${componentName});
`;
};
const createTest = componentName => '';
const createSCSS = () => {
  return `
*{margin:0, padding:0}
`;
};

module.exports = {
  createBaseComp,
  createStyledComp,
  createMD,
  createStories,
  createTest,
  createSCSS,
};
