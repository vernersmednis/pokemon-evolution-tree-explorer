import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EvolutionChainNode from '../index';
import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';
import {
  mockWurmpleEvolutionChainNodePokemon
} from '@/__mocks__/fixtures';

// Helper function to render with Router
const renderEvolutionChainNode = (pokemon: EvolutionChainNodePokemon) => {
  return render(
    <MemoryRouter>
      <EvolutionChainNode pokemon={pokemon} />
    </MemoryRouter>
  );
};

describe('EvolutionChainNode', () => {
  describe('recursive rendering', () => {
    it('should render pokemon cards for each pokemon in the chain', () => {
      renderEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);

      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      expect(screen.getByTestId('pokemon-card-265')).toBeInTheDocument();
      expect(screen.getByTestId('pokemon-card-266')).toBeInTheDocument();
      expect(screen.getByTestId('pokemon-card-267')).toBeInTheDocument();
      expect(screen.getByTestId('pokemon-card-268')).toBeInTheDocument();
      expect(screen.getByTestId('pokemon-card-269')).toBeInTheDocument();
    });
  });

  describe('node content', () => {

    it('should have correct parent-child nesting for entire evolution tree', () => {
      renderEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);

      // Get all evolution chain nodes
      const wurmpleNode = screen.getByTestId('evolution-chain-node-265');
      const silcoonNode = screen.getByTestId('evolution-chain-node-266');
      const beautilfyNode = screen.getByTestId('evolution-chain-node-267');
      const cascoonNode = screen.getByTestId('evolution-chain-node-268');
      const dustoxNode = screen.getByTestId('evolution-chain-node-269');

      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      expect(wurmpleNode).toBeInTheDocument();
      expect(wurmpleNode).toContainElement(silcoonNode);
      expect(wurmpleNode).toContainElement(cascoonNode);
      expect(silcoonNode).toContainElement(beautilfyNode);
      expect(cascoonNode).toContainElement(dustoxNode);
    });

    it('should render an arrow for each child node', () => {
      renderEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);
 
      // Get all evolution chain nodes
      const wurmpleNode = screen.getByTestId('evolution-chain-node-265');
      const silcoonNode = screen.getByTestId('evolution-chain-node-266');
      const cascoonNode = screen.getByTestId('evolution-chain-node-268');

      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      expect(wurmpleNode).toContainElement(screen.getByTestId('evolution-chain-node-arrow-266'));
      expect(wurmpleNode).toContainElement(screen.getByTestId('evolution-chain-node-arrow-268'));
      expect(silcoonNode).toContainElement(screen.getByTestId('evolution-chain-node-arrow-267'));
      expect(cascoonNode).toContainElement(screen.getByTestId('evolution-chain-node-arrow-269'));
    });
  });
});
