import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button';

import cls from './LangSwithcer.module.scss';

interface LangSwithcerProps {
  className?: string
  short?: boolean
}
export enum Lang {
  RU = 'ru',
  EN = 'en'
}

export const LangSwithcer = memo(({ className, short }: LangSwithcerProps) => {
  const { t } = useTranslation();

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === Lang.RU ? Lang.EN : Lang.RU);
  };
  return (
    <Button
      className={classNames(cls.LangSwithcer, {}, [className])}
      theme={ButtonVariant.CLEAR}
      onClick={onToggle}
    >
      {t(short ? 'shortlang' : 'lang')}
    </Button>
  );
});
