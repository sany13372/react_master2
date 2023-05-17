import { createSelector } from '@reduxjs/toolkit';

import { GetCounter } from '../getCounter/GetCounter';

import { CounterScheme } from '@/entities/Counter';

export const GetCounterValue = createSelector(
  GetCounter,
  (counter: CounterScheme) => counter.value,
);
