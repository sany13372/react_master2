import { getLoginPassword } from './getLoginPassword';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('getLoginPassword test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateScheme> = {
      LoginForm: {
        password: '234324324',
      },
    };
    expect(getLoginPassword(state as StateScheme)).toEqual('234324324');
  });
  test('should return empty', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginPassword(state as StateScheme)).toEqual('');
  });
});
