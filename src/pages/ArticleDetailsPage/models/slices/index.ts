import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageScheme } from '../types';

import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import {
  articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: ArticleDetailsCommentsReducer,
});
