import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { ArticleDetailsScheme } from '@/entities/Articles';
import { CounterScheme } from '@/entities/Counter';
import { UserScheme } from '@/entities/User';
import { LoginScheme } from '@/features/AuthByUsername';
import { ScrollPositionScheme } from '@/features/ScrollPosition';
import { addCommentFormScheme } from '@/features/addCommentForm';
import { ProfileScheme } from '@/features/editableProfileCard';
import { ArticleDetailsPageScheme } from '@/pages/ArticleDetailsPage';
import { ArticlesPageScheme } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateScheme {
  counter: CounterScheme,
  user: UserScheme,
  scrollPosition: ScrollPositionScheme,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
  // async
  LoginForm?: LoginScheme,
  profile?: ProfileScheme,
  articleDetails?: ArticleDetailsScheme,
  ArticleDetailsPages?: ArticleDetailsPageScheme,
  addCommentForm?: addCommentFormScheme,
  ArticlesPage?: ArticlesPageScheme,
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>,
  reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
  add: (key: StateSchemeKey, reducer: Reducer) => void,
  remove: (key: StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager
}

export interface ThunkExtraType {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraType,
  state: StateScheme
}
