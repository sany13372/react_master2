import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import style from '../../styles/popup.module.scss';

import { classNames } from '@/shared/libs/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}
interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;
  const { t } = useTranslation();
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, style.popups])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [style.active]: active })}
              // eslint-disable-next-line react/no-array-index-key
              key={`dropdown-key-${index}`}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                refName="href"
                // eslint-disable-next-line react/no-array-index-key
                key={`dropdown-key-${index}`}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
