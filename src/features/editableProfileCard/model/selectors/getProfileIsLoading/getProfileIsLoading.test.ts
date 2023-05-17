import { getProfileIsLoading } from './getProfileIsLoading';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('getProfileIsLoading.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {
      profile: { isLoading: true },

    };
    expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
  });
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined);
  });
});
