import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="Pokemon name" />);
    expect(screen.getByRole('textbox', { name: 'Pokemon name' })).toBeInTheDocument();
  });

  describe('type prop', () => {
    it('defaults to text', () => {
      render(<Input aria-label="Pokemon name" />);
      expect(screen.getByRole('textbox', { name: 'Pokemon name' })).toHaveProperty('type', 'text');
    });

    it('accepts text type', () => {
      render(<Input type="text" aria-label="Pokemon name" />);
      expect(screen.getByRole('textbox', { name: 'Pokemon name' })).toHaveProperty('type', 'text');
    });

    it('accepts email type', () => {
      render(<Input type="email" aria-label="Pokemon name" />);
      expect(screen.getByRole('textbox', { name: 'Pokemon name' })).toHaveProperty('type', 'email');
    });
  });

  describe('user interaction', () => {
    it('accepts user input', async () => {
      const user = userEvent.setup();
      render(<Input aria-label="Pokemon name" />);

      const input = screen.getByRole('textbox', { name: 'Pokemon name' });
      await user.type(input, 'Pikachu');

      expect(input).toHaveValue('Pikachu');
    });
  });
});
