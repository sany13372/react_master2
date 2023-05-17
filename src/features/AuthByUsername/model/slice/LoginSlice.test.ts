import { DeepPartial } from '@reduxjs/toolkit';

import { LoginScheme } from '../types/LoginScheme';

import { loginActions, loginReducer } from './LoginSlice';

describe('LoginSlice test', () => {
  test('test setUsername', () => {
    const state: DeepPartial<LoginScheme> = { username: 'na1me' };
    expect(loginReducer(
      state as LoginScheme,
      loginActions.setUsername('testname'),
    )).toEqual({ username: 'testname' });
  });
  test('test setPassword', () => {
    const state: DeepPartial<LoginScheme> = { password: 'na1me' };
    expect(loginReducer(
      state as LoginScheme,
      loginActions.setPassword('testname'),
    )).toEqual({ password: 'testname' });
  });
});
