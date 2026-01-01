import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator', () => {
  it('renders a separator element', () => {
    render(<Separator />);
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });

  describe('orientation prop', () => {
    it('defaults to horizontal', () => {
      render(<Separator />);
      expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('accepts horizontal orientation', () => {
      render(<Separator orientation="horizontal" />);
      expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('accepts vertical orientation', () => {
      render(<Separator orientation="vertical" />);
      expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'vertical');
    });
  });

  describe('decorative prop', () => {
    it('defaults to true (no role attribute)', () => {
      render(<Separator />);
      expect(screen.getByTestId('separator')).not.toHaveAttribute('role', 'separator');
    });

    it('when true, does not have role separator', () => {
      render(<Separator decorative={true} />);
      expect(screen.getByTestId('separator')).not.toHaveAttribute('role', 'separator');
    });

    it('when false, has role separator', () => {
      render(<Separator decorative={false} />);
      expect(screen.getByTestId('separator')).toHaveAttribute('role', 'separator');
    });
  });
});