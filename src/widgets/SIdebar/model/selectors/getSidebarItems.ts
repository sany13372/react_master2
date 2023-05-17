import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemTypes } from '../types/SidebarItemTypes';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/config/AppRoutes/AppRoutes';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemTypes[] = [
    {
      path: getRouteMain(),
      Icon: HomeIcon,
      text: 'Menu main',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'Menu about',
    }];
  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Menu profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Menu articles',
        authOnly: true,
      },
    );
  }
  return sidebarItemList;
});
