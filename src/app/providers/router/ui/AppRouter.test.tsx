import { screen } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/config/AppRoutes/AppRoutes';
import { renderComponent } from '@/shared/libs/tests/renderComponent/renderComponent';

describe('app/router/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    renderComponent(<AppRouter />, {
      route: '/artaewe',
    });

    const page = await screen.findByTestId('NotFound');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _initStatus: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (отсутствует роль)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _initStatus: true, authData: {} },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (присутствует роль)', async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _initStatus: true, authData: { role: [UserRole.ADMIN] } },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
