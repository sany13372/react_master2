import { createSelector } from '@reduxjs/toolkit';

import { StateScheme } from '@/app/providers/StoreProvider';

export const getScrollPosition = (state: StateScheme) => state.scrollPosition.scroll;

export const getScrollPositionByPath = createSelector(
  getScrollPosition,
  (state: StateScheme, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
