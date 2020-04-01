<img width="1305" alt="AtomicDesign" src="https://user-images.githubusercontent.com/52027534/77842962-59643900-71d3-11ea-932d-87a9fe775671.png">

# react-atomic-design with typescript, stories

아토믹 디자인을 리액트와 타입스크립트를 이용해 구현하고 스토리북을 통해 시각화 한 보일러 플레이트 입니다.

- [아토믹 디자인은](https://github.com/james-yang-dev/react-ts-atomic-storybook#아토믹-디자인은)
  - [원자-Atoms](https://github.com/james-yang-dev/react-ts-atomic-storybook#원자-Atoms)
  - [분자-Molecules](https://github.com/james-yang-dev/react-ts-atomic-storybook#분자-Molecules)
  - [유기체-Organisms](https://github.com/james-yang-dev/react-ts-atomic-storybook#유기체-Organisms)
  - [템플릿-Templates](https://github.com/james-yang-dev/react-ts-atomic-storybook#템플릿-Templates)
  - [페이지-Pages](https://github.com/james-yang-dev/react-ts-atomic-storybook#페이지-Pages)
- [리액트 + 아토믹은](https://github.com/james-yang-dev/react-ts-atomic-storybook#리액트--아토믹은)
- [스토리북-storybook](https://github.com/james-yang-dev/react-ts-atomic-storybook#스토리북-storybook)
- [Scripts](https://github.com/james-yang-dev/react-ts-atomic-storybook#Scripts)
- [Libraries](https://github.com/james-yang-dev/react-ts-atomic-storybook#Libraries)
- [Contributors](https://github.com/james-yang-dev/react-ts-atomic-storybook#Contributors)
  - [License](https://github.com/james-yang-dev/react-ts-atomic-storybook#License)

## 아토믹-디자인은

컴포넌트들을 단위별로 나눠서 관리하는 개념 입니다.

### 원자-Atoms

<img width="138" alt="Atoms" src="https://user-images.githubusercontent.com/52027534/77846049-36934e00-71ee-11ea-95f7-b8abaa63bd8a.png">


원자는 가장 작은 단위의 컴포넌트 입니다. 버튼, 인풋, 타이틀, 컬러, 폰트 등을 의미합니다.  
자체적으로 가지는 상태, 이벤트, 스타일 등이 기술되어 있습니다. 혼자 동작할 수는 없습니다.
컨텍스트, 상태관리 등 외부 특정 페이지 요소들에게 간섭 받지 않아야 합니다.

### 분자-Molecules

<img width="495" alt="Molecules" src="https://user-images.githubusercontent.com/52027534/77846047-35fab780-71ee-11ea-9e4b-85059289a7c1.png">

분자는 원자를 합쳐 구성하는 컴포넌트 입니다. 원자의 스타일 요소를 정하고, 각 원자간의 연결, 스타일 요소도 결정합니다.  
유기체로부터 데이터를 전달받아 원자에게 분배하고, 최소한의 한 가지 기능을 수행할 수 있도록 구현되어 있습니다.
분자도 원자처럼 컨텍스트, 상태관리 등 외부 특정 페이지 요소들에게 간섭 받지 않아야 합니다.

### 유기체-Organisms

<img width="1040" alt="Organisms" src="https://user-images.githubusercontent.com/52027534/77846045-35622100-71ee-11ea-9793-56fe7f8c813e.png">

유기체는 분자와 원자를 사용해 특정 화면 영역을 구현 하는 컴포넌트 입니다.  
유기체는 특정 컨텍스트와 상태관리등의 영향을 받으며, 페이지의 일부분을 담당하는 영역입니다.

### 템플릿-Templates

<img width="1040" alt="Template" src="https://user-images.githubusercontent.com/52027534/77846044-34c98a80-71ee-11ea-9589-cd947e3b2bee.png">

컨텍스트나 상태관리등에 영향 받지 않으며, 유기체와는 다르게 자체적으로 동작 하는 컴포넌트들을 가지지 않습니다.  
페이지로부터 적절한 유기체들을 공급받아, 배치하는 역할을 수행합니다.
와이어 프레임 형태로 제작이 됩니다.

### 페이지-Pages

<img width="1038" alt="Pages" src="https://user-images.githubusercontent.com/52027534/77846042-2f6c4000-71ee-11ea-888b-c4c3ec645598.png">

페이지는 구현의 마지막 단계 입니다. 사용자가 직접 접하는 화면을 의미합니다.
컨텍스트와 상태관리 등 페이지 구현에 필요한 모든 자원을 관리하는 단위가 됩니다.

## 리액트 + 아토믹은

아토믹 디자인은 생소한 개념이며, 제대로 사용하기 위해서는 몇 가지 룰이 필요합니다.

- 아토믹 디자인은 각 요소별로 관심사의 철저한 분리가 필요합니다.
- 원자는 margin이나 positions등의 배치적 요소를 가지지 않습니다.
- 분자와 유기체만이 원자의 위치에 대해 정의할 수 있습니다. 하지만 자신들의 margin이나 위치에 대한 스타일을 가지지 않습니다.
- 템플릿은 하나의 기능만을 수행합니다. 유기체들이 어떻게 배치될지에 대해서만 관여하지만 컴포넌트들에는 아무 영향을 미치지 않습니다.
- 페이지는 템플릿을 통해서 화면을 그립니다. 컨텍스트나 상태관리 등 페이지에 필요한 자원들을 활용하여 아토믹 컴포넌트들을 연결하여, 정상적인 어플리케이션으로 동작할 수 있도록 합니다.

## 스토리북-storybook

스토리북은 생성된 컴포넌트들을 보기 쉽게 표현해주고, 사용방식에 대한 예제 및 상세한 파라미터들에 대해 다룰 수 있는 툴 입니다.
사용 방식이 조금 어려울 수 있으나, 컴포넌트 재활용 및 유지보수성을 증가시켜주기 때문에 사용해야 하는 툴 입니다.
특징이 몇 가지 있는데 아래와 같습니다.

- 스토리북은 컴포넌트를 시각화 해줍니다.
- 단순 시각화 외에 해당 컴포넌트가 동작하는 방식, 필요한 파라미터등의 예제도 보여줍니다.
- 자바스크립트로 구현하게 되어있어 가독성이 좋고, 필요한 부분에 주석 형태로 내용을 보충하면 컴포넌트에 필요한 문서를 자동으로 생성해줍니다.
- 재활용 및 범용성 증가를 위해 컴포넌트의 사용 케이스를 나열해야 합니다.
  - 다양한 변수를 고려해야 하며,
  - 이 점 때문에 컴포넌트의 테스트를 부분적으로 대체할 수 있고,
  - 견고한 컴포넌트의 구성이 가능해집니다.

### 네비게이션

스토리북에 선언된 컴포넌트들의 트리 형태 네비게이션을 제공합니다.
타이틀에 선언된 이름 방식대로 자동으로 처리 됩니다.

<img width="274" alt="네비게이션" src="https://user-images.githubusercontent.com/52027534/78101187-adfcf380-7421-11ea-87a5-87142eadcc5d.png">

### 시각적 표현-Canvas

선택된 컴포넌트가 어떻게 보이는지 시각적으로 표시해줍니다.

<img width="444" alt="Canvas" src="https://user-images.githubusercontent.com/52027534/78101185-ad645d00-7421-11ea-9bd7-5ece7d7765cc.png">

### 변수들-knobs

선택된 컴포넌트에 적용될 변수들을 보여줍니다. 해당 변수들을 선택하거나 수정하면 캔버스에 바로 반영이 됩니다.

<img width="592" alt="Knobs" src="https://user-images.githubusercontent.com/52027534/78101183-accbc680-7421-11ea-9a17-a8c6fa27fc86.png">

### 동작-actions

컴포넌트에 기능이 동작되면 액션에 동작된 내역이 표시 됩니다.

<img width="391" alt="Actions" src="https://user-images.githubusercontent.com/52027534/78101181-accbc680-7421-11ea-81b1-1eb542dfc099.png">

### 컴포넌트에 대한 내용-Docs

해당 컴포넌트에 대한 내용 전체를 표시 해줍니다.  
컴포넌트의 내용들은 주석으로 표시해둔 내용들이며, 기본 파라미터나 컴포넌트의 내용들이 포함됩니다.

<img width="697" alt="Docs" src="https://user-images.githubusercontent.com/52027534/78101173-a9383f80-7421-11ea-9001-f6dad7100901.png">

## Scripts

| Script                       | Desc                                                             |
| ---------------------------- | ---------------------------------------------------------------- |
| `$ yarn dev`                 | 개발 서버를 올립니다. 포트는 5000 입니다.                                       |
| `$ yarn storybook`           | 스토리북을 올립니다. 포트는 9999 입니다.                                        |
| `$ yarn cac unit='' name=''` | 스토리북 기본 컴포넌트를 생성합니다. Unit에는 A, M, O, T, P, name은 컴포넌트의 이름을 적습니다. |

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
[@LeadJockey](https://github.com/LeadJockey)

### License

MIT
