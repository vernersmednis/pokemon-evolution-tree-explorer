import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';
import type { ReactNode } from 'react';

describe('Button component behavior', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  // Helper to render `Button` in tests. 
  const renderButton = (options: {
    asChild?: boolean;
    children?: ReactNode,
    onClick?: () => void;
  } = {}) => {

    return render(
      <Button asChild={options.asChild} onClick={options.onClick}>
        {options.children}
      </Button>
    );
  };

  describe('when initialized', () => {
    const defaultOptions: {
      asChild?: boolean;
      children?: ReactNode,
      onClick?: () => void;
    } = { children: 'Catch Pokemon' };
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderButton(currentOptions);
    });

    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    });

    it('must render the button element', () => {
      expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    it('must render the button text', () => {
      expect(screen.getByText('Catch Pokemon')).toBeInTheDocument();
    });

    describe('when passing prop "asChild"', () => {
      describe('when passing as "false" (default)', () => {
        beforeAll(() => {
          currentOptions = { 
            ...defaultOptions,
            asChild: false 
          };
        });

        it('must render the button element as a button', () => {
          const button = screen.getByTestId('button');
          expect(button).toBeInTheDocument();
          expect(button.tagName).toBe('BUTTON');
        });
      });

      describe('when passing as "true"', () => {
        beforeAll(() => {
          currentOptions = {
            asChild: true,
            children: <a href="/pokedex">Open Pokedex</a>,
          };
        });

        describe('when rendering as an anchor element', () => {
          it('must render the button element as an anchor', () => {
            const button = screen.getByTestId('button');
            expect(button).toBeInTheDocument();
            expect(button).toHaveAttribute('href', '/pokedex');
          });
        });
      });
    });

    describe('when passing prop "onClick"', () => {
      const handleClick = jest.fn();

      beforeAll(() => {
        currentOptions = { 
          ...defaultOptions,
          onClick: handleClick };
      });

      describe('when clicking the button', () => {
        beforeEach(async () => {
          await user.click(screen.getByTestId('button'));
        });

        it('must trigger the onClick event', () => {
          expect(handleClick).toHaveBeenCalled();
        });
      });
    });
  });
});
