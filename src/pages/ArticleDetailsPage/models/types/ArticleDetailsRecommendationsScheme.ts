import { EntityState } from '@reduxjs/toolkit';

import { Article } from '@/entities/Articles';

export interface ArticleDetailsRecommendationsScheme extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
