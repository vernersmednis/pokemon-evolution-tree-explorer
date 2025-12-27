import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator component behavior', () => {

  // Helper to render `Button` in tests.
  const renderSeparator = (options: {
    orientation?: "horizontal" | "vertical";
    decorative?: boolean;
  } = {}) => {

    return render(
      <Separator orientation={options.orientation} decorative={options.decorative}/>
    );
  };

  describe('when initialized', () => {
    const defaultOptions: {
      orientation?: "horizontal" | "vertical";
      decorative?: boolean;
    } = {};
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderSeparator(currentOptions);
    });

    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    });

    it('must render the separator element', () => {
      expect(screen.getByTestId('separator')).toBeInTheDocument();
    });

    describe('when passing prop "orientation"', () => {
      describe('when passing as "horizontal" (default)', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'horizontal' };
        });

        it('must render with horizontal orientation', () => {
          expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
        });
      });

      describe('when passing as "vertical"', () => {
        beforeAll(() => {
          currentOptions = { orientation: 'vertical' };
        });

        it('must render with vertical orientation', () => {
          expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'vertical');
        });
      });
    });

    describe('when passing prop "decorative"', () => {
      describe('when passing as "true" (default)', () => {
        beforeAll(() => {
          currentOptions = { decorative: true };
        });

        it('must render a separator element with role as separator', () => {
          expect(screen.getByTestId('separator')).not.toHaveAttribute('role', 'separator');
        });
      });

      describe('when passing as "false"', () => {
        beforeAll(() => {
          currentOptions = { decorative: false };
        });

        it('must render a separator element with no role as separator', () => {
          expect(screen.getByTestId('separator')).toHaveAttribute('role', 'separator');
        });
      });
    });
  });
});