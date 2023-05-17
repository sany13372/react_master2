import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

import { validateProfileData } from './validateProfileData';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'lastname',
  first: 'asd',
  city: 'asf',
  currency: Currency.RUB,
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('incorrect city', async () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
