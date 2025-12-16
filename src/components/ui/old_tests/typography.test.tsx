import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Typography } from '../typography';

describe('Typography component behavior', () => {
  describe('when passing as prop', () => {
    it('must render with appropriate tag', () => {
      const { baseElement } = render(<Typography as='h3'>Battle Stats</Typography>);

      const heading = baseElement.querySelector('[data-slot="typography"]');

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toEqual('H3');
    });
  });

  describe('when passing asChild prop', () => {
    describe('as a label element', () => {
      it('must render a label with typography props', () => {
        const { baseElement } = render(
          <Typography asChild variant="body">
            <label>HP</label>
          </Typography>
        );

        const label = baseElement.querySelector('[data-slot="typography"]');

        expect(label).toBeInTheDocument();
        expect(label?.tagName).toEqual('LABEL');
      });
    });
  });
});
