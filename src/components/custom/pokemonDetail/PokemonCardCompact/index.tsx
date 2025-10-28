import type { PokemonCardCompactProps } from './types';
import { typeColors } from './styles';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogNavigation } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { PokemonCard } from '@/components/custom';
import { parentMap } from '@/hooks/pokemon/getEvolutionChain';
import React, { useState, useMemo } from 'react';
import type { EvolutionChainNodePokemon } from '@/types/evolutionChainNodePokemon';

// Helper functions for evolution tree traversal
const findRoot = (pokemon: EvolutionChainNodePokemon): EvolutionChainNodePokemon => {
  while (parentMap.has(pokemon)) pokemon = parentMap.get(pokemon)!
  return pokemon
}

const buildDFSList = (pokemon: EvolutionChainNodePokemon): EvolutionChainNodePokemon[] => 
  [pokemon, ...pokemon.evolvesTo.flatMap(buildDFSList)]

const PokemonCardCompact: React.FC<PokemonCardCompactProps> = ({ pokemon }) => {
  const pokemonType = pokemon.types?.[0]?.type?.name || 'Normal';
  const bgColor = typeColors[pokemonType] || typeColors['Normal'];
  const imageUrl = pokemon.sprites?.other?.['official-artwork']?.front_default || '';
  
  const [dialogOpen, setDialogOpen] = useState(false);

  // Build evolution list and find initial index
  const evolutionList = useMemo(() => buildDFSList(findRoot(pokemon)), [pokemon]);
  const initialIndex = useMemo(() => evolutionList.findIndex(p => p.id === pokemon.id), [evolutionList, pokemon.id]);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg bg-white shadow-sm cursor-pointer" onClick={() => setDialogOpen(true)}>
            {/* Pokemon Image */}
            <img src={imageUrl} alt={pokemon.name} className="w-8 h-8 object-contain flex-shrink-0" />
            
            {/* Pokemon Name */}
            <span className="text-sm font-medium text-gray-800 truncate">
              {pokemon.name}
            </span>
            
            {/* Type Badge */}
            <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${bgColor}`}>
              {pokemonType}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to view details</p>
        </TooltipContent>
      </Tooltip>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="flex justify-center">
          <DialogNavigation initialIndex={initialIndex} variant="pokeball-ghost">
            {evolutionList.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </DialogNavigation>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PokemonCardCompact;
