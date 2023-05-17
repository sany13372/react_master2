import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

import { ArticleList } from '@/entities/Articles';
import { classNames } from '@/shared/libs/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
  className?: string;
}
export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { isLoading, error, data: articles } = useArticleRecommendationsList(4);

  if (isLoading || error || !articles) {
    return null;// добавить отрисовку
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Recommended')} />
      <ArticleList
        articles={articles}
        target="_blank"
      />
    </VStack>
  );
});
