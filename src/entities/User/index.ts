export { isAdmin, isManager, getUserRole } from './model/selectors/getUserRole/getUserRole';

export { getInitStatus } from './model/selectors/getInitStatus/getInitStatus';
export type { User, UserScheme } from './model/types/User';
export { UserRole } from './model/consts/UserRoleConsts';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { UserActions, UserReducer } from './model/slice/UserSlice';
