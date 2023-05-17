import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { StateScheme, ThunkExtraType } from './StateScheme';
import { createReducerManager } from './reducerManager';

import { counterReducer } from '@/entities/Counter';
import { UserReducer } from '@/entities/User';
import { scrollPositionReducer } from '@/features/ScrollPosition';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>,
) {
  const rootReducers: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: UserReducer,
    scrollPosition: scrollPositionReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const extraArg: ThunkExtraType = {
    api: $api,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
    devTools: __IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
      serializableCheck: false,
    }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
