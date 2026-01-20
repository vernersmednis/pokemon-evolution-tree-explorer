import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator', () => {
  it('renders a separator element', () => {
    render(<Separator decorative={false} />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  describe('orientation prop', () => {
    it('defaults to horizontal', () => {
      render(<Separator decorative={false} />);
      expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('accepts horizontal orientation', () => {
      render(<Separator orientation="horizontal" decorative={false} />);
      expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'horizontal');
    });

    it('accepts vertical orientation', () => {
      render(<Separator orientation="vertical" decorative={false} />);
      expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'vertical');
    });
  });

  describe('decorative prop', () => {
    it('defaults to true (no role attribute)', () => {
      const { container } = render(<Separator />);
      const separator = container.querySelector('[data-slot="separator"]');
      expect(separator).not.toHaveAttribute('role', 'separator');
    });

    it('when true, does not have role separator', () => {
      const { container } = render(<Separator decorative={true} />);
      const separator = container.querySelector('[data-slot="separator"]');
      expect(separator).not.toHaveAttribute('role', 'separator');
    });

    it('when false, has role separator', () => {
      render(<Separator decorative={false} />);
      expect(screen.getByRole('separator')).toHaveAttribute('role', 'separator');
    });
  });
});