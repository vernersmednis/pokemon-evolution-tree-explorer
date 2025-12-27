import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Input component behavior', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  // Helper to render `Input` in tests.
  const renderInput = (options: {
    type?: string;
  } = {}) => {

    return render(
      <Input type={options.type} aria-label="Pokemon name" />
    );
  };

  describe('when initialized', () => {
    const defaultOptions: { type?: string } = {}
    let currentOptions = defaultOptions

    beforeEach(() => {
      renderInput(currentOptions);
    });

    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    });

    it('must render the input element', () => {
      expect(screen.getByTestId('input')).toBeInTheDocument();
    });

    describe('when entering a value', () => {
      describe('when entering as "Pikachu"', () => {
        beforeEach(async () => {
          await user.type(screen.getByTestId('input'), 'Pikachu');
        });

        it('must have value "Pikachu"', () => {
          expect(screen.getByTestId('input')).toHaveValue('Pikachu');
        });
      });
    });

    describe('when passing prop "type"', () => {
      describe('when passing as "text" (default)', () => {
        beforeAll(() => {
          currentOptions = { type: 'text' };
        });

        it('must render with the correct type (text)', () => {
          expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
        });
      });

      describe('when passing as "email"', () => {
        beforeAll(() => {
          currentOptions = { type: 'email' };
        });

        it('must render with the correct type (email)', () => {
          expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
        });
      });
    });
  });
});
