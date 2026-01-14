import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders badge (and badge text)', () => {
    render(<Badge>Water</Badge>);
    expect(screen.getByText('Water')).toBeInTheDocument();
  });

  describe('asChild prop', () => {
    it('defaults to false (renders as span)', () => {
      render(<Badge>Water</Badge>);
      const badge = screen.getByText('Water');
      expect(badge.tagName).toBe('SPAN');
    });

    it('when false, renders as span', () => {
      render(<Badge asChild={false}>Water</Badge>);
      const badge = screen.getByText('Water');
      expect(badge.tagName).toBe('SPAN');
    });

    it('when true, renders as child element', () => {
      render(<Badge asChild><a href="/types/water">Water Type</a></Badge>);
      const badge = screen.getByRole('link', { name: 'Water Type' });
      expect(badge.tagName).toBe('A');
      expect(badge).toHaveAttribute('href', '/types/water');
    });
  });
});
