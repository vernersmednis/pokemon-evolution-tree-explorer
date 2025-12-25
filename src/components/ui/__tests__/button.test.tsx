import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { Button } from '../button';
import userEvent from '@testing-library/user-event';

describe('Button component behavior', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  // Helper to render `Button` in tests. Similar pattern to `renderBadge` in badge tests.
  const renderButton = (options: {
    asChild?: boolean;
    children?: ReactNode;
    onClick?: () => void;
  } = {}) => {
    const { asChild = false, children = 'Catch Pokemon', onClick } = options;

    return render(
      <Button asChild={asChild} onClick={onClick}>{children}</Button>
    );
  };

  describe('when initialized', () => {
    const defaultOptions = {};
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

    describe('when pass prop onClick', () => {
      const handleClick = jest.fn();

      beforeAll(() => {
        currentOptions = { onClick: handleClick };
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

    describe('when pass prop asChild', () => {
      describe('when pass child as a link (anchor)', () => {
        beforeAll(() => {
          currentOptions = { 
            asChild: true, 
            children: <a href="/pokedex">Open Pokedex</a> 
          };
        });

        it('must render the button element as an anchor', () => {
          const button = screen.getByTestId('button');
          expect(button).toBeInTheDocument();
          expect(button).toHaveAttribute('href', '/pokedex');
        });
      });
    });
  });
});
