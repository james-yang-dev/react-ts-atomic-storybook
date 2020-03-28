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
  type: ButtonTypeList;
  useTheme: string;
  size: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
};

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
