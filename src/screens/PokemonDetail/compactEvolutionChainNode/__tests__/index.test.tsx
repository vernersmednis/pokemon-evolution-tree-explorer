import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompactEvolutionChainNode from '../index';
import {
  mockWurmpleEvolutionChainNodePokemon
} from '@/__mocks__/fixtures';

// Mock the parentMap
jest.mock('@/hooks/pokemon/getEvolutionChain', () => ({
  parentMap: new WeakMap(),
}));

// Helper function to render with Router
const renderCompactEvolutionChainNode = (
  pokemon: typeof mockWurmpleEvolutionChainNodePokemon,
  depth = 1,
  branchIndex = 1
) => {
  return render(
    <MemoryRouter>
      <CompactEvolutionChainNode pokemon={pokemon} depth={depth} branchIndex={branchIndex} />
    </MemoryRouter>
  );
};

describe('CompactEvolutionChainNode', () => {
  describe('recursive rendering', () => {

    it('should have correct parent-child nesting for entire evolution tree', () => {
      const { container } = renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);

      // Verify all Pokemon in the evolution chain are rendered by their names
      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      expect(screen.getByText('wurmple')).toBeInTheDocument();
      expect(screen.getByText('silcoon')).toBeInTheDocument();
      expect(screen.getByText('beautifly')).toBeInTheDocument();
      expect(screen.getByText('cascoon')).toBeInTheDocument();
      expect(screen.getByText('dustox')).toBeInTheDocument();

      // Verify parent-child relationships via image containment
      const silcoonImg = screen.getByRole('img', { name: 'silcoon' });
      const cascoonImg = screen.getByRole('img', { name: 'cascoon' });
      const beautiflyImg = screen.getByRole('img', { name: 'beautifly' });
      const dustoxImg = screen.getByRole('img', { name: 'dustox' });
      
      // Find wurmple's container (the root node) - traverse up to find the wrapper div
      const wurmpleContainer = container.firstElementChild;
      expect(wurmpleContainer).not.toBeNull();
      
      // Wurmple should contain silcoon and cascoon (its direct evolutions)
      expect(wurmpleContainer).toContainElement(silcoonImg);
      expect(wurmpleContainer).toContainElement(cascoonImg);
      
      // Find silcoon's node wrapper - the div that contains both silcoon and its children (ml-8 div)
      // Each node is wrapped in a div that has the card and a ml-8 div for children
      const silcoonWrapper = silcoonImg.closest('.flex.items-center')?.parentElement;
      expect(silcoonWrapper).not.toBeNull();
      expect(silcoonWrapper).toContainElement(beautiflyImg);
      
      // Find cascoon's node wrapper and verify it contains dustox
      const cascoonWrapper = cascoonImg.closest('.flex.items-center')?.parentElement;
      expect(cascoonWrapper).not.toBeNull();
      expect(cascoonWrapper).toContainElement(dustoxImg);
    }); 
  });

  describe('compact node content', () => {
  
    it('should render compact pokemon cards for each compact evolution chain node', () => {
      renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);

      // Verify all Pokemon cards are rendered with their images and names
      expect(screen.getByRole('img', { name: 'wurmple' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'silcoon' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'beautifly' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'cascoon' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'dustox' })).toBeInTheDocument();

      // Verify Pokemon names are displayed
      expect(screen.getByText('wurmple')).toBeInTheDocument();
      expect(screen.getByText('silcoon')).toBeInTheDocument();
      expect(screen.getByText('beautifly')).toBeInTheDocument();
      expect(screen.getByText('cascoon')).toBeInTheDocument();
      expect(screen.getByText('dustox')).toBeInTheDocument();
    });


    it('each node should contain a depth and branches indexes (for example: 1.1, 1.2, 2.2, 1.3, 2.3)', () => {
      renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon, 1, 1);

      // Verify evolution numbers are displayed with correct depth and branch indices
      // Wurmple (1.1) -> Silcoon (1.2) -> Beautifly (1.3)
      //               -> Cascoon (2.2) -> Dustox (2.3)
      expect(screen.getByText('1.1')).toBeInTheDocument();
      expect(screen.getByText('1.2')).toBeInTheDocument();
      expect(screen.getByText('2.2')).toBeInTheDocument();
      expect(screen.getByText('1.3')).toBeInTheDocument(); 
      expect(screen.getByText('2.3')).toBeInTheDocument();
    });
  });
});

