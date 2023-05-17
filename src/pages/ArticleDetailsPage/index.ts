export type { ArticleDetailsPageScheme } from './models/types/index';
export { getCanEditArticle } from './models/selectors/article';

export { articleDetailsPageReducer } from './models/slices';

export {
  articleDetailsPageRecommendationsReducer,
} from './models/slices/articleDetailsPageRecommendationsSlice';

export type {
  ArticleDetailsCommentsScheme,
} from './models/types/ArticleDetailsCommentsScheme';
export {
  ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
