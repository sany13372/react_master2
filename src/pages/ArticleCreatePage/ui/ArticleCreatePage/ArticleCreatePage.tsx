import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
  className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.ArticleCreatePage, {}, [className])}>
      {t('Create article header')}
    </Page>
  );
});
export default ArticleCreatePage;
