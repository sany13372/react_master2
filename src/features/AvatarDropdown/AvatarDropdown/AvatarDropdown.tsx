import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserActions, getUserAuthData, isAdmin, isManager,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/config/AppRoutes/AppRoutes';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isUserAdmin = useSelector(isAdmin);
  const isUserManager = useSelector(isManager);
  const authData = useSelector(getUserAuthData);

  const isAdminPanel = isUserAdmin || isUserManager;

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      trigger={<Avatar size={30} src={authData.avatar} />}
      direction="bottom left"
      items={[
        ...(isAdminPanel ? [{
          content: t('Admin'),
          href: getRouteAdmin(),
        }] : []),
        {
          content: t('profile'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
    />
  );
});
