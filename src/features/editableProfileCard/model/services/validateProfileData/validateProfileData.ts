import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

import { Profile } from '@/entities/Profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first, lastname, age, city,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || age < 18 || age > 100) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }
  return errors;
};
