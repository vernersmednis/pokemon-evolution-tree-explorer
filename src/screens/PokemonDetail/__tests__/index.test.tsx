import '@testing-library/jest-dom';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from '../index';
import { mockWurmpleEvolutionChainNodePokemon } from '@/__mocks__/fixtures';

// Mock the useGetEvolutionChain hook
jest.mock('@/hooks/pokemon/getEvolutionChain', () => ({
  useGetEvolutionChain: jest.fn(),
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

// Mock window.matchMedia for embla-carousel
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver for embla-carousel
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

globalThis.IntersectionObserver = MockIntersectionObserver;

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
        data: [mockWurmpleEvolutionChainNodePokemon],
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
        data: [mockWurmpleEvolutionChainNodePokemon],
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
        data: [mockWurmpleEvolutionChainNodePokemon],
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

  describe('carousel dialog interactions', () => {
    it('should open carousel dialog when clicking on a compact pokemon card', async () => {
      // Mock scrollWidth to be larger than window width (content overflows)
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 1500, // Content width larger than window
      });
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });

      mockedUseGetEvolutionChain.mockReturnValue({
        data: [mockWurmpleEvolutionChainNodePokemon],
        isLoading: false,
        error: null,
        isError: false,
        isSuccess: true,
      } as ReturnType<typeof useGetEvolutionChain>);

      renderPokemonDetail('wurmple');

      // Wait for evolution chain to load
      await waitFor(() => {
        expect(screen.getAllByRole('img', { name: 'wurmple' }).length).toBeGreaterThan(0);
      });

      // Click on the compact pokemon card image (the smaller one with w-8 class)
      const wurmpleImages = screen.getAllByRole('img', { name: 'wurmple' });
      const compactCardImage = wurmpleImages.find(img => img.classList.contains('w-8'))!;
      await userEvent.click(compactCardImage);
      // Assert dialog/carousel is open
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('should display correct pokemon in carousel after clicking card', async () => {
      // Mock scrollWidth to be larger than window width (content overflows)
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        value: 1500, // Content width larger than window
      });
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });

      mockedUseGetEvolutionChain.mockReturnValue({
        data: [mockWurmpleEvolutionChainNodePokemon],
        isLoading: false,
        error: null,
        isError: false,
        isSuccess: true,
      } as ReturnType<typeof useGetEvolutionChain>);

      renderPokemonDetail('wurmple');

      await waitFor(() => {
        expect(screen.getAllByRole('img', { name: 'silcoon' }).length).toBeGreaterThan(0);
      });

      // Click on the compact pokemon card image (the smaller one with w-8 class)
      const silcoonImages = screen.getAllByRole('img', { name: 'silcoon' });
      const compactCardImage = silcoonImages.find(img => img.classList.contains('w-8'))!;
      await userEvent.click(compactCardImage);

      // Verify the carousel dialog shows the clicked pokemon's card
      await waitFor(() => {
        const dialog = screen.getByRole('dialog');
        expect(within(dialog).getAllByText('silcoon').length).toBeGreaterThan(0);
      });
    });
  });
});
