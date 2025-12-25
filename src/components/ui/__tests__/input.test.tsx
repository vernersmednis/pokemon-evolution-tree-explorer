import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../input';

describe('Button component behavior', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  // Helper to render `Button` in tests. Similar pattern to `renderBadge` in badge tests.
  const renderInput = (options: {
    type?: string;
  } = {}) => {
    const { type = 'text' } = options;

    return render(
      <Input type={type} />
    );
  };

  describe('when initialized', () => {
    const defaultOptions = {};
    let currentOptions = defaultOptions;

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

    it('must render the input element with the correct type (email)', () => {
      expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
    });
  });
});
