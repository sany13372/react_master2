import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../models/selectors/article';

import { getArticleDetailsData } from '@/entities/Articles';
import {
  getRouteArticleEdit, getRouteArticles,
} from '@/shared/config/AppRoutes/AppRoutes';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  return (
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Button theme={ButtonVariant.OUTLINE} onClick={onBackToList}>
        {t('back to list')}
      </Button>
      {canEdit
        && (
          <Button
            theme={ButtonVariant.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Edit')}
          </Button>
        )}
    </HStack>
  );
});
