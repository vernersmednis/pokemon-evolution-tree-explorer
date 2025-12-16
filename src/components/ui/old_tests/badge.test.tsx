import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Badge } from '../badge';

describe('Badge component behavior', () => {
  describe('with default props', () => {
    it('must display the badge text', () => {
      const { baseElement } = render(<Badge>Fire</Badge>);
      expect(baseElement.querySelector('[data-slot="badge"]')?.textContent).toBe('Fire');
    });
  });

  describe('when passing asChild prop', () => {
    describe('as an anchor element', () => {
      it('must render as a clickable link', () => {
        const { baseElement } = render(
          <Badge asChild>
            <a href='/types/fire'>Fire Type</a>
          </Badge>
        );

        const link = baseElement.querySelector('[data-slot="badge"]');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/types/fire');
      });
    });
  });
});
