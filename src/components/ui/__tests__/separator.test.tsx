import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator component behavior', () => {

  // Helper to render `Button` in tests. Similar pattern to `renderBadge` in badge tests.
  const renderSeparator = (options: {
    orientation?: "horizontal" | "vertical" | undefined;
    decorative?: boolean | undefined;
  } = {}) => {

    return render(
      <Separator orientation={options.orientation} decorative={options.decorative}/>
    );
  };

  describe('when initialized', () => {
    const defaultOptions = {};
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderSeparator(currentOptions);
    });

    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    });

    it('must render a horizontal separator element with no role as separator', () => {
      expect(screen.getByTestId('separator')).toBeInTheDocument();
      expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
      expect(screen.getByTestId('separator')).not.toHaveAttribute('role', 'separator');
    });

    describe('when pass prop orientation as vertical', () => {
      beforeAll(() => {
        currentOptions = { orientation: 'vertical' };
      });

      it('must render a vertical separator element', () => {
        expect(screen.getByTestId('separator')).toBeInTheDocument();
        expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'vertical');
      });
    });

    describe('when pass prop decorative as false', () => {
      beforeAll(() => {
        currentOptions = { decorative: false };
      });

      it('must render a separator element with role as separator', () => {
        expect(screen.getByTestId('separator')).toBeInTheDocument();
        expect(screen.getByTestId('separator')).toHaveAttribute('role', 'separator');
      });
    });
  });
});