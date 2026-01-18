import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../index';

// Local mock data for tests (mirroring mockData.tsx)
const featuredPokemon = [
  { name: 'Charizard', id: 6 },
  { name: 'Pikachu', id: 25 },
  { name: 'Mewtwo', id: 150 },
  { name: 'Eevee', id: 133 },
];

const recommendedPokemon = [
  { name: 'Bulbasaur', id: 1, description: 'Start your journey with the Grass starter' },
  { name: 'Squirtle', id: 7, description: 'Discover the Water-type evolution line' },
  { name: 'Wurmple', id: 265, description: 'Explore a branching evolution' },
  { name: 'Eevee', id: 133, description: "See Eevee's very complex evolution" },
];

const tips = [
  {
    title: 'Search by Name or Number',
    description: 'You can search by Pokémon name or number (e.g., "25" for Pikachu)',
  },
  {
    title: 'Explore Evolution Chains',
    description: 'Click on any Pokémon in the evolution tree to explore its complete line',
  },
  {
    title: 'Branching Evolutions',
    description: 'Some Pokémon have multiple evolution paths with different conditions',
  },
  {
    title: 'Detailed Information',
    description: 'View stats, types, and evolution details for each Pokémon',
  },
];

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Helper function to render Dashboard with Router
const renderDashboard = () => {
  return render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>
  );
};

describe('Dashboard', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  describe('featured Pokemon', () => {
    
    it('should render featured Pokemon section', () => {
      renderDashboard();

      expect(screen.getByText('Featured Pokémon')).toBeInTheDocument();
    });

    it('should render all featured Pokemon as buttons', () => {
      renderDashboard();

      // Get the tips section container
      const featuredHeading = screen.getByText('Featured Pokémon');
      const featuredSection = featuredHeading.closest('[data-slot="card"]') as HTMLElement;

      featuredPokemon.forEach((pokemon) => {
        expect(within(featuredSection).getByText(pokemon.name)).toBeInTheDocument();
        expect(within(featuredSection).getByText(`#${pokemon.id}`)).toBeInTheDocument();
      });
    });

    it('should navigate to Pokemon detail when featured Pokemon is clicked', async () => {
      const user = userEvent.setup();
      renderDashboard();

      // Click on Charizard (id: 6)
      const charizardButton = screen.getByText('Charizard').closest('button');
      await user.click(charizardButton!);

      expect(mockNavigate).toHaveBeenCalledWith('/pokemon/6');
    });
  });

  describe('recommended Pokemon', () => {

    it('should render recommended Pokemon section', () => {
      renderDashboard();

      expect(screen.getByText('Recommended Evolution Chains')).toBeInTheDocument();
    });

    it('should render all recommended Pokemon with descriptions', () => {
      renderDashboard();

      // Get the tips section container
      const recommendedHeading = screen.getByText('Recommended Evolution Chains');
      const recommendedSection = recommendedHeading.closest('[data-slot="card"]') as HTMLElement;

      recommendedPokemon.forEach((pokemon) => {
        expect(within(recommendedSection).getByText(pokemon.name)).toBeInTheDocument();
        expect(within(recommendedSection).getByText(pokemon.description)).toBeInTheDocument();
      });
    });

    it('should navigate to Wurmple for branching evolution', async () => {
      const user = userEvent.setup();
      renderDashboard();

      const wurmpleButton = screen.getByText('Wurmple').closest('button');
      await user.click(wurmpleButton!);

      expect(mockNavigate).toHaveBeenCalledWith('/pokemon/265');
    });
  });

  describe('tips section', () => {
    
    it('should render tips section', () => {
      renderDashboard();
 
      expect(screen.getByText('Tips & Tricks')).toBeInTheDocument();
    });

    it('should render all tips with titles and descriptions', () => {
      renderDashboard();
        
      // Get the tips section container
      const tipsHeading = screen.getByText('Tips & Tricks');
      const tipsSection = tipsHeading.closest('[data-slot="card"]') as HTMLElement;
        
      tips.forEach((tip) => {
        expect(within(tipsSection).getByText(tip.title)).toBeInTheDocument();
        expect(within(tipsSection).getByText(tip.description)).toBeInTheDocument();
      });
    });
  });
});