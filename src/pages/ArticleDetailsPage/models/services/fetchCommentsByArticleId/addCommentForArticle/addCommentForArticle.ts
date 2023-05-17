import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Articles';
import { Comments } from '@/entities/Comments';
import { getUserAuthData } from '@/entities/User';

export const addCommentForArticle = createAsyncThunk<Comments, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      extra, rejectWithValue, getState, dispatch,
    } = thunkAPI;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());
    if (!text || !userData || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comments>('/comments', {
        articleId: article.id,
        text,
        userId: userData.id,
      });
      if (!response.data) {
        throw new Error('No data');
      }
      dispatch(fetchCommentsByArticleId(article.id));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
