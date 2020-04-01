import React from 'react';
import { StyledButton } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const ButtonTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
  ROUNDED: 'ROUNDED',
};

export const ButtonSize: objectOptions = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

// 열거형은 딱 지정해준 타입만 사용할 수 있도록 정의해준다
// 오브젝트로 선언해두면 타입을 확실히 알 수 없으며, 외부에서 오브젝트를 가져다 쓰는 경우에는 특정값이 넘어오는지 알 길이 없다.
export enum ButtonTypeList {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

type ButtonProps = {
  /** 버튼의 타입을 지정한다. button, reset, submit */
  type: ButtonTypeList;
  /** 버튼의 테마를 나타낸다 */
  useTheme: string;
  /** 버튼의 크기 */
  size: string;
  /** 버튼이 클릭될때 수행 될 이벤트 */
  onClick: () => void;
  /** 버튼에 전달될 children */
  children: React.ReactNode;
  /** 버튼의 비활성화 여부 */
  disabled: boolean;
};

/**
 * 버튼을 구현할때 이 컴포넌트를 사용합니다.
 *
 * useTheme를 이용해 버튼의 스타일을 변경할 수 있습니다.
 * size를 이용해 버튼이 표시될 사이즈를 지정할 수 있습니다.
 *
 */
function Button({ type, onClick, children, useTheme, disabled, size }: ButtonProps) {
  return (
    <StyledButton useTheme={useTheme} size={size} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: ButtonTypeList.BUTTON,
  useTheme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  disabled: false,
};

export default Button;
