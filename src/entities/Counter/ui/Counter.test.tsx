import { fireEvent, screen } from '@testing-library/react';

import { Counter } from './Counter';

import { renderComponent } from '@/shared/libs/tests/renderComponent/renderComponent';

describe('counter', () => {
  test('should be equal', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 7,
        },
      },
    });
    expect(screen.getByTestId('counterValue')).toHaveTextContent('7');
  });

  test('counter increment', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 11 },
      },
    });

    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('counterValue')).toHaveTextContent('12');
  });

  test('counter decrement', () => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 11 },
      },
    });

    fireEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
  });
});
