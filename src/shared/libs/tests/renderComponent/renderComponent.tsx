import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import i18ForTests from '@/shared/config/i18n/i18ForTests';

export interface optionRouter {
  route?: string,
  initialState?: DeepPartial<StateScheme>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export function renderComponent(component: ReactNode, option: optionRouter = {}) {
  const {
    route = '/',
    initialState,
    asyncReducers,
  } = option;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18ForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
