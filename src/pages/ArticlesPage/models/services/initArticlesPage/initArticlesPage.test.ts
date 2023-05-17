import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { initArticlesPage } from './initArticlesPage';

import { TestAsyncThunk } from '@/shared/libs/tests/testAsyncThunk/testAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

const paramsString = '';
const searchParams = new URLSearchParams(paramsString);

describe('initArticlesPage', () => {
  test('correct', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      ArticlesPage: {
        page: 1,
        entities: {},
        isLoading: false,
        hasMore: true,
        ids: [],
        limit: 5,
        _inited: false,
      },
    });

    const result = await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });
  test('wrong inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      ArticlesPage: {
        page: 1,
        entities: {},
        isLoading: false,
        hasMore: true,
        ids: [],
        limit: 5,
        _inited: true,
      },
    });

    const result = await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toBeCalled();
  });
});
