import { StateScheme } from '@/app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: StateScheme) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateScheme) => state.articleDetails?.error;
export const getArticleDetailsData = (state: StateScheme) => state.articleDetails?.data;
