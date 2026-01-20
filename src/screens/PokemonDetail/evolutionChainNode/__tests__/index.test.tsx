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
      expect(screen.getByRole('img', { name: 'wurmple' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'silcoon' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'beautifly' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'cascoon' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'dustox' })).toBeInTheDocument();
    });
  });

  describe('node content', () => {

    it('should have correct parent-child nesting for entire evolution tree', () => {
      const { container } = renderEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);

      // Verify all Pokemon in the evolution chain are rendered
      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      // Note: Pokemon name appears twice in each card (title and species), so use getAllByText
      expect(screen.getAllByText('wurmple').length).toBeGreaterThan(0);
      expect(screen.getAllByText('silcoon').length).toBeGreaterThan(0);
      expect(screen.getAllByText('beautifly').length).toBeGreaterThan(0);
      expect(screen.getAllByText('cascoon').length).toBeGreaterThan(0);
      expect(screen.getAllByText('dustox').length).toBeGreaterThan(0);

      // Verify parent-child relationships via image containment
      const silcoonImg = screen.getByRole('img', { name: 'silcoon' });
      const cascoonImg = screen.getByRole('img', { name: 'cascoon' });
      const beautiflyImg = screen.getByRole('img', { name: 'beautifly' });
      const dustoxImg = screen.getByRole('img', { name: 'dustox' });
      
      // Find wurmple's container (the root node)
      const wurmpleContainer = container.firstElementChild;
      expect(wurmpleContainer).not.toBeNull();
      
      // Wurmple should contain silcoon and cascoon (its direct evolutions)
      expect(wurmpleContainer).toContainElement(silcoonImg);
      expect(wurmpleContainer).toContainElement(cascoonImg);
      
      // Find silcoon's node wrapper (div.flex.flex-col.items-center) which contains both the card and its children
      const silcoonContainer = silcoonImg.closest('.items-center');
      expect(silcoonContainer).not.toBeNull();
      expect(silcoonContainer).toContainElement(beautiflyImg);
      
      // Find cascoon's node wrapper and verify it contains dustox
      const cascoonContainer = cascoonImg.closest('.items-center');
      expect(cascoonContainer).not.toBeNull();
      expect(cascoonContainer).toContainElement(dustoxImg);
    });

    it('should render an arrow for each child node', () => {
      renderEvolutionChainNode(mockWurmpleEvolutionChainNodePokemon);
 
      // Wurmple (265) -> Silcoon (266) -> Beautifly (267)
      //               -> Cascoon (268) -> Dustox (269)
      // Each evolution has a trigger and condition, verify arrows exist via their content
      const arrows = screen.getAllByText('▼');
      expect(arrows).toHaveLength(4); // 4 arrows for 4 evolutions (silcoon, cascoon, beautifly, dustox)

      // Verify evolution triggers are displayed
      const levelUpTriggers = screen.getAllByText('level-up');
      expect(levelUpTriggers).toHaveLength(4);

      // Verify evolution conditions are displayed
      expect(screen.getAllByText('Level 7')).toHaveLength(2); // silcoon and cascoon
      expect(screen.getAllByText('Level 10')).toHaveLength(2); // beautifly and dustox
    });
  });
});
