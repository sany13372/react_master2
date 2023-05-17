import { CounterScheme } from '../types/counterSheme';

import { counterActions, counterReducer } from './CounterSlice';

describe('counter slicer', () => {
  test('should increment', () => {
    const state: CounterScheme = { value: 7 };
    expect(counterReducer(
      state as CounterScheme,
      counterActions.increment(),
    )).toEqual({ value: 8 });
  });

  test('should decrement', () => {
    const state: CounterScheme = { value: 7 };
    expect(counterReducer(
      state as CounterScheme,
      counterActions.decrement(),
    )).toEqual({ value: 6 });
  });

  test('should empy state', () => {
    // const state: CounterScheme = { value: 7 };
    expect(counterReducer(
      undefined,
      counterActions.increment(),
    )).toEqual({ value: 1 });
  });
});
