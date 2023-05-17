import { ValidateProfileError } from '../consts/editableProfileCardConsts';

import { Profile } from '@/entities/Profile';

export interface ProfileScheme {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
