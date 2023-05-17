import { memo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
  const {
    className, Svg, inverted, ...othersProps
  } = props;
  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
      {...othersProps}
    />
  );
});
