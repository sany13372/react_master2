import { StateScheme } from '@/app/providers/StoreProvider';

export const getInitStatus = (state: StateScheme) => state.user._initStatus;
