import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders a badge element', () => {
    render(<Badge>Water</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('renders badge text', () => {
    render(<Badge>Water</Badge>);
    expect(screen.getByText('Water')).toBeInTheDocument();
  });

  describe('asChild prop', () => {
    it('defaults to false (renders as span)', () => {
      render(<Badge>Water</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge.tagName).toBe('SPAN');
    });

    it('when false, renders as span', () => {
      render(<Badge asChild={false}>Water</Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge.tagName).toBe('SPAN');
    });

    it('when true, renders as child element', () => {
      render(<Badge asChild><a href="/types/water">Water Type</a></Badge>);
      const badge = screen.getByTestId('badge');
      expect(badge.tagName).toBe('A');
      expect(badge).toHaveAttribute('href', '/types/water');
    });
  });
});
