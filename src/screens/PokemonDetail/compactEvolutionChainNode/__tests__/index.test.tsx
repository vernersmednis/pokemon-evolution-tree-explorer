import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompactEvolutionChainNode from '../index';
import {
  mockWurmpleEvolutionChainNode
} from '@/__mocks__/fixtures';

// Mock the parentMap
jest.mock('@/hooks/pokemon/getEvolutionChain', () => ({
  parentMap: new WeakMap(),
}));

// Helper function to render with Router
const renderCompactEvolutionChainNode = (
  pokemon: typeof mockWurmpleEvolutionChainNode,
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
      renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNode);

      // Get all compact evolution chain nodes
      const wurmpleNode = screen.getByTestId('compact-evolution-chain-node-265');
      const silcoonNode = screen.getByTestId('compact-evolution-chain-node-266');
      const beautilfyNode = screen.getByTestId('compact-evolution-chain-node-267');
      const cascoonNode = screen.getByTestId('compact-evolution-chain-node-268');
      const dustoxNode = screen.getByTestId('compact-evolution-chain-node-269');

      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      expect(wurmpleNode).toBeInTheDocument();
      expect(wurmpleNode).toContainElement(silcoonNode);
      expect(wurmpleNode).toContainElement(cascoonNode);
      expect(silcoonNode).toContainElement(beautilfyNode);
      expect(cascoonNode).toContainElement(dustoxNode);
    }); 
  });

  describe('compact node content', () => {
  
    it('should render compact pokemon cards for each compact evolution chain node', () => {
      renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNode);

      // Get all compact evolution chain nodes
      const wurmpleNode = screen.getByTestId('compact-evolution-chain-node-265');
      const silcoonNode = screen.getByTestId('compact-evolution-chain-node-266');
      const beautilfyNode = screen.getByTestId('compact-evolution-chain-node-267');
      const cascoonNode = screen.getByTestId('compact-evolution-chain-node-268');
      const dustoxNode = screen.getByTestId('compact-evolution-chain-node-269');

      expect(wurmpleNode).toContainElement(screen.getByTestId('compact-pokemon-card-265'));
      expect(silcoonNode).toContainElement(screen.getByTestId('compact-pokemon-card-266'));
      expect(beautilfyNode).toContainElement(screen.getByTestId('compact-pokemon-card-267'));
      expect(cascoonNode).toContainElement(screen.getByTestId('compact-pokemon-card-268'));
      expect(dustoxNode).toContainElement(screen.getByTestId('compact-pokemon-card-269'));
    });


    it('each node should contain a depth and branches indexes (for example: 1.1, 1.2, 2.2, 1.3, 2.3)', () => {
      renderCompactEvolutionChainNode(mockWurmpleEvolutionChainNode, 1, 1);

      // Get all compact evolution chain nodes
      const wurmpleNode = screen.getByTestId('compact-evolution-chain-node-265');
      const silcoonNode = screen.getByTestId('compact-evolution-chain-node-266');
      const beautilfyNode = screen.getByTestId('compact-evolution-chain-node-267');
      const cascoonNode = screen.getByTestId('compact-evolution-chain-node-268');
      const dustoxNode = screen.getByTestId('compact-evolution-chain-node-269');
 
      // Wurmple (1.1) -> Silcoon (1.2) -> Beautifly (1.3)
      //               -> Cascoon (2.2) -> Dustox (2.3)
      expect(wurmpleNode).toHaveTextContent('1.1');
      expect(silcoonNode).toHaveTextContent('1.2');
      expect(cascoonNode).toHaveTextContent('2.2');
      expect(beautilfyNode).toHaveTextContent('1.3'); 
      expect(dustoxNode).toHaveTextContent('2.3');
    });
  });
});

