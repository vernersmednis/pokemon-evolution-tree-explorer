import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PokemonCard from '../index';
import {
  mockWurmpleEvolutionChainNodePokemon,
  mockPokemonWithNoTypesEvolutionChainNodePokemon,
} from '@/__mocks__/fixtures';

describe('PokemonCard', () => {
  describe('basic rendering', () => {
    it('should render Pokemon ID with hash', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getByText('#265')).toBeInTheDocument();
    });
    
    it('should render Pokemon name', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getAllByText('wurmple').length).toBeGreaterThan(0);
    });

    it('should render Pokemon image', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      const img = screen.getByAltText('wurmple');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', expect.stringContaining('265.png'));
    });

    it('should render species name', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getAllByText('wurmple').length).toBeGreaterThan(0);
    });

    it('should render according type badge for current pokemon', () => { 
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getByText('bug')).toBeInTheDocument();
    });

    it('should default to Normal type when no types provided', () => {
      render(<PokemonCard pokemon={mockPokemonWithNoTypesEvolutionChainNodePokemon} />);
      expect(screen.getByText('Normal')).toBeInTheDocument();
    });

    it('should render height in meters', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getByText('Height')).toBeInTheDocument();
      expect(screen.getByText('0.3m')).toBeInTheDocument();
    });

    it('should render weight in kilograms', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      expect(screen.getByText('Weight')).toBeInTheDocument();
      expect(screen.getByText('3.6kg')).toBeInTheDocument();
    });
  });

  describe('image handling', () => {
    it('should have proper alt text', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      const img = screen.getByAltText('wurmple');
      expect(img).toBeInTheDocument(); 
    });

    it('should apply correct size styling to image', () => {
      render(<PokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);
      const img = screen.getByAltText('wurmple');
      expect(img).toHaveClass('w-32', 'h-32', 'object-contain');
    });
  });
});
