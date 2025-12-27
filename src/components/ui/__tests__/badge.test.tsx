import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import type { ReactNode } from 'react';
import { Badge } from '../badge';


describe('Badge component behavior', () => {

  // Helper to render `Badge` in tests. 
  const renderBadge = (options: { asChild?: boolean; children?: ReactNode } = {}) => {

    return render(
      <Badge asChild={options.asChild}>
        {options.children}
      </Badge>
    );
  };
  
  describe('when initialized', () => {
    const defaultOptions: { 
      asChild?: boolean; 
      children?: ReactNode 
    } = { children: 'Water' };
    let currentOptions = defaultOptions;

    beforeEach(() => {
      renderBadge(currentOptions);
    });
    
    afterEach(() => {
      cleanup()
      jest.clearAllMocks()
    });
    
    it('must render the badge element', () => {
      expect(screen.getByTestId('badge')).toBeInTheDocument();
    });

    it('must render the badge text', () => {
      expect(screen.getByText('Water')).toBeInTheDocument();
    });
    
    describe('when passing prop "asChild"', () => {
      describe('when passing as "false" (default)', () => {
        beforeAll(() => {
          currentOptions = { 
            ...defaultOptions,
            asChild: false,
          };
        });

        it('must render the badge element as a span', () => {
          const badge = screen.getByTestId('badge');
          expect(badge).toBeInTheDocument();
          expect(badge.tagName).toBe('SPAN');
        });
      });
      
      describe('when passing as "true" (default)', () => {
        beforeAll(() => {
          currentOptions = { 
            asChild: true,
            children: (<a href="/types/water">Water Type</a>)
          };
        });

        describe('when rendering as an anchor element', () => {
          it('must render the badge element as an anchor', () => {
            const badge = screen.getByTestId('badge');
            expect(badge).toBeInTheDocument();
            expect(badge).toHaveAttribute('href', '/types/water');
          });
        });
      });
    });
  });
});
