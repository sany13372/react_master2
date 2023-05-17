import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleCommentsIsLoading } from '../../models/selectors/comments';
import {
  addCommentForArticle,
} from '../../models/services/fetchCommentsByArticleId/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../models/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../models/slices/articleDetailsCommentsSlice';

import { CommentList } from '@/entities/Comments';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string | undefined;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('articles_details');
  const dispatch = useAppDispatch();
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Comment title')} />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList
        comments={comments}
        isLoading={commentIsLoading}
      />
    </VStack>
  );
});
