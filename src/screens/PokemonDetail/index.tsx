
import { Division } from '@/components/basic'
import { EvolutionChainNode } from '@/components/custom'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEvolutionChain } from '@/hooks/pokemon/getEvolutionChain';

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: evolutionChain, isLoading, error } = useGetEvolutionChain(id || '');
    
  if (isLoading) return <Division>Loading evolution chain...</Division>;
  if (error) return <Division>Error loading evolution chain: {error.message}</Division>;
  return (
    <>
        {/* Evolution Chain Container - Recursive Rendering */}
        <Division className="mt-8">
          {evolutionChain?.map((pokemon, index) => (
            <EvolutionChainNode key={index} pokemon={pokemon} />
          ))}
        </Division>
    </>
  );
};

export default PokemonDetail;