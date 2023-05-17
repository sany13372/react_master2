import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../models/selectors/articlesPageSelectors';
import { getArticles } from '../../models/slices/articlesPageSlice';

import { ArticleList } from '@/entities/Articles';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return <Text text={t('error load article')} />;
  }
  return (
    <ArticleList
      view={view}
      isLoading={isLoading}
      articles={articles}
      className={className}
    />
  );
});
