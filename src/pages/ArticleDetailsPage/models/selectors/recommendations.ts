import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateScheme) => {
  return state.ArticleDetailsPages?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateScheme) => {
  return state.ArticleDetailsPages?.recommendations.error;
};
