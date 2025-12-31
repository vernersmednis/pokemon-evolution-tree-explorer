import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="Pokemon name" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  describe('type prop', () => {
    it('defaults to text', () => {
      render(<Input aria-label="Pokemon name" />);
      expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
    });

    it('accepts text type', () => {
      render(<Input type="text" aria-label="Pokemon name" />);
      expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
    });

    it('accepts email type', () => {
      render(<Input type="email" aria-label="Pokemon name" />);
      expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
    });
  });

  describe('user interaction', () => {
    it('accepts user input', async () => {
      const user = userEvent.setup();
      render(<Input aria-label="Pokemon name" />);

      const input = screen.getByTestId('input');
      await user.type(input, 'Pikachu');

      expect(input).toHaveValue('Pikachu');
    });
  });
});
