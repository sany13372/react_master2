import { getLoginState } from './getLoginState';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('getLoginState test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateScheme> = {
      LoginForm: {
        username: 'admin',
        password: '123',
      },
    };
    expect(getLoginState(state as StateScheme)).toEqual({
      username: 'admin',
      password: '123',
    });
  });
  test('should return empty', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginState(state as StateScheme)).toEqual(undefined);
  });
});
