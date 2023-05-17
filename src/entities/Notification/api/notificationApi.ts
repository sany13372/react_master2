import { Notification } from '../model/notification';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotification = notificationApi.useGetNotificationQuery;
