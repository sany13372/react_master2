import { classNames } from '@/shared/libs/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
// eslint-disable-next-line appo-fsd-plugin/layer-imports
import { Page } from '@/widgets/Page';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <Page className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </Page>
);
