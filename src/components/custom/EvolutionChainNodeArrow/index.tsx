import { Division, Span } from '@/components/basic';
import React from 'react';
import type { EvolutionChainNodeArrowProps } from './types';

const EvolutionChainNodeArrow: React.FC<EvolutionChainNodeArrowProps> = ({ pokemon }) => {

  return (
    <Division className="flex items-center gap-4 my-4">
      {/* Arrow */}
      <Division className="flex flex-col items-center">
        <Division className="w-0.5 h-16 bg-black"></Division>
        <Division className="text-2xl">▼</Division>
      </Division>
      
      {/* Evolution Info */}
      {(pokemon.evolutionTrigger || pokemon.evolutionCondition) && (
        <Division className="flex flex-col gap-1">
          {pokemon.evolutionTrigger && (
            <Division className="bg-gray-100 rounded px-2 py-1">
              <Span className="text-gray-700 text-xs font-semibold">
                {pokemon.evolutionTrigger}
              </Span>
            </Division>
          )}
          {pokemon.evolutionCondition && (
            <Division className="bg-gray-50 rounded px-2 py-1">
              <Span className="text-gray-600 text-xs">
                {pokemon.evolutionCondition}
              </Span>
            </Division>
          )}
        </Division>
      )}
    </Division>
  );
};

export default EvolutionChainNodeArrow;