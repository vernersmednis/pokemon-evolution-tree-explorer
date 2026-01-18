import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from '../index';
import { mockWurmpleEvolutionChainNode } from '@/__mocks__/fixtures';

// Mock the useGetEvolutionChain hook
jest.mock('@/hooks/pokemon/getEvolutionChain', () => ({
  useGetEvolutionChain: jest.fn(),
  parentMap: new WeakMap(),
}));

import { useGetEvolutionChain } from '@/hooks/pokemon/getEvolutionChain';

const mockedUseGetEvolutionChain = useGetEvolutionChain as jest.MockedFunction<typeof useGetEvolutionChain>;

// Mock ResizeObserver for layout effect tests
const mockResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
globalThis.ResizeObserver = mockResizeObserver;

// Helper function to render PokemonDetail with Router
const renderPokemonDetail = (pokemonId: string) => {
  return render(
    <MemoryRouter initialEntries={[`/pokemon/${pokemonId}`]}>
      <Routes>
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('PokemonDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window dimensions
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
  });

  describe('loading state', () => {
    it('should display loading message while fetching data', () => {
      mockedUseGetEvolutionChain.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: null,
        isError: false,
        isSuccess: false,
      } as ReturnType<typeof useGetEvolutionChain>);

      renderPokemonDetail('wurmple');

      expect(screen.getByText('Loading evolution chain...')).toBeInTheDocument();
    });
  });

  describe('error state', () => {
    it('should display error message when fetch fails', () => {
      const errorMessage = 'Pokemon not found';
      mockedUseGetEvolutionChain.mockReturnValue({
        data: undefined,
        isLoading: false,
        error: new Error(errorMessage),
        isError: true,
        isSuccess: false,
      } as ReturnType<typeof useGetEvolutionChain>);

      renderPokemonDetail('invalid');

      expect(screen.getByText(`Error loading evolution chain: ${errorMessage}`)).toBeInTheDocument();
    });
  });

  describe('success state with evolution chain', () => {

    it('should render branching evolution chain', async () => {
      mockedUseGetEvolutionChain.mockReturnValue({
        data: [mockWurmpleEvolutionChainNode],
        isLoading: false,
        error: null,
        isError: false,
        isSuccess: true,
      } as ReturnType<typeof useGetEvolutionChain>);

      renderPokemonDetail('wurmple');

      await waitFor(() => {
        // Check that all Pokemon in the branching chain are rendered
        expect(screen.getAllByText('wurmple').length).toBeGreaterThan(0);
        expect(screen.getAllByText('silcoon').length).toBeGreaterThan(0);
        expect(screen.getAllByText('cascoon').length).toBeGreaterThan(0);
        expect(screen.getAllByText('beautifly').length).toBeGreaterThan(0);
        expect(screen.getAllByText('dustox').length).toBeGreaterThan(0);
      });
    });
  });

  describe('responsive layout', () => {
    it('should have desktop view container by default', async () => {
      // Mock scrollWidth to be smaller than window width (content fits)
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 800, // Content width
      });
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });

      mockedUseGetEvolutionChain.mockReturnValue({
        data: [mockWurmpleEvolutionChainNode],
        isLoading: false,
        error: null,
        isError: false,
        isSuccess: true,
      } as ReturnType<typeof useGetEvolutionChain>);

      const { container } = renderPokemonDetail('wurmple');

      // Desktop view should have horizontal evolution chain
      await waitFor(() => {
        const desktopContainer = container.querySelector('[class*="mt-8 px-4"]');
        const mobileContainer = container.querySelector('[class*="font-mono text-sm pl-0"]');
        expect(desktopContainer).toBeInTheDocument();
        expect(desktopContainer).not.toHaveClass('hidden');
        expect(mobileContainer).toHaveClass('hidden');
      });
    });

    it('should have compact view container if doesn\'t fit in default desktop container', async () => {
      // Mock scrollWidth to be larger than window width (content overflows)
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 1500, // Content width larger than window
      });
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });

      mockedUseGetEvolutionChain.mockReturnValue({
        data: [mockWurmpleEvolutionChainNode],
        isLoading: false,
        error: null,
        isError: false,
        isSuccess: true,
      } as ReturnType<typeof useGetEvolutionChain>);

      const { container } = renderPokemonDetail('wurmple');

      // Compact view should have font-mono class
      await waitFor(() => {
        const desktopContainer = container.querySelector('[class*="mt-8 px-4"]');
        const mobileContainer = container.querySelector('[class*="font-mono text-sm pl-0"]');
        expect(mobileContainer).toBeInTheDocument();
        expect(mobileContainer).not.toHaveClass('hidden');
        expect(desktopContainer).toHaveClass('hidden');
      });
    });
  });
});
