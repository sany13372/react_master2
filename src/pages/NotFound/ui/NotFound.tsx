import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  return (
    <Page
      className={classNames(cls.NotFound, {}, [className])}
      data-testid="NotFound"
    >
      {t('not found')}
    </Page>
  );
};
