import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Button } from '../button';

describe('Button component behavior', () => {
  describe('with default props', () => {
    it('must render button text', () => {
      const { baseElement } = render(<Button>Catch Pokemon</Button>);

      const button = baseElement.querySelector('[data-slot="button"]');

      expect(button).toBeInTheDocument();
      expect(button?.textContent).toBe('Catch Pokemon');
    });
  });

  describe('when passing asChild prop', () => {
    describe('as an anchor element', () => {
      it('must render as a clickable link', () => {
        const { baseElement } = render(
          <Button asChild variant="link">
            <a href="/pokedex">Open Pokedex</a>
          </Button>
        );

        const link = baseElement.querySelector('[data-slot="button"]');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/pokedex');
      });
    });
  });
});
