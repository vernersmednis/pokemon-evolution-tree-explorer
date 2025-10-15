import {Division, Span, Heading, Paragraph, Label} from '@/components/basic';
import type { PokemonCardProps } from './types';
import { typeColors } from './styles';
import React from 'react';

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const bgColor = typeColors[pokemon.type] || typeColors['Normal'];
  
  return (
    <Division className="border border-color-black rounded-3xl p-6 w-64">
      <Division className="flex flex-col justify-between">
        <Span variant="id">#{pokemon.id}</Span>
        <Heading level={2} variant="section">{pokemon.name}</Heading>
      </Division>
      
      <Division className="flex justify-center">
        <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 object-contain" />
      </Division>

      <Division className="flex justify-center">
        <Span variant="badge" className={bgColor}>
          {pokemon.type}
        </Span>
      </Division>

      <Paragraph variant="caption">
        {pokemon.species}
      </Paragraph>

      <Division className="flex justify-between">
        <Division className="flex flex-col text-center">
          <Label variant="stat">Height</Label>
          <Span variant="stat-value">{pokemon.height}</Span>
        </Division>
        <Division className="flex flex-col text-center">
          <Label variant="stat">Weight</Label>
          <Span variant="stat-value">{pokemon.weight}</Span>
        </Division>
      </Division>
    </Division>
  );
};

export default PokemonCard;