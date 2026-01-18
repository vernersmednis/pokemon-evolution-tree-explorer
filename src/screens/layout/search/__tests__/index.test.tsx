import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Search from '../index';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Helper function to render Search with Router
const renderSearch = (props: { className?: string } = {}) => {
  return render(
    <MemoryRouter>
      <Search {...props} />
    </MemoryRouter>
  );
};

describe('Search', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('rendering', () => {
    it('should render the search input', () => {
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      expect(input).toBeInTheDocument();
    });

    it('should render the search button', () => {
      renderSearch();

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
  
  describe('styling', () => {
    it('should have flex container with gap', () => {
      const { container } = renderSearch();

      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'gap-2');
    });
  });

  describe('input behavior', () => {
    it('should clear input after successful search', async () => {
      const user = userEvent.setup();
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      const button = screen.getByRole('button');

      await user.type(input, 'pikachu');
      await user.click(button);

      expect(input).toHaveValue('');
    });
  });

  describe('search functionality', () => {
    it('should navigate to pokemon detail page on search', async () => {
      const user = userEvent.setup();
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      const button = screen.getByRole('button');

      await user.type(input, 'pikachu');
      await user.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/pokemon/pikachu');
    });

    it('should convert search term to lowercase', async () => {
      const user = userEvent.setup();
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      const button = screen.getByRole('button');

      await user.type(input, 'PIKACHU');
      await user.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/pokemon/pikachu');
    });

    it('should trim whitespace from search term', async () => {
      const user = userEvent.setup();
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      const button = screen.getByRole('button');

      await user.type(input, '  pikachu  ');
      await user.click(button); 

      expect(mockNavigate).toHaveBeenCalledWith('/pokemon/pikachu');
    });

    it('should not navigate when search input is empty', async () => {
      const user = userEvent.setup();
      renderSearch();

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('should not navigate when search input is only whitespace', async () => {
      const user = userEvent.setup();
      renderSearch();

      const input = screen.getByPlaceholderText(/search for a pokémon/i);
      const button = screen.getByRole('button');

      await user.type(input, '   ');
      await user.click(button);

      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});
