import { ReactNode, memo, useCallback } from 'react';

import { Card, CardTheme } from '../Card/Card';
import { HStack } from '../Stack';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}
export const Tabs = memo((props: TabsProps) => {
  const {
    className, tabs, onTabClick, value,
  } = props;

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <HStack gap="8" className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
