import { getProfileForm } from './getProfileForm';

import { StateScheme } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm.test', () => {
  test('should return data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'lastname',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateScheme> = {
      profile: { form: data },

    };
    expect(getProfileForm(state as StateScheme)).toEqual(data);
  });
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfileForm(state as StateScheme)).toEqual(undefined);
  });
});
