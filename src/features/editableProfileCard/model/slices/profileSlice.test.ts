import { ValidateProfileError } from '../consts/editableProfileCardConsts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileScheme } from '../types/editableProfileCardScheme';

import { profileActions, profileReducer } from './profileSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
  id: '1',
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'lastname',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
};

describe('profileSlice test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false };
    expect(profileReducer(
      state as ProfileScheme,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileScheme> = { data, form: { username: '' } };

    expect(profileReducer(
      state as ProfileScheme,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });
  test('test update profile', () => {
    const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };

    expect(profileReducer(
      state as ProfileScheme,
      profileActions.updateProfile({
        username: '123456',
      }),
    )).toEqual({
      form: { username: '123456' },
    });
  });
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileScheme,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileScheme,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
