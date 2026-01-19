import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EvolutionChainNodeArrow from '../index';
import { mockPokemonWithNoTypesEvolutionChainNodePokemon, mockWurmpleEvolutionChainNodePokemon } from '@/__mocks__/fixtures';

describe('EvolutionChainNodeArrow', () => {
    describe('arrow rendering', () => {
        it('should render the arrow element', () => {
            const { container } = render(<EvolutionChainNodeArrow pokemon={mockWurmpleEvolutionChainNodePokemon.evolvesTo[0]} />);

            const arrow = container.querySelector('.w-0\\.5.h-16.bg-black');
            expect(arrow).toBeInTheDocument();
        });

        it('should render the arrow indicator', () => {
            render(<EvolutionChainNodeArrow pokemon={mockWurmpleEvolutionChainNodePokemon.evolvesTo[0]} />);

            expect(screen.getByText('▼')).toBeInTheDocument();
        });
    });

    describe('evolution info display', () => {
        it('should display evolution trigger when provided', () => {
            render(<EvolutionChainNodeArrow pokemon={mockWurmpleEvolutionChainNodePokemon.evolvesTo[0]} />);

            expect(screen.getByText('level-up')).toBeInTheDocument();
        });

        it('should display evolution condition when provided', () => {
            render(<EvolutionChainNodeArrow pokemon={mockWurmpleEvolutionChainNodePokemon.evolvesTo[0]} />);

            expect(screen.getByText('Level 7')).toBeInTheDocument();
        });

        it('should not display evolution info section when neither trigger nor condition exist', () => {
            render(<EvolutionChainNodeArrow pokemon={mockPokemonWithNoTypesEvolutionChainNodePokemon} />);

            expect(screen.queryByText('level-up')).not.toBeInTheDocument();
            expect(screen.queryByText('Level')).not.toBeInTheDocument();
        });
    });
});