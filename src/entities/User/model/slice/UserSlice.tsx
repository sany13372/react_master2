import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserScheme } from '../types/User';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const initialState: UserScheme = {
  _initStatus: false,
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._initStatus = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
