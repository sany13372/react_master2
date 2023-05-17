import { DeepPartial } from '@reduxjs/toolkit';

import { GetCounterValue } from './GetCounterValue';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('GetCouterValue', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 10 },
    };
    expect(GetCounterValue(state as StateScheme)).toEqual(10);
  });
});
