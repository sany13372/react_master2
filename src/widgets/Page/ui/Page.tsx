import {
  MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateScheme } from '@/app/providers/StoreProvider';
import { getScrollPositionByPath, scrollPositionActions } from '@/features/ScrollPosition';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/libs/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/ui';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;

}

export const Page = (props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd,
  } = props;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateScheme) => getScrollPositionByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPositionActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      // eslint-disable-next-line react/destructuring-assignment
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}

      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
};
