import { CSSProperties, memo, useMemo } from 'react';

import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number,
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = '',
    size = 150,
    fallbackInverted,
  } = props;

  const sizeAvatar = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={sizeAvatar}
      alt={alt}
    />
  );
});
