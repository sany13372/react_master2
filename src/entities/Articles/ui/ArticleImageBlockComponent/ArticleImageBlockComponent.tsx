import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleImageBlock } from '../../models/types/article';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation('articles_details');
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
