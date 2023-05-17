import { memo, type FC } from 'react';

import IconDark from '@/shared/assets/icons/theme-dark.svg';
import IconLight from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/Theme';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/shared/libs/hooks/useTheme/useTheme';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((
  { className }: ThemeSwitcherProps,
) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ButtonVariant.CLEAR}
      onClick={toggleTheme}
      size={ButtonSize.XL}
    >
      {theme === Theme.DARK ? <IconDark /> : <IconLight />}

    </Button>
  );
});
