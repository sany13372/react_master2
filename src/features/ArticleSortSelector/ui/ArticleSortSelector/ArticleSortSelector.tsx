import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Articles';
import { SortOrder } from '@/shared/types/sortOrder';
import { Select, SelectOption } from '@/shared/ui/Select';
import { HStack } from '@/shared/ui/Stack';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort,
  } = props;
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('sort increment'),
    },
    {
      value: 'desc',
      content: t('sort decrement'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('data create'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('view count'),
    },
  ], [t]);

  return (
    <HStack gap="8" justify="center">
      <Select
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </HStack>
  );
};
