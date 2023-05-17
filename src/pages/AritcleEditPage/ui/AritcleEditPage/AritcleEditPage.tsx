import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './AritcleEditPage.module.scss';

interface AritcleEditPageProps {
  className?: string;
}

const AritcleEditPage = memo((props: AritcleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { id } = useParams();
  return (
    <Page className={classNames(cls.AritcleEditPage, {}, [className])}>
      {t('Edit page header') + id}
    </Page>
  );
});

export default AritcleEditPage;
