import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';

import { mapDirectionClass } from '../../styles/consts';
import style from '../../styles/popup.module.scss';

import { classNames } from '@/shared/libs/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, style.popups])}
    >
      <HPopover.Button as="div" className={style.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel
        className={classNames(cls.panel, {}, menuClasses)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
