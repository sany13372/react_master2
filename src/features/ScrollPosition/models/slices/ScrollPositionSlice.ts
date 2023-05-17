import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollPositionScheme } from '../types/ScrollPositionScheme';

const initialState: ScrollPositionScheme = {
  scroll: {},
};

const ScrollPositionSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const {
  actions: scrollPositionActions,
  reducer: scrollPositionReducer,
} = ScrollPositionSlice;
