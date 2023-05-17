import {
  ReactNode,
  memo,
  type ButtonHTMLAttributes,
} from 'react';

import { Mods, classNames } from '@/shared/libs/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonVariant
  square?: boolean
  size?: string
  disabled?: boolean
  children?: ReactNode,
  fullWidth?: boolean,
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    size = ButtonSize.M,
    theme = ButtonVariant.CLEAR,
    disabled,
    fullWidth,
    ...otherProps
  } = props;
  const mods: Mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
