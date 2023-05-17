import { getProfileReadonly } from './getProfileReadonly';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('getProfileReadonly.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {
      profile: { readonly: true },

    };
    expect(getProfileReadonly(state as StateScheme)).toEqual(true);
  });
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfileReadonly(state as StateScheme)).toEqual(undefined);
  });
});
