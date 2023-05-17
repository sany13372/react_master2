import { UserRole } from '../consts/UserRoleConsts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  role?: UserRole[];
}

export interface UserScheme {
  authData?: User;
  _initStatus: boolean;
}
