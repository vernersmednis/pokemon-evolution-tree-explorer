import { Division } from '@/components/basic';
import { PokemonCard, EvolutionChainNodeArrow } from '@/components/custom';
import React from 'react';
import type { EvolutionChainNodeProps } from './types';



const EvolutionChainNode: React.FC<EvolutionChainNodeProps> = ({ pokemon }) => {
  return (
    <Division variant="vertical-stack" className="items-center gap-8">
      {/* Current Pokemon Card */}
      <PokemonCard pokemon={pokemon} />

      {/* Render evolutions if they exist */}
      <Division className={`flex ${pokemon.evolvesTo.length > 1 ? 'gap-8 px-16' : ''} items-start`}>
        {pokemon.evolvesTo.map((evolution, index) => (
          <Division key={index} className="flex flex-col items-center">
              {/* Evolution Arrow */}
              <EvolutionChainNodeArrow pokemon={evolution} />
              {/* Recursive call for next evolution */}
              <EvolutionChainNode pokemon={evolution} />
          </Division>
          ))}
      </Division>
    </Division>
  );
};

export default EvolutionChainNode;