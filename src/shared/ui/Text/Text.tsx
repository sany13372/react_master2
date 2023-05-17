import { memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}
interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign,
  size?: TextSize,
  'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && (
        <h2
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </h2>
      )}
      {text && (
        <p
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});
