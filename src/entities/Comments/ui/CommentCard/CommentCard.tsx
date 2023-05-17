import { memo } from 'react';

import { Comments } from '../../models/types/comments';

import { getRouteProfile } from '@/shared/config/AppRoutes/AppRoutes';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comments?: Comments;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comments, isLoading } = props;
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comments) {
    return null;
  }
  return (
    <VStack gap="8" max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={getRouteProfile(comments.user.id)} className={cls.header}>
        {comments.user.avatar ? <Avatar size={30} src={comments.user.avatar} className={cls.avatar} /> : null}
        <Text title={comments.user.username} />
      </AppLink>
      <Text className={cls.text} text={comments.text} />
    </VStack>
  );
});
