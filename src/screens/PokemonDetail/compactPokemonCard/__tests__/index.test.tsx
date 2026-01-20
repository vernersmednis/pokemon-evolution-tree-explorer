import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompactPokemonCard from '../index';
import { typeColors } from '../styles';
import { mockWurmpleEvolutionChainNodePokemon, mockPokemonWithNoTypesEvolutionChainNodePokemon } from '@/__mocks__/fixtures';


describe('CompactPokemonCard', () => {
    describe('basic rendering', () => {
        
        it('should render Pokemon image', () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

            const img = screen.getByAltText('wurmple');
            expect(img).toHaveAttribute(
                'src', 
                mockWurmpleEvolutionChainNodePokemon.sprites.other['official-artwork'].front_default
            );
        });

        it('should render Pokemon name', () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

            const name = screen.getByText('wurmple');
            expect(name).toBeInTheDocument();
        });

        it('should render Pokemon badge (type)', () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

            const badge = screen.getByText('bug'); 
            expect(badge).toBeInTheDocument();
            // expect(badge).toHaveClass(typeColors['Normal']);
        });

        it('calls onCardClick when the card is clicked', async () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

            // Click on the card image to trigger the click handler
            await userEvent.click(screen.getByRole('img', { name: 'wurmple' }));
            expect(onCardClick).toHaveBeenCalledWith(mockWurmpleEvolutionChainNodePokemon);
        });

        it('falls back to Normal type styles when the pokemon has no types', () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockPokemonWithNoTypesEvolutionChainNodePokemon} onCardClick={onCardClick} />);
 
            const badge = screen.getByText('Normal');
            expect(badge).toHaveClass(typeColors['Normal']);
        });
    });

    describe('image handling', () => {
        it('should have proper alt text', () => {
          const onCardClick = jest.fn();
          render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

          const img = screen.getByAltText('wurmple');
          expect(img).toBeInTheDocument(); 
        });

      it('should apply correct size styling to image', () => {
          const onCardClick = jest.fn();
          render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

          const img = screen.getByAltText('wurmple');
          expect(img).toHaveClass('w-8', 'h-8', 'object-contain');
      });
    });
});
