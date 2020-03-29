# react-atomic-design with typescript, stories

아토믹 디자인을 리액트와 타입스크립트를 이용해 구현하고 스토리북을 통해 시각화 한 보일러 플레이트 입니다.

- [아토믹 디자인은](https://github.com/james-yang-dev/react-ts-atomic-storybook/아토믹-디자인은)
  - [원자-Atoms](https://github.com/james-yang-dev/react-ts-atomic-storybook#원자-Atoms)
  - [분자-Molecules](https://github.com/james-yang-dev/react-ts-atomic-storybook#분자-Molecules)
  - [유기체-Organisms](https://github.com/james-yang-dev/react-ts-atomic-storybook#유기체-Organisms)
  - [템플릿-Templates](https://github.com/james-yang-dev/react-ts-atomic-storybook#템플릿-Templates)
  - [페이지-Pages](https://github.com/james-yang-dev/react-ts-atomic-storybook#페이지-Pages)
- [리액트 + 아토믹은](https://github.com/james-yang-dev/react-ts-atomic-storybook#리액트--아토믹은)
- [Scripts](https://github.com/james-yang-dev/react-ts-atomic-storybook#Scripts)
- [Libraries](https://github.com/james-yang-dev/react-ts-atomic-storybook#Libraries)
- [Contributors](https://github.com/james-yang-dev/react-ts-atomic-storybook#Contributors)
  - [License](https://github.com/james-yang-dev/react-ts-atomic-storybook#License)

## 아토믹-디자인은

컴포넌트들을 단위별로 나눠서 관리하는 개념 입니다.

### 원자-Atoms

원자는 가장 작은 단위의 컴포넌트 입니다. 버튼, 인풋, 타이틀, 컬러, 폰트 등을 의미합니다.  
자체적으로 가지는 상태, 이벤트, 스타일 등이 기술되어 있습니다. 혼자 동작할 수는 없습니다.
컨텍스트, 상태관리 등 외부 특정 페이지 요소들에게 간섭 받지 않아야 합니다.

### 분자-Molecules

분자는 원자를 합쳐 구성하는 컴포넌트 입니다. 원자의 스타일 요소를 정하고, 각 원자간의 연결, 스타일 요소도 결정합니다.  
유기체로부터 데이터를 전달받아 원자에게 분배하고, 최소한의 한 가지 기능을 수행할 수 있도록 구현되어 있습니다.
분자도 원자처럼 컨텍스트, 상태관리 등 외부 특정 페이지 요소들에게 간섭 받지 않아야 합니다.

### 유기체-Organisms

유기체는 분자와 원자를 사용해 특정 화면 영역을 구현 하는 컴포넌트 입니다.  
유기체는 특정 컨텍스트와 상태관리등의 영향을 받으며, 페이지의 일부분을 담당하는 영역입니다.

### 템플릿-Templates

컨텍스트나 상태관리등에 영향 받지 않으며, 유기체와는 다르게 자체적으로 동작 하는 컴포넌트들을 가지지 않습니다.  
페이지로부터 적절한 유기체들을 공급받아, 배치하는 역할을 수행합니다.
와이어 프레임 형태로 제작이 됩니다.

### 페이지-Pages

페이지는 구현의 마지막 단계 입니다. 사용자가 직접 접하는 화면을 의미합니다.
컨텍스트와 상태관리 등 페이지 구현에 필요한 모든 자원을 관리하는 단위가 됩니다.

## 리액트 + 아토믹은

아토믹 디자인은 생소한 개념이며, 제대로 사용하기 위해서는 몇 가지 룰이 필요합니다.

- 아토믹 디자인은 각 요소별로 관심사의 철저한 분리가 필요합니다.
- 원자는 margin이나 positions등의 배치적 요소를 가지지 않습니다.
- 분자와 유기체만이 원자의 위치에 대해 정의할 수 있습니다. 하지만 자신들의 margin이나 위치에 대한 스타일을 가지지 않습니다.
- 템플릿은 하나의 기능만을 수행합니다. 유기체들이 어떻게 배치될지에 대해서만 관여하지만 컴포넌트들에는 아무 영향을 미치지 않습니다.
- 페이지는 템플릿을 통해서 화면을 그립니다. 컨텍스트나 상태관리 등 페이지에 필요한 자원들을 활용하여 아토믹 컴포넌트들을 연결하여, 정상적인 어플리케이션으로 동작할 수 있도록 합니다.

## Scripts

| Script | Desc |
| ---- | ---- |
|`$ yarn dev`| 개발 서버를 올립니다. 포트는 5000 입니다. |
|`$ yarn storybook`| 스토리북을 올립니다. 포트는 9999 입니다. |
|`$ yarn cac unit='' name=''`| 스토리북 기본 컴포넌트를 생성합니다. Unit에는 A, M, O, T, P, name은 컴포넌트의 이름을 적습니다. |

## Libraries

- Webpack
  - CSS Loader
  - File loader
- Storybook
- Babel
  - Loader
  - Preset ES2015
- Project
  - Atomic Design styles folder structure
  - ESLint
  - Prettier
  - Typesciprt
  - Emotion

## Contributors

[@james-yang-dev](https://github.com/james-yang-dev/)

### License

MIT
