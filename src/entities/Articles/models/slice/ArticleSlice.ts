import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleDetailsScheme } from '../types/ArticleDetailsScheme';
import { Article } from '../types/article';

const initialState: ArticleDetailsScheme = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

const ArticleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = ArticleSlice;
export const { reducer: articleDetailsReducer } = ArticleSlice;
