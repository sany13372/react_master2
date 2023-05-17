import { loginByUsername } from './loginByUsername';

import { UserActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/libs/tests/testAsyncThunk/testAsyncThunk';

describe('loginByUsername', () => {
  test('login correct', async () => {
    const userValue = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(userValue));
    expect(result.payload).toEqual(userValue);
  });

  test('login error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
