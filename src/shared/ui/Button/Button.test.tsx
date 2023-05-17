import { render, screen } from '@testing-library/react';

import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('Test clear theme', () => {
    render(<Button theme={ButtonVariant.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
