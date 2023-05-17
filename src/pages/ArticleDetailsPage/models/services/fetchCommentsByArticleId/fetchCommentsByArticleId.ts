import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comments } from '@/entities/Comments';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comments[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    if (!articleId) {
      return rejectWithValue('error');
    }
    try {
      const response = await extra.api.get<Comments[]>('/comments/', {
        params: {
          articleId,
          _expand: 'user',
        },
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
