import { EntityState } from '@reduxjs/toolkit';

import { Comments } from '@/entities/Comments';

export interface ArticleDetailsCommentsScheme extends EntityState<Comments> {
  isLoading?: boolean;
  error?: string;
}
