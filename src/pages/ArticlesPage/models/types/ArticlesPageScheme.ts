import { EntityState } from '@reduxjs/toolkit';

import {
  Article, ArticleSortField, ArticleView, ArticleType,
} from '@/entities/Articles';
import { SortOrder } from '@/shared/types/sortOrder';

export interface ArticlesPageScheme extends EntityState<Article> {
  error?: string;
  isLoading?: boolean;
  // pagination
  page: number,
  limit: number,
  hasMore: boolean,
  _inited: boolean
  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
}
