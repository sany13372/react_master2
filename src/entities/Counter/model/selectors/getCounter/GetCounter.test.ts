import { DeepPartial } from '@reduxjs/toolkit';

import { GetCounter } from './GetCounter';

import { StateScheme } from '@/app/providers/StoreProvider';

describe('GetCouter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 7 },
    };
    expect(GetCounter(state as StateScheme)).toEqual({ value: 7 });
  });
});
