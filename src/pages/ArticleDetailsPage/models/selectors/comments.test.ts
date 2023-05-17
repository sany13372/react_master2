import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('comments.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateScheme> = {
      ArticleDetailsPages: {
        comments: {
          error: 'error',
        },
      },
    };
    expect(getArticleCommentsError(state as StateScheme)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getArticleCommentsError(state as StateScheme)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateScheme> = {
      ArticleDetailsPages: {
        comments: {
          isLoading: true,
        },
      },
    };
    expect(getArticleCommentsIsLoading(state as StateScheme)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getArticleCommentsIsLoading(state as StateScheme)).toEqual(false);
  });
});
