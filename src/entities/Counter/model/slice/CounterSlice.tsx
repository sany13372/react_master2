import { createSlice } from '@reduxjs/toolkit';

import { CounterScheme } from '../types/counterSheme';

const initialState: CounterScheme = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = CounterSlice;
export const { reducer: counterReducer } = CounterSlice;
