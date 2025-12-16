import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Separator } from '../separator';

describe('Separator component behavior', () => {
  describe('with default props', () => {
    it('must render a horizontal divider', () => {
      const { baseElement } = render(<Separator />);

      const separator = baseElement.querySelector('[data-slot="separator"]');

      expect(separator).toHaveAttribute('data-orientation', 'horizontal');
      expect(separator).toBeInTheDocument();
    });
  });

  describe('when decorative is false', () => {
    it('must participate in the accessibility tree with a role', () => {
      const { baseElement } = render(<Separator decorative={false} />);

      const separator = baseElement.querySelector('[data-slot="separator"]');

      expect(separator).toHaveAttribute('role', 'separator');
      expect(separator).toBeInTheDocument();
    });
  });

  describe('when orientation is vertical', () => {
    it('must render a vertical divider', () => {
      const { baseElement } = render(<Separator orientation='vertical' />);

      const separator = baseElement.querySelector('[data-slot="separator"]');

      expect(separator).toHaveAttribute('data-orientation', 'vertical');
      expect(separator).toBeInTheDocument();
    });
  });
});
