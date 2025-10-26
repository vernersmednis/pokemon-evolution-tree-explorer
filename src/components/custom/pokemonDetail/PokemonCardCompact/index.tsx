import { Division, Span } from '@/components/basic';
import type { PokemonCardCompactProps } from './types';
import { typeColors } from './styles';
import React from 'react';

const PokemonCardCompact: React.FC<PokemonCardCompactProps> = ({ pokemon }) => {
  const pokemonType = pokemon.types?.[0]?.type?.name || 'Normal';
  const bgColor = typeColors[pokemonType] || typeColors['Normal'];
  const imageUrl = pokemon.sprites?.other?.['official-artwork']?.front_default || '';
  
  return (
    <Division className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg bg-white shadow-sm">
      {/* Pokemon Image */}
      <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />
      
      {/* Pokemon Name */}
      <Span className="text-sm font-medium text-gray-800 truncate">
        {pokemon.name}
      </Span>
      
      {/* Type Badge */}
      <Span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${bgColor}`}>
        {pokemonType}
      </Span>
    </Division>
  );
};

export default PokemonCardCompact;
