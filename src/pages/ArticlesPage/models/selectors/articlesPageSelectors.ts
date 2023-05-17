import { StateScheme } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Articles';

export const getArticlesPageIsLoading = (state: StateScheme) => state.ArticlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.ArticlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.ArticlesPage?.view || ArticleView.TILE;
export const getArticlesPageNum = (state: StateScheme) => state.ArticlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.ArticlesPage?.limit || 15;
export const getArticlesPageHasMore = (state: StateScheme) => state.ArticlesPage?.hasMore;
export const getArticlesPageInited = (state: StateScheme) => state.ArticlesPage?._inited || false;
export const getArticlesPageOrder = (state: StateScheme) => state.ArticlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateScheme) => state.ArticlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateScheme) => state.ArticlesPage?.search ?? '';
export const getArticlesPageType = (state: StateScheme) => state.ArticlesPage?.type ?? ArticleType.ALL;
