import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateScheme) => {
  return state.ArticleDetailsPages?.comments.isLoading || false;
};
export const getArticleCommentsError = (state: StateScheme) => {
  return state.ArticleDetailsPages?.comments?.error;
};
