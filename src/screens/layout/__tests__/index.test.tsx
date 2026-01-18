import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from '../index';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Helper function to render Layout with Router
const renderLayout = (initialRoute: string = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div data-testid="outlet-content">Outlet Content</div>} />
          <Route path="dashboard" element={<div data-testid="dashboard-content">Dashboard Content</div>} />
          <Route path="pokemon/:id" element={<div data-testid="pokemon-detail">Pokemon Detail</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('Layout', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('layout structure', () => {
    it('should have sticky header', () => {
      renderLayout();

      const header = screen.getByRole('banner');
      expect(header).toHaveClass('sticky', 'top-0');
    });

    it('should have a footer element', () => {
      renderLayout();

      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('header rendering', () => {
    
    it('should render the app title in header', () => {
      renderLayout();

      const header = screen.getByRole('banner');
      expect(within(header).getByText('Pokémon Evolution Tree Explorer')).toBeInTheDocument();
    });

    it('should render the home button in header', () => {
      renderLayout();

      const header = screen.getByRole('banner');
      const buttons = within(header).getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
      // The first button should be the home button (with House icon)
      expect(buttons[0]).toBeInTheDocument();
    });

    it('should render the search component in header', () => {
      renderLayout();

      const header = screen.getByRole('banner');
      // Search input should be present in header
      expect(within(header).getByPlaceholderText(/search for a pokémon/i)).toBeInTheDocument();
    });

    it('should navigate to dashboard when home button is clicked', async () => {
      const user = userEvent.setup();
      renderLayout();

      const header = screen.getByRole('banner');
      const buttons = within(header).getAllByRole('button');
      // First button should be the home button (icon only)
      const homeButton = buttons[0];
      await user.click(homeButton);

      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  describe('main content', () => {
    it('should render the Outlet content', () => {
      renderLayout();

      expect(screen.getByTestId('outlet-content')).toBeInTheDocument();
    });

    it('should render dashboard content at /dashboard route', () => {
      renderLayout('/dashboard');

      expect(screen.getByTestId('dashboard-content')).toBeInTheDocument();
    });
  });

  describe('footer rendering', () => {
    it('should render the PokéAPI attribution in footer', () => {
      renderLayout();

      const footer = screen.getByRole('contentinfo');
      expect(within(footer).getByText('Data provided by')).toBeInTheDocument();
      expect(within(footer).getByRole('link', { name: 'PokéAPI' })).toBeInTheDocument();
    });

    it('should have correct PokéAPI link in footer', () => {
      renderLayout();

      const footer = screen.getByRole('contentinfo');
      const apiLink = within(footer).getByRole('link', { name: 'PokéAPI' });
      expect(apiLink).toHaveAttribute('href', 'https://pokeapi.co/');
      expect(apiLink).toHaveAttribute('target', '_blank');
      expect(apiLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render the click instruction in footer', () => {
      renderLayout();

      const footer = screen.getByRole('contentinfo');
      expect(within(footer).getByText(/click on any pokémon in the evolution tree/i)).toBeInTheDocument();
    });
  });
});
