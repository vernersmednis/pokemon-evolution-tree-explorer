import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  it('renders a button element', () => {
    render(<Button>Catch Pokemon</Button>);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('renders button text', () => {
    render(<Button>Catch Pokemon</Button>);
    expect(screen.getByText('Catch Pokemon')).toBeInTheDocument();
  });

  describe('asChild prop', () => {
    it('defaults to false (renders as button)', () => {
      render(<Button>Catch Pokemon</Button>);
      const button = screen.getByTestId('button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('when false, renders as button', () => {
      render(<Button asChild={false}>Catch Pokemon</Button>);
      const button = screen.getByTestId('button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('when true, renders as child element', () => {
      render(<Button asChild><a href="/pokedex">Open Pokedex</a></Button>);
      const button = screen.getByTestId('button');
      expect(button.tagName).toBe('A');
      expect(button).toHaveAttribute('href', '/pokedex');
    });
  });

  describe('onClick prop', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(<Button onClick={handleClick}>Catch Pokemon</Button>);

      await user.click(screen.getByTestId('button'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
