import { getLoginError } from './getLoginError';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('getLoginError test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateScheme> = {
      LoginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateScheme)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getLoginError(state as StateScheme)).toEqual('');
  });
});
