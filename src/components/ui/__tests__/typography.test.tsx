import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Typography } from '../typography';

describe('Typography', () => {
  describe('rendering', () => {
    it('should render a typography element', () => {
      render(<Typography>Hello World</Typography>);
      
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
  });

  describe('as prop (element type)', () => {
    it('should render as p by default', () => {
      render(<Typography>Paragraph</Typography>);
      
      expect(screen.getByText('Paragraph').tagName).toBe('P');
    });

    it('should render as (for example) span when specified', () => {
      render(<Typography as="span">Span text</Typography>);
      
      expect(screen.getByText('Span text').tagName).toBe('SPAN');
    });
  });

  describe('asChild prop', () => {
    it('should render as child component when asChild is true with typography properties', () => {
      render(
        <Typography asChild variant="body">
          <a href="/link">Link text</a>
        </Typography>
      );
      
      const button = screen.getByRole('link', { name: 'Link text' });
      expect(button.tagName).toBe('A');
      expect(button).toHaveAttribute('href', '/link');
      expect(button).toHaveClass('text-base', 'font-normal');
    });
  });
});
