import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import Logo from '@/shared/assets/icons/logo.svg';
import { getRouteArticleCreate, getRouteMain } from '@/shared/config/AppRoutes/AppRoutes';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.logoContainer}>
          <AppLink
            className={cls.logo}
            to={getRouteMain()}
          >
            <Icon Svg={Logo} />
            <Text text="SIMTU" theme={TextTheme.INVERTED} />
          </AppLink>
        </div>
        <AppLink
          className={cls.createBtn}
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Create Article')}
        </AppLink>
        <HStack gap="16" className={cls.links}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (

    <header className={classNames(cls.Navbar, {}, [className])}>
      <Icon Svg={Logo} />
      <div className={cls.links}>
        <Button
          className={cls.links}
          theme={ButtonVariant.CLEAR_INVERTED}
          onClick={onShowModal}
        >
          {t('login')}
        </Button>
      </div>
      {isAuthModal
        && (
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        )}

    </header>
  );
});
