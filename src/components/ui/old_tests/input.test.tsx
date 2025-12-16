import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Input } from '../input';

describe('Input component behavior', () => {
  describe('when passing type prop (email)', () => {
    it('must render an email input element', () => {
      const { baseElement } = render(<Input type='email' />);

      const input = baseElement.querySelector('[data-slot="input"]');
      expect(input).toHaveAttribute('type', 'email');
      expect(input).toBeInTheDocument();
    });
  });
});
