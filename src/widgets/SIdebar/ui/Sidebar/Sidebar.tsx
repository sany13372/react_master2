import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { classNames } from '@/shared/libs/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button';
import { LangSwithcer } from '@/shared/ui/LangSwithcer';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemList]);

  return (
    <section
      data-testid="sidebar"
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
      }
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? ' >' : '<'}
      </Button>
      <VStack gap="8" role="navigation">
        {itemList}
      </VStack>

      <HStack gap="8" justify="center" className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer short={collapsed} className={cls.lang} />
      </HStack>
    </section>
  );
});
