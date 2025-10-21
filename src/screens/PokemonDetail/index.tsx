
import { Division } from '@/components/basic'
import type { Pokemon } from '@/types/pokemon'
import { EvolutionChainNode } from '@/components/custom'
import React from 'react';

// Sample data for Wurmple evolution chain
const evolutionChain: Pokemon[] = [
    {
        id: 265,
        name: 'Wurmple',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png',
        type: 'Bug',
        species: 'Worm Pokémon',
        height: '0.3m',
        weight: '3.6kg',
        evolvesTo: [
            {
                id: 266,
                name: 'Silcoon',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png',
                type: 'Bug',
                species: 'Cocoon Pokémon',
                height: '0.6m',
                weight: '10.0kg',
                evolutionTrigger: 'Level 7',
                evolutionCondition: 'Any gender',
                evolvesTo: []
            },
            {
                id: 268,
                name: 'Cascoon',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png',
                type: 'Bug',
                species: 'Cocoon Pokémon',
                height: '0.7m',
                weight: '11.5kg',
                evolutionTrigger: 'Level 7',
                evolutionCondition: 'Any gender',
                evolvesTo: []
            },
        ]
    }
];

const PokemonDetail: React.FC = () => {

  return (
    <>
        {/* Evolution Chain Container - Recursive Rendering */}
        <Division className="mt-8">
          {evolutionChain.map((pokemon, index) => (
            <EvolutionChainNode key={index} pokemon={pokemon} />
          ))}
        </Division>
    </>
  );
};

export default PokemonDetail;