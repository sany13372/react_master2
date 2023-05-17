import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { renderComponent } from '@/shared/libs/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
