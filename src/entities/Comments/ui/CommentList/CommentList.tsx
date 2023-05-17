import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comments } from '../../models/types/comments';
import { CommentCard } from '../CommentCard/CommentCard';

import { classNames } from '@/shared/libs/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface CommentListProps {
  className?: string;
  comments?: Comments[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation('articles_details');

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }
  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            key={comment.id}
            comments={comment}
          />
        ))
        : <Text text={t('no comments')} />}
    </VStack>
  );
});
