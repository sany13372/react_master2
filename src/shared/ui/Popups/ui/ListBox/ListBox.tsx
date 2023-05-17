import { Listbox as HListbox } from '@headlessui/react';
import { Fragment } from 'react';

import { DropdownDirection } from '../../../../types/ui';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import style from '../../styles/popup.module.scss';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string,
  content: string,
  disabled?: boolean
}

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  label?: string;
  direction?: DropdownDirection;
  onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    defaultValue,
    label,
    readonly,
    value,
    onChange,
    direction = 'bottom right',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HStack gap="8">
      {label
        && label}
      <HListbox
        as="div"
        className={classNames(cls.ListBox, {}, [className, style.popups])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button
          className={cls.trigger}

        >
          {value ?? defaultValue}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [style.active]: active,
                    [style.selected]: selected,
                    [style.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
