import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompactPokemonCard from '../index';
import { typeColors } from '../styles';
import { mockWurmpleEvolutionChainNodePokemon, mockPokemonWithNoTypesEvolutionChainNodePokemon } from '@/__mocks__/fixtures';


describe('CompactPokemonCard', () => {
    describe('basic rendering', () => {
        
        it('should render Pokemon image', () => {
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);

            const img = screen.getByAltText('wurmple');
            expect(img).toHaveAttribute(
                'src', 
                mockWurmpleEvolutionChainNodePokemon.sprites.other['official-artwork'].front_default
            );
        });

        it('should render Pokemon name', () => {
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);

            const name = screen.getByText('wurmple');
            expect(name).toBeInTheDocument();
        });

        it('should render Pokemon badge (type)', () => {
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);

            const badge = screen.getByText('bug'); 
            expect(badge).toBeInTheDocument();
            // expect(badge).toHaveClass(typeColors['Normal']);
        });

        it('calls onCardClick when the card is clicked', async () => {
            const onCardClick = jest.fn();
            render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} onCardClick={onCardClick} />);

            await userEvent.click(screen.getByTestId('compact-pokemon-card-265'));
            expect(onCardClick).toHaveBeenCalledWith(mockWurmpleEvolutionChainNodePokemon);
        });

        it('falls back to Normal type styles when the pokemon has no types', () => {
            render(<CompactPokemonCard pokemon={mockPokemonWithNoTypesEvolutionChainNodePokemon} />);
 
            const badge = screen.getByText('Normal');
            expect(badge).toHaveClass(typeColors['Normal']);
        });
    });

    describe('image handling', () => {
        it('should have proper alt text', () => {
          render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);

          const img = screen.getByAltText('wurmple');
          expect(img).toBeInTheDocument(); 
        });

      it('should apply correct size styling to image', () => {
          render(<CompactPokemonCard pokemon={mockWurmpleEvolutionChainNodePokemon} />);

          const img = screen.getByAltText('wurmple');
          expect(img).toHaveClass('w-8', 'h-8', 'object-contain');
      });
    });
});
